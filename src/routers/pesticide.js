// pesticide routes
const express = require("express");
const router = express.Router();
const {
  getAllPesticide,
  getPesticideById,
  createPesticide,
  updatePesticide,
  deletePesticide,
} = require("../controllers/pesticide");

router.route("/").get(getAllPesticide).post(createPesticide);
router
  .route("/:id")
  .get(getPesticideById)
  .patch(updatePesticide)
  .delete(deletePesticide);

module.exports = router;
