import Flight from "../models/Flight.js"
import {createError} from "../utils/error.js"

export const createFlight = async(req,res,next) => {
    const newFlight = new Flight(req.body)
   try {
    const savedFlight = await newFlight.save()
    res.status(200).json(savedFlight)
   }catch(err) {
    next(err)
   }
}

export const updateFlight = async(req,res,next) => {
    try {
        const updatedFlight = await Flight.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
        res.header('Access-Control-Allow-Origin', '*');
        res.status(200).json(updatedFlight)
       }catch(err) {
        next(err)
       }
}

export const deleteFlight = async(req,res,next) => {
    try {
        await Flight.findByIdAndDelete(req.params.id)
        res.header('Access-Control-Allow-Origin', '*');
        res.status(200).json("Flight has been deleted")
       }catch(err) {
        next(err)
       }
}

export const getFlight = async(req,res,next) => {
    try {
        const flight = await Flight.findById(req.params.id)
        res.header('Access-Control-Allow-Origin', '*');
        res.status(200).json(flight)
       }catch(err) {
        next(err)
       }
}

export const getFlights = async(req,res,next) => {
    try {
        const flights = await Flight.find()
        res.header('Access-Control-Allow-Origin', '*');
        res.status(200).json(flights)
       }catch(err) {
        next(err)
       }
}

