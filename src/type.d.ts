import { Request } from 'express'
import User from './models/schemas/User.schema'
import { TokenPayload } from './models/requests/User.requests'
declare module 'express' {
  interface Request {
    user?: User // them optinal vi khong phai luc nao cung co user
    decoded_authorization?: TokenPayload
    decoded_refresh_token?: TokenPayload
  }
}
