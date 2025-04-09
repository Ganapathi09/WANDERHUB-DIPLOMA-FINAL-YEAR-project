import express from 'express'
import dotenv from 'dotenv'
import adminroute from './routes/adminroute.js'
import connectdb from './config/db.js'
import morgan from 'morgan'
import bookingroute from './routes/bookingroute.js'

// import feedrouter from './routes/feedbackroute'

//  configure env 
dotenv.config()

// calling the connection code to mongodb 
connectdb()


// rest object
const app = express()

// and configure dev

app.use(express.json())
app.use(morgan('dev'))


app.use('/api/v1/auth', adminroute)
app.use('/api/v1/auth', bookingroute)

const port = process.env.PORT || 5001
app.listen(port, () => {
    console.log(`App listening on port ${port}!`);
});
