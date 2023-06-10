// Controller dùng đẻ xử lý các logic
import { Request, Response } from 'express'
export const loginController = (req: Request, res: Response) => {
  res.json({
    message: 'Login successful'
  })
}
