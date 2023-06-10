// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const loginValidator = (req: any, res: any, next: any) => {
  const { email, password } = req.body
  if (!email || !password) {
    return res.status(400).json({
      error: 'Mising email or password is required'
    })
  }
  next()
}
