'use strict'

// Load needed modules.
const express = require('express')
const logger = require('morgan')
const errorhandler = require('errorhandler')
const bodyParser = require('body-parser')

// Load app routes and data modules.
const appRoutes = require('./routes')

// Server port
const PORT = 3000

// Load the app data store.
let store = require('./data/store')

// Create the express instance.
let app = express()

app.use(bodyParser.json())
app.use(logger('dev'))
app.use(errorhandler())

// Set data store within the request object.
app.use((req, res, next) => {
  req.store = store
  next()
})

// Set application routes.
app.use(appRoutes.posts)
app.use(appRoutes.comments)

// Start that server, and listen for connections.
app.listen(3000, () => console.log(`Server listening on localhost:${PORT}`))
