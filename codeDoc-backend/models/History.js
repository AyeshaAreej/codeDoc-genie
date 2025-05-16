const mongoose = require('mongoose');

const historySchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
    title: {
    type: String,
    required: true,
  },
  inputCode: {
    type: String,
    required: true
  },
  docStyle: {
    type: String,
    enum: ["Inline Comments", "Docstrings", "Code Summary"  ], // or your styles
    required: true
  },
  generatedDoc: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('History', historySchema);
