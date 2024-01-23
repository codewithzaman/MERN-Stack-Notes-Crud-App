// load env variables
require('dotenv').config();
// Import dependencies 
const express = require ('express');
const cors = require('cors')
const connectTodb = require ('./config/connectTodb');
const notesController = require("./controllers/notesController")

// create an express app
const app = express();

// configure an express app
app.use(express.json());
app.use(cors())

// connect to database
connectTodb();

// Routing 
app.get('/notes',notesController.fetchNotes);
app.get("/notes/:id",notesController.fetchNote);
app.post('/notes',notesController.createNote);
app.put("/notes/:id",notesController.updateNote);
app.delete("/notes/:id",notesController.deleteNote);
// Start our server 
app.listen(process.env.PORT);
