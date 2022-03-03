const { Model, DataTypes } = require('sequelize');

class Categories extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
      },
      {
        sequelize,
      },
    );
  }

  static associate(models) {
    this.belongsToMany(models.BlogPosts, {
      foreignKey: 'categoryId',
      through: 'PostsCategories',
      as: 'posts',
    });
  }
}

module.exports = { Categories };
