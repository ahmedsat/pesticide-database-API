// pesticide routes
const express = require("express");
const router = express.Router();
const {
  getPesticide,
  getPesticideById,
  createPesticide,
  updatePesticide,
  deletePesticide,
} = require("../controllers/pesticide");

router.route("/").get(getPesticide).post(createPesticide);
router
  .route("/:id")
  .get(getPesticideById)
  .patch(updatePesticide)
  .delete(deletePesticide);

module.exports = router;