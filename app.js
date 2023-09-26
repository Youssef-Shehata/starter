require('./utils/connect')
require('dotenv').config()
const express =  require("express")
const connectDB = require('./utils/connect')




const app = express();
const port = 3000
const tasks = require('./routes/tasks')

//middleware

app.use(express.json())

app.use('/api/v1/tasks', tasks)

app.use('/' , (req,res,next)=>{ 
res.send("TASK MANAGER")
})




























const start = async() =>{
 try {
    await connectDB(process.env.MONGO_URI)
    app.listen(port,console.log("server listening on port 3000"))


 } catch (error) {
    console.log(error)
 }
}

start()