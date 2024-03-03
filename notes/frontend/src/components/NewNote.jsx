import React from "react";
import useAddNote from "../hooks/useAddNote";
import "./styles/NewNote.css";


function NewNote() {
  const { handleChange, handleSubmit, expired, loading, newNote } =
    useAddNote();

  return (
    <div className="new-note__container">
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
          <textarea
            type="text"
            onChange={handleChange}
            name="description"
            value={newNote.description}
          />
        </label>
        <input type="submit" value="Add" />
      </form>
      
    </div>
  );
}

export default NewNote;
