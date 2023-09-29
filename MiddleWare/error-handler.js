const {CustomApiError} = require('../errors/custom-erros')
const errorHandlerMiddleware = (err,req,res,next)=>{
    if(err instanceof CustomApiError){
        return res.status(err.status).json({msg :err.msg})
    }




    return res.status(500).json({msg:"something went wrong"})
}



module.exports=errorHandlerMiddleware