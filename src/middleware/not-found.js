const { notFoundError } = require("../errors");

const notFoundMiddleware = (req, res, next) => {
  throw new notFoundError("NOT FOUND");
};

module.exports = notFoundMiddleware;
