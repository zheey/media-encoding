let router = require('express').Router();
const { getAPIInfo } = require("../controller/mediaController")

router.get("/info", getAPIInfo);

module.exports = router;