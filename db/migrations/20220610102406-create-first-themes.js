module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('firstThemes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      theme_title: {
        type: Sequelize.TEXT,
      },
      theme_question: {
        type: Sequelize.TEXT,
      },
      theme_answer: {
        type: Sequelize.TEXT,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('firstThemes');
  },
};
