export const loginValidate = (req, res, next) => {
  const { email, password } = req.body
  if (!email || !password) {
    return res.status(400).json({
      error: 'Mising email or password is required'
    })
  }
  next()
}
