import React, { Component } from 'react'
import {Grid, Button, Container} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'


class Buttons extends Component {
  selectItem = (item) => {
    this.setState({
      player: item,
      message: "",
    });
  }
  render() {
    return (
      <Container textAlign='center'>
        <Grid.Row centered columns={3} >
          <Button data-cy="rock-button" onClick={() => this.selectItem("Rock")}>
          Rock
        </Button>
        <Button data-cy="paper-button" onClick={() => this.selectItem("Paper")}>
          Paper
        </Button>
        <Button
          data-cy="scissors-button"onClick={() => this.selectItem("Scissors")}>
          Scissors
        </Button></Grid.Row>
         
      </Container>
    )
  }
}

export default Buttons