import React, { Component } from 'react';

import ZumbaImg from './images/zumba.svg'


class App extends Component {

  state = {
    deg: 0
  }

  animationMs = 2000

  componentDidMount () {

    const deg = () => {
      if (this.state.deg >= 360) return 0
      else return this.state.deg + 180
    }

    setInterval(() => this.setState({deg: deg()}), this.animationMs)
  }

  render() {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100vw',
        height: '100vh',
        filter: `hue-rotate(${this.state.deg}deg)`,
        transition: `filter ${this.animationMs}ms linear`,
        background: '#250125',
      }}>
        <img src={ZumbaImg} style={{
          width: '30vw',
          filter: `hue-rotate(${this.state.deg}deg)`,
          transition: `filter ${this.animationMs}ms linear`,
        }}/>
      </div>
    );
  }
}

export default App;
