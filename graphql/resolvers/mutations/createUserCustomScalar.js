const createUserCustomScalar = async (_, params, context) => {
    try{
        // console.log('params: ', params)
        // console.log('context: ', context)

        let id = params.input.id,
            name = params.input.name

        if(id && name){
            let singleUser = {
                data: {
                    id, 
                    name
                },
                error: null
            }

            return singleUser
        }
    }catch(error){
        return {
            error: error.message
        }
    }
}

module.exports = createUserCustomScalar