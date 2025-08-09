  import mongoose from 'mongoose';

  const userSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
      unique: true,
    },
    instagramId: {
      type: String,
      default: '',
    },
    qrFollowed: {
      type: Boolean,
      default: false,
    }
  }, { timestamps: true });

  export default mongoose.model('userModel', userSchema);
