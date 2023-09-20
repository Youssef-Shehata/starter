const express =  require("express")

const app = express();



app.get('/' , (req,res,next)=>{
res.send("TASK MANAGER")
})
const port = 3000

app.listen(port,console.log("hello"))