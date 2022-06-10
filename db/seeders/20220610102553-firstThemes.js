module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('firstThemes', [{
      theme_title: 'Большой Лебовски',
      theme_question: 'Ты – грёбаный …',
      theme_answer: 'польский католик',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      theme_title: 'Большой Лебовски',
      theme_question: 'Ну, я музыкой занимался немного. … для Металлики',
      theme_answer: 'Грузил аппаратуру',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      theme_title: 'Большой Лебовски',
      theme_question: 'Всё как … говорил: «Ищи того, кому это выгодно»',
      theme_answer: 'Ленин',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      theme_title: 'Большой Лебовски',
      theme_question: 'Я не могу решить ваши проблемы, это под силу …',
      theme_answer: 'лишь вам',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      theme_title: 'Большой Лебовски',
      theme_question: 'Я не мистер Лебовски. Это вы мистер Лебовски. А я Чувак. Так меня и зовите. Ещё можно «Ваше Чувачество», «Чувакер», или там …',
      theme_answer: 'Эль Чувачино',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      theme_title: 'Большой Лебовски',
      theme_question: 'Ковёр задавал тон … .',
      theme_answer: 'всей комнате',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down(queryInterface, Sequelize) {
  },
};
