import mongoose from "mongoose"

const books=mongoose.Schema({
    bookId:{
        type:Number,
    },
    tittle:{
        type:String,
    },
    author:{
        type:String,
    },
    price:{
        type:Number,
    },
})

const User=mongoose.model("book",books)

export default User