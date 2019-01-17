import React, { Component } from 'react';
import NavBar from './Components/NavBar';

class App extends Component {
  constructor(){
    super()
    this.state = {
      cars: [],
      error: null
    }
  }

  componentDidMount(){
    fetch('http://localhost:5000/api/car')
      .then(response => response.json())
      .then(data => {
        this.setState({
          cars: data
        })
      })
      
      
  }

  render() {
    const {...cars} = this.state.cars;
    console.log(cars);
    return (
      <div className="App">
      <NavBar />
      <ul>
          {this.state.cars.map((car, key)=> <li key={key}>{car.carName}</li>)}
      </ul>
      </div>
    )
  }
}

export default App;
