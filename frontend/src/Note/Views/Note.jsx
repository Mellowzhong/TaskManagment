import NoteShow from "../Views/NoteShow";
import NoteForm from "../Components/NoteForm";
import { useState, useEffect } from "react";
import { getAllNotes, deleteNote } from "../Services/NoteServices";

export default function Note() {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        getListOfNotes();
    }, []);

    const showNoteForm = () => {
        const dialog = document.getElementById("noteModal");
        dialog.showModal();
    }

    const closeNoteForm = () => {
        const dialog = document.getElementById("noteModal");
        dialog.close();
    }

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
        <article>
            <h2>Create a note</h2>
            <dialog id="noteModal">
                <NoteForm getListOfNotes={getListOfNotes} />
                <button onClick={closeNoteForm} >Close</button>
            </dialog>
            <button onClick={showNoteForm} >Create a new note</button>
            <h2>Notes</h2>
            <section>
                {notes.map((note) => (
                    <NoteShow key={note.id} note={note} onDelete={delNote} />
                ))}
            </section>
        </article>
    );
}