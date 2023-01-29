import { useStore } from "../contexts/StoreContext";

const useTask = () => {
  const store = useStore();

  const createTask = (val) => {
    const newTasks = [...store.tasks];
    newTasks.push(val);
    updateStore(newTasks);
  };

  const editTask = (id, val) => {
    const newTasks = [...store.tasks];
    newTasks.find((item, index) => index === id).priority = val;
    updateStore(newTasks);
  };

  const deleteTask = (val) => {
    const newTasks = store.tasks.filter((item, index) => index != val);
    updateStore(newTasks);
  };

  const updateStore = (val) => {
    store.setTasks(val);
    localStorage.setItem("tasks", JSON.stringify(val));
  };

  return { createTask, editTask, deleteTask };
};

export default useTask;
