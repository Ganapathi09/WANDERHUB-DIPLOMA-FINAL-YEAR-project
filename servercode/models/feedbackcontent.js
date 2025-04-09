import express from 'express'
import mongoose from 'mongoose'
const feedSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    messages: {
        type: {},
        required: true
    }
}
)

// database name pages collection name feedform 
const feedModel = mongoose.model('feedform', feedSchema)

export default feedModel