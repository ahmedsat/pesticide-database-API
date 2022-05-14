// pesticide moongose model
const mongoose = require("mongoose");

const ActiveIngredientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  concentration: {
    type: String,
  },
});

const MRLSchema = new mongoose.Schema({
  EPA: {
    type: Number,
  },
  EU: {
    type: Number,
  },
  Codex: {
    type: Number,
  },
});

const PesticideSchema = new mongoose.Schema({
  registrationsNumber: {
    type: Number,
    required: true,
    unique: true,
  },
  tradeName: {
    type: String,
    required: true,
  },
  brandName: {
    type: String,
  },
  activeIngredients: [ActiveIngredientSchema],
  dosage: {
    type: String,
  },
  concentration: {
    type: String,
  },

  toxicologicalClass: {
    type: String,
  },

  PHI: {
    type: Number,
  },

  MRL: {
    MRLSchema,
  },

  PesticideClass: {
    type: String,
  },

  target: {
    type: String,
  },
});

module.exports = mongoose.model("Pesticide", PesticideSchema);
