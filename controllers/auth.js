const crypto = require('crypto')
const User = require('../models/User')
const ErrorResponse = require('../utils/errorResponse')
const sendEmail = require('../utils/sendEmail')

exports.register =  async (req, res, next) => {
  const { 
      username, 
      email, 
      password, 
      address, 
      apartment,
      zipCode,
      tel
    } = req.body;

  try {
    const user = await User.create({
        username, 
        email,
        password,
        address,
        apartment,
        zipCode,
        tel
    })

    sendToken(user, 200, res)
  }
  catch (error) {
    next(error)
  }
}

exports.login =  async (req, res, next) => {
   const {email, password} = req.body

   if (!email || !password) {
       return next(new ErrorResponse('Please provide an email and password', 400))
   }

   try {
    const user = await User.findOne({ email }).select('+password')

    if (!user) {
        return next(new ErrorResponse('Invalid credentials', 401))
    }

    const isMatch = await user.matchPasswords(password)
    if (!isMatch) {
        return next(new ErrorResponse('Invalid credentials', 401))
    }

    sendToken(user, 201, res)
   }
   catch (err) {
    res.status(500).json({success: false, error: err.message})
   }
}

exports.forgotpassword = async(req, res, next) => {
    const { email } = req.body

    try{
        const user = await User.findOne({ email })
        if (!user) {
            return next(new ErrorResponse('Email could not be sent', 404))
        }
        const resetToken = user.getResetPasswordToken()
        await user.save()

        const resetUrl = `http://vaxxinepass.herokuapp.com/passwordreset${resetToken}`
        const message = `
            <h1>You have requested a password reset</h1>
            <p>Please go to this link to reset your password</p>
            <a href=${resetUrl} clicktracking=off>${resetUrl}</a>
        `
        try {
            await sendEmail({
                to: user.email,
                subject: "Password reset request",
                text: message
            })
            res.status(200).json({success: true, data: 'Email sent'})
        }
        catch (err) {
            user.getResetPasswordToken = undefined
            user.resetPasswordExpire = undefined
        }

        await user.save()

        return next(new ErrorResponse('Email could not be sent', 500))
    }
    catch (err) {
        next(err)
    }
}

exports.resetpassword = async (req, res, next) => {
   const resetPasswordToken = crypto.createHash('sha256').update(req.params.resetToken).digest('hex')

   try {
    const user = await User.findOne({
        resetPasswordToken,
        resetPasswordExpire: { $gt: Date.now()}
    })

    if (!user) {
        return next(new ErrorResponse('Invalid reset token', 400))
    }
    user.password = req.body.password
    user.resetPasswordToken = undefined
    user.resetPasswordExpire = undefined

    await user.save()

    res.status(201).json({success: true, data: 'Password reset successful'})

   }
   catch (err) {
    next(err)
   }
}       

const sendToken = (user, statuCode, res) => {
    const token = user.getSignedToken();
    res.status(statuCode).json({success: true, token})
}