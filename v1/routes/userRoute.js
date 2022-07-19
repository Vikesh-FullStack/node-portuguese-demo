const router = require("express").Router();
const Controllers = require("../controllers").user;

router.get("/chart", Controllers.chart);

router.get("/connection", Controllers.connection);


module.exports = router; 