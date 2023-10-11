import { useState } from "react";

import { createTask } from "../../services/taskManager-api";
import { useNavigate } from "react-router-dom";
import "./createTask.css";

export const CreateTask = () => {
  const [values, setValues] = useState({
    title: "",
    user: "",
    description: "",
    dueDate: "",
    status: "",
  });
  const [error, setError] = useState(null);

  const nav = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      createTask(values).then((res) => nav(`/`));
      setValues({
        title: "",
        user: "",
        description: "",
        dueDate: "",
        status: "",
      });
    } catch (error) {
      setError(error);
    }
  };

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleClearClick = () => {
    setValues({
      title: "",
      user: "",
      description: "",
      dueDate: "",
      status: "",
    });
  };

  return (
    <div className="createFormContainer">
      <form className="createForm" method="post" onSubmit={handleSubmit}>
        <div className="titleCreate">Create New Task</div>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={values.title}
          onChange={handleChange}
        ></input>
        <label>User name:</label>
        <input
          type="text"
          name="user"
          value={values.user}
          onChange={handleChange}
        ></input>
        <label>Description:</label>
        <textarea
          type="text"
          name="description"
          value={values.description}
          onChange={handleChange}
        ></textarea>
        <label>Due Date: </label>
        <input
          type="text"
          name="dueDate"
          value={values.dueDate}
          onChange={handleChange}
        ></input>
        <label>Status: </label>
        <input
          type="text"
          name="status"
          value={values.status}
          onChange={handleChange}
        ></input>
        <div className="footer">
          <a className="linkStyles" href="/">
            <div className="buttonStyles">Back</div>
          </a>
          <button className="buttonStyles" onClick={handleClearClick}>
            Clear All
          </button>
          <button className="buttonStyles right" type="submit">
            Create
          </button>
        </div>
      </form>
      <div>{values.error}</div>
    </div>
  );
};
