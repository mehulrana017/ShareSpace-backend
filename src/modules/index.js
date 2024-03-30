const { loadFilesSync } = require("@graphql-tools/load-files");
const { mergeTypeDefs, mergeResolvers } = require("@graphql-tools/merge");
const { join } = require("path");
const { print } = require("graphql/language/printer");

const typesArray = [...loadFilesSync(join(__dirname, "**/*.graphql"))];

const resolversArray = [...loadFilesSync(join(__dirname, "**/*.resolvers.js"))];

const typeDefs = mergeTypeDefs(typesArray);
const resolvers = mergeResolvers(resolversArray);

module.exports = { typeDefs, resolvers };
