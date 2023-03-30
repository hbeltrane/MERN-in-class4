const Note = require('../models/note.model.js');

// Create and Save a new Note
exports.create = (req, res) => {
// Find a single note with a noteId
exports.findOne = (req, res) => {
  Note.findById(req.params.noteId)
  .then(note => {
      if(!note) {
          return res.status(404).send({
              message: "Note not found with id " + req.params.noteId
          });            
      }
      res.send(note);
  }).catch(err => {
      if(err.kind === 'ObjectId') {
          return res.status(404).send({
              message: "Note not found with id " + req.params.noteId
          });                
      }
      return res.status(500).send({
          message: "Error retrieving note with id " + req.params.noteId
      });
  });
};
};

// Retrieve and return all notes from the database.
exports.findAll = (req, res) => {

};

// Find a single note with a noteId
exports.findOne = (req, res) => {

};

// Update a note identified by the noteId in the request
exports.update = (req, res) => {

};

// Delete a note with the specified noteId in the request
exports.delete = (req, res) => {

};