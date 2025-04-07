const Message = require('../models/Message');

exports.getMessages = async (req, res, next) => {
  try {
    const messages = await Message.find({ documentId: req.params.documentId }).sort({ createdAt: 1 });
    res.status(200).json(messages);
  } catch (err) {
    next(err);
  }
};

exports.postMessage = async (req, res, next) => {
  try {
    const { text, sender } = req.body;
    const message = await Message.create({ documentId: req.params.documentId, text, sender });
    res.status(201).json(message);
  } catch (err) {
    next(err);
  }
};
