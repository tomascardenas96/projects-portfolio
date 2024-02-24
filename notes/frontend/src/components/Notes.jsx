import React, { useEffect } from "react";
import "./styles/Notes.css";
import Note from "./Note";
import useNotes from "../hooks/useNotes";

function Notes() {
  const { notes, loading, expired } = useNotes();

  return (
    <>
      <section className="notes__container">
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
      </section>
    </>
  );
}

export default Notes;
