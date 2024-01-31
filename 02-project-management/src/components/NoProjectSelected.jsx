const NoProjectSelected = ({ onStartAddProject }) => {
  return (
    <div>
      <h1>No Project Selected</h1>
      <p>Please select a project or create a new one!</p>
      <button onClick={onStartAddProject}>Add Project</button>
    </div>
  );
};

export default NoProjectSelected;
