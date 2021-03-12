// General
import React, { useState } from "react";
import GlobalStyle from "./styles/GlobalStyles";
// Routing
import { Switch, Route } from "react-router-dom";
// Components
import Nav from "./components/Nav";
// Pages
import LandingPage from "./pages/LandingPage";
import SearchGridPage from "./pages/SearchGridPage";
import RecipePage from "./pages/RecipePage";

function App() {
  const [searchResult, setSearchResult] = useState(null);
  const [selectedFilter, setSelectedFilter] = useState([]);
  const [recipesFromIngredients, setRecipesFromIngredients] = useState(null);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  return (
    <div className="w-screen h-screen p-2 m-2">
      <GlobalStyle />
      <Nav
        searchResult={searchResult}
        setSearchResult={setSearchResult}
        setSelectedFilter={setSelectedFilter}
        selectedFilter={selectedFilter}
      />
      <Switch>
        <Route path="/" exact>
          <LandingPage
            searchResult={searchResult}
            setSearchResult={setSearchResult}
            setSelectedFilter={setSelectedFilter}
            selectedFilter={selectedFilter}
          />
        </Route>

        <Route path="/search/">
          <SearchGridPage
            searchResult={searchResult}
            setSearchResult={setSearchResult}
            setSelectedFilter={setSelectedFilter}
            selectedFilter={selectedFilter}
            recipesFromIngredients={recipesFromIngredients}
            setRecipesFromIngredients={setRecipesFromIngredients}
            setSelectedRecipe={setSelectedRecipe}
          />
        </Route>

        <Route path="/recipe/">
          <RecipePage
            searchResult={searchResult}
            setSearchResult={setSearchResult}
            setSelectedFilter={setSelectedFilter}
            selectedFilter={selectedFilter}
            recipesFromIngredients={recipesFromIngredients}
            setRecipesFromIngredients={setRecipesFromIngredients}
            selectedRecipe={selectedRecipe}
          />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
