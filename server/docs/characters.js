const getCharacters = {
    tags: ['Characters'],
    description: 'Get all characters, or sorted by gender, name, or height or filtered by gender',
    operationId: 'getCharacters',
    // security: [
    //     {
    //         bearerAuth: [],
    //     },
    // ],
    parameters: [
        {
            name: 'page',
            in: 'query',
            description: 'page number',
            required: false,
            type: 'number',
        },
        {
            name: 'sort_by',
            in: 'query',
            description: 'parameter to sort by',
            required: false,
            type: 'string',
        },
        {
            name: 'order_by',
            in: 'query',
            description: 'how to order the data; ascending or descending',
            required: false,
            type: 'string',
        }
    ],
    responses: {
        '200': {
            description: 'Success',
            content: {
                'application/json': {
                    schema: {
                        type: 'object',
                        properties: {
                            status: {
                                type: 'string',
                                example: 'SUCCESS',
                            },
                            data: {
                                type: 'array',
                                example:
                                    [
                                        {
                                            name: "Leia Organa",
                                            height: "150",
                                            mass: "49",
                                            hair_color: "brown",
                                            skin_color: "light",
                                            eye_color: "brown",
                                            birth_year: "19BBY",
                                            gender: "female",
                                            homeworld: "https://swapi.dev/api/planets/2/",
                                            films: [
                                                "https://swapi.dev/api/films/1/",
                                                "https://swapi.dev/api/films/2/",
                                                "https://swapi.dev/api/films/3/",
                                                "https://swapi.dev/api/films/6/"
                                            ],
                                            species: [],
                                            vehicles: [
                                                "https://swapi.dev/api/vehicles/30/"
                                            ],
                                            starships: [],
                                            created: "2014-12-10T15:20:09.791000Z",
                                            edited: "2014-12-20T21:17:50.315000Z",
                                            url: "https://swapi.dev/api/people/5/"
                                        },
                                        {
                                            name: "Beru Whitesun lars",
                                            height: "165",
                                            mass: "75",
                                            hair_color: "brown",
                                            skin_color: "light",
                                            eye_color: "blue",
                                            birth_year: "47BBY",
                                            gender: "female",
                                            homeworld: "https://swapi.dev/api/planets/1/",
                                            films: [
                                                "https://swapi.dev/api/films/1/",
                                                "https://swapi.dev/api/films/5/",
                                                "https://swapi.dev/api/films/6/"
                                            ],
                                            species: [],
                                            vehicles: [],
                                            starships: [],
                                            created: "2014-12-10T15:53:41.121000Z",
                                            edited: "2014-12-20T21:17:50.319000Z",
                                            url: "https://swapi.dev/api/people/7/"
                                        }
                                    ],
                                meta: {
                                    totalHeightCm: "0150165",
                                    totalHeightFtIn: "4926feet 8.08 inches",
                                    count: 2
                                }
                            }
                        },
                    },
                },
            },
        },
        '400': {
            description: 'Invalid query string',
            content: {
                'application/json': {
                    schema: {
                        type: 'object',
                        properties: {
                            message: {
                                type: 'string',
                                example: 'INVALID_URL',
                            },
                        },
                    },
                },
            },
        },
        '500': {
            description: 'Internal Server Error',
            content: {
                'application/json': {
                    schema: {
                        type: 'object',
                        properties: {
                            message: {
                                type: 'string',
                                example: 'INTERNAL_SERVER_ERROR',
                            },
                        },
                    },
                },
            },
        },
    },
};

module.exports = { getCharacters };