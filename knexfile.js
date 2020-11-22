const { config } = require('dotenv');

config();

module.exports = {
    development: {
        client: 'mysql',
        connection: {
            database: process.env.DB_NAME,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
        },
        pool: {
            min: 2,
            max: 10,
        },
        migrations: {
            directory: `${__dirname}/Database/Migrations`,
            extension: 'js',
        },
    },
};