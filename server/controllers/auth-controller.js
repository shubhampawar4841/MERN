const User = require("../models/user-model");
const bcrypt = require("bcryptjs");

// Home Logic
 const home = async (req, res) => {
  try {
    res.status(200).json({ msg: "Welcome to our home page" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// User Registration Logic
const register = async (req, res) => {
  try {
    const { username, email, phone, password } = req.body;

    const userExist = await User.findOne({ email: email });

    if (userExist) {
      return res.status(400).json({ msg: "Email already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    // Wrap the User.create call inside an asynchronous function
    const userCreated = await createUser(username, email, phone, hashedPassword);

    res.status(201).json({
      msg: "Registration Successful",
      token: await userCreated.generateToken(),
      userId: userCreated._id.toString(),
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

// Define a helper function to create a new user
const createUser = async (username, email, phone, password) => {
  try {
    return  User.create({ username, email, phone, password });
  } catch (error) {
    throw error;
  }
};


// User Login Logic
// *-------------------
// User Logic

const login = async (req,res)=>{
  res.send("hello")
}
// *-------------------

const user = async (req, res) => {
  try {
    // const userData = await User.find({});
    const userData = req.user;
    console.log(userData);
    return res.status(200).json({ msg: userData });
  } catch (error) {
    console.log(` error from user route ${error}`);
  }
};

module.exports={home,register,user,createUser,login};
