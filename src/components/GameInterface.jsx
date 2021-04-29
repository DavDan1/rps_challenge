import React, { Component } from "react";
import { Container } from "semantic-ui-react";
import Buttons from './Buttons'
import 'semantic-ui-css/semantic.min.css'


const items = ["Rock", "Paper", "Scissors"];

class GameInterface extends Component {
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
  
  startGame = () => {
    this.setState({
      computer: items[Math.floor(Math.random() * 3)],
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

 
  render() {
    return (
      <Container >
        <Buttons/>
      </Container >
  
    )
  }}
export default GameInterface;
