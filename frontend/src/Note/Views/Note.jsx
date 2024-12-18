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
            <section>
                <h2>Create a note</h2>
                <dialog ref={dialogRef}>
                    <section>
                        <NoteForm getListOfNotes={getListOfNotes} closeForm={closeNoteForm} />
                    </section>
                </dialog>
                <button onClick={showNoteForm}>Create a new note</button>
            </section>
            <h2 >Notes</h2>
            <section >
                {notes.map((note) => (
                    <NoteShow key={note.id} note={note} onDelete={delNote} getListOfNotes={getListOfNotes} />
                ))}
            </section>
        </>
    );
}