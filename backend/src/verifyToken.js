const jwksClient = require("jwks-rsa");
const jwt = require("jsonwebtoken");
const cors = require("cors");

const verifyToken = async (bearerToken) => {
  if (!bearerToken) {
    return false;
  }

  const client = jwksClient({
    jwksUri: process.env.JWKS_URL,
  });

  function getJwksClientKey(header, callback) {
    client.getSigningKey(header.kid, function (err, key) {
      console.log(key);
      signingKey = key.publicKey || key.rsaPublicKey;
      callback(null, signingKey);
    });
  }

  return new Promise((resolve, reject) => {
    const options = {
      audience: process.env.AUTH0_CLIENT_ID,
      issuer: process.env.AUTH0_DOMAIN,
      algorithm: ["RS256"],
    };

    console.log("testingggg");

    jwt.verify(bearerToken, getJwksClientKey, options, function (err, decoded) {
      console.log("testttt2222");
      if (err) {
        console.log("jwt.verify error");
        return reject(err);
      }
      console.log("testttt3333");
      console.log(decoded);
      resolve(decoded);
    });
  });
};

module.exports = { verifyToken };
//
