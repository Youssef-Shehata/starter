class CustomAPIError extends Error{
    constructor(message,statusCode){
        super(message)
        this.statusCode = statusCode
    }
}

const creatCustomError = (msg,status) =>{
    return new CustomAPIError(msg,status)
}
module.exports= {creatCustomError , CustomAPIError}