const ffmpeg = require("fluent-ffmpeg");
const https = require("https");
const fs = require("fs");
const path = require("path");
const { config, s3 } = require("../config/AWSConfig");
const { APIDocumentation, AboutAPI } = require("../constants/index")

const {
  sendErrorResponse,
  sendSuccessResponse
} = require("../helpers/utility");

const getAPIInfo = async (req, res) => {
  const data = {
    info: AboutAPI,
    version: "0.0.0",
    endpoints: APIDocumentation
  }
  return sendSuccessResponse(res, data, "Info retrieved");
};

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

const encodeMedia = async (req, res) => {
  try {
    const body = req.body;
    const video = body.url;
    const videoBitrate = body.videoBitrate;
    const videoCodec = body.videoCodec;

    let file = fs.createWriteStream("./encode.mp4");
    https.get(video, function(response) {
      response.pipe(file);
      file.on("finish", function() {
        file.close(() => {
          ffmpeg("./encode.mp4")
            .withVideoCodec(videoCodec)
            .withVideoBitrate(videoBitrate)
            .withAudioCodec("aac")
            .output("./output.mp4")
            .on("end", async function() {
              fs.unlinkSync("./encode.mp4");
              const mediaUpload = await uploadFile("./output.mp4");
              fs.unlinkSync("./output.mp4");
              if (!mediaUpload) {
                return sendErrorResponse(res, {}, "Unable to encode media");
              }
              return sendSuccessResponse(
                res,
                mediaUpload.Location,
                "media encoded"
              );
            })
            .on("error", function() {
              return sendErrorResponse(res, {}, "Unable to encode media");
            }).run();
        });
      });
    });
  } catch (error) {
    return sendErrorResponse(res, {}, "Unable to encode media");
  }
};

const uploadFile = async fileName => {
  const fileContent = fs.readFileSync(fileName);

  const params = {
    Bucket: config.BUCKET_NAME,
    Key: fileName,
    Body: fileContent
  };

  const response = await s3.upload(params).promise();
  return response;
};

module.exports = {
  getAPIInfo,
  getMediaMetadata,
  encodeMedia
};
