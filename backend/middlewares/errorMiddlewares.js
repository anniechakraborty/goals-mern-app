// overriding the default error handler of Express
/**
 * 
 * @param {*} err : the error thrown by express error handler from the controller
 * @param {*} req :
 * @param {*} res : the response we are sending from the controller
 * @param {*} next : callback function to call any further middleware 
 */
const customErrorHandler = (err, req, res, next) => {
    // if we have set a status code in the controller for this error then we use that otherwise we set a status code of 500 which is a server error
    const statusCode = res.statusCode ? res.statusCode : 500;
    res.status(statusCode);

    res.json({
        message : err.message,
        stack : process.env.NODE_ENV === 'production' ? null : err.stack
    })

    // we are sending the stack trace only if the app is not in production mode
}

module.exports = {
    customErrorHandler
}