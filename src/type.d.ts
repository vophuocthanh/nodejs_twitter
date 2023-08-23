import { Request } from 'express'
import User from './models/schemas/User.schema'
declare module 'express' {
  interface Request {
    user?: User // them optinal vi khong phai luc nao cung co user
  }
}
