const express = require("express");
const asyncHandler = require("express-async-handler");
const { setTokenCookie, restoreUser, requireAuth} = require("../../utils/auth");
const {  Like } = require("../../db/models");

const router = express.Router();


router.post('/:id(\\d+)',
  requireAuth,
  asyncHandler( async(req, res) => {
    const postId = req.params.id;
    const userId = req.user.dataValues.id;

    const aLike = await Like.findOne({
      where: {
        postId: postId,
        userId: userId
      }
    });

    let likesCount = await Like.count({
      where: {
        postId: postId
      }
    })

    if (aLike) {
      await aLike.destroy();
      likesCount--
      res.status(200)
      res.json({ likesCount })
    } else {
      const newLike = await Like.create({
        postId,
        userId
      })
      likesCount++
      res.status(200)
      res.json({ likesCount })
    }
  })
)

module.exports = router;
