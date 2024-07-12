import NoteShow from "../Views/NoteShow";
import NoteForm from "../Components/NoteForm";
import { useState, useEffect } from "react";
import { getAllNotes, deleteNote } from "../Services/NoteServices";

export default function Note() {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        getListOfNotes();
    }, []);

    const getListOfNotes = async () => {
        const response = await getAllNotes();
        if (response.success) setNotes(response.data);
        else console.error(response.data);
    };

    const delNote = async (id) => {
        const response = await deleteNote(id);
        if (response.success) {
            alert("Note deleted");
            getListOfNotes();
        } else {
            alert("Error deleting note");
        }
    };

    return (
        <div>
            <h1>Create a note</h1>
            <NoteForm getListOfNotes={getListOfNotes} />
            <br />
            <div>
                <h1>Notes</h1>
                {notes.map((note) => (
                    <NoteShow key={note.id} note={note} onDelete={delNote} />
                ))}
            </div>
        </div>
    );
}