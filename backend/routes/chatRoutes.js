const express = require('express');
const router = express.Router();
const { getMessages, postMessage } = require('../controllers/chatController');
const { protect } = require('../middleware/authMiddleware');

router.get('/:documentId', protect, getMessages);
router.post('/:documentId', protect, postMessage);

module.exports = router;
