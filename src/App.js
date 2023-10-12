import { Route, Routes } from "react-router-dom";

import { TasksList } from "./pages/taskList/TasksList";
import { Task } from "./components/task/Task";
import { CreateTask } from "./pages/createTask/CreateTask";
import "./app.css";
import { EditTask } from "./pages/EditTask/EditTask";

export const App = () => {
  
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<TasksList />} />
        <Route path="/:id" element={<Task />} />
        <Route path="/:id/edit" element={ <EditTask/>} />
        <Route path="/create" element={<CreateTask />} />
      </Routes>
    </div>
  );
};
