import Section from "../UI/Section";
import TaskForm from "./TaskForm";
import useApi from "../../hooks/use-api";
import { API_URL } from "../../config";

const NewTask = (props) => {
  const { isLoading, error, sendRequest } = useApi();

  const handleData = (taskText, data) => {
    const generatedId = data.name; // firebase-specific => "name" contains generated id
    const createdTask = { id: generatedId, text: taskText };

    props.onAddTask(createdTask);
  };

  const enterTaskHandler = async (taskText) => {
    sendRequest(
      {
        url: API_URL,
        method: "POST",
        body: { text: taskText },
        headers: {
          "Content-Type": "application/json",
        },
      },
      handleData.bind(null, taskText)
    );
  };

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
