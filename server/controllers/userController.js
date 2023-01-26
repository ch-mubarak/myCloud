import User from "../models/userModel.js";

export const getUser = async (req, res, next) => {
  try {
    const { userId } = req.user;
    const user = await User.findById(userId).select("-password");
    if (!user) {
      res.status(404);
      throw new Error("user not found");
    }
    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
};
