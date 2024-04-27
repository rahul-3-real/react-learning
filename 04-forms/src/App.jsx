import Header from "./components/Header";
// import Login from "./components/Login";
import Register from "./components/Register";

const App = () => {
  return (
    <div className="container">
      <Header />
      <div className="card">
        {/* <Login /> */}
        <Register />
      </div>
    </div>
  );
};

export default App;
