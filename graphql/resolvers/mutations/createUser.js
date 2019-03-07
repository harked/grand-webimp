const createUser = async (_, params, context) => {
    try{
        console.log('params: ', params) // req body comes here
        console.log('context', context.db)// DB NEO HERE
        let neoDB = context.db,
            session = neoDB.session()
            
        let singleUser = {
            data: {
                id: params.id,
                name: params.name
            },
            error: null
        }

        return singleUser
    }catch(error){
        return {
            error: error.message
        }
    }
}

module.exports = createUser