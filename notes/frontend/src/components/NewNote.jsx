import React from "react";
import "./styles/NewNote.css";
import useAddNote from "../hooks/useAddNote";

function NewNote() {
  const { handleChange, handleSubmit, expired, loading, newNote } =
    useAddNote();


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">
          Title
          <input
            type="text"
            onChange={handleChange}
            name="title"
            value={newNote.title}
          />
        </label>
        <label htmlFor="description">
          Description
          <input
            type="text"
            onChange={handleChange}
            name="description"
            value={newNote.description}
          />
        </label>
        <input type="submit" value="Agregar" />
      </form>
    </div>
  );
}

export default NewNote;