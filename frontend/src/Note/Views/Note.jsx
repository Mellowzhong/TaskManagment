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
    };

    const closeNoteForm = () => {
        dialogRef.current.close();
    };

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
        <div className="max-h-screen p-6">
            {/* Header Section */}
            <section className="grid place-items-center mb-10">
                <div className="text-center">
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">Create a Note</h2>
                    <button
                        onClick={showNoteForm}
                        className="px-6 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
                    >
                        Create a new note
                    </button>
                </div>

                {/* Modal for Note Form */}
                <dialog
                    ref={dialogRef}
                    className="rounded-lg p-6 bg-white shadow-lg w-full max-w-lg"
                >
                    <section>
                        <NoteForm
                            getListOfNotes={getListOfNotes}
                            closeForm={closeNoteForm}
                        />
                    </section>
                </dialog>
            </section>

            {/* Notes Section */}
            <h3 className="text-3xl font-bold text-gray-800 mb-6 text-center">Your Notes</h3>
            <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
                {notes.map((note) => (
                    <NoteShow
                        key={note.id}
                        note={note}
                        onDelete={delNote}
                        getListOfNotes={getListOfNotes}
                    />
                ))}
            </section>
        </div>
    );
}
