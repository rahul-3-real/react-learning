import Input from "./Input";

const NewProject = () => {
  return (
    <>
      <ul>
        <li>
          <button>Cancel</button>
        </li>
        <li>
          <button>Save</button>
        </li>
      </ul>
      <div>
        <Input
          type="text"
          id="project-name"
          label="Project Name"
          placeholder="Project Name"
          required
        />
        <Input
          type="date"
          id="due-date"
          label="Due Date"
          placeholder="Due Date"
          required
        />
        <Input
          type="textarea"
          id="description"
          label="Description"
          placeholder="Description"
          required
        />
        <button>Create Project</button>
      </div>
    </>
  );
};

export default NewProject;
