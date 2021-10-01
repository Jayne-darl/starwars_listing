const createComment = {
    tags: ['Comment'],
    description: 'Create a comment',
    operationId: 'createComment',
    // security: [
    //     {
    //         bearerAuth: [],
    //     },
    // ],
    requestBody: {
        content: {
            'application/json': {
                schema: {
                    $ref: '#/components/schemas/createUserBody',
                },
            },
        },
        required: true,
    },
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
                                type: 'string',
                                example: {
                                    id: 9,
                                    text: "Hello, nice Movie. Highly recommend",
                                    movie_id: "6",
                                    ip_address: "192.0.2.1",
                                    created_on: "2021-10-01T16:13:07.642Z"
                                }
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

const createCommentBody = {
    type: 'object',
    properties: {
        text: {
            type: 'string',
            example: 'Hello, nice Movie. Highly recommend',
        },
        movie_id: {
            type: 'number',
            example: '1',
        },
        ip_adress: {
            type: 'string',
            example: '192.0.2.1',
        },
    },
};

const getComment = {
    tags: ['Comment'],
    description: 'Get a comment',
    operationId: 'getComment',
    // security: [
    //     {
    //         bearerAuth: [],
    //     },
    // ],
    parameters: [
        {
            name: 'id',
            in: 'path',
            description: 'comment ID',
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
                                type: 'object',
                                example: {

                                    id: 9,
                                    text: "Hello, nice Movie. Highly recommend",
                                    movie_id: "6",
                                    ip_address: "192.0.2.1",
                                    created_on: "2021-10-01T16:13:07.642Z"
                                },
                            },
                        },
                    },
                },
            },
        },

        '404': {
            description: 'Comment is not found',
            content: {
                'application/json': {
                    schema: {
                        type: 'object',
                        properties: {
                            message: {
                                type: 'string',
                                example: 'NOT_FOUND',
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

const getAllComment = {
    tags: ['Comments'],
    description: 'Get all comments',
    operationId: 'getComment',
    // security: [
    //     {
    //         bearerAuth: [],
    //     },
    // ],
    parameters: [
        {
            name: 'id',
            in: 'path',
            description: 'comment ID',
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
                                type: 'array',
                                example: [
                                    {
                                        id: 9,
                                        text: "Hello, nice Movie. Highly recommend",
                                        movie_id: "6",
                                        ip_address: "192.0.2.1",
                                        created_on: "2021-10-01T16:13:07.642Z"
                                    }
                                ],
                            },
                        },
                    },
                },
            },
        },

        '404': {
            description: 'No comment is not found in database',
            content: {
                'application/json': {
                    schema: {
                        type: 'object',
                        properties: {
                            message: {
                                type: 'string',
                                example: 'NOT_FOUND',
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
module.exports = { createComment, createCommentBody, getComment, getAllComment };