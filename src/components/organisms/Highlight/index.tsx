"use client";

import { FC, useEffect, useState } from "react";
import styles from "./Highlight.module.css";
import Button from "@/components/atoms/Button";

type Highlight = {
  id: number;
  text: string;
  order: number;
};

const Highlight: FC = () => {
  const [highlights, setHighlights] = useState<Highlight[]>([]); // State to store highlights
  const [loading, setLoading] = useState<boolean>(true); // State to manage loading status

  // Function to fetch all highlights
  const fetchHighlights = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/v1/highlight/");
      if (!response.ok) {
        throw new Error("Failed to fetch highlights");
      }
      const data = await response.json();
      setHighlights(data.data); // Access the data property from the response
    } catch (error) {
      console.error("Error fetching highlights:", error);
    } finally {
      setLoading(false); // Set loading to false after fetching
    }
  };

  // Function to add a new highlight
  const addHighlight = async () => {
    const newHighlight = {
      text: "This is a new highlight", // Dummy text
      order: 1, // You can change this value if needed
    };

    try {
      const response = await fetch("http://localhost:8000/api/v1/highlight/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newHighlight),
      });

      if (!response.ok) {
        throw new Error("Failed to add highlight");
      }

      const data = await response.json();
      console.log("Highlight added:", data);
      fetchHighlights(); // Refresh the list after adding a new highlight
    } catch (error) {
      console.error("Error adding highlight:", error);
    }
  };

  // Fetch highlights when the component mounts
  useEffect(() => {
    fetchHighlights();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.add}>
        <p>Property highlights</p>
        <div>
          <Button color="primary" onClick={addHighlight}>
            Add highlights
          </Button>
        </div>
      </div>
      {loading ? (
        <p>Loading highlights...</p> // Loading message while fetching
      ) : (
        <div className={styles.highlightsList}>
          {highlights.map((highlight) => (
            <div key={highlight.id} className={styles.highlightItem}>
              <div>TODO: Drag drop item to change the order</div>
              <div>TODO: input field to edit the highlight text</div>
              <div>
                <Button color="primary">Delete</Button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Highlight;
