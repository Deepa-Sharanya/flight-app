import express from "express"
import { verifyToken,verifyUser,verifyAdmin } from "../utils/verifyToken.js"

import {
    updateUser,
    deleteUser,
    getUser,
    getUsers
} from "../controllers/user.js"
const router = express.Router();
/*
router.get("/checkaunthentication",verifyToken,(req,res,next)=>{
    res.send("hello user, you are logged in")
})

router.get("/checkuser/:id",verifyUser,(req,res,next)=>{
    res.send("hello user, you are logged in and you are allowed to delete ")
})

router.get("/checkadmin/:id",verifyAdmin,(req,res,next)=>{
    res.send("hello admin, you are logged in and you are allowed to delete ")
})*/
//update
router.put("/:id",verifyUser, updateUser)

//Delete
router.delete("/:id", verifyUser,deleteUser)
 
 //GET
 router.get("/:id", verifyUser,getUser)

 //GETALL
 router.get("/", verifyAdmin,getUsers)

export default router 
