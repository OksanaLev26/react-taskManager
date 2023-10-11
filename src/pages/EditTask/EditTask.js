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
      console.log("res", res);
      setTask(res.data);
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedTask = {
      title: e.target.title.value,
      user: e.target.user.value,
      description: e.target.description.value,
      status: e.target.status.value,
      dueDate: e.target.dueDate.value,
    };

    console.log('updatedTask', updatedTask)
    editTask(task._id, updatedTask).then((res) => nav(`/`));
  };

  const handleClearClick = () => {
    setTask(null);
  };

  return (
    <>
      {task ? (
        <div className="editFormForm">
          <form className="editForm" onSubmit={handleSubmit}>
            <h2>Edit Task</h2>
            <label>Title:</label>
            <input
              type="text"
              name="title"
              defaultValue={task?.title}
              // onChange={handleChange}
            ></input>
            <label>User name:</label>
            <input
              type="text"
              name="user"
              defaultValue={task?.user}
              // onChange={handleChange}
            ></input>
            <label>Description:</label>
            <input
              type="text"
              name="description"
              defaultValue={task?.description}
              // onChange={handleChange}
            ></input>
            <label>Due Date: </label>
            <input
              type="text"
              name="dueDate"
              defaultValue={task?.dueDate}
              // onChange={handleChange}
            ></input>
            <label>Status: </label>
            <input
              type="text"
              name="status"
              defaultValue={task?.status}
              // onChange={handleChange}
            ></input>
            <div className="footer">
              <a className="linkStyles" href="/">
                <div className="buttonStyles">Back</div>
              </a>
              <button className="buttonStyles" onClick={handleClearClick}>
                Clear All
              </button>
              <button className="buttonStyles" type="submit">
                Edit Task
              </button>
            </div>
          </form>
          {/* <div>{values.error}</div> */}
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};
