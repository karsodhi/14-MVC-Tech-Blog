const sequelize = require('../config/connection');
const {User,Blog} = require('../models/');
const blogData = require("./blog.json")
const userData = require("./user-seeds.json")

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

 const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });
  for (const blog of blogData){
    await Blog.create({
      ...blog, 
      user_id:users [Math.floor(Math.random() * users.length )].id,
    });
  }
  process.exit(0);
};

seedDatabase();