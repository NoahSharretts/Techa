const express = require("express");
const { check } = require("express-validator");
const asyncHandler = require("express-async-handler");
const { Op } = require("sequelize");
const { singlePublicFileUpload }  = require("../../awsS3");
const { singleMulterUpload } = require("../../awsS3");
const { handleValidationErrors } = require("../../utils/validation");
const { setTokenCookie, requireAuth } = require("../../utils/auth");
const { User, Post, Comment, } = require("../../db/models");
const router = express.Router();

const validateSignup = [
  check('email')
    .exists({ checkFalsy: true })
    .isEmail()
    .withMessage('Please provide a valid email.'),
  check('username')
    .exists({ checkFalsy: true })
    .isLength({ min: 4 })
    .withMessage('Please provide a username with at least 4 characters.'),
  check('username')
    .not()
    .isEmail()
    .withMessage('Username cannot be an email.'),
  check('password')
    .exists({ checkFalsy: true })
    .isLength({ min: 6 })
    .withMessage('Password must be 6 characters or more.'),
  handleValidationErrors,
];

router.get('/', asyncHandler(async(req, res) => {
  const users = await User.findAll();
  return res.json(users)
}))

// Sign up
router.post(
  "/",
  singleMulterUpload("avatar"),
  validateSignup, 
  asyncHandler(async (req, res) => {
    const { email, password, username } = req.body;
    const avatar = await singlePublicFileUpload(req.file);
    // const avatar = profileImageUrl.toString();
    console.log(avatar, '----------------------------------')

    const user = await User.signup({
      username,
      email,
      password,
      avatar,
    });

    setTokenCookie(res, user);

    return res.json({
      user,
    });
  })
);

router.get('/:id(\\d+)',asyncHandler( async(req, res, next) => {
 const userId = req.params.id;
 const user = await User.findByPk(userId, {
  include: [
    Post,
    
  ]
 })
 return res.json(user)
}))

// Searching for a User
router.put(
  "/search",
  asyncHandler(async function (req, res) {
    const search = req.body.input;
    let users;
    let searchResult = false;
    if (search !== undefined) {
      users = await User.findAll({
        where: {
          username: {
            [Op.iLike]: `%${search}%`,
          },
        },
      });
      if (users.length > 0) {
        searchResult = true;
      }
    } else {
      searchResult = false;
      users = await User.findAll();
    }
    return res.json(users);
  })
);

// Friends
router.post('/friends', asyncHandler( async(req, res, next) => {
  const id = req.params.id;

  let followerCount = await 
}))


module.exports = router;
