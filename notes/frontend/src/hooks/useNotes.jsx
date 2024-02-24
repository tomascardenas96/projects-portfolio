import { useEffect, useState } from "react";
import useAddNote from "./useAddNote";

function useNotes() {
  const accessToken = localStorage.getItem("accessToken");
  const [loading, setLoading] = useState(false);
  const [expired, setExpired] = useState(false);
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const getNotes = async () => {
      try {
        const response = await fetch("http://localhost:4000/api/v1/notes", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${accessToken}`,
          },
        });
        const parsedResponse = await response.json();
        if (parsedResponse.error) {
          localStorage.clear();
          throw new Error(parsedResponse.error);
        }
        setNotes(parsedResponse);
      } catch (err) {
        setExpired(true);
        setTimeout(() => {
          location.reload();
        }, 2000);
      } finally {
        setLoading(false);
      }
    };

    getNotes();
  }, [notes]);

  return { notes, loading, expired };
}

export default useNotes;
