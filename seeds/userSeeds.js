const { User } = require('../models');

const userData = [
  {
    username: 'john_doe',
    password: 'password123',
  },
  {
    username: 'jane_doe',
    password: 'password123',
  },
];

const seedUsers = async () => {
  for (const user of userData) {
    try {
      await User.create(user);
    } catch (err) {
      if (err.name === 'SequelizeUniqueConstraintError') {
        console.log(`User ${user.username} already exists.`);
      } else {
        throw err;
      }
    }
  }
};

module.exports = seedUsers;
