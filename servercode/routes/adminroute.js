import express from 'express';
import { isAdmin, requireSignin } from '../middlewares/adminmiddlewares.js';
import { allUserFeed, deleteUserFeed, submitController } from '../controllers/feedcontroller.js';
import { addadminController, allUserInfoController, deleteUserData, forgotPasswordController, loginController, registerController, testController, updateProfileController } from '../controllers/admincontroller.js';

// router object
const adminroute = express.Router()

// REGISTER ADMIN|| METHOD POST for admins
adminroute.post('/register', registerController);

// LOGIN || POST for all users and admins
adminroute.post('/login', loginController)

// forgot password || POST
adminroute.post('/forgot-password', forgotPasswordController)


// Test Route
adminroute.get('/test', requireSignin, isAdmin, testController);

// protected User route
adminroute.get('/user-auth', requireSignin, (req, res) => {
    res.status(200).send({ ok: true })
})

// protected Admin route
adminroute.get('/admin-auth', requireSignin, isAdmin, (req, res) => {
    res.status(200).send({ ok: true })
})

// update profile
adminroute.put('/profile', requireSignin, updateProfileController)

// REGISTER || METHOD POST for adding admins
adminroute.post('/add-admin', requireSignin, isAdmin, addadminController);

// Get user details in admin dashboard
adminroute.get('/getallusers', requireSignin, isAdmin, allUserInfoController)

// delete userdata in admin dashboard
adminroute.delete('/deleteuser/:id', requireSignin, isAdmin, deleteUserData);


// FEEDBACK Related 
// FEEDBACK || METHOD POST
adminroute.post('/submitfeedback', requireSignin, submitController);

// get feedback form details in admin dashboard
adminroute.get('/getallfeeds', requireSignin, isAdmin, allUserFeed)

// delete feedback in admin dashboard
adminroute.delete('/deletefeed/:id', requireSignin, isAdmin, deleteUserFeed);

export default adminroute