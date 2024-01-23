const Note = require("../models/note")
const fetchNotes =  async(req,res)=>{
    // find the notes 
const notes = await Note.find();
   // respond with notes 
   res.json({notes})
}
const fetchNote =  async(req,res)=>{
    // get id of the url
    const noteId = req.params.id;
    // find the note using id 
    const note = await Note.findById(noteId)
    // respond with the note 
    res.json({note})
}
const createNote =  async (req,res)=>{
    // get the sent in data off request body
    const {title,body} = req.body;
    //create a note with it 
    const note = await Note.create({
        title,
        body
    })
    // respond with a new note
    res.json({note});
}

const updateNote =  async(req,res)=>{
    // get id of the url
    const noteId = req.params.id;
    // get the data of the req body 
    const {title,body} = req.body;
    // find and update the record 
   await Note.findByIdAndUpdate(noteId,{
       title,
       body
   })
   // find updated note 
   const note = await Note.findById(noteId);
    // responde with it 
    res.json({
       note
    })
}

const deleteNote =  async(req,res)=>{
    // get id of the url
    const noteId = req.params.id;
    // delete the record 
       await Note.deleteOne({id:noteId})
    // respond
       res.json({
           Success:"Record Deleted"
       })
}
module.exports = {
    fetchNotes,
    fetchNote,
    createNote,
    updateNote,
    deleteNote,
}