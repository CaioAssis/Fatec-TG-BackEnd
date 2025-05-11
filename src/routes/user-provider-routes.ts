import { Router } from 'express'
import UserProviderController from '../controllers/user-provider-controller'

const userProvRoutes = Router()

userProvRoutes.post('/new', UserProviderController.createUser)

userProvRoutes.get('/users', UserProviderController.getUserList)
userProvRoutes.get('/users/:id', UserProviderController.getUserById)

userProvRoutes.put('/users/:id', UserProviderController.updateUser)

userProvRoutes.delete('/users/:id', UserProviderController.removeUser)

export default userProvRoutes