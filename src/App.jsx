import React, { Component } from "react";
import { Container, Header } from "semantic-ui-react";
//import 'semantic-ui-css/semantic.min.css'
import GameInterface from "./components/GameInterface"

class App extends Component {
  render() {
    return (
      <Container>
        <Header data-cy="my-game">My Game</Header>
        <GameInterface/>
      </Container>
    );
  }
}
export default App;
