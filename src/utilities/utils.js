import { getTasks } from "../services/taskManager-api";

export const getAllTasks = async (setTasks) => {
  await getTasks().then((res) => {
    const newTasks = res.filter((task) => task.status.toLowerCase() === "new");
    const inProgressTasks = res.filter(
      (task) => task.status.toLowerCase().split(" ").join("") === "inprogress");
    const onHoldTasks = res.filter(
      (task) => task.status.toLowerCase().split(" ").join("") === "onhold"
    );
    const readyForQATasks = res.filter(
      (task) => task.status.toLowerCase().split(" ").join("") === "readyforqa"
    );
    const doneTasks = res.filter(
      (task) => task.status.toLowerCase() === "done"
    );
    setTasks({
      new: { id: "new", list: newTasks },
      inProgress: { id: "inProgress", list: inProgressTasks },
      onHold: { id: "onHold", list: onHoldTasks },
      readyForQa: { id: "readyForQa", list: readyForQATasks },
      done: { id: "done", list: doneTasks },
    });
  });
};

export const move = (array, from, to) => {
  if (to === from) return array;

  const target = array[from];
  const increment = to < from ? -1 : 1;

  for (let k = from; k !== to; k += increment) {
    array[k] = array[k + increment];
  }
  array[to] = target;
  return array;
};

export const camalize = (key) => {
  return key
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
};
