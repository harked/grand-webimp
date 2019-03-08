const gqlTools = require('graphql-tools')

// Type Definitions
const userType = require('./schemas/types/userType')

// Queries and Mutation Wrapper
const wrapper = require('./resolvers/index')

// Queries 
const getAllUsers = wrapper.getAllUsers
const getUserById = wrapper.getUserById

// Mutations 
const createUser = wrapper.createUser
const createUserCustomScalar = wrapper.createUserCustomScalar

const schemaDefinition = `
    type Query {
        getAllUsers: listUsers! # get all data users
        getUserById(id: Int): singleUser # get data user by id (params)
    }

    type Mutation{
        createUser(id: Int, name: String!): singleUser! # create new user base on id and name
        createUserCustomScalar(input: userScalar): singleUser # create new user using custom scalar (params)
    }

    schema {
        query: Query 
        mutation: Mutation
    }
`

module.exports = gqlTools.makeExecutableSchema({
    typeDefs: [
        schemaDefinition,
        userType
    ],
    resolvers: {
        Query: {
            getAllUsers,
            getUserById
        },
        Mutation: {
            createUser,
            createUserCustomScalar
        }
    }
})