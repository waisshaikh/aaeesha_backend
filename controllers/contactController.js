import Contact from '../models/contactModel.js';

export const createContact = async (req, res) => {
  try {
    const newContact = await Contact.create(req.body);
    res.status(201).json({
      success: true,
      message: "Contact message saved successfully",
      data: newContact,
    });
  } catch (err) {
    console.error("Create Contact Error:", err);
    res.status(500).json({ 
      success: false,
      message: err.message || "Server error while saving contact",
    });
  }
};

export const getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.status(200).json(contacts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
