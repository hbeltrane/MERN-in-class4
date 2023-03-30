const mongoose = require('mongoose');

const NoteSchema = mongoose.Schema({
    title: String,
    content: String,
    // Add new field
    topic: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Note', NoteSchema);