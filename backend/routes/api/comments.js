const express = require("express");
const asyncHandler = require("express-async-handler");
const { check, validationResult } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");
const { setTokenCookie, restoreUser, requireAuth} = require("../../utils/auth");
const { User, Post, Topic, Like, Comment } = require("../../db/models");
const { singlePublicFileUpload }  = require("../../awsS3");
const { singleMulterUpload } = require("../../awsS3");

const router = express.Router();

// Does requireAuth replace this?
const checkPermissions = (post, currentUser) => {
  if (post.userId !== currentUser.id) {
    const err = new Error('Illegal operation.');
    err.status = 403;
    throw err;
  }
};


const commentValidators = [
  check('body')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for userInput')
    .isLength({ max: 100 }),
];


// GET: all comments
router.get('/', asyncHandler( async(req, res, next) => {
  const comments = await Comment.findAll({
    include: [
      User,
    ]
  });
  return res.json(comments)
}))

// GET: comment by postId
router.get('/:id(\\d+)', asyncHandler( async(req, res, next) => {
  const postId = req.params.id
  const comment = await Comment.findAll({
    where: {
      postId: postId
    },
    order: [
      ["updatedAt", "DESC"]
    ],
    include: [
      User,
    ],
  })
  return res.json(comment)
}))

// POST: create comment
router.post('/', requireAuth, asyncHandler( async(req, res, next) => {


  const comment = await Comment.create(req.body)

  res.json(comment)
}))

// PUT: update comment, only description!
router.put('/:id(\\d+)', requireAuth, asyncHandler( async(req, res, next) => {
  const {id} = req.body
  const comment = await Comment.findByPk(id)
  console.log(req.body, '================================')
  comment.update(req.body)

  return res.json(comment)
}))

// DELETE: delete comment
router.delete('/:id(\\d+)', requireAuth, asyncHandler( async(req, res, next) => {
  const commentId = req.params.id;
  const comment = await Comment.findByPk(commentId);

  await comment.destroy();
  return res.json(comment);
}))

module.exports = router;
