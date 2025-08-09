import mongoose from 'mongoose';

const reelSchema = new mongoose.Schema({
  url: {
    type: String,
    required: true,
  }
}, { timestamps: true });

export default mongoose.model('Reel', reelSchema);
