
const Task = require('../models/Tasks')
const wrapper = require('../MiddleWare/async')

const {createCustomError} = require('../errors/custom-erros')


const getAllTasks = wrapper(async (req,res,next) =>{
    
        const tasks =await Task.find({})
        res.status(200).json({tasks})
    })



const createTask =wrapper( async (req,res) =>{
    
        const task = await Task.create(req.body)
        res.status(201).json({task})

   
})


const getTask = wrapper(async (req,res) =>{
    const {id:taskId} = req.params
    const task = await Task.findOne({_id:taskId})
    if (!task) {
        return next(createCustomError(`no task with id ${taskId}`, 404))
    }
    res.status(200)
        .json({task})





})




const updateTask = wrapper(async (req,res) =>{
    const {id:taskID} = req.params
        const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
            new: true,
            runValidators: true,
          })
          if(!task){
            return next(createCustomError(`no task with id ${taskID}`, 404))

          }
            res.status(200)
            .json({task}) 
    
   
})









const deleteTask =wrapper(async (req,res) =>{
    const {id:taskId} = req.params
    const task = await Task.findOneAndDelete({_id:taskId})
    if (!task) {
        res.status(404).json({msg:"no task found"})
    }
    res.status(200)
        .json({task})


})
module.exports= {
    getAllTasks,
    getTask,
    updateTask,
    deleteTask,
    createTask,

}