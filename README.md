# google-token-auth

[![npm version](https://badge.fury.io/js/google-idtoken-auth.svg)](https://badge.fury.io/js/google-idtoken-auth) [![Codacy Badge](https://api.codacy.com/project/badge/Grade/49992b6c073648c192662bdd7de6f087)](https://www.codacy.com/app/marcosvidolin/google-idtoken-auth?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=marcosvidolin/google-idtoken-auth&amp;utm_campaign=Badge_Grade)

Node.js middleware to validate `Google ID Tokens` in the `backend server`.
Validade the request token, get all the Google ID Token fields and populate the `req.googleProfileInfo`.

## Installation

```sh
$ npm install google-idtoken-auth
```

## Options

| Propertie       | Type   | Default          | Required | Description                                        |
|-----------------|--------|------------------|----------|----------------------------------------------------|
| clientId        | String |                  | true     | Specify the Google Client ID                       |
| tokenHeaderName | String | x-googleid-token | false    | Custom header name to retrievi the Google ID Token |
| gSuiteDomains   | Array  |                  | false    | Specify a G Suite domain                           |

## Example

```js
var express = require('express');
var googleAuth = require('google-idtoken-auth');

var googleTokenVerifier = googleAuth.googleIdTokenVerifier({
    clientId: "YOUR-GOOGLE-CLIENT-ID"
});

var app = express();
app.use(googleTokenVerifier);

app.get('/', function (req, res) {
  // Get the e-mail from google (email OAuth scope)
  console.log('User e-mail: ', req.googleProfileInfo.email);
});

app.listen(8080);

// curl command that sends an HTTP request with a valid Google ID Token
// curl -H "x-googleid-token: {GOOGLE-ID-TOKEN-HERE}" http://127.0.0.1:8080
```

## See more

[Google Sign-In](https://developers.google.com/identity/sign-in/web/sign-in)  

[Authenticate with a backend server](https://developers.google.com/identity/sign-in/web/backend-auth)

## [MIT Licensed](LICENSE)

## Contributors
[![](https://sourcerer.io/fame/marcosvidolin/marcosvidolin/google-idtoken-auth/images/0)](https://sourcerer.io/fame/marcosvidolin/marcosvidolin/google-idtoken-auth/links/0)[![](https://sourcerer.io/fame/marcosvidolin/marcosvidolin/google-idtoken-auth/images/1)](https://sourcerer.io/fame/marcosvidolin/marcosvidolin/google-idtoken-auth/links/1)[![](https://sourcerer.io/fame/marcosvidolin/marcosvidolin/google-idtoken-auth/images/2)](https://sourcerer.io/fame/marcosvidolin/marcosvidolin/google-idtoken-auth/links/2)[![](https://sourcerer.io/fame/marcosvidolin/marcosvidolin/google-idtoken-auth/images/3)](https://sourcerer.io/fame/marcosvidolin/marcosvidolin/google-idtoken-auth/links/3)[![](https://sourcerer.io/fame/marcosvidolin/marcosvidolin/google-idtoken-auth/images/4)](https://sourcerer.io/fame/marcosvidolin/marcosvidolin/google-idtoken-auth/links/4)[![](https://sourcerer.io/fame/marcosvidolin/marcosvidolin/google-idtoken-auth/images/5)](https://sourcerer.io/fame/marcosvidolin/marcosvidolin/google-idtoken-auth/links/5)[![](https://sourcerer.io/fame/marcosvidolin/marcosvidolin/google-idtoken-auth/images/6)](https://sourcerer.io/fame/marcosvidolin/marcosvidolin/google-idtoken-auth/links/6)[![](https://sourcerer.io/fame/marcosvidolin/marcosvidolin/google-idtoken-auth/images/7)](https://sourcerer.io/fame/marcosvidolin/marcosvidolin/google-idtoken-auth/links/7)
