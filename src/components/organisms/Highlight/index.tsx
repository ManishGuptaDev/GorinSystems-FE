/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { FC, useEffect, useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
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
      order: highlights.length + 1, // Set order based on current length
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

  // Function to update a highlight
  const updateHighlight = async (id: number, text: string, order: number) => {
    try {
      const response = await fetch(
        `http://localhost:8000/api/v1/highlight/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ text, order }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update highlight");
      }

      const data = await response.json();
      console.log("Highlight updated:", data);
      fetchHighlights(); // Refresh the list after updating a highlight
    } catch (error) {
      console.error("Error updating highlight:", error);
    }
  };

  // Function to handle drag and drop
  const onDragEnd = (result: any) => {
    if (!result.destination) return;

    const items = Array.from(highlights);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setHighlights(items);
    // TODO: Update the order on the server if needed
  };

  // Fetch highlights when the component mounts
  useEffect(() => {
    fetchHighlights();
  }, []);

  const handleDelete = async (id: number): Promise<void> => {
    try {
      // Update local state to remove the deleted highlight
      setHighlights(highlights.filter((highlight) => highlight.id !== id));

      // Make a DELETE request to the server
      const response = await fetch(
        `http://localhost:8000/api/v1/highlight/${id}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error("Failed to delete highlight");
      }
    } catch (error) {
      console.error("Error deleting highlight:", error);
    }
  };

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
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="highlights">
            {(provided) => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                {highlights.map((highlight, index) => (
                  <Draggable
                    key={highlight.id}
                    draggableId={highlight.id.toString()}
                    index={index}
                  >
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        className={styles.highlightItem}
                      >
                        {/* Drag Handle */}
                        <button
                          {...provided.dragHandleProps}
                          className={styles.dragHandle}
                        >
                          Drag Me
                        </button>

                        {/* Input Field for Editing Highlight Text */}
                        <input
                          type="text"
                          value={highlight.text}
                          onChange={(e) =>
                            updateHighlight(
                              highlight.id,
                              e.target.value,
                              highlight.order
                            )
                          }
                          className={styles.inputField}
                        />

                        {/* Delete Button */}
                        <Button
                          color="primary"
                          onClick={() => handleDelete(highlight.id)}
                        >
                          Delete
                        </Button>
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      )}
    </div>
  );
};

export default Highlight;
