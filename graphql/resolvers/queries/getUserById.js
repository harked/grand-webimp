const getUserById = async (_, params, context) => {
    try{
        // console.log('params: ', params)
        // console.log('context: ', context)

        let inputId = params.id // this is comes from the front end request body

        let dummyData = [{
            id: 1,
            name: 'hari'
        }, {
            id: 2,
            name: 'alvian'
        }, {
            id: 3,
            name: 'randy'
        }, {
            id: 4,
            name: 'mr. x'
        }]

        let filtering = await dummyData.filter((data) => { // to find specific data wanted
            return data.id === parseInt(inputId)
        })

        if(filtering.length > 0) { // if any data found
            let singleUser = {
                data: filtering[0],
                error: null
            }
            return singleUser
        }else{ //  if there is no data found
            throw {message: 'data not found'}
        }
    }catch(error){
        return {
            error: error.message
        }
    }
}

module.exports = getUserById