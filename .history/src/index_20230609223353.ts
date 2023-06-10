import express from 'express'
import userRouter from './routes/users.routes'
const app = express()

const port = 3000

app.get('/', (req, res) => {
  res.send('hello world')
})

app.use('/users', userRouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
