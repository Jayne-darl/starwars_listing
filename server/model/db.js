const { Pool } = require("pg");

const credentials = {
    user: "postgres",
    host: "localhost",
    database: "starwarslisting",
    password: "transformed",
    port: 5432,
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
