import React from "react";
import "./styles/Note.css";

function Note({title, description}) {
  return (
    <div className="note__container">
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
}

export default Note;
