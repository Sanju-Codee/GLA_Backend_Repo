//dependencies
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import morgan from 'morgan';

//Scripts
import question1 from "./Q1.js";
import signup from "./signUp.js";
import question3 from "./Q3.js";
import errorPage from "./Q4.js";


dotenv.config();
const app = express();
app.use(express.json())
app.use(helmet());
app.use(cors());
app.use(morgan("dev"));
// testing
let port = process.env.PORT || 8001
app.get("/", (req,res)=>{
    res.send("<h1>Hii Food App is Running</h1>");
});
//running scripts
app.post("/solve1/:id",question1);
app.post("/signup",signup);
app.post("/contact",question3);
app.post("/",errorPage);

//checking connection
app.listen(port, ()=>{
    console.log("Server Connected on the port");
})
