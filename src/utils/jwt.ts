import { config } from 'dotenv'
import jwt, { SignOptions } from 'jsonwebtoken'
config()

// signToken là 1 Promise (bất đồng bộ)
// Dùng bất đồng bộ để tối ưu performance
export const signToken = ({
  payload,
  privateKey = process.env.JWT_SECRET as string,
  options = {
    algorithm: 'HS256'
  }
}: {
  payload: string | Buffer | object
  privateKey?: string
  options?: SignOptions
}) => {
  return new Promise<string>((resolve, reject) => {
    jwt.sign(payload, privateKey, options, (error, token) => {
      if (error) {
        throw reject(error)
      }
      resolve(token as string)
    })
  })
}
// signToken({
//   payload: {},
//   options: {
//     algorithm: 'RS256'
//   }
// })
