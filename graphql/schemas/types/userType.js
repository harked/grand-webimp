let user = `
    type user {
        id: Int! 
        name: String
    }

    type listUsers {
        data: [user]
        error: String
    }

    type singleUser {
        data: user
        error: String
    }

    input userScalar {
        id: Int! 
        name: String!
    }
`

module.exports = () => [user]