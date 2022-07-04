const ArticelController = require("../controllers/articelController");
const AuthController = require("../controllers/authController");
const isArticleEksist = require("../middlewares/isArticleEksist");
const isAuthenticate = require("../middlewares/isAuthenticate");

const routes = require("express").Router();

routes.post("/register", AuthController.register);
routes.post("/login", AuthController.login);
routes.get("/", ArticelController.findAll);
routes.post("/admin/article/create", isAuthenticate, ArticelController.create);
routes.get("/:articleId", isArticleEksist, ArticelController.show);
routes.put(
  "admin/article/edit/:articleId",
  isAuthenticate,
  isArticleEksist,
  ArticelController.update
);
routes.delete(
  "admin/article/delete/:articleId",
  isAuthenticate,
  isArticleEksist,
  ArticelController.destroy
);

module.exports = routes;
