import { Link } from "react-router-dom";
import { deleteTask, getTasks } from "../../services/taskManager-api";
import "./task.css";

export const Task = ({ task, handleDeleteTask }) => {

  return (
    <div className="task" >
      <div className="main">
        <div className="title">{task?.title}</div>
        <img
          className="user"
          src="https://icon-library.com/images/windows-user-icon/windows-user-icon-29.jpg"
        />
      </div>
      <div className="description">{task?.description}</div>
      <div className="dueDate">{task?.dueDate}</div>
      <div className="footerTask">
        <Link to={`/${task._id}/edit`} >
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
  );
};
