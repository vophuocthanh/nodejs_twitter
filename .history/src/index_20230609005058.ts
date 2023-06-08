import express from 'express'
const app = express()
const router = express.Router()
const port = 3000

app.get('/', (req, res) => {
  res.send('hello world')
})

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
