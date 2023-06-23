import { Request, Response, NextFunction } from 'express'
import { checkSchema } from 'express-validator'
import { validate } from '~/utils/validation'

export const loginValidator = (req: Request, res: Response, next: NextFunction) => {
  // console.log(req.body)
  const { email, password } = req.body
  if (!email || !password) {
    return res.status(400).json({
      error: 'Mising email or password is required'
    })
  }
  next()
}
export const RegisterValidator = validate(
  checkSchema({
    name: {
      notEmpty: true,
      isString: true,
      isLength: { options: { min: 1, max: 100 } },
      trim: true
    },
    email: {
      notEmpty: true,
      isEmail: true,
      trim: true
    },
    password: {
      notEmpty: true,
      isString: true,
      isLength: { options: { min: 6, max: 50 } },
      isStrongPassword: {
        options: { minLength: 6, minLowercase: 1, minUppercase: 1, minNumbers: 1 },
        errorMessage: 'Password failed'
      }
    },
    confirm_password: {
      notEmpty: true,
      isString: true,
      isLength: { options: { min: 6, max: 50 } },
      isStrongPassword: {
        options: { minLength: 6, minLowercase: 1, minUppercase: 1, minNumbers: 1 },
        errorMessage: 'Password failed'
      },
      custom: {
        options: (value, { req }) => {
          if (value !== req.body.password) {
            // value là confirm_password
            throw new Error('Password confirmation does not match password')
          }
          return true
        }
      }
    },
    date_of_birth: {
      isISO8601: {
        options: { strict: true, strictSeparator: true }
      }
    }
  })
)
