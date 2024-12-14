import { useState } from "react";

const Beverage = () => {
  const [drink, SetDrink] = useState({
    title: "Americano",
    price: 5,
  });

  const handleClick = () => {
    const newDrink = {
      ...drink,
      price: 6.5,
    };
    SetDrink(newDrink);
  };
  return (
    <div>
      {drink.title}
      {drink.price}

      <button onClick={handleClick}>Click</button>
    </div>
  );
};

export default Beverage;
