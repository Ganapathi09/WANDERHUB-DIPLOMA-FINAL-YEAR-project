import mongoose from "mongoose"
import bookingModel from "../models/bookingcontent.js"
import roomModel from "../models/roomcontent.js"
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);






// AddRoom post operation
export const addRoomController = async (req, res) => {
  try {
    const newRoom = await new roomModel(req.body).save()
    return res.status(201).send({
      success: true,
      message: 'Room added successfully',
      newRoom,
    })

  } catch (error) {
    console.log(error)
    return res.status(500).send({
      success: false,
      message: 'Error in adding the room details',
      error
    })
  }
}

// delteing room based on id
export const deleteRoomByIdController = async (req, res) => {
  try {
    // check in backend whether id exists
    if (!mongoose.isValidObjectId(req.params.id)) {
      return res.status(404).json({ message: "Invalid Id" })
    }

    const roomdata = await roomModel.findByIdAndDelete(req.params.id)
    if (!roomdata) {
      return res.status(404).json({ message: "Room not Found" })
    }
    return res.status(200).send({
      success: true,
      message: 'RoomInfo Deleted successfully',
      roomdata,
    })
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: 'Failed to delete the userinfo',
      error,
    })
  }
}
// To list to all rooms in database
export const getRoomsController = async (req, res) => {
  try {
    const rooms = await roomModel.find({})
    return res.send(rooms)
  } catch (error) {
    return res.status(400).send({
      success: false,
      message: "Error to fetch room details",
      error,
    });
  }
}

// getRoomBYID
export const getRoomByIdController = async (req, res) => {
  try {
    const room = await roomModel.findOne({ _id: req.body.roomid })
    res.send(room)
  } catch (error) {
    return res.status(400).send({
      success: false,
      message: 'Error in getting the room data',
      error
    })
  }
}

export const createCheckoutSessionController = async (req, res) => {
  try {
    const { amount, currency } = req.body;
    
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount * 100, // Stripe expects amount in cents
      currency: currency || 'inr',
      payment_method_types: ['card'],
    });

    
    res.status(200).send({
      success: true,
      clientSecret: paymentIntent.client_secret,
    });

  } catch (error) {
    console.error('Razorpay error:', error);
    res.status(500).send({
      success: false,
      message: 'Payment processing failed',
      error: error.message
    });
  }
}



// to book room for customer/users
export const bookingRoomController = async (req, res) => {
  try {
    const { room, userid, usermail, fromDate, toDate, totalAmount, totalDays } = req.body
    const newBooking = new bookingModel({
      room: room.name,
      roomid: room._id,
      userid,
      usermail,
      fromDate,
      toDate,
      totalAmount,
      totalDays,
      transctionId: '1234'
    })
    const booking = await newBooking.save()

    // should i need to use moment try it and see in database whether name remains same

    const roomtemp = await roomModel.findOne({ _id: room._id })
    roomtemp.currentbookings.push({
      bookingid: booking._id,
      fromDate: booking.fromDate,
      toDate: booking.toDate,
      userid: booking.userid,
      usermail: booking.usermail,
      status: booking.status
    })

    await roomtemp.save()

    res.status(200).send({
      success: true,
      message: 'Room Booked Successfully',
      booking,
    })
  } catch (error) {
    return res.status(400).send({
      success: false,
      message: 'Something went wrong',
      error,
    })
  }
}

// to display room booking
export const getbookingsbyidController = async (req, res) => {
  try {
    const { userid } = req.body
    const mybookings = await bookingModel.find({ userid: userid })
    res.status(200).send(mybookings);
  } catch (error) {
    res.status(400).json({ error });
  }
}

// to cancel room booking
export const cancelmybookingController = async (req, res) => {
  const { bookingid, roomid } = req.body
  try {
    const cancelBook = await bookingModel.findOne({ _id: bookingid })
    cancelBook.status = 'cancelled'
    await cancelBook.save()
    const room = await roomModel.findOne({ _id: roomid })
    const bookings = room.currentbookings
    const temp = bookings.filter(booking => booking.bookingid.toString() !== bookingid)
    room.currentbookings = temp
    await room.save()

    res.status(200).send('Your Booking cancelled successfully');
  } catch (error) {
    return res.status(400).json({ error });
  }
}

// to get all bookings in admin panel
export const getAllUsersBookings = async (req, res) => {
  try {
    const bookingRooms = await bookingModel.find()
    res.status(200).send(bookingRooms);
  } catch (error) {
    return res.status(400).json({ error });
  }
}

// delteing Bookings based on id
export const deletebookingByIdController = async (req, res) => {
  try {
    // check in backend whether id exists
    if (!mongoose.isValidObjectId(req.params.id)) {
      return res.status(404).json({ message: "Invalid Id" })
    }

    const bookdata = await bookingModel.findByIdAndDelete(req.params.id)
    if (!bookdata) {
      return res.status(404).json({ message: "Booking not Found" })
    }
    res.status(200).send({
      success: true,
      message: 'BookingInfo Deleted successfully',
      bookdata,
    })
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: 'Failed to delete the bookinginfo',
      error,
    })
  }
}
