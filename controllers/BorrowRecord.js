import BorrowRecord from "../Models/Borrow.js"
async function borrow_record(req,res){
    try{
        const {member,books}=req.body
        if(!member ||!books){
            return res.status(403).send("All fields are required")
        }
        const borrowRecord={
            member,
            books
        }
        await BorrowRecord.create(borrowRecord)
        res.status(201).send("Borrow Record")
        console.log(borrowRecord)
    }catch(error){
        console.log(error)
        res.status(500).send("Error",error)
    }
}
export default borrow_record

