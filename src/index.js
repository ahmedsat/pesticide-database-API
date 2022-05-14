//? general requirements
require("dotenv").config();
require("express-async-errors");

const express = require("express");

const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

// require routes
const pesticideRouter = require("./routers/pesticide");

const app = express();
const port = process.env.PORT || 3000;

// pre-routes middleware
app.use(express.json());

// routes
app.use("/api/v1/pesticide", pesticideRouter);

// post-routes middleware
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const start = async () => {
  try {
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};
start();
