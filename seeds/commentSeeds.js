const { Comment } = require('../models');

const commentData = [
  {
    content: 'Great post!',
    user_id: 2,
    id: 1,
  },
  {
    content: 'Thanks for sharing!',
    user_id: 1,
    id: 2,
  },
];

const seedComments = async () => {
  await Comment.bulkCreate(commentData);
};

module.exports = seedComments;
