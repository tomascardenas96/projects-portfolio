import React from "react";
import "./styles/Notes.css";
import Note from "./Note";
import useNotes from "../hooks/useNotes";
import NewNote from "./NewNote";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Notes() {
  const { notes, loading, expired } = useNotes();

  return (
    <>
      <NewNote />
      <section className="notes__container">
        {notes.length > 0 ? (
          <div className="notes">
            {notes
              .slice()
              .reverse()
              .map((note) => (
                <Note
                  key={note.note_id}
                  title={note.title}
                  description={note.description}
                  id={note.note_id}
                />
              ))}
            {loading && <h1>Loading...</h1>}
          </div>
        ) : (
          <div className="empty-notes">
            <h1>You have not added a note yet...</h1>
          </div>
        )}
        <ToastContainer position="bottom-right" hideProgressBar autoClose={1500} />
      </section>
    </>
  );
}

export default Notes;
