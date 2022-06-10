const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class secondTheme extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  secondTheme.init({
    theme_title: DataTypes.TEXT,
    theme_question: DataTypes.TEXT,
    theme_answer: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'secondTheme',
    tableName: 'secondThemes',
  });
  return secondTheme;
};
