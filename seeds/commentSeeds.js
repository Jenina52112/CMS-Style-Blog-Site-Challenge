const { Comment } = require('../models');

const commentData = [
  {
    content: 'Great post!',
    created_at: new Date(),
    updated_at: new Date(),
    user_id: 17, // Assuming user with id 1 exists
    id: 15 // Ensure this post exists
  },
  {
    content: 'Thanks for sharing!',
    created_at: new Date(),
    updated_at: new Date(),
    user_id: 18, // Assuming user with id 2 exists
    id: 16 // Ensure this post exists
  }
];

const seedComments = async () => {
  await Comment.bulkCreate(commentData);
};

module.exports = seedComments;
