const { hashSync, compareSync } = require("bcryptjs");

module.exports = {
  hashPassword: (password) => hashSync(password),
  comparePassword: (password, hashing) => compareSync(password, hashing),
};
