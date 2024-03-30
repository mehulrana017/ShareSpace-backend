// src/graphql/schema/typeDefs.js
const { gql } = require('apollo-server');

const typeDefs = gql`
  type Post {
    id: ID!
    title: String
    content: String
  }

  type Query {
    getPosts: [Post]
  }

  type Mutation {
    createPost(title: String, content: String): Post
  }
`;

module.exports = typeDefs;
