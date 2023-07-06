import express, { Request, Response, NextFunction } from 'express'
import usersRouter from './routes/users.routes'
import databaseService from './services/database.services'
const app = express()
const port = 3000
// middleware
app.use(express.json()) // xử lý những json đầu vào sang dạng object ({})
// Router handler
app.use('/users', usersRouter)
databaseService.connect()
// default error handler
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  res.status(400).json({ error: err.message })
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
