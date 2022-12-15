import React, { useEffect, useState } from "react";

import Tasks from "./components/Tasks/Tasks";
import NewTask from "./components/NewTask/NewTask";
import { API_URL } from "./config";
import useApi from "./hooks/use-api";

function App() {
  const { isLoading, error, sendRequest } = useApi();
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const handleData = (data) => {
      const loadedTasks = [];

      for (const taskKey in data) {
        loadedTasks.push({ id: taskKey, text: data[taskKey].text });
      }

      setTasks(loadedTasks);
    };
    sendRequest({ url: API_URL }, handleData);
  }, [sendRequest]);

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={sendRequest}
      />
    </React.Fragment>
  );
}

export default App;
