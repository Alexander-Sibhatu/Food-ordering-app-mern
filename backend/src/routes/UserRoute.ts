import express, { RequestHandler } from 'express'
import MyUserController from '../controllers/MyUserController'
import { jwtCheck, jwtParse } from '../middleware/auth';
import { validateMyUserRequest } from './../middleware/validation';

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
router.put('/', jwtCheck, jwtParse, validateMyUserRequest, MyUserController.updateCurrentUser);
export default router;