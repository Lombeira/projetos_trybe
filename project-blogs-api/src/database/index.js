const Sequelize = require('sequelize');
const dbConfig = require('../config/config');
const { BlogPosts } = require('../models/BlogPosts');
const { Categories } = require('../models/Categories');
const { User } = require('../models/User');

const connection = new Sequelize(dbConfig.development);

User.init(connection);
Categories.init(connection);
BlogPosts.init(connection);

Categories.associate(connection.models);
BlogPosts.associate(connection.models);

module.exports = { connection };
