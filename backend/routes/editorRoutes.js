const express = require('express');
const router = express.Router();
const { getDocument, saveDocument } = require('../controllers/editorController');
const { protect } = require('../middleware/authMiddleware');

router.get('/:id', protect, getDocument);
router.post('/:id', protect, saveDocument);

module.exports = router;
