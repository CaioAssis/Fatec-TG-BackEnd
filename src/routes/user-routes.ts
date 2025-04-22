import { Router } from 'express'
import UserController from '../controllers/user-controller'

const userRoutes = Router()

userRoutes.get('/userlist', UserController.getUserList)

export default userRoutes