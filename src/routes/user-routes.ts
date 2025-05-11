import { Router } from 'express'
import UserController from '../controllers/user-controller'

const userRoutes = Router()

userRoutes.post('/new', UserController.createUser)

userRoutes.get('/users', UserController.getUserList)
userRoutes.get('/users/:id', UserController.getUserById)

userRoutes.put('/users/:id', UserController.updateUser)

userRoutes.delete('/users/:id', UserController.removeUser)

export default userRoutes