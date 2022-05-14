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
    unique: [true, "registration number must be unique"],
  },
  tradeName: {
    type: String,
    required: true,
  },

  activeIngredients: [ActiveIngredientSchema],
  dosage: {
    type: String,
  },
  concentration: {
    type: String,
  },

  toxicity: {
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

  targets: [String],
});

module.exports = mongoose.model("Pesticide", PesticideSchema);
