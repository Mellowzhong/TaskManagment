import React from 'react';

export default function Note({ note, onDelete }) {
    const formatDate = new Date(note.created_at).toLocaleDateString("es-US");

    return (
        <section>
            <h3>{note.title}</h3>
            <p>{note.content}</p>
            <div>
                <time>{formatDate}</time>
            </div>
            <button onClick={() => onDelete(note.id)}>Delete</button>
        </section>
    );
}