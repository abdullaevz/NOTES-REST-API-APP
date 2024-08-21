import { configDotenv } from "dotenv";
import express from "express";
import { dbConnect } from "./database/connectMongo.js";
import { appRouter } from "./Routers/appRouters.js";

const app = express();
app.use(express.json())
configDotenv();

app.use(appRouter)

app.listen(process.env.PORT,()=>{
console.log(`Server is up with port ${process.env.PORT}`);
    dbConnect();
})
