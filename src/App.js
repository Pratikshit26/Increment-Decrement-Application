import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      data:0
    }
    this.setNewnumber= this.setNewnumber.bind(this)
  };
  setNewnumber(){
    this.setState({data: this.state.data +2})
  }
  render() {
    return (
      <div className="App">
        <div>
          <button onClick={this.setNewnumber}>INCREMENT</button>
          <Content myNumber={this.state.data} />
        </div>
      </div>
    );
  }
}

class Content extends React.Component {

  
  render() {
     return (
        <div>
           <h3>{this.props.myNumber}</h3>
        </div>
     );
  }
}


export default App;
