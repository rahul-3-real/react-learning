import { useRef } from "react";
import Input from "./Input";

const NewProject = ({ onAdd }) => {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  const handleSave = (e) => {
    e.preventDefault();

    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  };

  return (
    <>
      <ul>
        <li>
          <button>Cancel</button>
        </li>
        <li>
          <button onClick={handleSave}>Save</button>
        </li>
      </ul>
      <form>
        <Input
          type="text"
          id="title"
          label="Title"
          placeholder="Title"
          required
          ref={title}
        />
        <Input
          type="textarea"
          id="description"
          label="Description"
          placeholder="Description"
          required
          ref={description}
        />
        <Input
          type="date"
          id="due-date"
          label="Due Date"
          placeholder="Due Date"
          required
          ref={dueDate}
        />
      </form>
    </>
  );
};

export default NewProject;
