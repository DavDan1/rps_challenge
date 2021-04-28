import React, { Component } from "react";
import { Button } from "semantic-ui-react";

const items = ["Rock", "Paper", "Scissors"];
class GameInterface extends Component {
  startGame = () => {
    this.setState({
      computer: items[Math.floor(Math.random() * items.length)],
    });
    this.setState({
      message: this.playingGame(),
    });
  };

  selectItem = (item) => {
    this.setState({
      player: item,
      message: "",
    });
  };

  playingGame = () => {
    const { player, computer } = this.state;

    if (player === computer) {
      return "It's a Tie!";
    } else if (
      (player === "rock" && computer === "scissors") ||
      (player === "paper" && computer === "rock") ||
      (player === "scissors" && computer === "paper")
    ) {
      return "Victory!";
    } else {
      return "You Lost";
    }
  };

 
  
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
