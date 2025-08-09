// routes/auth.js
import express from 'express';
const router = express.Router();

// ✅ hardcoded admin credentials
const ADMIN_EMAIL = "shahid231@gmail.com";
const ADMIN_PASSWORD = "AAEESHABOUTIQUE";

router.post('/login', (req, res) => {
  const { email, password } = req.body;

  if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
    return res.json({
      token: "fake-jwt-token",
      email,
      message: "Login successful"
    });
  } else {
    return res.status(401).json({ message: "Invalid credentials" });
  }
});

export default router;
