// All router trong file này là của users
import { Router } from 'express'
import { RegisterController, loginController } from '~/controllers/users.controllers'
import { RegisterValidator, loginValidator } from '~/middlewares/users.middlewares' // ~ là thư mục src
const usersRouter = Router()

usersRouter.post('/login', loginValidator, loginController)
/**
 * Description: Register a new user
 * Path: /users/register
 * Method: POST
 * Body: {name: string, email: string, password: string, date_of_birth: ISO8601 (tiêu chuẩn quốc tế), confirm_password: string}
 */
usersRouter.post('/register', RegisterValidator, RegisterController)

export default usersRouter
