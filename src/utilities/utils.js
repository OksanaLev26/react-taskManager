import { getTasks } from "../services/taskManager-api";

export const getAllTasks = async (setTasks) => {
    await getTasks().then((res) => {
        const newTasks = res.filter((task) => task.status === "New");
        const inProgressTasks = res.filter(
          (task) => task.status === "In Progress"
        );
        const onHoldTasks = res.filter((task) => task.status === "On Hold");
        const readyForQATasks = res.filter(
          (task) => task.status === "Ready For QA"
        );
        const doneTasks = res.filter((task) => task.status === "Done");
        setTasks({
          new: newTasks,
          inProgress: inProgressTasks,
          onHold: onHoldTasks,
          readyForQa: readyForQATasks,
          done: doneTasks,
        });
      });
}

export const move = (array, from, to) => {
  if (to === from) return array;

  const target = array[from];
  const increment = to < from ? -1 : 1;

  for (let k = from; k !== to; k += increment) {
    array[k] = array[k + increment];
  }
  array[to] = target;
  return array;
}

export const camalize = (key) => {
  return key.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
}