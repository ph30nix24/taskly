import User from "../models/users.model.js";

/**
 * @name getCurrentUser
 * @route GET /taskly/users/get-me
 * @desc Get the currently authenticated user's information
 * @access Private
 */

export const getCurrentUser = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    return res.status(200).json({
      message: "User details retrieved successfully",
      user: {
        id: user._id,
        name: user.name,
        username: user.username,
        email: user.email,
        tasks: user.tasks,
        avatar: user.avatar,
      },
    });
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Internal server error while getting user details",
        error: error.message,
      });
  }
};

/**
 * @name updateAvatar
 * @route PATCH /taskly/users/update-avatar
 * @desc Update the avatar of the currently authenticated user
 * @access Private
 */

export const updateAvatar = async (req, res) => {
  const userId = req.user.id;
  const { image } = req.body;
  const user = await User.findById(userId);
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  user.avatar = image;
  await user.save();
  return res.status(200).json({ message: "Avatar updated successfully", user });
};

export const updateInfo = async (req, res) => {
  try {
    const userId = req.user.id;
    const { name, username } = req.body;

    const updateData = {};

    if (name !== undefined) {
      updateData.name = name.trim();
    }
    if (username !== undefined) {
      updateData.username = username.trim();
      const existingUser = await User.findOne({
        username: updateData.username,
      });
      if (existingUser && existingUser._id.toString() !== userId) {
        return res.status(400).json({
          msg: "Username already taken",
        });
      }
    }

    // Optional: check if nothing is provided
    if (Object.keys(updateData).length === 0) {
      return res.status(400).json({ msg: "No data provided to update" });
    }
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { $set: updateData },
      { new: true },
    );

    res.status(200).json({
      msg: "User updated successfully",
      user: updatedUser,
    });
  } catch (error) {
    console.log("Update error:", error);
    res.status(500).json({ msg: "Server error" });
  }
};
