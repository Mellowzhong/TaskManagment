import React from 'react';

export default function Note({ note, onDelete }) {
    const formatDate = new Date(note.created_at).toLocaleDateString("es-US");

    return (
        <div>
            <h2>{note.title}</h2>
            <p>{note.content}</p>
            <p>{formatDate}</p>
            <button onClick={() => onDelete(note.id)}>Delete</button>
        </div>
    );
}