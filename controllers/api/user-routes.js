const router = require('express').Router();
const User = require('../../models');

// route to create/add a user using async/await
router.post('/', async (req, res) => {
  console.log('BACKEND', req.body)
  try { 
    const userData = await User.create(
   req.body
  );
req.session.save(() => {
  req.session.user_id = userData.id;
  req.session.logged_in = true;
  res.json(userData);
});
  // if the user is successfully created, the new response will be returned as json
} catch (err) {
  res.status(400).json(err);
}
});


router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });
    if (!userData) {
      res.status(400).json({ message: 'Incorrect email or password, please try again' });
      return;
    }
    const validPassword = await userData.checkPassword(req.body.password);
    if (!validPassword) {
      res.status(400).json({ message: 'Incorrect email or password, please try again' });
      return;
    }
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      res.json({ user: userData, message: 'You are now logged in!' });
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/logout', async (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});


module.exports = router;


