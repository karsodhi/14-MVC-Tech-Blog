const router = require('express').Router();
const { Blog, User } = require('../models');
const withAuth = require('../utils/auth');

// route to get all Blogs
router.get('/', async (req, res) => {
  const blogData = await Blog.findAll({
    include: [
      {
        model: User,
        attributes: ['name'],
      },
    ],
  }).catch((err) => {
    // select * from blog;
    res.json(err);
  });
  const blogs = blogData.map((blog) => blog.get({ plain: true }));
  res.render("homepage", { blogs, logged_in: req.session.logged_in });
});

// route to get one blog
router.get('/blog/:id', async (req, res) => {
  try {
    const blogData = await Blog.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    }
    );
    if (!blogData) {
      res.status(404).json({ message: 'No blog with this id!' });
      return;
    }
    const blog = blogData.get({ plain: true });
    res.render('newblog', {
      ...blog,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  };
});


module.exports = router;
