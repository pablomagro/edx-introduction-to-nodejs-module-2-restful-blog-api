'use strict'

module.exports = {
  getComments(req, res) {
    if (!req.params.postId) {
      res.status(400).send('Invalid post Id.')
    } else {
      res.status(200).send(req.store.posts[req.params.postId].comments)
    }
  },
  addComment(req, res) {
    let newComment = req.body

    // Validate body.
    if (!newComment || !req.params.postId) {
      res.status(400).send('Invalid in paramter(s).')
    } else {
      let comments = req.store.posts[req.params.postId].comments
      let commentId = comments.length
      comments.push(newComment)
      req.store.posts[req.params.postId].comments = comments
      res.status(201).send({ commentId })
    }
  },
  updateComment(req, res) {
    // Validate needed parameters.
    if (!req.params.postId || !req.params.commentId) {
      res.status(400).send('Invalid in parameters.')
    } else {
      req.store.posts[req.params.postId].comments[req.params.commentId] =
        Object.assign(req.store.posts[req.params.postId].comments[req.params.commentId], req.body)
      res.status(200).send(req.store.posts[req.params.postId].comments[req.params.commentId])
    }
  },
  removeComment(req, res) {
    // Validate needed parameters.
    if (!req.params.postId || !req.params.commentId) {
      res.status(400).send('Invalid in parameters.')
    } else {
      req.store.posts[req.params.postId].comments.splice(req.params.commentId, 1)
      res.status(204).send()
    }
  }
}