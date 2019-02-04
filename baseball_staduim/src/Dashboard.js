import React, { Component } from 'react'
import Display from './Display'

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Sam Jackson',
      strikes: 0,
      balls: 0
    }
  }

  componentDidMount() {
    this.setState({strikes: this.props.strikes, balls: this.props.balls})
  }

  hit = () => {
    this.setState({strikes: 0, balls: 0})
  }

  foul = () => {
    if(this.state.strikes === 2) {
    return  this.setState({strikes: 0, balls: 0})
    }
  }

  strike = () => {
    if (this.state.strikes === 2) {
    return this.setState({strikes: 0, balls: 0})
    }

    this.setState( state => {
      return({strikes: state.strikes + 1})
    })
  }

  ball = () => {
    if (this.state.balls === 3) {
      return this.setState({strikes: 0, balls: 0})
    }

    this.setState( state => {
      return({balls: state.balls + 1})
    })
  }

  render() {
    return (
      <div>
        <Display player = {this.state} />
        <button onClick={this.hit}>Hit</button>
        <button onClick={this.foul}>Foul</button>
        <button onClick={this.strike}>Strike</button>
        <button onClick={this.ball}>Ball</button>
      </div>
    )
  }
}
