import JWT from 'jsonwebtoken'
import adminModel from "../models/admincontent.js"

// Protected rputes with token based
export const requireSignin = async (req, res, next) => {
    try {
        const decode = JWT.verify(req.headers.authorization, process.env.JWT_SECRET)
        req.user = decode
        next()
    } catch (error) {
        console.log(error)
    }
}

// admin access
export const isAdmin = async (req, res, next) => {
    try {
        const user = await adminModel.findById(req.user._id)
        if (user.role !== 1) {
            return res.status(401).send({
                success: false,
                message: 'UnAuthorized Access'
            });
        }
        else {
            next()
        }
    } catch (error) {
        console.log(error)
        res.status(401).send({
            success: false,
            error,
            message: 'Error in admin middleware'
        })
    }
}