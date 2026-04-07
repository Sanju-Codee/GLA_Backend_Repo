import User from "../Models/m.js"
async function create_book(req,res){
    try{
        const {tittle,author,price}=req.body
        if(!tittle ||!author ||!price){
            return res.status().send("All fields are required")
        }
         const alreadyExists = await User.findOne({
            tittle: tittle,
            author: author,
            price: price
        })

        if(alreadyExists){
            return res.status(409).send("Book already exists")
        }

        const newbook={
            bookId:101,
            tittle,
            author,
            price
        }
        await User.create(newbook)
        res.status(201).send("Book saved successfully")
        console.log(newbook)
    }catch(error){
        console.log(error)
        res.status(500).send("Error",error)
    }
}
export default create_book

/*import fs from "fs"
import User from "../Models/user.js"
async function user_register(req, res) {
    try {
        let users = []
        const { name, last_name, email, hashedPassword } = req.body
        if (!name || !last_name || !email || !hashedPassword) {
            return res.status(402).send("All fields are required")
        }
        if (fs.existsSync("user.json")) {
            users = JSON.parse(fs.readFileSync("user.json", "utf-8"));
            let isData = users.find(a => a.email === email)
            if (isData) {
                return res.status(409).send("user Already exist");
            }
        }
        const newuser = {
            name,
            last_name,
            email,
            hashedPassword,
            role: "user",
            createdAt: new Date()
        }
        const ress = await User.create(newuser)
        res.status(201).send("User created successfully")
        console.log(newuser)
    } catch(error){
        console.error(error)
        res.status(500).send("Server error")
    }
}
export default user_register */