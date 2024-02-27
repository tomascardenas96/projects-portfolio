import React from "react";
import "./styles/Notes.css";
import Note from "./Note";
import useNotes from "../hooks/useNotes";
import NewNote from "./NewNote";

function Notes() {
  const { notes, loading, expired } = useNotes();

  return (
    <>
      <NewNote />
      <section className="notes__container">
        {notes.length > 0 ? (
          <div className="notes">
            {notes.map((note) => (
              <Note
                key={note.note_id}
                title={note.title}
                description={note.description}
              />
            ))}
            {loading && <h1>Loading...</h1>}
          </div>
        ) : (
          <h1>Aun no has agregado ninguna nota</h1>
        )}
      </section>
    </>
  );
}

export default Notes;
