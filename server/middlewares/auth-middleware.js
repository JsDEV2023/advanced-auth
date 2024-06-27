const ApiError = require('../exception/api-error')
const tokenService = require('../service/token-service')

module.exports = function (req,res,next) {
    try {
        const authorizantionHeader = req.headers.authorization
        if (!authorizantionHeader) {
            return next(ApiError.UnauthorizedError())
        }

        const accessToken = authorizantionHeader.split(' ')[1]
        if (!accessToken) {
            return next(ApiError.UnauthorizedError())
        }

        const userData = tokenService.validateAccessToken(accessToken)
        if (!userData) {
            return next(ApiError.UnauthorizedError())
        }

        req.user = userData
        next()
    } catch (err) {
        return next(ApiError.UnauthorizedError())
    }
}