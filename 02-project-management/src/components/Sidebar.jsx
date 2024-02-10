const Sidebar = ({ onAddProjectHandler, projectInfo, handleOpenProject }) => {
  return (
    <aside className="sidebar">
      <h1>Project Management</h1>
      <button className="button" onClick={onAddProjectHandler}>
        + Add Project
      </button>
      <hr />
      <ul>
        {projectInfo.projects.length > 0 ? (
          projectInfo.projects.map((project) => (
            <li onClick={() => handleOpenProject(project.id)} key={project.id}>
              {project.title}
            </li>
          ))
        ) : (
          <li className="no-item">No items</li>
        )}
      </ul>
    </aside>
  );
};

export default Sidebar;
