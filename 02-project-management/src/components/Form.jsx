import Input from "./Input";

const Form = () => {
  return (
    <div>
      <form action="">
        <Input id="title" label="Title" type="text" placeholder="Title" />
        <Input
          id="description"
          label="Description"
          type="textarea"
          placeholder="Description"
        />
        <Input
          id="due-date"
          label="Due Date"
          type="date"
          placeholder="Due Date"
        />
      </form>
    </div>
  );
};

export default Form;
