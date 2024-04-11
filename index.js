import dotenv from 'dotenv'
dotenv.config()
import swaggerUi from 'swagger-ui-express'
import express from 'express'
const app = express()
import configuration from './configs/index.js'
import mongoose from 'mongoose'
import router from './routes/contact.routes.js'
import cors from 'cors'

import swagger from "./docs/swagger.json" assert {type:"json"}
const port = 5000
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

app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swagger))