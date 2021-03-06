const axios = require("axios");
const { serverError, successResponse, clientError } = require("../helper/helper")
const db = require("../model/db")

class Movies {
    /**
 * @method getAllMovies
 * @description Get all movie from the API
 * @param {object} res - The Response Object
 * @returns {object} JSON API Response
 */
    static async getAllMovies(req, res) {
        try {
            const response = await axios.get("https://swapi.dev/api/films/");
            const moviesArray = response.data.results
            const moviesResult = []
            const promises = moviesArray.map(async movie => {
                try {
                    const text = `SELECT * FROM comments WHERE movie_id = '${movie.episode_id}' `;
                    const { rows, rowCount } = await db.query(text);
                    moviesResult.push({
                        episode_id: movie.episode_id, title: movie.title, opening_crawl: movie.opening_crawl, release_date: movie.release_date, comments: rows.length ? rows : [], commment_count: rows.length ? rowCount : 0
                    })
                } catch (err) {
                    return serverError(res);
                }
            });
            await Promise.all(promises);

            moviesResult.sort((a, b) => {
                return +a.release_date.split("-")[0] - +b.release_date.split("-")[0]
            })
            return successResponse(res, 200, moviesResult);
        } catch (err) {
            return serverError(res);
        }
    }

    /**
 * @method getAMovies
 * @description Get a movie from the API given the id
 * @param {object} req - The Resquest Object
 * @param {object} res - The Response Object
 * @returns {object} JSON API Response
 */
    static async getAMovie(req, res) {
        try {
            if (+req.params.id >= 7 || +req.params.id <= 0) {
                return clientError(res, 404, ...["status", "ERROR", "error", "NOT_FOUND"]);
            }
            const response = await axios.get("https://swapi.dev/api/films/" + req.params.id);
            const result = response.data
            const text = `SELECT * FROM comments WHERE movie_id = '${result.episode_id}' `;
            const { rows, rowCount } = await db.query(text);

            if (rows.length > 0) {
                result["comments"] = rows
                result["comment_count"] = rowCount
            }
            return successResponse(res, 200, response.data);
        } catch (err) {
            return serverError(res);
        }

    }

}
module.exports = Movies
