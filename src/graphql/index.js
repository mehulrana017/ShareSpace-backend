const { graphqlHTTP } = require("express-graphql");
const resolvers = require("./resolvers");
const { schema } = require("../model/userModel");

module.exports = graphqlHTTP({
    schema: schema,
    rootValue: resolvers,
    graphiql: true,
})