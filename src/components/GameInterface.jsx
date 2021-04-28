import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'

class GameInterface extends Component {
  render() {
    return (
      <div>
        <Button data-cy="rock-button">Rock</Button>
        <Button data-cy="paper-button">Paper</Button>
        <Button data-cy="scissors-button">Scissors</Button>
      </div>
    )
  }
}
export default GameInterface