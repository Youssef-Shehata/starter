const express =  require("express")

const app = express();
const port = 3000
const tasks = require('./routes/tasks')

//middleware

app.use(express.json())

app.use('/api/v1/tasks', tasks)

app.use('/' , (req,res,next)=>{ 
res.send("TASK MANAGER")
})


app.listen(port,console.log("hello"))