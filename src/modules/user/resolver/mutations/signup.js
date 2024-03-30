const signUp = async (parent, args, context, info) => {
  const { models } = context;

  if (!args || !args.input) {
    throw new Error("Data object is required");
  }
  const { User: UserModel } = models;
  const { username, email, password } = args.input;

  if (!username || !email || !password) {
    throw new Error("All fields are required");
  }

  // Check if user with given email already exists
  const userExist = await UserModel.findOne({ email });
  if (userExist) {
    throw new Error("User already exists");
  }

  // Create new user
  const newUser = new UserModel({
    username,
    email,
    password,
  });

  await newUser.save();

  // TODO: add JWT token
};

module.exports = signUp;
