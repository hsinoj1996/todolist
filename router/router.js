const express = require("express");
const router = express.Router();
const controller = require("../controller/c_register");

router.get("/test", controller.getTest);

router.post("/add/", controller.getRegister);

module.exports = router;
