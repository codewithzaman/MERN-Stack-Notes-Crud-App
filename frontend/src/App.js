import { useEffect, useState } from "react";
import axios from 'axios';


function App() {
  const [notes, setNotes] = useState(null);
  useEffect(() => {
  fetchNotes();
  }, [])
  
  const fetchNotes = async ()=>{
    // fetch the notes
    const res = await axios.get("http://localhost:3001/notes")
    // set the notes in state 
    setNotes(res.data.notes)
  }
  return (
    <div className="App">
    <div>
      <h1>Notes:</h1>
      {notes && notes.map(note=>{
        return (
        <div kry={note._id}>
          <h3>{note.title}</h3>
        </div>)
      })}
    </div>
    </div>
  );
}

export default App;
