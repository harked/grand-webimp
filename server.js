const express = require('express')
const { graphqlExpress, graphiqlExpress } =  require('graphql-server-express')
const bodyParser = require('body-parser')
const cors = require('cors')

var schema = require('./graphql')
let db = require('./database_connection')

const app = express().use('*', cors())

const graphqlWrapper = async (req, res, next) => {
    return {
        schema,
        context: {db, req}
    }
}

app.use('/graphql', bodyParser.json(), graphqlExpress(graphqlWrapper))

app.use('/graphiql', graphiqlExpress({
    endpointURL: '/graphql'
}))

app.listen(8080, () => console.log(
    `GraphQL Server running on http://localhost:8080/graphql`
))