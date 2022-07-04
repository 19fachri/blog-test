const { comparePassword } = require("../helpers/bcrypt");
const { generateToken } = require("../helpers/jwt");
const { User } = require("../models");

class AuthController {
  static async register(req, res, next) {
    try {
      const { username, email, password } = req.body;
      const newUser = {
        username,
        email,
        password,
        role: "admin",
      };

      let user = await User.create(newUser);
      const access_token = generateToken({ email: user.email });

      res
        .status(201)
        .json({ access_token, user: { username, email, role: "admin" } });
    } catch (error) {
      next(error);
    }
  }
  static async login(req, res, next) {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ where: { email } });

      if (!user || !comparePassword(password, user.password)) {
        throw { status: 401, message: "Incorect email or password" };
      }

      const access_token = generateToken({ email: user.email });
      const { username, role } = user;

      res.status(200).json({ access_token, user: { username, email, role } });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = AuthController;
