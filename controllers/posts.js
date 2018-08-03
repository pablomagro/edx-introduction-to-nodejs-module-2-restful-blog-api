'use strict'

module.exports = {
  getPosts(req, res) {
    res.status(200).send(req.store.posts)
  },
  // ADD
  addPost(req, res) {
    let newPost = req.body

    // Validate body.
    if (!newPost) {
      res.status(400).send('Invalid in paramter(s).')
    } else {
      let postId = req.store.posts.length
      req.store.posts.push(newPost)
      res.status(201).send({ postId })
    }
  },
  updatePost(req, res) {
    // Validate the post Id.
    if (!req.params.postId) {
      res.status(400).send('Invalid post Id.')
    } else {
      req.store.posts[req.params.postId] = Object.assign(req.store.posts[req.params.postId], req.body)
      res.status(200).send(req.store.posts[req.params.postId])
    }
  },
  removePost(req, res) {
    if (!req.params.postId) {
      res.status(400).send('Invalid post Id.')
    } else {
      req.store.posts.splice(req.params.postId, 1)
      res.status(204).send()
    }
  }
}