import api from "../api";
import Note from "../Note/Views/Note";
import NoteForm from "../Note/Components/NoteForm";
import { useState, useEffect } from "react";

export default function Home() {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        getNotes();
    }, []);

    const getNotes = async () => {
        api
            .get("api/notes/")
            .then((res) => res.data)
            .then((data) => setNotes(data))
            .catch((err) => console.error(err));
    };

    const deleteNote = async (id) => {
        api
            .delete(`api/notes/delete/${id}/`)
            .then((res) => {
                if (res.status === 204) alert("Note deleted");
                else alert("Error deleting note");
                getNotes();
            })
            .catch((err) => console.error(err));
    };

    return (
        <div>
            <div>
                <h1>Notes</h1>
                {notes.map((note) => (
                    <Note key={note.id} note={note} onDelete={deleteNote} />
                ))}
            </div>
            <h1>Create a note</h1>
            <NoteForm />
        </div>
    );
}