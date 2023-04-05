const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/userSchema");

// get user
const getUser = async (req, res) => {
  const user = {
    id: req.user._id,
    name: req.user.name,
    email: req.user.email,
  };
  if (user) {
    res.status(200).json(user);
  } else {
    res.status(401).json({ message: "Invalid User" });
  }
};

//Login user
const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user && (await bcrypt.compare(password, user.password))) {
    res.status(200).json({
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(401).json({ message: "Invalid Credentials" });
  }
};

//Register a User
const register = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    // check user exists or not
    let user = await User.findOne({ email });

    if (user) {
      return res.status(401).json({ message: "User already exists" });
    }

    user = new User({
      name,
      email,
      password,
    });

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    await user.save();
    res.status(200).json({ message: "User is Registered" });
  } catch (error) {
    console.log(error);
  }
};

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "30d" });
};

module.exports = {
  login,
  register,
  getUser,
};
