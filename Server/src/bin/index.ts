import dotenv from "dotenv"
dotenv.config()
import {createServer} from "node:http"
import app from "../app"
import { connectDB } from "../db"




const port = process.env.PORT ?? 3000
connectDB();

const server = createServer(app)


server.listen(port,  () =>{
    console.log(`Server is running on port ${port}`)
})
