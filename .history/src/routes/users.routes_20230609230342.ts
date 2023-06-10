import { Router } from 'express'
import { loginValidator } from '~/middlewares/users.middlewares'
const usersRouter = Router()

usersRouter.post('/login', loginValidator, (req, res) => {
  res.json({
    data: [
      {
        id: 1,
        text: 'Hello tweets'
      }
    ]
  })
})

export default usersRouter
