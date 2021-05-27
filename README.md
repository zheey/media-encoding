# Getting Started with Media Encoding

## About Project
This Service allows you to endcode and retrieve metadata for a MP4 Video. It uses FFMPEG commands to carry out these actions.

## API

### /media/info
This API gives you more information about the API.

### /media/encode
This API allows you to encode by specify output codec, such as libx264 and bitrate. The output is then uploaded to the cloud storage(s3 bucket).

### media/metadata?asset=
This API let user get metadata about a dowloadable media. It expects an asset query parameter as url for a dowloadable media.

### Testing
Testing for this feature is ongoing.

## Installation
### `Clone Repository`:
This project can only be run on a local machine for now. Kindly clone this repository.

### `Install Dependency`:
Run `npm` to install all dependencies.

## Library Used
### `NodeJS`
### `ExpressJS`
### `aws-sdk
### `fluent-ffmpeg`
### `Mocha` and `Chai` for testing


