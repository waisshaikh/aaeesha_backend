import express from "express";
import { createContact, getAllContacts } from "../controllers/contactController.js";

const router = express.Router();

router.post("/", createContact); // POST /api/contact
router.get("/all", getAllContacts); // GET /api/contact/all

export default router;