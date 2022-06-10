module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('secondThemes', [{
      theme_title: 'Harry potter',
      theme_question: 'Какое заклинание использовал Гарри Поттер, чтобы убить Волан-де-Морта?',
      theme_answer: 'Экспелиармус',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      theme_title: 'Harry potter',
      theme_question: 'Как звали трехголового питомца Хагрида,который охранял философский камень?',
      theme_answer: 'Пушок',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      theme_title: 'Harry potter',
      theme_question: 'Как звали домашнего эльфа семьи Блэк?',
      theme_answer: 'Кикимер',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      theme_title: 'Harry potter',
      theme_question: 'Что нужно сказать после использования карты Мародеров?',
      theme_answer: 'Шалость удалась',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      theme_title: 'Harry potter',
      theme_question: 'Чтобы освободить домашнего эльфа нужно...?',
      theme_answer: 'Подарить одежду',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      theme_title: 'Harry potter',
      theme_question: 'Чтобы завершить быстро матч по Квиддичу нужно поймать...?',
      theme_answer: 'Снитч',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
