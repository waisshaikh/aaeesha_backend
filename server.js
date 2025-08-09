import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import reelRoutes from './routes/reelRoutes.js';
import authRoutes from './routes/auth.js';
import userRoutes from './routes/userRoutes.js'; // <-- New user route
import contactRoutes from './routes/contactRoutes.js';
dotenv.config();

const app = express();

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch(err => console.error("❌ MongoDB Error:", err));

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/reels', reelRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes); // <-- New
app.use('/api/contact', contactRoutes);
// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Backend running at http://localhost:${PORT}`);
});
