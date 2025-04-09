const express = require("express");
const { sendEmail } = require("../controllers/portfoliocontroller");

//router object
const router = express.Router();

//routes
router.post("/sendEmail", sendEmail);

//export
module.exports = router;
