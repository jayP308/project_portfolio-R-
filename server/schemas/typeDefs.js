const { gql }  = require("apollo-server-express");

const typeDefs = gql`

    type Contact {
        _id: ID
        name: String
        email: String
        message: String
    }

    type Query {
        fetchContact: [Contact]
    }

    type Mutation {
        createContact(contact: String!): Contact
    }
`;

module.exports = typeDefs;