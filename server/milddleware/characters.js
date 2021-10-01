const axios = require("axios")
const { serverError, successResponse, clientError, sortResult } = require("../helper/helper")

class Characters {

    /**
 * @method getCharacters
 * @description Get all characters,or sorted by name, gender or height(in descending or ascending order), or filtered by gender
 * @param {object} req - The Resquest Object
 * @param {object} res - The Response Object
 * @returns {object} JSON API Response
 */
    static async getCharacters(req, res) {
        try {
            const { page, sort_by, order_by } = req.query;
            if (page) {
                const response = await axios.get("https://swapi.dev/api/people/", {
                    params: {
                        page: page
                    },
                    contentType: "application/json"
                })

                let results = response.data.results
                if (sort_by === "height") {
                    if (order_by == "asc") {
                        const sortedResult = sortResult("height", "asc", results)
                        return successResponse(res, 200, sortedResult);
                    } else if (order_by == "desc") {
                        const sortedResult = sortResult("height", "desc", results)
                        return successResponse(res, 200, sortedResult);
                    } else {
                        return clientError(res, 400, ...["status", "ERROR", "error", "INVALID_URL"]);
                    }
                } else if (sort_by === "name") {
                    if (order_by == "asc") {
                        const sortedResult = sortResult("name", "asc", results)
                        return successResponse(res, 200, sortedResult);
                    } else if (order_by == "desc") {
                        const sortedResult = sortResult("name", "desc", results)
                        return successResponse(res, 200, sortedResult);
                    } else {
                        return clientError(res, 400, ...["status", "ERROR", "error", "INVALID_URL"]);
                    }
                } else if (sort_by == "gender") {
                    if (order_by == "asc") {
                        const sortedResult = sortResult("gender", "asc", results)
                        return successResponse(res, 200, sortedResult);
                    } else if (order_by == "desc") {
                        const sortedResult = sortResult("gender", "desc", results)
                        return successResponse(res, 200, sortedResult);
                    } else {
                        return clientError(res, 400, ...["status", "ERROR", "error", "INVALID_URL"]);
                    }
                } else if (req.query.gender) {
                    const filterResult = results.filter((item) => {
                        return item.gender == req.query.gender
                    })
                    if (filterResult.length < 1) {
                        return successResponse(res, 200, "NO_MATCH_FOUND");
                    }
                    let sumHeight = 0
                    filterResult.forEach(item => {
                        sumHeight += item.height
                    });
                    const sumHeightInches = sumHeight / 2.54
                    const sumHeightFeet = sumHeightInches / 12
                    const sumHeightFtIn = Math.floor(sumHeightFeet) + "feet " + (sumHeightInches - Math.floor(sumHeightFeet) * 12).toFixed(2) + " inches"

                    return res.status(200).json({
                        status: "SUCCESS",
                        data: filterResult,
                        meta: {
                            totalHeightCm: sumHeight,
                            totalHeightFtIn: sumHeightFtIn,
                            count: filterResult.length
                        }
                    });
                }
                else {
                    return successResponse(res, 200, results);
                }
            } else {
                const response = await axios.get("https://swapi.dev/api/people/", { contentType: "application/json" })

                let results = response.data.results
                return successResponse(res, 200, results);
            }

        } catch (err) {
            return serverError(res);
        }
    }

}

module.exports = Characters
