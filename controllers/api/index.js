const userRoutes= require('express').Router();

const blogRoutes = require('./blog-routes.js');

// const commentRoutes = require('./comment-routes.js');

const router = require('express').Router();

router.use('/blogs', blogRoutes);

router.use("/user", userRoutes);

// router.use("/comment", commentRoutes);

module.exports = router;