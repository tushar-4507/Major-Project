const express = require("express");
const router = express.Router({mergeParams: true});
const wrapAsync = require("../utlis/wrapAsync.js");
const ExpressError = require("../utlis/ExpressError.js");
const Review = require("../models/review.js");
const Listing = require("../models/listing.js");
const {validateReview, isLoggedIn, isReviewAuthor} = require("../middleware.js");   

const reviewController = require("../controllers/reviews.js");

// Reviews of a post Route
router.post("/", isLoggedIn, validateReview, wrapAsync (reviewController.createReview));

// Delete review Route
router.delete("/:reviewId", isLoggedIn, isReviewAuthor, wrapAsync (reviewController.deleteReview));

module.exports = router;