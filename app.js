require('./utils/connect')
require('dotenv').config()
const express =  require("express")
const connectDB = require('./utils/connect')
const tasks = require('./routes/tasks')




const app = express();
const port = process.env.PORT
//middlewares
app.use(express.static('./public'))
app.use(express.json())

app.use('/api/v1/tasks', tasks)


const start = async() =>{
 try {
    await connectDB(process.env.MONGO_URI)
    app.listen(port,console.log(`server listening on port ${port}`))


 } catch (error) {
    console.log(error)
 }
}

start()