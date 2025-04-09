import mongoose from "mongoose";

// connection to database function
const connectdb = async () => {
    try {
        const conn = await mongoose.connect(process.env.mongo_URL)
        console.log(`Connected to mongodb database ${conn.connection.host}`)
    } catch (error) {
        console.log(`Connection failed ${error}`)
    }
}

export default connectdb