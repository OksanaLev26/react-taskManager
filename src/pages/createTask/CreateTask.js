import { useState } from "react";
import "./createTask.css";
import { createTask } from "../../services/taskManager-api";

export const CreateTask = () => {
  const [values, setValues] = useState({
    title: "",
    user: "",
    description: "",
    dueDate: "",
    status: "",
  });
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      createTask(values);
      setValues({
        title: "",
        user: "",
        description: "",
        dueDate: "",
        status: "",
      });
      console.log("values", values);
    } catch (error) {
      setError(error);
    }

    console.log("submit", values);
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
    <div className="createForm">
      <form className="createForm" method="post" onSubmit={handleSubmit}>
        <h2>Create New Task</h2>
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
        <input
          type="text"
          name="description"
          value={values.description}
          onChange={handleChange}
        ></input>
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
          <button className="buttonStyles" type="submit">x
            Create New Task
          </button>
        </div>
      </form>
      <div>{values.error}</div>
    </div>
  );
};
