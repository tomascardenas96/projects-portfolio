import React from "react";
import { IoMdClose } from "react-icons/io";
import "./styles/Note.css";
import useDeleteNote from "../hooks/useDeleteNote";

function Note({title, description, id}) {
  const { handleDeleteNote } = useDeleteNote(id);

  return (
    <div className="note__container">
      <h1>{title}</h1>
      <p>{description}</p>
      <p className="note-close" onClick={handleDeleteNote}><IoMdClose /></p>
    </div>
  );
}

export default Note;
