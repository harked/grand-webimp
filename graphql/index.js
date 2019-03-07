const gqlTools = require('graphql-tools')

// Type Definitions
const userType = require('./schemas/types/userType')

// Queries and Mutation Wrapper
const wrapper = require('./resolvers/index')

// Queries 
const getAllUsers = wrapper.getAllUsers

// Mutations 
const createUser = wrapper.createUser

const schemaDefinition = `
    type Query {
        # user 
        getAllUsers: listUsers!
    }

    type Mutation{
        # user 
        createUser(id: Int, name: String!): singleUser!
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
            getAllUsers
        },
        Mutation: {
            createUser
        }
    }
})