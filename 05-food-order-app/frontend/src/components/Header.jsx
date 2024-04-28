import { useContext } from "react";
import Button from "./Button";
import CartContext from "../store/CartContext";

const Header = () => {
  const cartCtx = useContext(CartContext);

  const totalCartItems = cartCtx.items.reduce((totalNumber, item) => {
    return totalNumber + item.quantity;
  }, 0);

  return (
    <header className="header">
      <h1>Food Order App</h1>
      <Button className="button">Cart ({totalCartItems})</Button>
    </header>
  );
};

export default Header;
