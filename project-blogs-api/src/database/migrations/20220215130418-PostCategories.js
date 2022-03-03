'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('PostsCategories', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      categoryId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'Categories', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      postId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'BlogPosts', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('PostsCategories');
  },
};
