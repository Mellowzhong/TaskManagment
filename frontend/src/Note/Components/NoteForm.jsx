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
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <form
                onSubmit={isEditing ? updateNote : createNote}
                className="bg-white rounded-lg shadow-lg w-full max-w-md p-6"
            >
                {/* Header */}
                <div className="flex justify-between items-center border-b pb-4">
                    <h2 className="text-xl font-bold text-gray-800">
                        {isEditing ? "Edit Note" : "Create Note"}
                    </h2>
                    <button
                        onClick={() => (isEditing ? setIsEditing(false) : closeForm())}
                        className="text-gray-500 hover:text-gray-700 focus:outline-none"
                        aria-label="Close"
                    >
                        ✕
                    </button>
                </div>

                {/* Body */}
                <fieldset className="mt-4 space-y-4">
                    <label className="block">
                        <span className="block text-sm font-medium text-gray-700">Title:</span>
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                            className="mt-1 p-2 block w-full rounded-md border border-black shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
                        />
                    </label>

                    <label className="block">
                        <span className="block text-sm font-medium text-gray-700">Content:</span>
                        <textarea
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            required
                            rows="5"
                            className="mt-1 p-2 block w-full rounded-md border border-black shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
                        />
                    </label>
                </fieldset>

                {/* Footer */}
                <div className="mt-6 flex justify-center space-x-3">
                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
                    >
                        {isEditing ? "Update Info" : "Create"}
                    </button>
                </div>
            </form>
        </div>
    );
}

NoteForm.propTypes = {
    getListOfNotes: PropTypes.func.isRequired,
    closeForm: PropTypes.func,
    noteId: PropTypes.number,
    passTittle: PropTypes.string,
    passContent: PropTypes.string,
    isEditing: PropTypes.bool,
    setIsEditing: PropTypes.func
};
