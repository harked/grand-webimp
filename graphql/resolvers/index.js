// Queries 
const getAllUsers = require('./queries/getAllusers')

// Mutations 
const createUser = require('./mutations/createUser')

const wrapper = {
    getAllUsers,
    createUser
}

module.exports = wrapper