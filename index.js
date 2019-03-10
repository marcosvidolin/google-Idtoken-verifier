/*!
 * google-idtoken-auth
 * Copyright(c) 2019 Marcos A. Vidolin de Lima
 * MIT Licensed
 */
"use strict";

/**
 * Module dependencies.
 * @private
 */
const {
  OAuth2Client
} = require("google-auth-library");

/**
 * Validates the request according to the options object.
 *
 * @param {Object} [options]
 * @return {Function} middleware
 * @public
 */
var googleIdTokenVerifier = function (options) {

  var opts = options || {};

  // options
  const googleClientId = opts.clientId;
  const tokenHeaderName = opts.tokenHeaderName || "x-googleid-token";
  const gSuiteDomains = Array.isArray(opts.gSuiteDomains) ? opts.gSuiteDomains : [opts.gSuiteDomains];

  if (!googleClientId) {
    throw new Error("Google Client ID not specified.");
  }

  return googleIdTokenVerifier = async (req, res, next) => {

    // ignore HTTP handshake
    if (req.method === "OPTIONS") {
      return next();
    }

    const token = req.headers[tokenHeaderName];

    if (!token) {
      res.status(403).json({
        error: "Token not specified"
      });
      return next("Token not specified.");
    }

    const client = new OAuth2Client(googleClientId);
    var ticket = null;
    try {
      ticket = await client.verifyIdToken({
        idToken: token,
        audience: googleClientId
      });
    } catch (err) {
      res.status(401).json({
        error: "Invalid token"
      });
      return next("Invalid token.");
    }

    const payload = ticket.getPayload();
    // If request specified a G Suite domain:
    const domain = payload["hd"];

    if (!gSuiteDomains.includes(domain)) {
      res.status(403).json({
        error: "Invalid G Suite Domain"
      });
      return next("Invalid G Suite Domain.");
    }

    req.googleProfileInfo = payload;
    req.googleProfileInfo.username = payload.email.split("@")[0];

    return next();
  };

};

/**
 * Module exports.
 * @public
 */
module.exports = {
  googleIdTokenVerifier
};