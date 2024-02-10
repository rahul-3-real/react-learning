import { useRef } from "react";

import Input from "./Input";
import Modal from "./Modal";

const AddNewProject = ({ onAddProject, onCancelProject }) => {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();
  const modal = useRef();

  const handleSave = () => {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    // Validation
    if (
      enteredTitle.trim() === "" ||
      enteredDescription.trim() === "" ||
      enteredDueDate.trim() === ""
    ) {
      modal.current.open();
      return;
    }

    const project = {
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    };

    onAddProject(project);

    title.current.value = "";
    description.current.value = "";
    dueDate.current.value = "";
  };

  return (
    <>
      <Modal ref={modal} title="Error">
        <h5>Please fill all fields</h5>
      </Modal>

      <div className="card">
        <h5>Add Project</h5>
        <Input label="Title" type="text" ref={title} />
        <Input label="Description" type="textarea" ref={description} />
        <Input label="Due Date" type="date" ref={dueDate} />
        <button className="button-alt" onClick={handleSave}>
          Save
        </button>
        <button onClick={onCancelProject} className="button">
          Cancel
        </button>
      </div>
    </>
  );
};

export default AddNewProject;
