const ffmpeg = require("fluent-ffmpeg");
const https = require("https"); // or 'https' for https:// URLs
const fs = require("fs");
const path = require("path");

const {
  sendErrorResponse,
  sendSuccessResponse
} = require("../helpers/utility");
const { getAPIInfoDAO } = require("../dao/mediaDAO");

const getAPIInfo = async (req, res) => {};

const getMediaMetadata = async (req, res) => {
  try {
    const video = req.query.asset;

    let file = fs.createWriteStream("./video.mp4");
    https.get(video, function(response) {
      response.pipe(file);
      file.on("finish", function() {
        file.close(() => {
          ffmpeg.ffprobe(`file:///${path.resolve("video.mp4")}`, function(
            err,
            metadata
          ) {
            fs.unlinkSync("./video.mp4");
            if (!metadata) {
              return sendErrorResponse(res, {}, "Unable to retrieve metadata");
            }
            return sendSuccessResponse(res, metadata, "metadata retrieved");
          });
        });
      });
    });
  } catch (error) {
    return sendErrorResponse(res, {}, "Unable to retrieve metadata");
  }
};

module.exports = {
  getAPIInfo,
  getMediaMetadata
};
