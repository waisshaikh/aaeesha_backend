import Reel from '../models/reel.js';

// Get all reels
export const getReels = async (req, res) => {
  try {
    const reels = await Reel.find().sort({ createdAt: -1 });
    res.status(200).json(reels);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch reels." });
  }
};

// Add a new reel
export const addReel = async (req, res) => {
  const { url } = req.body;

  if (!url || !url.includes('instagram.com/reel/')) {
    return res.status(400).json({ message: "Invalid or missing URL." });
  }

  try {
    const newReel = new Reel({ url });
    await newReel.save();
    res.status(201).json(newReel);
  } catch (err) {
    res.status(500).json({ message: "Failed to save reel." });
  }
};

// Delete a reel
export const deleteReel = async (req, res) => {
  const { id } = req.params;

  try {
    const deleted = await Reel.findByIdAndDelete(id);
    if (!deleted) return res.status(404).json({ message: "Reel not found." });

    res.status(200).json({ message: "Reel deleted successfully." });
  } catch (err) {
    res.status(500).json({ message: "Failed to delete reel." });
  }
};
