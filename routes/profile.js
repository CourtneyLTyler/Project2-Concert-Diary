const express = require("express");
const router = express.Router();
const profileController = require("../controllers/profile");

router.put("/:id", profileController.requireAuth, profileController.update);
router.post("/", profileController.requireAuth, profileController.create);
router.get("/new", profileController.requireAuth, profileController.new);
router.get("/:id", profileController.show);
router.delete("/:id", profileController.requireAuth, profileController.delete)

module.exports = router;