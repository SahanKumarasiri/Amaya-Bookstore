const router = require('express').Router();

const {registerAdmin , loginAdmin , sendEmail} = require("../controllers/auth");

router.route("/register").post(registerAdmin); // call the auth in controllers

router.route("/login").post(loginAdmin);

router.route("/sendEmail").post(sendEmail);

module.exports = router;