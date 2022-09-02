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
  const post = await Post.findAll({
    include: [
      User,
      Comment
    ]
  });
  return res.json(post)
}))

// GET: post by id
router.get('/:id(\\d+)', asyncHandler( async(req, res, next) => {
  const postId = req.params.id
  const post = await Post.findByPk(postId, {
    include: [
      User,
      Comment
    ]
  })
  return res.json(post)
}))

// GET: posts of user by user id
router.get('/user/:id(\\d+)', asyncHandler( async(req, res, next) => {
  const userId = req.params.id
  const posts = await Post.findAll({
    where: {
      userId: userId
    }
  })
  console.log(posts, "################################***************************************")
  return res.json(posts)

}))

// POST: create post
router.post('/', singleMulterUpload("photo"), requireAuth, asyncHandler( async(req, res, next) => {
  console.log('herehrehrherhehrehrherhere')
  const { body, userId } = req.body;

  const photo = await singlePublicFileUpload(req.file);



  const post = await Post.create({
    userId,
    photo,
    body
  })

  return res.json({post})
}))

// PUT: update post, only description!
router.put('/:id(\\d+)', requireAuth, asyncHandler( async(req, res, next) => {
  const {id} = req.body
  const post = await Post.findByPk(id)
  // console.log(req.body, '================================')


  post.update(req.body)

  return res.json(post)
}))

// DELETE: delete post
router.delete('/:id(\\d+)', requireAuth, asyncHandler( async(req, res, next) => {
  const postId = req.params.id;
  const post = await Post.findByPk(postId);

  await post.destroy();
  return res.json(post);
}))

module.exports = router;
