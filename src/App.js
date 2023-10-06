import { Route, Routes } from 'react-router-dom';
import './app.css';
import { TasksList } from './pages/taskList/TasksList';
import { Task } from './components/task/Task';
import { EditTask } from './pages/EditTask/EditTask';
import { CreateTask } from './pages/createTask/CreateTask';

export const App = () => {
  return (
    <div className="App">
       <Routes>
        <Route path="/" element={<TasksList />} />
        <Route path="/:id" element={<Task />} />
        <Route path="/:id/edit" element={<EditTask />} />
        <Route path="/create" element={<CreateTask />} />
      </Routes>
    </div>
  );
}