const getAllUsers = async (args, context) => {
    try{
        return {
            data: [{
                id: 1,
                name: "hari antara"
            }],
            error: null
        }
    }catch(error){
        return {
            error: error.message
        }
    }
}

module.exports = getAllUsers