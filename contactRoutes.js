import express from 'express';
import { submitContact, getAllContacts, getHealth } from '../controllers/contactController.js';

const router = express.Router();

router.post('/contact', submitContact);
router.get('/contact', getAllContacts);
router.get('/health', getHealth);

export default router;
