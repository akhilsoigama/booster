const express = require('express');
const Posts = require('../controller/postController/postController')

const postRouter = express.Router();
postRouter.post('/create-post', Posts);

module.exports = postRouter;