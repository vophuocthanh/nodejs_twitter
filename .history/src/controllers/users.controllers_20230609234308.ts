// Controller dùng đẻ xử lý các logic
import { Request, Response } from 'express'
export const loginController = (req: Request, res: Response) => {
  console.log(req.body)
  res.json({
    message: 'Login successful'
  })
}
