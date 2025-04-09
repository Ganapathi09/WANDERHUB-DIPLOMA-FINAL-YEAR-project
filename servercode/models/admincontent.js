import express from 'express'
import mongoose from 'mongoose'
const adminSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
        trim: true
    },
    lastname: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    phno: {
        type: Number,
        required: true
    },
    answer: {
        type: String,
        required: true
    },
    role: {
        type: Number,
        default: 0
    }
},
    {
        timestamps: true
    }
)

// database name pages collection name userform 
const adminModel = mongoose.model('adminform', adminSchema)

export default adminModel