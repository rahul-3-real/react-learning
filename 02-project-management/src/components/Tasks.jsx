const Tasks = ({ tasks }) => {
  return (
    <>
      <ul>
        {tasks.length > 0 ? (
          tasks.map((task) => (
            <li key={task.id}>
              <h6>{task.title}</h6>
              <p>{task.description}</p>
            </li>
          ))
        ) : (
          <li className="no-item">No items</li>
        )}
      </ul>
    </>
  );
};

export default Tasks;
