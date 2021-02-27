import "./styles.css";
import { BrowserRouter as Router, Link, Switch } from "react-router-dom";
import { Home, Deals, Cart, Nav, SearchBar } from "./components";
import styled from 'styled-components'


const MainContainer = styled.div`
margin: 0;
padding: 0;
text-align: center;

`;

 function App() {
  return (
    <MainContainer>
    <Router>
      <Nav />
      <SearchBar />
      <Switch>
        <Router path="/" exact>
          <Home />
        </Router>
        <Router path="/deals" exact>
          <Deals />
        </Router>
        <Router path="/cart" exact>
          <Cart />
        </Router>
      </Switch>
     
    </Router>
    </MainContainer>
  );
}

export default App;