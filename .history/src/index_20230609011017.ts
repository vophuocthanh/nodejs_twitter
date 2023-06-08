import express from 'express'
const app = express()
const router = express.Router()
const port = 3000

app.get('/', (req, res) => {
  res.send('hello world')
})

router.use(
  (req, res, next) => {
    console.log('Time: ', Date.now())
    next()
    res.status(400).send('Not allowed')
    console.log(12812784)
  },
  (req, res, next) => {
    console.log('Time 2:', Date.now())
    next()
  }
)

router.get('/tweets', (req, res) => {
  res.json({
    data: [
      {
        id: 1,
        text: 'Hello tweets'
      }
    ]
  })
})

app.use('/api', router)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
