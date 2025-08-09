import User from "../models/userModel.js";

export const createUser = async (req, res) => {
  try {
    const { name, email, phone, instagramId } = req.body;

    if (!name || !email || !phone) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const existing = await User.findOne({ phone });
    if (existing) {
      return res.status(409).json({ message: "Phone number already exists." });
    }

    const newUser = new User({
      name,
      email,
      phone,
      instagramId,
      qrFollowed: false, // or true if you want to toggle this manually
    });

    await newUser.save();
    res.status(201).json({ message: "User created successfully", user: newUser });
  } catch (error) {
    console.error("Create User Error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find().sort({ createdAt: -1 });
    res.status(200).json(users);
  } catch (error) {
    console.error("Get Users Error:", error);
    res.status(500).json({ message: "Failed to fetch users" });
  }
};
