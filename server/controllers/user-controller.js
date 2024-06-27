const userService = require('../service/user-service')

class UserController {
    async registration(req,res, next) {
       try {
            const {email, password} = req.body
            const userData = await userService.registration(email, password)
            res.cookie('refreshToken', userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true})
            return res.json(userData)
       } catch (err) {
            next(err)
       } 
    }

    async login(req, res, next) {
        try {

        } catch (err) {
            next(err)
        } 
    }

    async logout(req, res, next) {
        try {

        } catch (err) {
            next(err)
        } 
    }

    async activate(req, res, next) {
        try {
            const activationLink = req.params.link
            await userService.activate(activationLink)
            return res.derirect(process.env.CLIENT_URL)
        } catch (err) {
            next(err)
        } 
    }

    async refresh(req, res, next) {
        try {

        } catch (err) {
            next(err)
        } 
    }

    async getUsers(req, res, next) {
        try {
            res.json()
        } catch (err) {
            next(err)
        } 
    }
}

module.exports = new UserController()