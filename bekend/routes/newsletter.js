const express = require("express");
const router = express.Router();
const controller = require("../controllers/newsletterController");
const auth = require("../middleware/verifyToken");

router.post("/", controller.subscribe);
router.get("/", auth, controller.getAll);
router.delete("/:id", auth, controller.remove);

module.exports = router;
