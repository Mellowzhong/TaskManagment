import { useState } from 'react';
import PropTypes from 'prop-types';
import NoteForm from '../Components/NoteForm';

function NoteShow({ note, onDelete, getListOfNotes }) {
    const [isEditing, setIsEditing] = useState(false);
    const formatDate = new Date(note.created_at).toLocaleDateString("es-US")

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
                <section className="note-body">
                    <fieldset>
                        <legend>Note Info</legend>
                        <p>Title:</p>
                        <h3 className='note-tittle'>
                            {note.title}
                        </h3>
                        <p>Content:</p>
                        <p className='note-content'>{note.content}</p>
                        <div>
                            <time>{formatDate}</time>
                        </div>
                        <button onClick={() => onDelete(note.id)}>Delete</button>
                        <button onClick={() => setIsEditing(true)}>Edit</button>
                    </fieldset>
                </section>

            )}
        </>
    );
}

NoteShow.propTypes = {
    note: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
        created_at: PropTypes.string.isRequired,
    }).isRequired,
    onDelete: PropTypes.func.isRequired,
    getListOfNotes: PropTypes.func.isRequired,
};

export default NoteShow;