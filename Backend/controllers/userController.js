const User = require("../models/userSchema");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");

const registerUser = asyncHandler(async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    res.status(400);
    throw new Error("Please enter all fields");
  }
  // check already user

  const userExist = await User.findOne({ username });
  if (userExist) {
    res.status(400);
    throw new Error("User already exists");
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPass = await bcrypt.hash(password, salt);

  // create user
  const user = await User.create({
    username,
    password: hashedPass,
  });

  if (user) {
    res.status(200).json({
      _id: user.id,
      username: user.username,
      token: generateWebToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data!");
  }
  
  
});

const getUser = asyncHandler(async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username });

  if (user && (await bcrypt.compare(password, user.password))) {
    res.json({
      _id: user.id,
      username: user.username,
      token: generateWebToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid credentials!");
  }
});

const getMe =  asyncHandler(async(req,res)=>{
    
  res.status(200).send({message : "Success"})
})

// Generate Token :

const generateWebToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

module.exports = { registerUser, getUser, getMe };
