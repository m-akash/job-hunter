const express = require("express");
const router = express.Router();
const UserController = require("../controllers/user.controller");

router.get("/:id", UserController.getUserById);
router.get("/", UserController.getUserByEmail);
router.post("/", UserController.createUser);

module.exports = router;
