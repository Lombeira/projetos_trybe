const { Model, DataTypes } = require('sequelize');

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        displayName: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        image: DataTypes.STRING,
      },
      {
        sequelize,
      },
    );
  }
}

module.exports = { User };
