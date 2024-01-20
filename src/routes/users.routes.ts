// All router trong file này là của users
import { Router } from 'express'
import { RegisterController, loginController } from '~/controllers/users.controllers'
import { RegisterValidator, accessTokenValidator, loginValidator } from '~/middlewares/users.middlewares' // ~ là thư mục src
import { wrapRequestHandler } from '~/utils/handlers'
const usersRouter = Router()

/**
 * Description: Login a user
 * Path: /users/register
 * Method: POST
 * Body: { name: string, email: string, password: string }
 */
usersRouter.post('/login', loginValidator, wrapRequestHandler(loginController))
/**
 * Description: Register a new user
 * Path: /users/register
 * Method: POST
 * Body: {name: string, email: string, password: string, date_of_birth: ISO8601 (tiêu chuẩn quốc tế), confirm_password: string}
 */
usersRouter.post(
  '/register',
  RegisterValidator,
  wrapRequestHandler(RegisterController)
  // error handler
)
/**
 * Description. Logout a user
 * Path: /logout
 * Method: POST
 * Header: { Authorization: Bearer <access_token> }
 * Body: { refresh_token: string }
 */
usersRouter.post(
  '/logout',
  accessTokenValidator,
  wrapRequestHandler((req, res) => {
    res.json({ message: 'Logout success' })
  })
)

export default usersRouter
