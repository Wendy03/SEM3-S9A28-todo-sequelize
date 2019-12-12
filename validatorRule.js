const { check, validationResult } = require('express-validator')

const registerFormCheck = [
  check('email')
    .trim()
    .exists().withMessage("Email必填欄位")
    .isEmail().withMessage("請輸入正確的 Email 格式"),
  check('password')
    .exists().withMessage("Password必填欄位")
    .isLength({ min: 7, max: 14 }).withMessage("密碼長度 7~14"),
  check('password2')
    .custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error('密碼兩次比對不符')
      }
      return true
    })
]

module.exports = { registerFormCheck }