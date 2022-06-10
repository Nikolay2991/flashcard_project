module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('thirdThemes', [{
      theme_title: 'Сериал: Клиника',
      theme_question: 'Как звали главного героя?',
      theme_answer: 'Джей Ди',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      theme_title: 'Сериал: Клиника',
      theme_question: 'Как звали лучшего друга главного героя?',
      theme_answer: 'Тёрк',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      theme_title: 'Сериал: Клиника',
      theme_question: 'О работниках какой профессии повествует сериал?',
      theme_answer: 'Врач',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      theme_title: 'Сериал: Клиника',
      theme_question: 'Кто из сотрудников больницы всегда недолюбливал главных героев?',
      theme_answer: 'Уборщик',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      theme_title: 'Сериал: Клиника',
      theme_question: 'Кем был Роберт Келсо?',
      theme_answer: 'Главным врачом',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down(queryInterface, Sequelize) {
  },
};
