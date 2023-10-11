import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
} from "@hello-pangea/dnd";

import { Task } from "../../components/task/Task";
import { deleteTask } from "../../services/taskManager-api";
import { camalize, getAllTasks, move } from "../../utilities/utils";
import "./taskList.css";

export const TasksList = () => {
  const [tasks, setTasks] = useState(null);

  const handleDeleteClick = (task) => {
    deleteTask(task._id);
    getAllTasks(setTasks);
  };

  const onDragEnd = (result) => {
    if (!result.destination) return;
    let task = {};
    const droppableArr = Object.values(tasks).find((value) => {
      task = value.find((item) => item._id === result.draggableId);
      return task;
    });
    let nextDroppableArr = [...droppableArr];
    const fromIndex = result.source.index;
    const toIndex = result.destination.index;
    nextDroppableArr = move(nextDroppableArr, fromIndex, toIndex);
    const key = camalize(task.status);
    tasks[key] = nextDroppableArr;
  };

  useEffect(() => {
    getAllTasks(setTasks);
  }, []);

  return (
    <>
      {tasks ? (
        <div className="tasksList">
          <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="new">
              {(provided) => (
                <div
                  className={tasks.new ? "item new" : "item"}
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  <div className="newTitle">
                    <h2>New</h2>
                    <Link to="/create">
                      <img
                        className="addImg"
                        src="https://icon-library.com/images/add-icon-transparent/add-icon-transparent-22.jpg"
                      />
                    </Link>
                  </div>
                  {tasks.new.map((task, index) => (
                    <div key={task._id} className="new">
                      <Draggable draggableId={task._id} index={index}>
                        {(provided, snapshot) => (
                          <div
                            key={task._id}
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            <Task
                              task={task}
                              handleDeleteTask={handleDeleteClick}
                            />
                          </div>
                        )}
                      </Draggable>
                    </div>
                  ))}
                </div>
              )}
            </Droppable>
          </DragDropContext>
          <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="inProgress">
              {(provided) => (
                <div
                  className={tasks.inProgress ? "item inProgress" : "item"}
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  <div className="newTitle">
                    <h2>In Progress</h2>
                  </div>
                  {tasks.inProgress.map((task, index) => (
                    <div key={task._id} className="inProgress">
                      <Draggable draggableId={task._id} index={index}>
                        {(provided, snapshot) => (
                          <div
                            key={task._id}
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            <Task
                              task={task}
                              handleDeleteTask={handleDeleteClick}
                            />
                          </div>
                        )}
                      </Draggable>
                    </div>
                  ))}
                </div>
              )}
            </Droppable>
          </DragDropContext>
          <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="inProgress">
              {(provided) => (
                <div
                  className={tasks.onHold ? "item onHold" : "item"}
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  <div className="newTitle">
                    <h2>On Hold</h2>
                  </div>
                  {tasks.onHold.map((task, index) => (
                    <div key={task._id} className="onHold">
                      <Draggable draggableId={task._id} index={index}>
                        {(provided, snapshot) => (
                          <div
                            key={task._id}
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            <Task
                              task={task}
                              handleDeleteTask={handleDeleteClick}
                            />
                          </div>
                        )}
                      </Draggable>
                    </div>
                  ))}
                </div>
              )}
            </Droppable>
          </DragDropContext>
          <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="inProgress">
              {(provided) => (
                <div
                  className={tasks.readyForQa ? "item readyForQA" : "item"}
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  <div className="newTitle">
                    <h2>Ready For QA</h2>
                  </div>
                  {tasks.readyForQa.map((task, index) => (
                    <div key={task._id} className="readyForQA">
                      <Draggable draggableId={task._id} index={index}>
                        {(provided, snapshot) => (
                          <div
                            key={task._id}
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            <Task
                              task={task}
                              handleDeleteTask={handleDeleteClick}
                            />
                          </div>
                        )}
                      </Draggable>
                    </div>
                  ))}
                </div>
              )}
            </Droppable>
          </DragDropContext>
          <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="inProgress">
              {(provided) => (
                <div
                  className={tasks.done ? "item done" : "item"}
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  <div className="newTitle">
                    <h2>Done</h2>
                  </div>
                  {tasks.done.map((task, index) => (
                    <div key={task._id} className="done">
                      <Draggable draggableId={task._id} index={index}>
                        {(provided, snapshot) => (
                          <div
                            key={task._id}
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            <Task
                              task={task}
                              handleDeleteTask={handleDeleteClick}
                            />
                          </div>
                        )}
                      </Draggable>
                    </div>
                  ))}
                </div>
              )}
            </Droppable>
          </DragDropContext>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};
