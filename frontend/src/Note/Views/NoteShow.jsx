import PropTypes from 'prop-types';

function Note({ note, onDelete }) {
    const formatDate = new Date(note.created_at).toLocaleDateString("es-US");

    return (
        <section className="note-body">
            <h3>{note.title}</h3>
            <p>{note.content}</p>
            <div>
                <time>{formatDate}</time>
            </div>
            <button onClick={() => onDelete(note.id)}>Delete</button>
        </section>
    );
}

Note.propTypes = {
    note: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
        created_at: PropTypes.string.isRequired,
    }).isRequired,
    onDelete: PropTypes.func.isRequired,
};

export default Note;