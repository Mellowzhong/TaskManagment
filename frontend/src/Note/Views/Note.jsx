import NoteShow from "../Views/NoteShow";
import NoteForm from "../Components/NoteForm";
import { useState, useEffect, useRef } from "react";
import { getAllNotes, deleteNote } from "../Services/NoteServices";

export default function Note() {
    const [notes, setNotes] = useState([]);
    const dialogRef = useRef(null);

    useEffect(() => {
        getListOfNotes();
    }, []);

    const showNoteForm = () => {
        dialogRef.current.showModal();
    }

    const closeNoteForm = () => {
        dialogRef.current.close();
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
        <>
            <section className="create-note">
                <h2>Create a note</h2>
                <dialog ref={dialogRef}>
                    <NoteForm getListOfNotes={getListOfNotes} />
                    <button onClick={closeNoteForm}>Close</button>
                </dialog>
                <button className="show-note-form-button" onClick={showNoteForm}>Create a new note</button>
            </section>
            <h2 className="show-notes-tittle">Notes</h2>
            <section className="show-notes">
                {notes.map((note) => (
                    <NoteShow key={note.id} note={note} onDelete={delNote} />
                ))}
            </section>
        </>
    );
}