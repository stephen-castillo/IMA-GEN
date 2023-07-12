const { gql } = require("apollo-server-express");

const typeDefs = gql`
  "Unix time stamp in milliseconds."
  scalar Date

    type Model {
        id: ID!
        object: String
        owned_by: String
    }

    type ModelList {
        data: [Model]
        object: String
    }

    type HistoryItem {
        id: ID!
        name: String!
        prompt: String!
        photo: String!
        date: Date!
    }

    type HistoryItems {
        data: [HistoryItem]
        object: String
    }

    type Query {
        "Find the logged in user."
        me: User
        listModels: ModelList
        getEngines: [String]
        history: HistoryItems
    }
    
    type Mutation {
        createUser(email: String!, password: String!, username: String!): Auth
        login(email: String!, password: String!): Auth
        getImage(prompt: String!, name:String!): DalleImage!
    }

    type DalleImage {
        prompt: String
        name: String
        photo: String
        date: Date
    }

    type Auth {
        token: String!
        user: User!
    }

    type User {
        _id: ID!
        username: String!
        email: String!
        lastLogin: Date!
    }
`;

module.exports = typeDefs;
