import React, { Component } from "react";
import { Grid, Button, Container } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";


const items = ["Rock", "Paper", "Scissors"];
class Buttons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      player: items[0],
      computer: items[0],
      message: "",
      isGameActive: false,
      isStartButtonActive: true,
    };
  }

  selectItem = (item) => {
    this.setState({
      player: item,
      message: "",
    });
  };

  handleHide = () => {
    this.setState({
      isStartButtonActive: false,
    });
  };

  handleShow = () => {
    this.setState({
      isGameActive: true,
    });
  };

  startGame = () => {
    this.setState({
      computer: items[Math.floor(Math.random() * items.length)],
    });
    this.setState({
      message: this.playingGame(),
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
      return "You Win!";
    } else {
      return "Computer Wins!";
    }
  };
  render() {
    const { player, computer, message } = this.state;
    return (
      <Container textAlign="center">
        {this.state.isStartButtonActive ? (
          <button
            id="start"
            onClick={() => {
              this.handleShow();
              this.handleHide();
            }}
          >
            Let the Game Begin!
          </button>
        ) : null}

        <Grid.Row centered columns={3}>
          <div className="message" data-cy="result-text"> {message ? this.playingGame() : message}</div>
          {this.state.isGameActive ? (
            <div>
              <Button
                data-cy="rock-button"
                onClick={() => {
                  this.selectItem("Rock");
                  this.startGame();
                }}
              >
                Rock
              </Button>
              <Button
                data-cy="paper-button"
                onClick={() => {
                  this.selectItem("Paper");
                  this.startGame();
                }}
              >
                Paper
              </Button>
              <Button
                data-cy="scissors-button"
                onClick={() => {
                  this.selectItem("Scissors");
                  this.startGame();
                }}
              >
                Scissors
              </Button>
            </div>
          ) : null}
          {this.state.isGameActive ? (
          <div id="battle">
            <div data-cy="player" item={player} />
            <div data-cy="computer" item={computer} />
          </div>
        ) : null}
        </Grid.Row>
      </Container>
    );
  }
}

export default Buttons;
