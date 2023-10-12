import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { getTask, editTask } from "../../services/taskManager-api";
import "./editTask.css";

export const EditTask = () => {
  const [task, setTask] = useState(null);

  const { id } = useParams();
  const nav = useNavigate();

  useEffect(() => {
    getTask(id).then((res) => {
      setTask(res.data);
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const updatedTask = {
      title: e.target.title.value,
      user: e.target.user.value,
      description: e.target.description.value,
      status: e.target.status.value,
      dueDate: e.target.dueDate.value,
    };

    editTask(task._id, updatedTask).then((res) => nav(`/`));
  };

  return (
    <>
      {task ? (
        <div className="editFormContainer">
          <form className="editForm" onSubmit={handleSubmit}>
            <div className="titleEdit">Edit Task</div>
            <label>Title:</label>
            <input
              type="text"
              name="title"
              defaultValue={task?.title}
            ></input>
            <label>User name:</label>
            <input
              type="text"
              name="user"
              defaultValue={task?.user}
            ></input>
            <label>Description:</label>
            <textarea
              type="text"
              name="description"
              defaultValue={task?.description}
            ></textarea>
            <label>Due Date: </label>
            <input
              type="text"
              name="dueDate"
              defaultValue={task?.dueDate}
            ></input>
            <label>Status: </label>
            <input
              type="text"
              name="status"
              defaultValue={task?.status}
            ></input>
            <div className="footer">
              <a className="linkStyles" href="/">
                <div className="buttonStyles">Back</div>
              </a>
              <button className="buttonStyles right" type="submit">
                Edit Task
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};
