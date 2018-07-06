import React, { Component } from 'react';
import axios from 'axios';
import {API_KEY} from './../../config/config';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gifs: []
    }
  }

  componentDidMount(){
    const queryUrl = `http://api.giphy.com/v1/gifs/trending?limit=10&api_key=${API_KEY}`;
    axios.get(queryUrl).then(response => {
      console.log(response);
      this.setState({gifs: response.data.data});
      console.log(this.state.gifs);
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;