import express from "express"
import { verifyToken,verifyUser,verifyAdmin } from "../utils/verifyToken.js"

import {
    createFlight,
    updateFlight,
    deleteFlight,
    getFlight,
    getFlights,
    bookTickets
} from "../controllers/flight.js"

import Flight from "../models/Flight.js"


const router = express.Router();

//create
router.post("/",verifyAdmin,createFlight)

//update
router.put("/:id",verifyAdmin, updateFlight)

//Delete
router.delete("/:id",verifyAdmin, deleteFlight)
 
 //GET
 router.get("/:id", verifyUser,getFlight)

 //GETALL
 router.get("/", verifyUser,getFlights)
 

export default router 
