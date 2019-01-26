'use strict'

/**
 * Module dependencies.
 * @private
 */
const { OAuth2Client } = require('google-auth-library');

/**
 * Module exports.
 */
module.exports = googleIdTokenVerifier;

/**
 * TODO.
 *
 * @param {Object} [options]
 * @return {Function} middleware
 * @public
 */
function googleIdTokenVerifier(options) {
    var opts = options || {};

    // options
    const googleClientId = opts.clientId;
    const tokenHeaderName = opts.tokenHeaderName;
    const gSuiteDomains = Array.isArray(opts.gSuiteDomains) ? opts.gSuiteDomains : [opts.gSuiteDomains];

    if (!googleClientId) {
        // TODO: error
    }

    async function verify() {
        const client = new OAuth2Client(googleClientId);
        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: googleClientId
        });
        const payload = ticket.getPayload();
        const userid = payload['sub'];
        // If request specified a G Suite domain:
        const domain = payload['hd'];
        if (!gSuiteDomains.includes(domain)) {
            // TODO:
        }

        return payload;
    }

    return function googleIdTokenVerifier(req, res, next) {
        const token = req.headers[tokenHeaderName];
        if (!token) {
            // TODO:
        }
        req.googleProfileInfo = verify().catch(console.error);
        next();
    }
}