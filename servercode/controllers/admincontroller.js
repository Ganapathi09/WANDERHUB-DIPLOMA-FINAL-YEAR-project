import mongoose from "mongoose"
import { comparePassword, hashPassword } from "../helpers/adminhelper.js"
import adminModel from "../models/admincontent.js"
import JWT from 'jsonwebtoken'

// Register post operation
export const registerController = async (req, res) => {
  try {
    const { firstname, lastname, email, password, phno, answer } = req.body
    if (!firstname) {
      return res.send({ message: 'First Name is required' })
    }
    if (!lastname) {
      return res.send({ message: 'Last Name is required' })
    }
    if (!email) {
      return res.send({ message: 'Email is required' })
    }
    if (!password) {
      return res.send({ message: 'Password is required' })
    }
    if (!phno) {
      return res.send({ message: 'Phone number is required' })
    }
    if (!answer) {
      return res.send({ message: 'Answer is required' })
    }

    // check existing user
    const existinguser = await adminModel.findOne({ email })
    if (existinguser) {
      res.status(200).send({
        success: false,
        message: 'Already Registered Please login'
      })
    }
    // register user
    const hashedPassword = await hashPassword(password)
    // save
    const user = await new adminModel({ firstname, lastname, email, phno, password: hashedPassword, answer }).save()
    res.status(201).send({
      success: true,
      message: 'User Registered successfully',
      user
    })

  } catch (error) {
    console.log(error)
    res.status(500).send({
      success: false,
      message: 'Error in Registering ',
      error
    })
  }
}


// Register post operation for admin
export const addadminController = async (req, res) => {
  try {
    const { firstname, lastname, email, password, phno, answer, role } = req.body
    if (!firstname) {
      return res.send({ message: 'First Name is required' })
    }
    if (!lastname) {
      return res.send({ message: 'Last Name is required' })
    }
    if (!email) {
      return res.send({ message: 'Email is required' })
    }
    if (!password) {
      return res.send({ message: 'Password is required' })
    }
    if (!phno) {
      return res.send({ message: 'Phone number is required' })
    }
    if (!answer) {
      return res.send({ message: 'Answer is required' })
    }
    if (!role) {
      return res.send({ message: 'Role is required' })
    }

    // check existing user
    const existinguser = await adminModel.findOne({ email })
    if (existinguser) {
      res.status(200).send({
        success: false,
        message: 'Already Registered Please login'
      })
    }
    // register user
    const hashedPassword = await hashPassword(password)
    // save
    const user = await new adminModel({ firstname, lastname, email, phno, password: hashedPassword, answer, role }).save()
    res.status(201).send({
      success: true,
      message: 'Admin Registered successfully',
      user
    })

  } catch (error) {
    console.log(error)
    res.status(500).send({
      success: false,
      message: 'Error in Registering ',
      error
    })
  }
}

// Login Post Operation
export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body
    // validation
    if (!email || !password) {
      return res.status(404).send({
        success: false,
        message: 'Invalid Email or Password'
      })
    }

    // check user
    const user = await adminModel.findOne({ email })
    if (!user) {
      return res.status(404).send({
        success: false,
        message: 'Email is not registered'
      })
    }

    const match = await comparePassword(password, user.password)
    if (!match) {
      return res.status(200).send({
        success: false,
        message: 'Invalid Password'
      })
    }

    // token
    const token = await JWT.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d', })
    res.status(200).send({
      success: true,
      message: 'Login Successfully',
      user: {
        _id: user._id,
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email,
        phno: user.phno,
        role: user.role,
      },
      token,
    })

  } catch (error) {
    console.log(error)
    res.status(500).send({
      success: false,
      message: 'Error in Login',
      error
    })
  }
}

// forgotPasswordController
export const forgotPasswordController = async (req, res) => {
  try {
    const { email, answer, newPassword } = req.body
    // validation email answer newPassword
    if (!email) {
      return res.status(400).send({ message: 'Email is required' })
    }
    if (!answer) {
      return res.status(400).send({ message: 'Answer is required' })
    }
    if (!newPassword) {
      return res.send({ message: 'Password is required' })
    }
    // check
    const user = await adminModel.findOne({ email, answer })
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "Wrong Email and answer"
      })
    }

    const hashed = await hashPassword(newPassword)
    await adminModel.findByIdAndUpdate(user._id, { password: hashed })
    res.status(200).send({
      success: true,
      message: "Password Updated successfully"
    })

  } catch (error) {
    console.log(error)
    res.status(500).send({
      success: false,
      message: 'Failed to update the password',
      error
    })
  }
}

// to get all info of data in adminforms.jsx
export const allUserInfoController = async (req, res) => {
  try {
    const registrations = await adminModel.find({}, '-password')
    res.json(registrations)
  } catch (error) {
    res.status(500).send({
      success: true,
      message: "Failed to retrieve the userdetails",
    })
  }
}

// testing purpose
export const testController = (req, res) => {
  try {
    res.send('Protected route')
  } catch (error) {
    console.log(error)
  }
}

// update profile
export const updateProfileController = async (req, res) => {
  try {
    const { firstname, lastname, email, password, phno, } = req.body
    const user = await adminModel.findById(req.user._id)
    // password
    if (password && password.length < 8) {
      return res.json({ error: 'Password id required and at least 8 character long' });
    }

    const hashedPassword = password ? await hashPassword(password) : undefined

    const updatedUser = await adminModel.findByIdAndUpdate(req.user._id, {
      firstname: firstname || user.firstname,
      lastname: lastname || user.lastname,
      email: email || user.email,
      password: hashedPassword || user.password,
      phno: phno || user.phno,
    }, { new: true })
    res.status(200).send({
      success: true,
      message: "Profile updated successfully",
      updatedUser
    })
  } catch (error) {
    res.status(400).send({
      success: false,
      message: 'Error While updating',
      error
    })
  }
}

//  to delete user in admin dashboard
export const deleteUserData = async (req, res) => {
  try {
    // check in backend whether id exists
    if (!mongoose.isValidObjectId(req.params.id)) {
      return res.status(404).json({ message: "Invalid Id" })
    }

    const userdata = await adminModel.findByIdAndDelete(req.params.id)
    if (!userdata) {
      return res.status(404).json({ message: "User not Found" })
    }
    return res.status(200).send({
      success: true,
      message: 'UserInfo Deleted successfully',
      userdata,
    })
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: 'Failed to delete the userinfo',
      error,
    })
  }
}
