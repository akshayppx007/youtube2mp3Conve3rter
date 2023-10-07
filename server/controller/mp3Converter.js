const catchAsyncErrors = require("../utils/catchAsyncErrors");
const ErrorHandler = require("../utils/errorHandler");
const fs = require("fs");
const ff = require("yt-get")
const { getVideoMP3Base64, getVideoMP3Binary } = require('yt-get');

exports.convertToMp3 = catchAsyncErrors(async (req, res, next) => {
  const { videoUrl } = req.body;

  if (!videoUrl) {
    return next(new ErrorHandler("Please enter a video URL", 400));
  }

  try {
    const { base64, title } = await getVideoMP3Base64(videoUrl); // or use getVideoMP3Binary to get binary data

    // Set the response headers to indicate that the response is a downloadable file
    res.setHeader("Content-Disposition", `attachment; filename="${title}.mp3"`);
    res.setHeader("Content-Type", "audio/mpeg");

    // Convert the base64 string to binary data and send it as the response
    const mp3Buffer = Buffer.from(base64, 'base64');
    res.end(mp3Buffer);
  } catch (error) {
    console.error("Error:", error);
    return next(new ErrorHandler("Error obtaining or serving video MP3 content", 500));
  }
});


