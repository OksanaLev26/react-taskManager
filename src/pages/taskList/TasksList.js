import { useEffect, useState } from "react";
import { DragDropContext } from "@hello-pangea/dnd";

import { deleteTask, editTask } from "../../services/taskManager-api";
import { getAllTasks } from "../../utilities/utils";
import { Column } from "../../components/column/Column";
import "./taskList.css";

export const TasksList = () => {
  const [tasks, setTasks] = useState(null);

  const handleDeleteClick = (task) => {
    deleteTask(task._id);
    getAllTasks(setTasks);
  };

  const onDragEnd = async ({ source, destination }) => {
    if (destination === undefined || destination === null) return null;

    if (
      source.droppableId === destination.droppableId &&
      destination.index === source.index
    ) {
      return null;
    }

    const start = tasks[source.droppableId];
    const end = tasks[destination.droppableId];

    // If start is the same as end, we're in the same column
    if (start.id === end.id) {
      // Move the item within the list
      // Start by making a new list without the dragged item
      const newList = start.list.filter((_, index) => index !== source.index);

      // Then insert the item at the right location
      newList.splice(destination.index, 0, start.list[source.index]);

      // Then create a new copy of the column object
      const newCol = {
        id: start.id,
        list: newList,
      };

      // Update the state
      setTasks((state) => ({ ...state, [newCol.id]: newCol }));

      return null;
    } else {
      // If start is different from end, we need to update multiple columns
      // Filter the start list like before
      const newStartList = start.list.filter(
        (_, index) => index !== source.index
      );

      // Create a new start column
      const newStartCol = {
        id: start.id,
        list: newStartList,
      };

      // Make a new end list array
      const newEndList = end.list;

      // Insert the item into the end list
      newEndList.splice(destination.index, 0, {...start.list[source.index], status: destination.droppableId,});

      // Create a new end column
      const newEndCol = {
        id: end.id,
        list: newEndList,
      };

      // Update the state
     setTasks((state) => ({
        ...state,
        [newStartCol.id]: newStartCol,
        [newEndCol.id]: newEndCol,
      }));
      const draggableTask = start.list[source.index];
      const updatedTask = {
        ...draggableTask,
        status: destination.droppableId,
      };

      await editTask(draggableTask._id, updatedTask);
      await getAllTasks(setTasks);

      return null;
    }
  };

  useEffect(() => {
    getAllTasks(setTasks);
  }, []);

  return (
    <>
      {tasks ? (
        <div className="tasksList">
          <DragDropContext onDragEnd={onDragEnd}>
            {Object.values(tasks).map((column) => (
              <Column
                key={column.id}
                column={column}
                handleDeleteTask={handleDeleteClick}
              />
            ))}
          </DragDropContext>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};
