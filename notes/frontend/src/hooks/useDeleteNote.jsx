import { useState } from "react";
import toast, { Toaster } from 'solid-toast';

function useDeleteNote(id) {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [successDelete, setSuccessDelete] = useState(false);

  const accessToken = localStorage.getItem("accessToken");

  const handleDeleteNote = async () => {
    try {
      setLoading(true);
      const response = await fetch(`http://localhost:4000/api/v1/notes/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${accessToken}`,
        },
      });
      const parsedResponse = await response.json();
      if (parsedResponse.error) {
        setExpired(true);
        setTimeout(() => {
          location.reload();
        }, 2000);
        setSuccessDelete(true);
      }
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return { error, loading, handleDeleteNote, successDelete };
}

export default useDeleteNote;
