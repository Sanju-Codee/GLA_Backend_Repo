import Member from "../Models/member_s.js"
async function member(req,res){
    try{
        const {name,membershipType }=req.body
        if(!name ||!membershipType){
            return res.status(403).send("All fields are required")
        }
        
        const newmember={
            memberId:1,
            name,
            membershipType
        }
        await Member.create(newmember)
        res.status(201).send("Member created successfully")
        console.log(newmember)
    }catch(error){
        console.log(error)
        res.status(500).send("Error",error)
    }
}
export default member

