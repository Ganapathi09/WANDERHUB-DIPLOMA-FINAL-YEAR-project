import mongoose from "mongoose"
import feedModel from "../models/feedbackcontent.js"


// Feedback post operation
export const submitController = async (req, res) => {
    try {
        const { username, email, messages } = req.body
        if (!username && !email && !messages) {
            return res.send({ message: 'Please enter the credentials' })
        }
        if (!username) {
            return res.send({ message: 'User Name is required' })
        }
        if (!email) {
            return res.send({ message: 'Email is required' })
        }
        if (!messages) {
            return res.send({ message: 'Messages is required' })
        }

        // // check existing email in feedback form
        // const existinguser = await feedModel.findOne({ email })
        // if (existinguser) {
        //     return res.status(400).json({ error: 'FeedBack is already given' })
        // }


        // register feedbacks
        // save
        const user = await new feedModel({ username, email, messages }).save()
        return res.status(201).send({
            success: true,
            message: 'Your feedback is submitted successfully',
            user
        })

    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: 'Error in submitting the feedbackform ',
            error
        })
    }
}

// list all feeds of user in admin dashboard
export const allUserFeed = async (req, res) => {
    try {
        const feedformslist = await feedModel.find({})
        res.json(feedformslist)
    } catch (error) {
        res.status(500).send({
            success: true,
            message: "Failed to retrieve the feedback",
        })
    }
}


// Delete userfeed in admin dashboard
export const deleteUserFeed = async (req, res) => {
    try {
        // check in backend whether id exists
        if (!mongoose.isValidObjectId(req.params.id)) {
            return res.status(404).json({ message: "Invalid Id" })
        }

        const feedback = await feedModel.findByIdAndDelete(req.params.id)
        if (!feedback) {
            return res.status(404).json({ message: "Feedbaack not Found" })
        }
        return res.status(200).send({
            success: true,
            message: 'FeedBack Deleted successfully',
            feedback,
        })
    } catch (error) {
        return res.status(500).send({
            success: false,
            message: 'Failed to delete the feedback',
            error,
        })
    }
}

