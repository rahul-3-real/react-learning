import { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";

const AddNewTask = ({ project, onAddTask }) => {
  const title = useRef();
  const description = useRef();
  const modal = useRef();

  const handleSave = () => {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;

    // Validation
    if (enteredTitle.trim() === "" || enteredDescription.trim() === "") {
      modal.current.open();
      return;
    }

    const task = {
      id: Math.random(),
      title: enteredTitle,
      description: enteredDescription,
      projectId: project.id,
    };

    onAddTask(task);

    title.current.value = "";
    description.current.value = "";
  };

  return (
    <>
      <Modal ref={modal} title="Error">
        <h5>Please fill all fields</h5>
      </Modal>
      <h4>Add Task</h4>
      <Input label="Title" type="text" ref={title} />
      <Input label="Description" type="textarea" ref={description} />
      <button className="button-alt" onClick={handleSave}>
        Save
      </button>
    </>
  );
};

export default AddNewTask;
