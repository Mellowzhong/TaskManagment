import React, { useState } from "react";
import { postNote } from "../Services/NoteServices";

export default function NoteForm({ getListOfNotes }) {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const createNote = async (e) => {
        e.preventDefault();
        const response = await postNote(title, content);
        if (response.success) {
            alert("Note created");
            await getListOfNotes();
            setTitle("");
            setContent("");
        } else {
            alert("Error creating note");
        }
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
            <br />
            <label>
                Content:
                <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    required
                />
            </label>
            <br />
            <button type="submit">Create</button>
        </form>
    </div>
}

