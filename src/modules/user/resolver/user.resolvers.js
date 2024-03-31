const signUp = require("./mutations/signup");
const login = require("./mutations/login");

const resolvers = {
  Mutation: {
    signUp,
    login,
  },
};

module.exports = resolvers;
