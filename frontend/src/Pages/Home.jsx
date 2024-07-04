import { useState, useEffect } from "react";
import api from "../api";
import Note from "../Components/Note";

function Home() {
    const [notes, setNotes] = useState([]);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

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

    const createNote = async (e) => {
        e.preventDefault();
        api
            .post("api/notes/", { title, content })
            .then((res) => {
                if (res.status === 201) alert("Note created");
                else alert("Error creating note");
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
            <div>
                <h1>Create a note</h1>
                <form onSubmit={createNote}>
                    <label>
                        Title:
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                        />
                    </label>
                    <label>
                        Content:
                        <textarea
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            required
                        />
                    </label>
                    <button type="submit">Create</button>
                </form>
            </div>
        </div>
    );
}

export default Home;