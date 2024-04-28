import { CartContextProvider } from "./store/CartContext";
import Header from "./components/Header";
import Meals from "./components/Meals";

const App = () => {
  return (
    <CartContextProvider>
      <div className="container">
        <Header />
        <Meals />
      </div>
    </CartContextProvider>
  );
};

export default App;
