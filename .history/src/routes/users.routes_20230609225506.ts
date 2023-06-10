import { Router } from 'express'
const usersRouter = Router()

usersRouter.get('/tweets', (req, res) => {
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
