const ProjectDetail = ({ project }) => {
  console.log(project);
  return (
    <>
      <div className="card">
        <h5>{project.title}</h5>
        <p>{project.description}</p>
        <button className="button-alt">Due Date : {project.dueDate}</button>
      </div>
      <div className="card"></div>
    </>
  );
};

export default ProjectDetail;
