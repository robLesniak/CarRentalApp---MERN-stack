import React, { Component } from 'react';
import NavBar from './Components/NavBar';
import Car from './Components/Car';
// import { Card, CardImg, CardText, CardBody,
//   CardTitle, CardSubtitle, Button, Row, Col } from 'reactstrap';
import './style.css';


class App extends Component {
  render(){
    return (
      <div className="App">
        <NavBar />
        <Car />
      </div>
    );
  }

}

export default App;

