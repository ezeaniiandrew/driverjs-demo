const initialData = [
  { id: 1, title: "Type your first todo", status: "active" },
  { id: 2, title: "Type your second todo", status: "active" },
];

const subscribers = new Set();
const runSubscribers = () => {
  subscribers.forEach((callback) => callback());
};

let todos = JSON.parse(localStorage.getItem("todos")) ?? initialData;

export const getSnapshots = () => {
  localStorage.setItem("todos", JSON.stringify(todos));
  return todos;
};

export const subscribe = (callback) => {
  subscribers.add(callback);
  return () => subscribers.delete(callback);
};

export const addTodo = (task) => {
  todos = [...todos, task];
  runSubscribers();
};

export const toggleTodoStatus = (taskId) => {
  todos = todos.map((task) =>
    task.id === taskId
      ? {
          ...task,
          status: task.status === "completed" ? "active" : "completed",
        }
      : task
  );

  runSubscribers();
};

export const deleteTodo = (taskId) => {
  todos = todos.filter((task) => task.id !== taskId);
  runSubscribers();
};

export const clearCompletedTodos = () => {
  todos = todos.filter((task) => task.status !== "completed");
  runSubscribers();
};
