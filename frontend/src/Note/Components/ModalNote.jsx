import PropTypes from 'prop-types';
import NoteForm from '../Components/NoteForm';
import { useState } from 'react';

export default function ModalNote({ note, onDelete, getListOfNotes, formatDate, closeNoteDetail }) {
    const [isEditing, setIsEditing] = useState(false);

    return (
        <>
            {isEditing ? (
                <NoteForm
                    getListOfNotes={getListOfNotes}
                    noteId={note.id}
                    passTittle={note.title}
                    passContent={note.content}
                    isEditing={isEditing}
                    setIsEditing={setIsEditing}
                />
            ) : (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6">
                        {/* Header */}
                        <div className="flex justify-between items-center border-b pb-4">
                            <h2 className="text-xl font-bold text-gray-800">Note Info</h2>
                            <button
                                onClick={closeNoteDetail}
                                className="text-gray-500 hover:text-gray-700 focus:outline-none"
                                aria-label="Close"
                            >
                                ✕
                            </button>
                        </div>

                        {/* Body */}
                        <div className="mt-4 space-y-4">
                            <div>
                                <span className="block text-sm font-semibold text-gray-600">Title:</span>
                                <h3 className="text-lg font-medium text-gray-800">{note.title}</h3>
                            </div>
                            <div>
                                <span className="block text-sm font-semibold text-gray-600">Created:</span>
                                <time className="text-sm text-gray-700">{formatDate}</time>
                            </div>
                            <div>
                                <span className="block text-sm font-semibold text-gray-600">Content:</span>
                                <p className="text-sm text-gray-700">{note.content}</p>
                            </div>
                        </div>

                        {/* Footer */}
                        <div className="mt-6 flex justify-center space-x-3">
                            {/* Delete Button */}
                            <button
                                onClick={() => onDelete(note.id)}
                                className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring focus:ring-red-300"
                            >
                                Delete
                            </button>

                            {/* Edit Button */}
                            <button
                                onClick={() => setIsEditing(true)}
                                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
                            >
                                Edit
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

ModalNote.propTypes = {
    note: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
        created_at: PropTypes.string.isRequired,
    }).isRequired,
    onDelete: PropTypes.func.isRequired,
    getListOfNotes: PropTypes.func.isRequired,
    formatDate: PropTypes.string.isRequired,
    closeNoteDetail: PropTypes.func.isRequired,
};
