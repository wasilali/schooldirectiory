const News = require("../models/newsModel");
const ErrorHandling = require("../utils/errorHandling");
const catchAsyncError = require("../meddleware/catchAsyncError");
const ApiFeatures = require("../utils/apiFeachers");

exports.createNew = catchAsyncError(async (req, res, next) => {
  const myCloud = await cloudinary.v2.uploader.upload(req.body.avatar, {
    folder: "avatars",
    width: 150,
    crop: "scale",
  });

  const { name, description, from, to } = req.body;
  req.body.user = req.user.id;
  const news = await News.create({
    name,
    description,
    from,
    to,
    avatar: {
      public_id: myCloud.public_id,
      url: myCloud.secure_url,
    },
  });
  res.status(200).json({
    success: true,
    news,
  });
});

//get all newss of News

exports.getAll = catchAsyncError(async (req, res, next) => {
  const news = await News.find();
  if (!news) {
    return next(new ErrorHandling("news Not found", 404));
  }
  res.status(201).json({
    success: true,
    news,
  });
});

// update the news

exports.updateData = catchAsyncError(async (req, res, next) => {
  let news = await News.findById(req.params.id);
  if (!news) {
    return next(new ErrorHandling("news Not found", 404));
  }
  news = await News.findByIdAndUpdate(req.params.id, req.body);
  res.status(200).json({
    success: true,
    message: "news updated",
  });
});

//delete the news

exports.deleteData = catchAsyncError(async (req, res, next) => {
  const news = await News.findByIdAndDelete(req.params.id);
  if (!news) {
    return next(new ErrorHandling("news Not found", 404));
  }

  res.status(200).json({
    success: true,
    message: "news deleted",
  });
});

//get single news

exports.getsingle = catchAsyncError(async (req, res, next) => {
  const news = await News.findById(req.params.id);
  if (!news) {
    return next(new ErrorHandling("news Not found", 404));
  }

  res.status(200).json({
    success: true,
    news,
  });
});
