const { Pool } = require("pg");

const dotenv = require("dotenv");

dotenv.config();

// const env = process.env.NODE_ENV === 'test' ? process.env.test : process.env.DATABASE_URL;

const credentials = {
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
    // user: "postgres",
    // host: "localhost",
    // database: process.env.database,
    // password: process.env.password,
    // port: 5432,
};

const pool = new Pool(credentials);

pool.on('error', (err, client) => {
    console.error('Error:', err);
});

// Connect with a connection pool.

/**
 * DB Query
 * @param {object} req
 * @param {object} res
 * @returns {object} object
 */
exports.query = (text, params) => {
    return new Promise((resolve, reject) => {
        pool
            .query(text, params)
            .then((res) => {
                resolve(res);
            })
            .catch((err) => {
                reject(err);
            });
    });
};
