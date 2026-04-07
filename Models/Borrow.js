import mongoose from "mongoose"

const borrow=mongoose.Schema({
    member:{
        type:String,
    },
    books:{
        type:String,
    },
})

const Borrow_books=mongoose.model("borrowbooks",borrow)

export default Borrow_books