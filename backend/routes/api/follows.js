const express = require("express");
const asyncHandler = require("express-async-handler");
const { check, validationResult } = require("express-validator");
const { setTokenCookie, restoreUser, requireAuth} = require("../../utils/auth");
const { Friend } = require("../../db/models");

const router = express.Router();

// Get following/followers count of user
router.get('/:id(\\d+)', asyncHandler( async(req, res, next) => {
  const userId = req.params.id
  const following = await Friend.findAll({
    where: {
      userId: userId
    }
  })
  const followers = await Friend.findAll({
    where: {
      followingId: userId
    }
  })

  return res.json( {following, followers})
}))

// Post, following/unfollowing a user
router.post('/:id(\\d+)',
  requireAuth,
  asyncHandler( async(req, res) => {
    const followingId = req.params.id;
    const userId = req.user.dataValues.id;

    const followers = await Friend.findAll({
      where: {
        followingId: userId
      }
    })

    const following = await Friend.findOne({
      where: {
        userId: userId,
        followingId: followingId
      }
    });

    if (following) {
      await following.destroy();
      res.status(200)
      res.json({followers})
    } else {
      const follow = await Friend.create({
        userId,
        followingId
      })
      res.status(200)
      res.json({followers})
    }
  })
)


module.exports = router;
