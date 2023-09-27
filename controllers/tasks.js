
const Task = require('../models/Tasks')
const getAllTasks = async (req,res) =>{
    try {
        const tasks =await Task.find({})
        res.status(200).json({tasks})
    } catch (error) {
        res.status(404).json({msg:"no tasks found"})
    }
}



const createTask = async (req,res) =>{
    
    try {
        const task = await Task.create(req.body)
        res.status(201).json({task})

    } catch (error) {
        res.status(500).json({msg:error})
    }
}


const getTask = async (req,res) =>{
    const {id:taskId} = req.params
    try {
    const task = await Task.findOne({_id:taskId})
    if (!task) {
        res.status(404).json({msg:"no task found"})
    }
    res.status(200)
        .json({task})


    } catch (error) {
        res.status(500).json({msg:error})
    }   


}




const updateTask = async (req,res) =>{
    const {id:taskID} = req.params
    try {
        const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
            new: true,
            runValidators: true,
          })
            res.status(200)
            .json({task}) 
    } catch (error) {
        res.status(500)
            .json({msg:error})
    }

   
}









const deleteTask =async (req,res) =>{
    const {id:taskId} = req.params
    try {
    const task = await Task.findOneAndDelete({_id:taskId})
    if (!task) {
        res.status(404).json({msg:"no task found"})
    }
    res.status(200)
        .json({task})


    } catch (error) {
        res.status(500).json({msg:error})
    }   
}
module.exports= {
    getAllTasks,
    getTask,
    updateTask,
    deleteTask,
    createTask,

}