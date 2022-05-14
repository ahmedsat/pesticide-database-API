const { customError } = require("../errors");
const { StatusCodes } = require("http-status-codes");

const errorHandlerMiddleware = (err, req, res, next) => {
  if (err instanceof customError) {
    res.status(err.statusCode).send(err.message);
  } else {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).send("INTERNAL SERVER ERROR");
  }
};

module.exports = errorHandlerMiddleware;
