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
usersRouter.post(
  '/register',
  RegisterValidator,
  // request handler, nó tự next
  async (req, res, next) => {
    console.log('requests handler 1')
    // next(new Error('Lỗi rồi bạn êi'))
    // dùng asnyc thì nó không tự next mà chúng ta phải tự next, muốn next thì phải try catch
    //  dùng try catch cũng được
    // try {
    //   throw new Error('Lỗi rồi bạn ơiiiiiiiii') // tương tự như next
    // } catch (error) {
    //   next(error)
    // }
    // 2 cách này đều được
    // Promise.reject(new Error('Lỗi rồi nà')).catch((e) => next(e))
    Promise.reject(new Error('Lỗi rồi nà')).catch(next)
  },
  (req, res, next) => {
    console.log('requests handler 2')
    next()
  },
  (req, res, next) => {
    console.log('requests handler 3')
    res.json({ message: 'User registration' })
  },
  // error handler
  (err, req, res, next) => {
    console.log('Lôi là, ', err.message)
    res.status(400).json({ error: err.message })
  }
)

export default usersRouter
