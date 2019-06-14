import React, { Component } from 'react';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import axios from 'axios';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }

  componentDidMount(){
    axios
      .get("http://localhost:3333/smurfs")
      .then(response =>{
        console.log(response);
        this.setState(
          {smurfs:response.data})
      })
      .catch(error => {
        console.log(error);
      })
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">
       <Route exact path='/form' render={(props)=> <SmurfForm {...props}addSmurf={this.addSmurf}/>}/>
        <Route  pacth=''<Smurfs smurfs={this.state.smurfs} />
      </div>
    );
  }
}

export default App;
