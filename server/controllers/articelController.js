const { Article } = require("../models");

class ArticelController {
  static async findAll(req, res, next) {
    try {
      const articles = await Article.findAll();
      console.log("jlan");
      res.status(200).json({ articles });
    } catch (error) {
      next(error);
    }
  }

  static async create(req, res, next) {
    const { title, body, imgUrl } = req.body;
    let newData = { title, body, imgUrl, AuthorId: req.user.id };

    try {
      const article = await Article.create(newData);
      res.status(201).json({ message: "Article created successfully" });
    } catch (error) {
      next(error);
    }
  }

  static async show(req, res, next) {
    try {
      res.status(200).json({ article: req.article });
    } catch (error) {
      next(error);
    }
  }

  static async update(req, res, next) {
    try {
      const { title, body, imgUrl } = req.body;
      let newData = { title, body, imgUrl, AuthorId: req.user.id };
      let option = {
        where: { id: +req.params.articleId },
        returning: true,
      };

      await Article.update(newData, option);
      res.status(200).json({ message: "Article updated successfully" });
    } catch (error) {
      next(error);
    }
  }

  static async destroy(req, res, next) {
    try {
      await Article.destroy({ where: { id: req.params.articleId } });
      res.status(200).json({ message: "Article deleted successfully" });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = ArticelController;
