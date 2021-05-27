let router = require('express').Router();
const { getAPIInfo, getMediaMetadata, encodeMedia } = require("../controller/mediaController")

router.get("/info", getAPIInfo);
router.get("/metadata", getMediaMetadata);
router.post("/encode", encodeMedia);

module.exports = router;