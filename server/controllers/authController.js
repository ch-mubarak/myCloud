import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwtDecode from "jwt-decode";
import jwt from "jsonwebtoken";

//@des Register user
//@route POST /api/auth
//@access Public
export const registerUser = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    if (!(email && password && name)) {
      res.status(401);
      throw new Error("All fields are required");
    }
    const userExist = await User.findOne({ email });
    if (userExist) {
      res.status(401);
      throw new Error("User already exist");
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });
    const token = generateToken(user._id);
    user.password = undefined;
    res.status(201).json({ user, token });
  } catch (err) {
    next(err);
  }
};

//@des Login user
//@route POST /api/auth
//@access Public
export const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!(email && password)) {
      res.status(401);
      throw new Error("All fields are required");
    }
    const user = await User.findOne({ email });
    if (user && (await bcrypt.compare(password, user.password))) {
      const token = generateToken(user._id);
      user.password = undefined;
      return res.status(200).json({ user, token });
    } else {
      res.status(401);
      throw new Error("Invalid credentials");
    }
  } catch (err) {
    next(err);
  }
};

export const googleLogin = async (req, res) => {
  try {
    const { googleToken } = req.body;
    let token, myUser;
    const userData = await jwtDecode(googleToken);
    const user = await User.findOne({ email: userData.email });
    if (user) {
      myUser = user;
    } else {
      const newUser = await User.create({
        email: userData.email,
        name: userData.name,
        profilePicture: userData.picture,
      });
      newUser.password = undefined;
      myUser = newUser;
    }
    token = generateToken(myUser._id);
    res.status(200).json({ user: myUser, token });
  } catch (err) {
    next(err);
  }
};

const generateToken = (userId) => {
  return jwt.sign(
    {
      userId,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "1h",
    }
  );
};
