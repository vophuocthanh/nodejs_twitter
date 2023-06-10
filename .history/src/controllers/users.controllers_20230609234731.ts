// Controller dùng đẻ xử lý các logic
import { Request, Response } from 'express'
export const loginController = (req: Request, res: Response) => {
  // console.log(req.body)
  const { email, password } = req.body
  if (email === 'phuocthanh2k03@gmail.com' || password === '123123') {
    return res.json({
      message: 'Login successful'
    })
  }
  return res.status(400).json({
    error: 'Login failed'
  })
}
