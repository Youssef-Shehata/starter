require('./utils/connect')
require('dotenv').config()
const express =  require("express")
const connectDB = require('./utils/connect')
const tasks = require('./routes/tasks')
const errorHandler = require('./MiddleWare/error-handler')
const notFound = require('./MiddleWare/not-found')



const app = express();
const port = process.env.PORT || 3000
//middlewares
app.use(express.static('./public'))
app.use(express.json())

app.use('/api/v1/tasks', tasks)
app.use(notFound)
app.use(errorHandler)
const start = async() =>{
 try {
    await connectDB(process.env.MONGO_URI)
    app.listen(port,console.log(`server listening on port ${port}`))


 } catch (error) {
    console.log(error)
 }
}

start()

