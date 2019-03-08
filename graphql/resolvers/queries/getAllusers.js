const getAllUsers = async (args, context) => {
    try{
        let listUsers = {
            data: [{
                id: 1,
                name: "hari antara"
            }],
            error: null
        }

        return listUsers
    }catch(error){
        return {
            error: error.message
        }
    }
}

module.exports = getAllUsers