'use strict'

// Import needed modules.
const express = require('express')
const router = express.Router()
const { comments } = require('../controllers')

/* GET */
router.get('/posts/:postId/comments', comments.getComments)

/* ADD*/
router.post('/posts/:postId/comments', comments.addComment)

/* UPDATE */
router.put('/posts/:postId/comments/:commentId', comments.updateComment)

/* REMOVE */
router.delete('/posts/:postId/comments/:commentId', comments.removeComment)

module.exports = router