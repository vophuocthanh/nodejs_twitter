import express from 'express'
import { body, validationResult, ValidationChain } from 'express-validator'
import { RunnableValidationChains } from 'express-validator/src/middlewares/schema'
import HTTP_STATUS from '~/constants/httpStatus'
import { EntityError, ErrorWithStatus } from '~/models/Errors'
// can be reused by many routes

// sequential processing, stops running validations chain if the previous one fails.
export const validate = (validation: RunnableValidationChains<ValidationChain>) => {
  return async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    await validation.run(req)
    const errors = validationResult(req)
    // Nếu mà không có lỗi thì next tiếp tục request
    if (errors.isEmpty()) {
      return next()
    }
    const errorObject = errors.mapped()
    const entityError = new EntityError({
      errors: {}
    })
    for (const key in errorObject) {
      // for in dung de lap 1 object
      const { msg } = errorObject[key]
      // Trả về không phải do validate
      if (msg instanceof ErrorWithStatus && msg.status !== HTTP_STATUS.UNPROCESSABLE_ENTITY) {
        return next(msg)
      }
      entityError.errors[key] = errorObject[key]
    }
    // res.status(400).json({ errors: errors.array() }) dùng array nên nó ra mảng 2 lần
    // res.status(422).json({ errors: errors.mapped() }) // dùng mapped thì no thành 1 obj và gọp lại với nhau
    next(entityError) // => error.middleware
  }
}
