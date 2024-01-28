// Import necessary modules
const User = require("../models/auth-model");
const bcrypt = require("bcryptjs");

// Define an async function to handle registration
const registerUser = async ({ username, email, phone, password }) => {
  try {
    const userCreated = await User.create({ username, email, phone, password });

    const token = await userCreated.generateToken();

    const userId = userCreated._id.toString();

    return {
      msg: "Registration Successful",
      token: token,
      userId: userId,
    };
  } catch (error) {
    console.error(error);
    throw new Error("User registration failed");
  }
};

// Export the function
module.exports = registerUser;
