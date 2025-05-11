import { Router } from 'express'

import userProvRoutes from './user-provider-routes'
import userRoutes from './user-routes'

const routes = Router()

routes.use('/userCli', userRoutes)
routes.use('/userProv', userProvRoutes)

export default routes

