const Sequelize = require('sequelize');
const dotenv = require('dotenv');
dotenv.config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: 'mysql',
  }
);

const User = require('./User')(sequelize, Sequelize.DataTypes);
const Post = require('./Post')(sequelize, Sequelize.DataTypes);
const Comment = require('./Comment')(sequelize, Sequelize.DataTypes);

User.hasMany(Post, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

Post.belongsTo(User, {
  foreignKey: 'user_id',
});

Post.hasMany(Comment, {
  foreignKey: 'post_id',
  onDelete: 'CASCADE',
});

Comment.belongsTo(Post, {
  foreignKey: 'post_id',
});

Comment.belongsTo(User, {
  foreignKey: 'user_id',
});

User.hasMany(Comment, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

module.exports = { User, Post, Comment, sequelize };