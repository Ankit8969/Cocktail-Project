import React from "react";
import Cocktail from "./Cocktail";

const CocktailList = ({ onList }) => {
  if (onList.length === 0) return "";
  return (
    <div>
      <h2 className="heading">All your's</h2>
      <div className="cocktail-box">
        {onList.map((item) => (
          <Cocktail
            key={item.idDrink}
            id={item.idDrink}
            name={item.strDrink}
            alco={item.strAlcoholic}
            url={item.strDrinkThumb}
            type={item.strCategory}
          />
        ))}
      </div>
    </div>
  );
};

export default CocktailList;
