import { useState } from "react";
import useNotes from "./useNotes";

function useAddNote() {
  const accessToken = localStorage.getItem("accessToken");
  const [loading, setLoading] = useState(false);
  const [expired, setExpired] = useState(false);
  const [newNote, setNewNote] = useState({
    title: "",
    description: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setNewNote({ ...newNote, [name]: value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await fetch("http://localhost:4000/api/v1/notes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify(newNote),
      });
      const parsedResponse = await response.json();
      console.log(parsedResponse);
      if (parsedResponse.error) {
        localStorage.remove("accessToken");
        throw new Error(parsedResponse.error);
      }
    } catch (err) {
      setExpired(true);
    } finally {
      setLoading(false);
      setNewNote({
        title: "",
        description: ""
      });
    }
  }

  return { handleChange, handleSubmit, expired, loading, newNote };
}

export default useAddNote;
