import AddNewTask from "./AddNewTask";
import Tasks from "./Tasks";

const ProjectDetail = ({ project, onDeleteProject, onAddTask, tasks }) => {
  return (
    <>
      <div className="card">
        <h5>{project.title}</h5>
        <p>{project.description}</p>
        <p>
          <b>Due Date : {project.dueDate}</b>
        </p>
        <button className="button-alt" onClick={onDeleteProject}>
          Delete
        </button>
      </div>
      <div className="card" style={{ marginTop: "30px" }}>
        <AddNewTask project={project} onAddTask={onAddTask} />
        <Tasks tasks={tasks} />
      </div>
    </>
  );
};

export default ProjectDetail;
