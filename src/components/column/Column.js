import { Droppable } from "@hello-pangea/dnd";
import { Link } from "react-router-dom";

import { Task } from "../task/Task";
import "./column.css";

export const Column = ({ column: { list, id }, handleDeleteTask }) => {
  return (
    <Droppable droppableId={id}>
      {(provided) => (
        <div key={id} className={`item ${id}`}>
          <div className="taskTitle">
            {id.charAt(0).toUpperCase() + id.slice(1)}
            {id === "new" && (
              <Link to="/create">
                <img
                  className="addImg"
                  src="https://icon-library.com/images/add-icon-transparent/add-icon-transparent-22.jpg"
                />
              </Link>
            )}
          </div>
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {list.map((item, index) => (
              <div key={item._id}>
                <Task
                  task={item}
                  index={index}
                  handleDeleteTask={handleDeleteTask}
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </Droppable>
  );
};
