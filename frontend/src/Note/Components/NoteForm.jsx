import { useState } from "react";
import { postNote, putNote } from "../Services/NoteServices";
import PropTypes from "prop-types";

export default function NoteForm({ getListOfNotes, closeForm, noteId, passTittle = '', passContent = '', isEditing, setIsEditing }) {
    const [title, setTitle] = useState(passTittle);
    const [content, setContent] = useState(passContent);

    const createNote = async (e) => {
        e.preventDefault();
        const response = await postNote(title, content);
        if (response.success) {
            alert("Note created");
            await getListOfNotes();
            setTitle("");
            setContent("");
            closeForm();
        } else {
            alert("Error creating note");
        }
    };

    const updateNote = async (e) => {
        e.preventDefault();

        const response = await putNote(noteId, title, content);
        if (response.success) {
            alert("Note updated");
            await getListOfNotes();
            setIsEditing(false);
        } else {
            alert("Error updating note");
        }
    }

    return (
        <div>
            <form onSubmit={isEditing ? updateNote : createNote}>
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
                    <button type="submit">{isEditing ? "Update Info" : "Create"}</button>
                    <button type="button" onClick={() => isEditing ? setIsEditing(false) : closeForm()}>
                        Cancel
                    </button>
                </fieldset>
            </form>
        </div>
    );
}

NoteForm.propTypes = {
    getListOfNotes: PropTypes.func.isRequired,
    closeForm: PropTypes.func.isRequired,
    noteId: PropTypes.number,
    passTittle: PropTypes.string,
    passContent: PropTypes.string,
    isEditing: PropTypes.bool,
    setIsEditing: PropTypes.func
};