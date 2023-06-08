import express from 'express'
import router from './user.routes'
const app = express()

const port = 3000

app.get('/', (req, res) => {
  res.send('hello world')
})

app.use('/api', router)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
