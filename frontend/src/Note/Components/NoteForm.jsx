import { useState } from "react";
import { postNote } from "../Services/NoteServices";
import PropTypes from "prop-types";
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
            <fieldset className="noteForm">
                <legend>Note Info</legend>
                <label>
                    <p>Title:</p>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </label>
                <label>
                    <p>Content:</p>
                    <textarea
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        required
                    />
                </label>
                <button type="submit">Create</button>
            </fieldset>
        </form>
    </div>
}

NoteForm.propTypes = {
    getListOfNotes: PropTypes.func.isRequired,
};
