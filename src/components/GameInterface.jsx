import React, { Component } from "react";
import { Button } from "semantic-ui-react";

const items = ["Rock", "Paper", "Scissors"];
class GameInterface extends Component {


 
  
  selectItem = (item) => {
    this.setState({
      player: item,
      message: "",
    });
  };
  render() {
    return (
      <div>
        <Button data-cy="rock-button" onClick={() => this.selectItem("Rock")}>
          Rock
        </Button>
        <Button data-cy="paper-button" onClick={() => this.selectItem("Paper")}>
          Paper
        </Button>
        <Button
          data-cy="scissors-button"
          onClick={() => this.selectItem("Scissors")}
        >
          Scissors
        </Button>
      </div>
    );
  }
}
export default GameInterface;
