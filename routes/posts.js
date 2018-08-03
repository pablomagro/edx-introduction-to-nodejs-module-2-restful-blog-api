'use strict'

// Import needed modules.
const express = require('express')
const router = express.Router()
const { posts } = require('../controllers')

/* GET */
router.get('/posts', posts.getPosts)

/* ADD */
router.post('/posts', posts.addPost)

/* UPDATE */
router.put('/posts/:postId', posts.updatePost)

/* REMOVE */
router.delete('/posts/:postId', posts.removePost)

module.exports = router