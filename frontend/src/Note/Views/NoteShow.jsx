import PropTypes from 'prop-types';
import { useRef } from 'react';
import ModalNote from '../Components/ModalNote';

function NoteShow({ note, onDelete, getListOfNotes }) {
    const formatDate = new Date(note.created_at).toLocaleDateString("es-US");
    const dialogRef = useRef(null);

    const showNoteDetail = () => {
        dialogRef.current.showModal();
    };

    const closeNoteDetail = () => {
        dialogRef.current.close();
    };

    return (
        <section>
            <fieldset className="grid grid-cols-1 border border-black py-4 px-8 rounded-md">
                <legend>Note Info</legend>
                <div className="grid text-center">
                    <span className="font-bold">Title</span>
                    <h3 className="note-tittle">{note.title}</h3>
                </div>
                <div className="grid text-center">
                    <span className="font-bold">Created</span>
                    <time className="block">{formatDate}</time>
                </div>
                {/* Botón para abrir el modal */}
                <button
                    onClick={showNoteDetail}
                    className="p-2 my-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
                >
                    View details
                </button>
            </fieldset>

            {/* Modal */}
            <dialog ref={dialogRef} className="rounded-md p-4">
                <ModalNote
                    note={note}
                    onDelete={onDelete}
                    getListOfNotes={getListOfNotes}
                    formatDate={formatDate}
                    closeNoteDetail={closeNoteDetail}
                />
            </dialog>
        </section>
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
