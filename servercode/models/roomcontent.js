import express from 'express'
import mongoose from 'mongoose'
const roomSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    imageurls: [],
    maxcount: {
        type: Number,
        required: true
    },
    rentperday: {
        type: Number,
        required: true
    },
    currentbookings: [],
    type: {
        type: String,
        required: true
    },
    description: {
        type: {},
        required: true
    }
},
    {
        timestamps: true
    }
)

const roomModel = mongoose.model('rooms', roomSchema)

export default roomModel