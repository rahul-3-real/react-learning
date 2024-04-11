const Header = ({ onModalVisibility }) => {
  return (
    <header className="header">
      <h1>Notes App</h1>
      <button className="button" onClick={onModalVisibility}>
        Add Note
      </button>
    </header>
  );
};

export default Header;
