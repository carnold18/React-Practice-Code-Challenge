import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';


// Endpoint!
const API = "http://localhost:3000/sushis"


class App extends Component {

  constructor() {
    super();
    this.state = {
      sushis: [],
      sushisEaten: [],
      totalMoney: 100,
      sushiIndex: 0
    }
  }

  componentDidMount() { 
    fetch(API)
      .then(response => response.json())
      .then(data => {
        this.setState({sushis: data})
        })
  }

  chooseSushis = () => {
    return this.state.sushis.slice(this.state.sushiIndex, this.state.sushiIndex+4)
  }

  getMoreSushis = (event) => {
    this.setState({sushiIndex: this.state.sushiIndex+4})
    console.log(this.state.sushiIndex)
  }

  eatSushis = (sushi) => {
    
  }

  render() {
    
    return (
      this.state.sushis.length === 0 ?  
      (<div>Loading Content</div>) 
      : (<div className="app">
      <SushiContainer chooseSushis={this.chooseSushis()} getMoreSushis={this.getMoreSushis} />
      <Table sushis={this.state.sushis} totalMoney={this.state.totalMoney} />
      </div>)
    );
  }
}

export default App;

// must RETURN if inside curly braces. REMEMBER.