import mongoose from "mongoose"

const member=mongoose.Schema({
    memberId:{
        type:Number,
        unique:true,
    },
    name:{
        type:String,
    },
    membershipType:{
        type:String,
    },
})

const Member_ship=mongoose.model("member",member)

export default Member_ship