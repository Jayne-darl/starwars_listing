exports.serverError = (response) => {
    response.status(500).json({
        status: response.statusCode,
        error: 'Something went wrong. Try again later',
    });
}

exports.clientError = (response, responseCode, ...values) => {
    const [statusKey, statusResult, dataKey, dataValue] = values;
    return response.status(responseCode).json({
        [statusKey]: statusResult,
        [dataKey]: dataValue,
    });
};

exports.successResponse = (response, responseCode, userData) => {
    response.status(responseCode).json({
        status: 'SUCCESS',
        data: userData,
    });
}

exports.sortResult = (key, order = "asc", items) => {
    return items.sort(function (a, b) {
        if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
            // property doesn't exist on either object
            return 0;
        }

        const varA = (typeof a[key] === 'string')
            ? a[key].toUpperCase() : a[key];
        const varB = (typeof b[key] === 'string')
            ? b[key].toUpperCase() : b[key];

        let comparison = 0;
        if (varA > varB) {
            comparison = 1;
        } else if (varA < varB) {
            comparison = -1;
        }
        return (
            (order === 'desc') ? (comparison * -1) : comparison
        );
    });
}
