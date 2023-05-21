const express = require('express')
const notesFunction = require('../controller/noteController')

const router = express.Router()



// get("URL" , functionHandller)

// get all notes
  router.get('/notes/get', notesFunction.getAllNotes)
  //  update notes
  router.put('/notes/update', notesFunction.updateNote)
  //delete notes
  router.delete('/notes/delete:noteID', notesFunction.deleteNote)
  // save notes
  router.post('/notes/save', notesFunction.saveNote)

  module.exports = router