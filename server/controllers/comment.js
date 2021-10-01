const { serverError, successResponse, clientError } = require("../helper/helper")
const db = require("../model/db")

// CREATE TABLE comments(
//     id serial PRIMARY KEY,
//     text VARCHAR(500) NOT NULL,
//     movie_id VARCHAR(1) NOT NULL,
//     ip_address TEXT NOT NULL,
//     created_on TIMESTAMP DEFAULT NOW() NOT NULL,
class Comment {

    /**
      * Create a comment
      * @params {object} req
      * @params {object} res
      * @returns {object} comment object
      */
    static async createComment(req, res) {
        try {
            if (req.body.text.length > 500) {
                return successResponse(res, "205", "COMMENT_IS_TOO_LONG");
            }
            const text = `INSERT INTO 
      comments ( text, movie_id, ip_address)
      VALUES ( $1, $2, $3) returning *`;
            const values = [
                req.body.text,
                req.body.movie_id,
                req.ip
            ];
            // );
            const { rows } = await db.query(text, values);
            return successResponse(res, 201, rows[0]);
        } catch (err) {
            return serverError(res);
        }
    }

    /**
 * @method getAComment
 * @description Get a comment
 * @param {object} req - The Resquest Object
 * @param {object} res - The Response Object
 * @returns {object} JSON API Response
 */
    static async getComment(req, res) {
        try {
            const text = `SELECT * FROM comments WHERE id = $1 `;
            const { rows, rowCount } = await db.query(text, [req.params.id]);
            if (rowCount === 0) {
                return clientError(res, 404, ...["status", "ERROR", "error", "NOT_FOUND"]);
            }
            return successResponse(res, 200, rows[0]);
        } catch (err) {
            console.log(err)
            return serverError(res);
        }
    }

    /**
 * @method getAllComment
 * @description Get all comment in the database in reverse chronological order
 * @param {object} req - The Resquest Object
 * @param {object} res - The Response Object
 * @returns {object} JSON API Response
 */
    static async getAllComment(req, res) {
        const findAllQuery = `SELECT  * FROM comments`;
        try {
            const { rows, rowCount } = await db.query(findAllQuery);
            if (rowCount === 0) {
                return clientError(res, 404, ...["status", "ERROR", "error", "NOT_FOUND"]);
            }
            rows.sort((a, b) => {
                return b["created_on"].getTime() - a["created_on"].getTime()
            })
            return successResponse(res, 200, rows);
        } catch (err) {
            return serverError(res);
        }
    }
}

module.exports = Comment