import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import "./index.css";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import SingleCocktail from "./pages/SingleCocktail";
import SearchForm from "./components/SearchForm";

const App = () => {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route path="/about" exact component={About} />
          <Route path="/cocktail/:id" exact component={SingleCocktail} />
          <Route path="/" component={SearchForm} />
        </Switch>
      </React.Fragment>
    </BrowserRouter>
  );
};

export default App;
