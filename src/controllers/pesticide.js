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
  res.send("create pesticide");
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
