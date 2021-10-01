const { getAMovie, getAllMovies } = require("./movies")
const { getCharacters } = require("./characters");
const { createComment, getAllComment, getComment } = require("./comments");

const apiDocumentation = {
    openapi: '3.0.1',
    info: {
        version: '1.3.0',
        title: 'STARWARS LISTING API - Documentation',
        description: 'A listing of starwars movies with associated comments, and list of characters, sorted or filtered by gender.',
        termsOfService: 'https://mysite.com/terms',
        contact: {
            name: 'Jane Onwumere',
            email: 'janeuchechukwu@gmail.com',
            url: 'https://devwebsite.com',
        },
        license: {
            name: 'Apache 2.0',
            url: 'https://www.apache.org/licenses/LICENSE-2.0.html',
        },
    },
    servers: [
        {
            url: 'http://localhost:4500/',
            description: 'Local Server',
        },
        {
            url: 'https://api.mysite.com',
            description: 'Production Server',
        },
    ],
    tags: [
        {
            name: 'Roles',
        },
        {
            name: 'Users',
        },
    ],
    paths: {
        movies: {
            get: getAllMovies,
        },
        'movies/ { id }': {
            get: getAMovie,
        },
        characters: {
            get: getCharacters,
        },
        Comment: {
            post: createComment,
            get: getAllComment
        },
        'comment/{id}': {
            get: getComment
        }
    },
};

module.exports = { apiDocumentation };