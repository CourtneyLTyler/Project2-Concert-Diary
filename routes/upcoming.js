const express = require("express");
const router = express.Router();
const upcomingController = require("../controllers/upcoming");

router.put("/:id", upcomingController.requireAuth, upcomingController.update);
router.post("/", upcomingController.requireAuth, upcomingController.create);
router.get("/new", upcomingController.requireAuth, upcomingController.new);
router.get("/:id", upcomingController.show);
router.delete("/:id", upcomingController.requireAuth, upcomingController.delete)

module.exports = router;