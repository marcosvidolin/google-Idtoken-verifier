# google-token-auth

Node.js middleware to validate `Google ID Tokens` in the `backend server`.
Validade the request token, get all the Google ID Token fields and populate the `req.googleProfileInfo`.


## Installation

```sh
$ npm install google-idtoken-auth
```

## Options
| Propertie | Type | Default | Required | Description |
|---|---|---|---|---|
| clientId | String | | true | Specify the Google Client ID |
| tokenHeaderName | String | false | x-googleid-token | Custom header name to retrievi the Google ID Token |
| gSuiteDomains | Array | | false | Specify a G Suite domain |

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


### See more
[Google Sign-In](https://developers.google.com/identity/sign-in/web/sign-in)
[Authenticate with a backend server](https://developers.google.com/identity/sign-in/web/backend-auth)


### [MIT Licensed](LICENSE)