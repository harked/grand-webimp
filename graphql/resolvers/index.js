// Queries 
const getAllUsers = require('./queries/getAllusers') // this is query without parameters
const getUserById = require('./queries/getUserById') // this is query with parameter that used for filtering

// Mutations 
const createUser = require('./mutations/createUser') // this is mutation using direct params (id and name on params)
const createUserCustomScalar = require('./mutations/createUserCustomScalar') // this is mutation using custom scalar , so the id and name will be wrap by user(Scalar) 


const wrapper = {
    getAllUsers,
    getUserById,
    createUser,
    createUserCustomScalar
}

module.exports = wrapper