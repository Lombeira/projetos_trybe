require('dotenv/config');

module.exports = {
  development: {
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: 'blogs_api',
    host: process.env.HOSTNAME,
    dialect: 'mysql',
    define: {
      timestamps: false,
    },
  },
  test: {
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: 'blogs_api',
    host: process.env.HOSTNAME,
    dialect: 'mysql',
    define: {
      timestamps: false,
    },
  },
  production: {
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: 'blogs_api',
    host: process.env.HOSTNAME,
    dialect: 'mysql',
    define: {
      timestamps: false,
    },
  },
};
