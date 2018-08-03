# edx: Introduction to NodeJS

## Module 2 Assignment Lab: RESTful Blog API

1. Walk us through the design of your project. Why did you design your project the way you did? What difficulties did you overcome?

My design is quite similar as subjected in the assignment. The main difference is I have another folder named **controllers** which holds all the end-points logic, which included in each route a middleware function. Also I have included some validations for the end-points.

```js
const { posts } = require('../controllers')

/* GET */
router.get('/posts', posts.getPosts)
```

Then I have imported those routes within the **server.js** file.

```js
...
// Load app routes and data modules.
const appRoutes = require('./routes')
...
// Set application routes.
app.use(appRoutes.posts)
app.use(appRoutes.comments)
```

2. How did you test your project to verify that it works? If you used any specific curl requests, let us know.

I have used the given curl requests for [posts](./test/test-posts.sh), and then I have created the equivalent requests for the [comments](./test/test-posts.sh).

3. Let us know if anything doesn't work as intended so your reviewers will know ahead of time

Everything is working as intended.