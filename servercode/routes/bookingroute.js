import express from 'express'
import { addRoomController, bookingRoomController, cancelmybookingController, createCheckoutSessionController, deleteRoomByIdController, deletebookingByIdController, getAllUsersBookings, getRoomByIdController, getRoomsController, getbookingsbyidController } from '../controllers/bookingcontroller.js';
import { isAdmin, requireSignin } from '../middlewares/adminmiddlewares.js';

const bookingroute = express.Router()

// to getall rooms || GET
bookingroute.get('/getallrooms', requireSignin, getRoomsController);

// edit element byid using || POST
bookingroute.post('/getRoomById', requireSignin, getRoomByIdController)

// to perform booking operstion without payment because stripe is not working
bookingroute.post('/bookroom', requireSignin, bookingRoomController);

// payment for booking
bookingroute.post('/createcheckoutsession', requireSignin, createCheckoutSessionController);

// // to cancel room booking || POST why noy delete
bookingroute.post('/cancelbooking', requireSignin, cancelmybookingController)

// AddRoom || POST
bookingroute.post('/addroom', requireSignin, isAdmin, addRoomController)

// to deleteroom  
bookingroute.delete('/deleteroom/:id', requireSignin, isAdmin, deleteRoomByIdController);

// to get booking to that user
bookingroute.post('/getbookingsbyid', requireSignin, getbookingsbyidController)


// to get all bookings in admin panel;
bookingroute.get('/getuserbookings', requireSignin, isAdmin, getAllUsersBookings)

// to delete all bookings in admin panel;
bookingroute.delete('/deleteuserbookings/:id', requireSignin, isAdmin, deletebookingByIdController)

export default bookingroute