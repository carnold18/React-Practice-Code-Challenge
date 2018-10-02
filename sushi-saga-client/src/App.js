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
      sushiIndex: 0,
      sushiCost: 0
    }
  }

  componentDidMount() {
    fetch(API)
      .then(response => response.json())
      .then((data) => {
        this.setState({sushis: data})
        })
  }

  chooseSushis = () => {
    return this.state.sushis.slice(this.state.sushiIndex, this.state.sushiIndex+4)
  }

  getMoreSushis = (event) => {
    this.setState({sushiIndex: this.state.sushiIndex+4})
    // console.log(this.state.sushiIndex)
  }

  eatSushi = (sushi) => {
    console.log(sushi)
    let newCost = this.state.sushiCost + sushi.price;
    if (this.state.totalMoney >= newCost) {
      let money = this.state.totalMoney - newCost;
      this.setState({
        sushisEaten: [...this.state.sushisEaten, sushi], totalMoney: money
      })
    }
  }

  render() {
    return (
      this.state.sushis.length === 0 ?  
      (<div>Loading Content</div>) 
      : (<div className="app">
      <SushiContainer chooseSushis={this.chooseSushis()} getMoreSushis={this.getMoreSushis} eatSushi={this.eatSushi} sushisEaten={this.state.sushisEaten}/>
      <Table sushis={this.state.sushis} totalMoney={this.state.totalMoney} sushisEaten={this.state.sushisEaten}/>
      </div>)
    );
  }
}

export default App;

// must RETURN if inside curly braces. REMEMBER.