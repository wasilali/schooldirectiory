const Link = require("../models/linkModel");
const ErrorHandling = require("../utils/errorHandling");
const catchAsyncError = require("../meddleware/catchAsyncError");

exports.createLink = catchAsyncError(async (req, res, next) => {
  const { link, classes, name } = req.body;

  const newlink = await Link.create({
    link,
    user: req.user.id,
    classes,
    name,
  });
  res.status(200).json({
    success: true,
    newlink,
  });
});

//get all products of links

exports.getLinks = catchAsyncError(async (req, res, next) => {
  const allLinks = await Link.find();
  if (!allLinks) {
    return next(new ErrorHandling("Links Not found", 404));
  }
  res.status(201).json({
    success: true,
    allLinks,
  });
});

// update the link

exports.updateLink = catchAsyncError(async (req, res, next) => {
  let linkdata = await Link.findById(req.params.id);
  if (!linkdata) {
    return next(new ErrorHandling("link Not found", 404));
  }
  linkdata = await Link.findByIdAndUpdate(req.params.id, req.body);
  res.status(200).json({
    success: true,
    message: "link updated",
  });
});

//  delete link

exports.deleteLink = catchAsyncError(async (req, res, next) => {
  const linkdata = await Link.findByIdAndDelete(req.params.id);
  if (!linkdata) {
    return next(new ErrorHandling("link Not found", 404));
  }

  res.status(200).json({
    success: true,
    message: "link deleted Successfully deleted",
  });
});

//get single link

exports.getsingleLink = catchAsyncError(async (req, res, next) => {
  const linkdata = await Link.findById(req.params.id);
  if (!linkdata) {
    return next(new ErrorHandling("Product Not found", 404));
  }

  res.status(200).json({
    success: true,
    linkdata,
  });
});
