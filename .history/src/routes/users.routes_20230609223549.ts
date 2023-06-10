import { Router } from 'express'
const usersRouter = Router()
usersRouter.use(
  (req, res, next) => {
    console.log('Time: ', Date.now())
    next()
  },
  (req, res, next) => {
    console.log('Time 2:', Date.now())
    next()
  }
)
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
