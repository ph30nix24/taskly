export const filterTask = (tasks) => { 
  const now = new Date();
  const isCompleted = tasks.filter((task) => task.isCompleted === true);
  const overdueTasks = tasks.filter(
    (task) => !task.isCompleted && new Date(task.dueDate) < now,
  );
  const pendingTasks = tasks.filter(
    (task) => !task.isCompleted && new Date(task.dueDate) >= now,
  );
  const filterdTasks = { isCompleted, overdueTasks, pendingTasks };
  return filterdTasks;
};