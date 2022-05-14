// pesticide routes
const express = require("express");
const router = express.Router();
const {
  getAllPesticide,
  getOnePesticide,
  createPesticide,
  updatePesticide,
  deletePesticide,
} = require("../controllers/pesticide");

router.route("/").get(getAllPesticide).post(createPesticide);
router
  .route("/:registrationNumber")
  .get(getOnePesticide)
  .patch(updatePesticide)
  .delete(deletePesticide);

module.exports = router;
