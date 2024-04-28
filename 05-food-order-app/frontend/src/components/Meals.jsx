import { useState, useEffect } from "react";
import MealItem from "./MealItem";

const Meals = () => {
  const [meals, setMeals] = useState([]);

  const fetchMeal = async () => {
    const response = await fetch("http://localhost:3001/meals");
    const data = await response.json();
    setMeals(data);
  };

  useEffect(() => {
    fetchMeal();
  }, []);

  return (
    <ul className="card-grid">
      {meals.map((meal) => {
        return <MealItem meal={meal} key={meal.id} />;
      })}
    </ul>
  );
};

export default Meals;
