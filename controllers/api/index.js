const userRoutes= require('express').Router();

const blogRoutes = require('./blog-routes.js');

router.use('/blogs', blogRoutes);

module.exports = router;