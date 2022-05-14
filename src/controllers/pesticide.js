const Pesticide = require("../models/Pesticide");
const { StatusCodes } = require("http-status-codes");
const { customError, badRequestError, notFoundError } = require("../errors");
const getAllPesticide = async (req, res) => {
  try {
    const pesticides = await Pesticide.find();
    res.status(StatusCodes.OK).json({
      success: true,
      data: pesticides,
    });
  } catch (error) {
    console.log(error);
    throw new customError(error.message);
  }
};

const getPesticideById = async (req, res) => {
  res.send("get pesticide by id");
};

const createPesticide = async (req, res) => {
  try {
    const pesticide = await Pesticide.create(req.body);
    res.status(StatusCodes.CREATED).json({ success: true, data: pesticide });
  } catch (error) {
    console.log(error);
    if (error.name === "ValidationError") {
      throw new badRequestError(error.message);
    }
    if (error.code === 11000) {
      throw new badRequestError("registration number must be unique");
    }

    throw new customError(error.message);
  }
};

const updatePesticide = async (req, res) => {
  res.send("update pesticide");
};

const deletePesticide = async (req, res) => {
  res.send("delete pesticide");
};

module.exports = {
  getAllPesticide,
  getPesticideById,
  createPesticide,
  updatePesticide,
  deletePesticide,
};
