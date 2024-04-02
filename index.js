import dotenv from 'dotenv'
dotenv.config()

import express from 'express'
const app = express()
import configuration from './configs/index.js'
import mongoose from 'mongoose'
import router from './routes/contact.routes.js'
//import route from "./routes/contact.routes"
const port = 3000

app.use(express.json());


mongoose.connect(configuration.mongoURI)
.then(()=>{
app.use("/api/contact",router);
})
.catch((error)=>{
console.log(error.message);
});
app.listen(port,()=>{
    console.log(`server running on port ${port}`);
})