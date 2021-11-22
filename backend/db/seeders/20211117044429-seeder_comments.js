'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   await queryInterface.bulkInsert('Comments', [
    {
      userId: 1,
      body: "sick post!",
      postId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userId: 2,
      body: "nice build!!",
      postId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userId: 3,
      body: "POGGERS!!!",
      postId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
   ], {});

  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete(
      'Comments', 
      null, 
      {
        truncate: true, cascade: true, restartIdentity: true 
      }
    );
  }
};
