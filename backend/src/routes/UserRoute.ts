import express, { RequestHandler } from 'express'
import MyUserController from '../controllers/MyUserController'
import { jwtCheck } from '../middleware/auth';

const router = express.Router()

const jwtCheckMiddleware: RequestHandler = (req, res, next) => {
    jwtCheck(req, res, (err) => {
        if (err) {
            return res.status(401).json({message: 'Unauthorized access'});
        }
        next();
    })
}

router.post('/', jwtCheckMiddleware, MyUserController.createCurrentUser)

export default router;