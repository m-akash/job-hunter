const express = require("express");
const router = express.Router();
const AuthController = require("../controllers/auth.controller");

router.post("/jwt", AuthController.login);
router.post("/logout", AuthController.logout);

module.exports = router;
