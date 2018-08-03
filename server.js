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

// App store data.
let store = {
  posts: [
    {
      name: 'Top 10 ES6 Features every Web Developer must know',
      url: 'https://webapplog.com/es6',
      text: 'This essay will give you a quick introduction to ES6. If you don’t know what is ES6, it’s a new JavaScript implementation.',
      comments: [
        { text: 'Cruel…..var { house, mouse} = No type optimization at all' },
        { text: 'I think you’re undervaluing the benefit of ‘let’ and ‘const’.' },
        { text: '(p1,p2)=>{ … } ,i understand this ,thank you !' }
      ]
    }
  ]
}

// Create the express instance.
let app = express()

app.use(bodyParser.json())
app.use(logger('dev'))
app.use(errorhandler())

// Set data store.
app.use((req, res, next) => {
  req.store = store
  next()
})

// Set application routes.
app.use(appRoutes.posts)
app.use(appRoutes.comments)

app.listen(3000, () => console.log(`Server listening on localhost:${PORT}`))
