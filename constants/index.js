const APIDocumentation = [
  {
    endpoint: "/media/encode",
    requestType: "POST",
    requestHeaders: {
      authorization: null
    },
    body: {
      format: "JSON",
      sampleData: {
        url:
          "https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4",
        videoBitrate: 3000,
        videoCodec: "libx264"
      }
    },
    sampleResponse: {
      success: {
        success: true,
        message: "media encoded",
        data: "https://mediaencoding.s3.us-east-2.amazonaws.com/./output.mp4"
      },
      failure: {
        success: false,
        message: "Unable to encode media",
        data: {}
      }
    }
  },
  {
    endpoint: "media/metadata?asset=",
    requestType: "GET",
    requestHeaders: {
      authorization: null
    },
    requestParams: [
      {
        key: "asset",
        format: "string",
        sampleData:
          "https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4"
      }
    ],
    sampleResponse: {
      success: {
        success: true,
        message: "metadata retrieved",
        data: {
          streams: [
            {
              index: 0,
              codec_name: "h264",
              codec_long_name: "H.264 / AVC / MPEG-4 AVC / MPEG-4 part 10",
              profile: "Main",
              codec_type: "video",
              codec_tag_string: "avc1",
              codec_tag: "0x31637661",
              width: 320,
              height: 240,
              coded_width: 320,
              coded_height: 240,
              closed_captions: 0,
              has_b_frames: 0,
              sample_aspect_ratio: "1:1",
              display_aspect_ratio: "4:3",
              pix_fmt: "yuv420p",
              level: 13,
              color_range: "unknown",
              color_space: "unknown",
              color_transfer: "unknown",
              color_primaries: "unknown",
              chroma_location: "left",
              field_order: "unknown",
              refs: 1,
              is_avc: "true",
              nal_length_size: 4,
              id: "N/A",
              r_frame_rate: "15/1",
              avg_frame_rate: "15/1",
              time_base: "1/15360",
              start_pts: 0,
              start_time: 0,
              duration_ts: 1934336,
              duration: 125.933333,
              bit_rate: 282823,
              max_bit_rate: "N/A",
              bits_per_raw_sample: 8,
              nb_frames: 1889,
              nb_read_frames: "N/A",
              nb_read_packets: "N/A",
              tags: {
                creation_time: "1970-01-01T00:00:00.000000Z",
                language: "und",
                handler_name: "VideoHandler",
                vendor_id: "[0][0][0][0]"
              },
              disposition: {
                default: 1,
                dub: 0,
                original: 0,
                comment: 0,
                lyrics: 0,
                karaoke: 0,
                forced: 0,
                hearing_impaired: 0,
                visual_impaired: 0,
                clean_effects: 0,
                attached_pic: 0,
                timed_thumbnails: 0
              }
            },
            {
              index: 1,
              codec_name: "aac",
              codec_long_name: "AAC (Advanced Audio Coding)",
              profile: "LC",
              codec_type: "audio",
              codec_tag_string: "mp4a",
              codec_tag: "0x6134706d",
              sample_fmt: "fltp",
              sample_rate: 48000,
              channels: 6,
              channel_layout: 5.1,
              bits_per_sample: 0,
              id: "N/A",
              r_frame_rate: "0/0",
              avg_frame_rate: "0/0",
              time_base: "1/48000",
              start_pts: 0,
              start_time: 0,
              duration_ts: 6045696,
              duration: 125.952,
              bit_rate: 383711,
              max_bit_rate: "N/A",
              bits_per_raw_sample: "N/A",
              nb_frames: 5904,
              nb_read_frames: "N/A",
              nb_read_packets: "N/A",
              tags: {
                creation_time: "1970-01-01T00:00:00.000000Z",
                language: "und",
                handler_name: "SoundHandler",
                vendor_id: "[0][0][0][0]"
              },
              disposition: {
                default: 1,
                dub: 0,
                original: 0,
                comment: 0,
                lyrics: 0,
                karaoke: 0,
                forced: 0,
                hearing_impaired: 0,
                visual_impaired: 0,
                clean_effects: 0,
                attached_pic: 0,
                timed_thumbnails: 0
              }
            }
          ],
          format: {
            filename:
              "file:////Users/kobo360kobo360/Documents/ZheeyWork/media-encoding/video.mp4",
            nb_streams: 2,
            nb_programs: 0,
            format_name: "mov,mp4,m4a,3gp,3g2,mj2",
            format_long_name: "QuickTime / MOV",
            start_time: 0,
            duration: 125.952,
            size: 10546620,
            bit_rate: 669881,
            probe_score: 100,
            tags: {
              major_brand: "isom",
              minor_version: "512",
              compatible_brands: "isomiso2avc1mp41",
              creation_time: "1970-01-01T00:00:00.000000Z",
              encoder: "Lavf53.24.2"
            }
          },
          chapters: []
        }
      },
      failure: {
        success: false,
        message: "Unable to retrieve metadata",
        data: {}
      }
    }
  }
];

const AboutAPI = "This API allows you to endcode and retrieve data for a MP4 Video. It uses FFMPEG commands to carry out these actions."

module.exports = {
  APIDocumentation,
  AboutAPI
};
