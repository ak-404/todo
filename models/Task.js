const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  status: {
    type: String,

    // Restricts the field to only accept one of the specified values
    enum: ['pending', 'completed'],

    default: 'pending'
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,

    // Creates a reference to the User model.
    ref: 'User',
    
    required: true
  },
}, { timestamps: true });

module.exports = mongoose.model('Task', taskSchema);
