import { useState } from "react";
import Sidebar from "./components/Sidebar";
import NoProjectSelected from "./components/NoProjectSelected";
import AddNewProject from "./components/AddNewProject";
import ProjectDetail from "./components/ProjectDetail";

const App = () => {
  // State
  const [projectInfo, setProjectInfo] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  });

  // Functions
  const handleStartAddProject = () => {
    setProjectInfo((prevState) => ({
      ...prevState,
      selectedProjectId: null,
    }));
  };

  const handleAddProject = (projectData) => {
    const project = {
      ...projectData,
      id: Math.random(),
    };
    setProjectInfo((prevState) => ({
      ...prevState,
      projects: [...prevState.projects, project],
    }));
  };

  const handleCancelProcess = () => {
    setProjectInfo((prevState) => ({
      ...prevState,
      selectedProjectId: undefined,
    }));
  };

  const handleOpenProject = (projectId) => {
    setProjectInfo((prevState) => ({
      ...prevState,
      selectedProjectId: projectId,
    }));
  };

  const handleDeleteProject = () => {
    const newProjects = projectInfo.projects.filter(
      (project) => project.id != projectInfo.selectedProjectId
    );
    setProjectInfo((prevState) => ({
      ...prevState,
      selectedProjectId: undefined,
      projects: newProjects,
    }));
  };

  const handleAddTask = (taskData) => {
    setProjectInfo((prevState) => ({
      ...prevState,
      tasks: [...prevState.tasks, taskData],
    }));

    console.log(projectInfo);
  };

  // Content
  let content;
  if (projectInfo.selectedProjectId === undefined) {
    content = <NoProjectSelected onAddProjectHandler={handleStartAddProject} />;
  } else if (projectInfo.selectedProjectId === null) {
    content = (
      <AddNewProject
        onAddProject={handleAddProject}
        onCancelProject={handleCancelProcess}
      />
    );
  } else {
    projectInfo.projects.forEach((project) => {
      if (projectInfo.selectedProjectId === project.id) {
        const filteredTasks = projectInfo.tasks.filter(
          (task) => task.projectId === project.id
        );

        console.log(filteredTasks);

        const data = project;
        content = (
          <ProjectDetail
            project={data}
            tasks={filteredTasks}
            onDeleteProject={handleDeleteProject}
            onAddTask={handleAddTask}
          />
        );
      }
    });
  }

  return (
    <main className="main">
      {/* Sidebar */}
      <Sidebar
        onAddProjectHandler={handleStartAddProject}
        projectInfo={projectInfo}
        handleOpenProject={handleOpenProject}
      />

      {/* Section */}
      <section className="section">{content}</section>
    </main>
  );
};

export default App;
