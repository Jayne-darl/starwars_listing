const getAllMovies = {
    tags: ['Movies'],
    description: 'Get all movies with their associated comments and comments count',
    operationId: 'getAllMovies',
    // security: [
    //     {
    //         bearerAuth: [],
    //     },
    // ],
    responses: {
        '200': {
            description: 'SUCCESS',
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
                                example: [
                                    {
                                        title: {
                                            type: 'string',
                                            example: 'A New Hope',
                                        },
                                        opening_crawl: {
                                            type: 'string',
                                            example: "It is a period of civil war.\r\nRebel spaceships, striking\r\nfrom a hidden base, have won\r\ntheir first victory against\r\nthe evil Galactic Empire.\r\n\r\nDuring the battle, Rebel\r\nspies managed to steal secret\r\nplans to the Empire's\r\nultimate weapon, the DEATH\r\nSTAR, an armored space\r\nstation with enough power\r\nto destroy an entire planet.\r\n\r\nPursued by the Empire's\r\nsinister agents, Princess\r\nLeia races home aboard her\r\nstarship, custodian of the\r\nstolen plans that can save her\r\npeople and restore\r\nfreedom to the galaxy....",
                                        },
                                        release_date: {
                                            type: 'string',
                                            example: '1977-05-25',
                                        },
                                        comments: {
                                            type: 'array',
                                            example: [
                                                {
                                                    "id": 7,
                                                    "text": "Hello, nice movie, I recommend",
                                                    "movie_id": "4",
                                                    "ip_address": "::1",
                                                    "created_on": "2021-10-01T11:54:49.392Z"
                                                }
                                            ],
                                        },
                                        comment_count: {
                                            type: 'number',
                                            example: 1,
                                        },
                                    },
                                ],
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
                                example: 'INTERBAL_SERVER_ERROR',
                            },
                        },
                    },
                },
            },
        },
    },
};

const getAMovie = {
    tags: ['Movie'],
    description: 'Get a movie',
    operationId: 'getAMovie',
    // security: [
    //     {
    //         bearerAuth: [],
    //     },
    // ],
    parameters: [
        {
            name: 'id',
            in: 'path',
            description: 'movie ID',
            required: true,
            type: 'string',
        },
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
                                title: {
                                    type: 'string',
                                    example: 'A New Hope',
                                },
                                opening_crawl: {
                                    type: 'string',
                                    example: "It is a period of civil war.\r\nRebel spaceships, striking\r\nfrom a hidden base, have won\r\ntheir first victory against\r\nthe evil Galactic Empire.\r\n\r\nDuring the battle, Rebel\r\nspies managed to steal secret\r\nplans to the Empire's\r\nultimate weapon, the DEATH\r\nSTAR, an armored space\r\nstation with enough power\r\nto destroy an entire planet.\r\n\r\nPursued by the Empire's\r\nsinister agents, Princess\r\nLeia races home aboard her\r\nstarship, custodian of the\r\nstolen plans that can save her\r\npeople and restore\r\nfreedom to the galaxy....",
                                },
                                release_date: {
                                    type: 'string',
                                    example: '1977-05-25',
                                },
                                comments: {
                                    type: 'array',
                                    example: [
                                        {
                                            "id": 7,
                                            "text": "Hello, nice movie, I recommend",
                                            "movie_id": "4",
                                            "ip_address": "::1",
                                            "created_on": "2021-10-01T11:54:49.392Z"
                                        }
                                    ],
                                },
                                comment_count: {
                                    type: 'number',
                                    example: 1,
                                },
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

module.exports = { getAllMovies, getAMovie };