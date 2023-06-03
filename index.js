import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import bodyParser from "body-parser"
import authRoute from "./routes/auth.js"
import usersRoute from "./routes/users.js"
import flightsRoute from "./routes/flights.js"
import cookieParser from "cookie-parser"

const app = express()
dotenv.config()

const connect = async() => {
try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to mongoDB.")
  } catch (error) {
    throw error
  }
}

mongoose.connection.on("disconnected", ()=> {
    console.log("mongoDB disconnected")
})
//middlewares

app.use(cookieParser())

app.use(express.json({ strict: false }))
app.use(express.urlencoded())
app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(bodyParser.json())

app.use("/api/auth", authRoute)
app.use("/api/users", usersRoute)
app.use("/api/flights", flightsRoute)

app.use((err,req,res,next) => {
      const errStatus = err.status || 500;
      const errMessage = err.message || "Something went wrong"
      return res.status(errStatus).json({
        success:false,
        status: errStatus,
        message: errMessage,
        stack: err.stack,
      })
})
app.listen(8800, ()=> {
    connect()
    console.log("Connected to backend3!")
})