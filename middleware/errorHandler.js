const { constants } = require("../constants")
const errorHandler = (err, req, res, next) => {

    // If Status code is not provided then it will automatically sets the status code to the 500
    const statusCode = res.statusCode ? res.statusCode : 500

    switch (statusCode) {
        case constants.VALIDATION_ERROR:
            res.json({
                code: statusCode,
                title: "Validation Failed",
                message: err.message,
                stackTrace: err.stack
            })
            break;

        case constants.CONFLICT:
            res.json({
                code: statusCode,
                title: "Conflict",
                message: err.message,
                stackTrace: err.stack
            })
            break;

        case constants.UNPROCESSABLE_CONTENT:
            res.json({
                code: statusCode,
                title: "Unprocessable Content",
                message: err.message,
                stackTrace: err.stack
            })
            break;

        case constants.NOT_FOUND:
            res.json({
                code: statusCode,
                title: "Not Found",
                message: err.message,
                stackTrace: err.stack
            })
            break;
        case constants.FORBIDDEN:
            res.json({
                code: statusCode,
                title: "Forbidden",
                message: err.message,
                stackTrace: err.stack
            })
            break;

        case constants.UNAUTHORIZED:
            res.json({
                code: statusCode,
                title: "Unauthorized",
                message: err.message,
                stackTrace: err.stack
            })
            break;
            
        case constants.INTERNAL_SERVER_ERROR:
            res.json({
                code: statusCode,
                title: "Server Error",
                message: err.message,
                stackTrace: err.stack
            })
            break;

        default:
            console.log("No Erros, All Good")
            break;
    }

}

module.exports = errorHandler