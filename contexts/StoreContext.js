import React, { useEffect, useContext, useState } from "react";

const StoreContext = React.createContext();

export function useStore() {
  return useContext(StoreContext);
}

export function StoreProvider({ children }) {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  return (
    <StoreContext.Provider
      value={{
        tasks: tasks,
        setTasks: setTasks,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
}
