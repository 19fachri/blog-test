const { sign, verify } = require("jsonwebtoken");
const privateKey = process.env.PRIVATE_KEY || "secret";

module.exports = {
  generateToken: (payload) => sign(payload, privateKey),
  verifyToken: (token) => verify(token, privateKey),
};
