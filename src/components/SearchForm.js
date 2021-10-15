import React, { useState, useEffect, useRef } from "react";
import CocktailList from "./CocktailList";

const baseURL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const SearchForm = ({ onhandleChange }) => {
  const [searchItem, setSearchItem] = useState("margarita");
  const searchValue = useRef("");

  const [list, setList] = useState([]);

  const fetchDrinks = async () => {
    try {
      const response = await fetch(`${baseURL}${searchItem}`);
      const data = await response.json();
      const { drinks } = data;
      setList(drinks);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchDrinks();
    searchValue.current.focus();
  }, [searchItem]);

  const handleChange = (searchData) => {
    setSearchItem(searchData.currentTarget.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <React.Fragment>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="search">Search your favourite Cocktail</label>
          <input
            ref={searchValue}
            type="text"
            name="search"
            onChange={handleChange}
          />
        </div>
      </form>
      {list !== null ? (
        <CocktailList onList={list} />
      ) : (
        <h3 style={{ textAlign: "center" }}>Sorry we don't have your item's</h3>
      )}
    </React.Fragment>
  );
};

export default SearchForm;
