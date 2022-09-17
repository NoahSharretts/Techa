const express = require("express");
const asyncHandler = require("express-async-handler");
const { check, validationResult } = require("express-validator");
const { setTokenCookie, restoreUser, requireAuth} = require("../../utils/auth");
const { User, Post, Topic, Like, Comment, Friend } = require("../../db/models");

const router = express.Router();





router.get('/:id(\\d+)', asyncHandler( async(req, res, next) => {
  const userId = req.params.id
  const following = Friend.findAll({
    where: {
      userId: userId
    }
  })
  const followers = Friend.findAll({
    where: {
      followingId: userId
    }
  })

  return res.json(following, followers)
}))





module.exports = router;
