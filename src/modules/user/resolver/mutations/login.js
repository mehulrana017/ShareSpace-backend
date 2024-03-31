const bcrypt = require("bcrypt");
const JWT = require("jsonwebtoken");
require("dotenv").config();

const login = async (parent, args, context, info) => {
  if (!args || !args.input) {
    throw new Error("Data object is required");
  }
  const { username, password } = args.input;
  const { models } = context;
  const { User: UserModel } = models;

  const requestedUser = await UserModel.findOne({ username });

  if (requestedUser && bcrypt.compareSync(password, requestedUser.password)) {
    const payload = {
      userID: requestedUser._id,
    };
    const token = JWT.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "24h",
    });
    return {
      token,
      user: requestedUser,
    };
  } else {
    throw new Error("Invalid credentials");
  }
};

module.exports = login;
