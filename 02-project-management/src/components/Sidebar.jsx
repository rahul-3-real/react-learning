const Sidebar = ({ onStartAddProject }) => {
  return (
    <aside>
      <h4>Your Projects</h4>
      <button onClick={onStartAddProject}>Add Projects</button>
      <ul></ul>
    </aside>
  );
};

export default Sidebar;
