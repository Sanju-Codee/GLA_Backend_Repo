import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import userSchema from "./Schema/user.schema.js"
import TodoSchema from "./Schema/todo.schema.js"
dotenv.config()

const app = express()
app.use(express.json())
app.post("/create-user", async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json({
      message: "User created successfully",
      data: user
    });
  } catch (err) {
    res.status(500).json({
      message: err.message
    });
  }
});
mongoose.connect(process.env.MONGODB_URL)
.then(() => console.log("successfully connected to mongoDB"))
.catch(()=>console.log("some error occured in connecting to mongoDB"))

const User = userSchema()
const Todo = TodoSchema()
app.listen(process.env.PORT || 8000,()=>{
    console.log("server connected at localhost:8080")
})