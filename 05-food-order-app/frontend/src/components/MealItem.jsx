import { useContext } from "react";
import Button from "./Button";
import CartContext from "../store/CartContext";

const MealItem = ({ meal }) => {
  const cartCtx = useContext(CartContext);

  const handleAddMealToCart = () => {
    cartCtx.addItem(meal);
  };

  return (
    <li className="card">
      <div className="image">
        <img src={`http://localhost:3001/${meal.image}`} alt={meal.name} />
      </div>
      <div className="text">
        <h5>{meal.name}</h5>
        <hr />
        <p>{meal.description}</p>
        <div className="action">
          <Button className="button-alt" onClick={handleAddMealToCart}>
            Add To Cart
          </Button>
          <h6>${meal.price}</h6>
        </div>
      </div>
    </li>
  );
};

export default MealItem;
