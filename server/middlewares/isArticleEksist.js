const { Article } = require("../models");
module.exports = async (req, res, next) => {
  try {
    const { articleId } = req.params;
    const article = await Article.findByPk(articleId);
    if (!article) throw { name: "DataNotFound" };
    req.article = article;
    next();
  } catch (error) {
    next(error);
  }
};
