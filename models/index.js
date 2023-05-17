const User = require("./user")
const Blog = require("./blog")
const Comment = require("./comment")

User.hasMany(Blog, {
  foreignKey: "user_id",
  onDelete: "CASCADE"
});
Blog.hasMany(User, {
  foreignKey: "user_id"
});
User.hasMany(Comment, {
  foreignKey: "user_id",
  onDelete: "CASCADE"
});
Comment.belongsTo(User, {
  foreignKey: "user_id"
})


module.exports = {
  User, Blog
};
