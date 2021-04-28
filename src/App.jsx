import React, { Component } from "react";
import { Container, Header } from "semantic-ui-react";
//import 'semantic-ui-css/semantic.min.css'

class App extends Component {
  render() {
    return (
      <Container>
        <Header data-cy="my-game">My Game</Header>
      </Container>
    );
  }
}
export default App;
