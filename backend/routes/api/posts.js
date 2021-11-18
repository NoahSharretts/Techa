const express = require("express");
const asyncHandler = require("express-async-handler");
const { check, validationResult } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");
const { setTokenCookie, restoreUser, requireAuth} = require("../../utils/auth");
const { User, Post, Topic, Like, Comment } = require("../../db/models");

const router = express.Router();

// Does requireAuth replace this?
// const checkPermissions = (post, currentUser) => {
//   if (post.userId !== currentUser.id) {
//     const err = new Error('Illegal operation.');
//     err.status = 403;
//     throw err;
//   }
// };


const postValidators = [
  check('body')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for userInput')
    .isLength({ max: 100 }),
];


// GET: all post
router.get('/', asyncHandler( async(req, res, next) => {
  const post = await Post.findAll();
  return res.json(post)
}))













module.exports = router;
