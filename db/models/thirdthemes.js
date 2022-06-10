const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class thirdTheme extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  thirdTheme.init({
    theme_title: DataTypes.TEXT,
    theme_question: DataTypes.TEXT,
    theme_answer: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'thirdTheme',
    tableName: 'thirdThemes',
  });
  return thirdTheme;
};
