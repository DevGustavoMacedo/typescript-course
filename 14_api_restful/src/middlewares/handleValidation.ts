import { Request, Response, NextFunction } from 'express'
import { validationResult } from 'express-validator'

export const validate = (req: Request, res: Response, next: NextFunction) => {
  const hasErrors = validationResult(req)

  if (hasErrors.isEmpty()) return next()

  const errors: object[] = []

  hasErrors.array().map((error) =>
    errors.push({
      [error.param]: error.msg,
    })
  )

  return res.status(422).json({ hasErrors: errors })
}
