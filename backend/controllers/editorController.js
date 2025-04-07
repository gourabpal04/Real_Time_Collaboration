const Document = require('../models/Document');

exports.getDocument = async (req, res, next) => {
  try {
    const document = await Document.findById(req.params.id);
    if (!document) {
      return res.status(404).json({ message: 'Document not found' });
    }
    res.status(200).json(document.content);
  } catch (err) {
    next(err);
  }
};

exports.saveDocument = async (req, res, next) => {
  try {
    const { content } = req.body;
    const document = await Document.findByIdAndUpdate(req.params.id, { content }, { new: true, upsert: true });
    res.status(200).json(document);
  } catch (err) {
    next(err);
  }
};
