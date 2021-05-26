let router = require('express').Router();
const { getAPIInfo, getMediaMetadata } = require("../controller/mediaController")

router.get("/info", getAPIInfo);
router.get("/metadata", getMediaMetadata);

module.exports = router;