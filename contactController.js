import { Contact } from '../models/Contact.js';
import mongoose from 'mongoose';

export const submitContact = async (req, res) => {
  try {
    const { name, email, phone, service, city, business, instagram, message } = req.body;

    if (!name || !email || !phone || !service || !city || !business || !instagram || !message) {
      return res.status(400).json({
        success: false,
        message: 'Please fill in all required fields.',
      });
    }

    const newContact = await Contact.create({
      name,
      email,
      phone,
      service,
      city,
      business,
      instagram,
      message,
    });

    return res.status(201).json({
      success: true,
      message: "Thanks for reaching out. We'll get back to you within 24 hours.",
      data: {
        id: newContact._id,
        name: newContact.name,
        createdAt: newContact.createdAt,
      },
    });
  } catch (error) {
    console.error('[ContactController] Error saving contact:', error);
    return res.status(500).json({
      success: false,
      message: 'An error occurred while submitting the form. Please try again.',
      error: error.message,
    });
  }
};

export const getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    return res.status(200).json({
      success: true,
      count: contacts.length,
      data: contacts,
    });
  } catch (error) {
    console.error('[ContactController] Error fetching contacts:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to fetch contact submissions.',
      error: error.message,
    });
  }
};

export const getHealth = (req, res) => {
  const dbStatus = mongoose.connection.readyState === 1 ? 'connected' : 'disconnected';
  return res.status(200).json({
    success: true,
    status: 'healthy',
    timestamp: new Date().toISOString(),
    database: dbStatus,
  });
};
