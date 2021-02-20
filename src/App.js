// General
import React from "react";
import GlobalStyle from "./styles/GlobalStyles";
// Components
import Nav from "./components/Nav";
// Pages
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Nav />
      <LandingPage />
    </div>
  );
}

export default App;
