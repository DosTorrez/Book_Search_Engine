const { gql } = require("apollo-server-express");

const typeDefs = gql`
type Query {
    me: User 
}

type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
    bookCount: Int 
    savedBooks: [Book]
}

type Auth {
    token: ID!
    user: User
}

type Book {
    _id: ID
    bookId: String
    authors: [String]
    description: String
    title: String
    image: String
    link: String
}

input saveBookInput {
    bookId: String
    authors: [String]
    title: String
    description: String
    image: String
    link: String
}

type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    savedBook(body: saveBookInput): User
    removeBook(bookId: String!): User
}
`;

module.exports = typeDefs; 