const mongoose = require('mongoose');

const DocumentSchema = new mongoose.Schema({
  title: { type: String, default: 'Untitled Document' },
  content: { type: Object, default: {} },
  collaborators: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
}, { timestamps: true });

module.exports = mongoose.model('Document', DocumentSchema);
