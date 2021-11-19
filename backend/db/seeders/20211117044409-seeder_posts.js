'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Posts', [
      {
        userId: 1,
        topicId: 1,
        body: "seeder 1",
        photo:"https://www.cnet.com/a/img/qTg4qVth3Sx8CDEDn5-Ccohm400=/1200x630/2021/08/20/453e37bf-61cb-4e16-ad90-fd822bdc390a/keychron-k3-mechanical-keyboard.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        topicId: 2,
        body: "seeder 2",
        photo:"https://www.cnet.com/a/img/qTg4qVth3Sx8CDEDn5-Ccohm400=/1200x630/2021/08/20/453e37bf-61cb-4e16-ad90-fd822bdc390a/keychron-k3-mechanical-keyboard.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        topicId: 2,
        body: "seeder 3",
        photo:"https://www.cnet.com/a/img/qTg4qVth3Sx8CDEDn5-Ccohm400=/1200x630/2021/08/20/453e37bf-61cb-4e16-ad90-fd822bdc390a/keychron-k3-mechanical-keyboard.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete(
      'Posts', 
      null, 
      {
        truncate: true, cascade: true, restartIdentity: true 
      }
    );
  }
};
