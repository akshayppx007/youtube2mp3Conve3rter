const express = require("express");
const { convertToMp3 } = require("../controller/mp3Converter");
const router = express.Router();

router.route("/url/convert").post(convertToMp3);

module.exports = router;
