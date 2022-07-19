const express = require("express");
const userRoute = require("./userRoute");
const router = express();


router.use("/user", userRoute);

module.exports = router;
