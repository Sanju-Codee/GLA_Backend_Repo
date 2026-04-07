import express from "express"
import mongoose from "mongoose"
// import User from "./Models/user.js"

//Calling routes
import create_book from "./controllers/createbook.js"
import member from "./controllers/member.js"
import borrow_record from "./controllers/BorrowRecord.js"

const app=express()
const PORT=8008

//connection
mongoose.connect('mongodb://127.0.0.1:27017/Library').then(()=> console.log("MongoDB connected")).catch(err=> console.log("Error",err))

app.use(express.urlencoded({extended:false}))

//Routes
// app.get("/",(req,res)=>{
//     res.status(200).send("Event Booking API is running")
// })
// app.get("/users",async (req,res)=>{
//     const allusers=await User.find({})
//     res.status(302).json(allusers)
// })
app.post("/api/createbooks",create_book)
app.post("/api/member",member)
app.post("/api/borrow",borrow_record)

// app.get("/login/:id",async (req,res)=>{
//     const user=await User.findById(req.params.id)
//     if(!user){
//         res.status(404).send("User not found")
//     }
//     res.status(302).json(user)
// })
// app.patch("/update/:id",async (req,res)=>{
//     const {name,last_name,hashedPassword}=req.body
//     await User.findByIdAndUpdate(req.params.id,{name:name,last_name:last_name,hashedPassword:hashedPassword})
//     res.status(202).send("Update successfully")
// })
// app.delete("/delete/:id",async (req,res)=>{
//     await User.findByIdAndDelete(req.params.id)
//     res.status(202).send("Delete successfully")
// })

app.listen(PORT,()=>{
    console.log("Server started")
})