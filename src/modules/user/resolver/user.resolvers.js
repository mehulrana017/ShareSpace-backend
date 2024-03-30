const signUp = require("./mutations/signup");

const resolvers = {
  Mutation: {
    signUp,
  },
};

module.exports = resolvers;
