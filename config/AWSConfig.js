const AWS = require('aws-sdk');

exports.config = {
    ID: process.env.ID,
    SECRET: process.env.SECRET,
    BUCKET_NAME: process.env.BUCKET_NAME
};

exports.s3 = new AWS.S3({
    accessKeyId: this.config.ID,
    secretAccessKey: this.config.SECRET
});