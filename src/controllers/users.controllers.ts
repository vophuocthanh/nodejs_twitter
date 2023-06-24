// Controller dùng đẻ xử lý các logic
import { Request, Response } from 'express'
import { ParamsDictionary } from 'express-serve-static-core'
import { RegisterReqBody } from '~/models/requests/User.requests'
import User from '~/models/schemas/User.schema'
import databaseService from '~/services/database.services'
import userService from '~/services/users.services'
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
export const RegisterController = async (req: Request<ParamsDictionary, any, RegisterReqBody>, res: Response) => {
  // console.log(req.body)
  try {
    const result = await userService.register(req.body)
    return res.json({
      message: 'Register success',
      result
    })
  } catch (error) {
    console.log(error)
    return res.status(400).json({
      message: 'Register failed',
      error
    })
  }
}
