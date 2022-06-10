module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [{
      user_name: 'Vasgen',
      scores: 0,
      email: 'vasgen@pochta.com',
      password: '1234',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      user_name: 'Vovan',
      scores: 0,
      email: 'vovan@pochta.com',
      password: '5678',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down(queryInterface, Sequelize) {
  },
};
