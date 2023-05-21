const { json } = require('body-parser');
const idGenerator = require('../utills/generator')
const memoStorage = require('../utills/memory.storage')
const notemodel = require('../model/note.model')

exports.getAllNotes = function(req,res){
    let values =  memoStorage.getValues(memoStorage.MemoryStorage)
    console.log(JSON.stringify(values))
    return res.status(200).send(JSON.stringify(values));
}

exports.updateNote = function(req,res){
    let noteID = req.body.noteID
     // let title = req.body.title;
     let title = 'mostafa'
     let createdBy = "admin"
     // let content = req.body.content
     let content = "note app using node"
     let createdOn = new Date();
     if(!noteID) return res.status(500).send({ error: 'note ID cannot be undefined' })


     if(!title || !content)  return res.status(500).send({ error: 'Title and Content should not be empty' })


     noteItem = memoStorage.MemoryStorage.getItem(noteID)
     if(!noteItem) return res.status(500).send({ error: 'Note ID is out of range' })


     let Note = notemodel.Note;
     let noteObj = new Note(noteID , title , content , createdBy , createdOn)
  
     memoStorage.MemoryStorage.setItem(noteID , noteObj)
     //  req.body
     res.status(200).send('updated successfully')
}






exports.deleteNote = function(req,res){
    var noteId = req.params,noteId
    if(!noteId) return res.status(500).send({ error: 'note ID cannot be undefined so can delete anything' })
    noteItem = memoStorage.MemoryStorage.getItem(noteID)
    if(!noteItem) return res.status(500).send({ error: 'Note ID is out of range' })
    memoStorage.MemoryStorage.removeItem(noteId)
    res.status(200).send('deleted successfully')
}








exports.saveNote = function(req,res){
    let seqId = idGenerator.generate();
    // let title = req.body.title;
    let title = 'mostafa'
    let createdBy = "admin"
    // let content = req.body.content
    let content = "note app using node"
    let createdOn = new Date();
    if(!title || !content)  return res.status(500).send({ error: 'Title and Content should not be empty' })
    let Note = notemodel.Note;
    let noteObj = new Note(seqId , title , content , createdBy , createdOn)
    memoStorage.MemoryStorage.setItem(seqId , noteObj)
    //  req.body
    res.status(201).send('saved successfully')
}