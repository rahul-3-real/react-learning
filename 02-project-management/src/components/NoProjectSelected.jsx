const NoProjectSelected = ({ onAddProjectHandler }) => {
  return (
    <div className="card">
      <h5>Please Add A New Project</h5>
      <button className="button-alt" onClick={onAddProjectHandler}>
        Create a New Project
      </button>
    </div>
  );
};

export default NoProjectSelected;
