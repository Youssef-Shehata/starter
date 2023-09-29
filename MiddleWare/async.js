const wrapper =   (callback) => {

    return async (req,res,next) =>{
        try {
            return await callback(req,res)

        } catch (error) {
            next(error)
        }
    }
}
module.exports = wrapper