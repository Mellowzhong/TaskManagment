import React, { useState } from "react";
import api from "../../api";


export default function NoteForm() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const getNotes = async () => {
        api
            .get("api/notes/")
            .then((res) => res.data)
            .then((data) => setNotes(data))
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

    return <div>
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
}

