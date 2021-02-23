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

function App() {
  const [searchResult, setSearchResult] = useState(null);
  const [selectedFilter, setSelectedFilter] = useState(null);

  return (
    <div>
      <GlobalStyle />
      <Nav />
      <Switch>
        <Route path="/" exact>
          <LandingPage
            searchResult={searchResult}
            setSearchResult={setSearchResult}
            setSelectedFilter={setSelectedFilter}
          />
        </Route>

        <Route path="/search/">
          <SearchGridPage
            searchResult={searchResult}
            setSearchResult={setSearchResult}
            setSelectedFilter={setSelectedFilter}
            selectedFilter={selectedFilter}
          />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
