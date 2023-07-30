import express from 'express'
import usersRouter from './routes/users.routes'
import databaseService from './services/database.services'
import { defaultErrorHandler } from './middlewares/error.middlewares'
databaseService.connect()
const app = express()
const port = 3000
// middleware
app.use(express.json()) // xử lý những json đầu vào sang dạng object ({})
// Router handler
app.use('/users', usersRouter)
// default error handler
app.use(defaultErrorHandler)
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
