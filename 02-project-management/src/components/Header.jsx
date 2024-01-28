const Header = () => {
  return (
    <>
      <header className="bg-slate-900 py-5">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <h1 className="font-semibold text-2xl text-slate-50">
              Project Management
            </h1>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Add Project
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
