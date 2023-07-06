import { Request, Response, NextFunction, RequestHandler } from 'express'

export const wrapRequestHandler = (func: RequestHandler) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    // cách 1
    // Promise.resolve(func(req, res, next)).catch(next) // failed
    // cách 2
    try {
      await func(req, res, next)
    } catch (error) {
      next(error)
    }
  }
}
