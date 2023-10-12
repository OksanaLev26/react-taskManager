import { Link } from "react-router-dom";
import { Draggable } from "@hello-pangea/dnd";

import "./task.css";

export const Task = ({ task, index, handleDeleteTask }) => {
  return (
    <Draggable draggableId={task.title} index={index}>
      {(provided) => (
        <div
          className="task"
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <div className="main">
            <div className="main-title">
              <div className="title">{task?.title}</div>
              <div className="status">Status: <b>{task?.status}</b></div>
            </div>
            <img
              className="user"
              src="https://icon-library.com/images/windows-user-icon/windows-user-icon-29.jpg"
            />
          </div>
          <div className="description">{task?.description}</div>
          <div className="dueDate">{task?.dueDate}</div>
          <div className="footerTask">
            <Link to={`/${task._id}/edit`}>
              <img
                className="footerImg"
                src="https://icon-library.com/images/edit-icon-vector/edit-icon-vector-20.jpg"
              />
            </Link>
            <div onClick={() => handleDeleteTask(task)}>
              <img
                className="footerImg"
                src="https://icon-library.com/images/img_509328.png"
              />
            </div>
          </div>
        </div>
      )}
    </Draggable>
  );
};
