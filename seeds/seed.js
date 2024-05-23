const sequelize = require('../models').sequelize;
const { User, Post } = require('../models');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate([
    { username: 'user1', password: 'password1' },
    { username: 'user2', password: 'password2' },
  ], {
    individualHooks: true,
    returning: true,
  });

  await Post.bulkCreate([
    {
      title: 'Post 1',
      content: 'Content for post 1',
      user_id: users[0].id,
    },
    {
      title: 'Post 2',
      content: 'Content for post 2',
      user_id: users[1].id,
    },
  ]);

  process.exit(0);
};

seedDatabase();
