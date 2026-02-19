//dependencies
import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import dotenv from "dotenv";

//Scripts
import addBooks from "./Q4Createbook.js";
import updateBook from "./Q4Updatebook.js";
import deleteBook from "./Q4Deletebook.js";
import readBook from "./Q4Readbook.js";
import authorBook from "./Q1Authorfiltering.js";
import yearBook from "./Q1Yeariltering.js";

//running all dependencies
dotenv.config();
const app = express();
app.use(express.json())
app.use(helmet());
app.use(cors());
app.use(morgan("dev"));

// testing
let port = process.env.PORT || 8001
app.get("/", (req,res)=>{
    res.send("<h1>Hii</h1>");
});

//running scripts
app.post("/add",addBooks);
app.post("/update/:id",updateBook);
app.post("/delete/:id",deleteBook);
app.post("/read",readBook);
app.post("/author",authorBook);
app.post("/year",yearBook);
//connection
app.listen(port,()=>{
    console.log("Server Connected on the PORT");
})