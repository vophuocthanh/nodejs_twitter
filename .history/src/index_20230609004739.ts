import express from 'express'
const app = express()
const router = express.Router()
const port = 3000

app.get('/', (req, res) => {
  res.send('hello world')
})

router.get('/tweets', (req, res) => {
  res.send('Welcome, tweets')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
