import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    // return (
    //   // This is the example of the JSX and not an HTML code 
    //   // JSX = JS just got hooked up with HTML 
    //   <div className="App">
    //       <h1> Hi I'm React App</h1> 
    //   </div>
    // );

  // return React.createElement('div',null,'<h1>Hello</h1>',"Hi I'm react App");
  return React.createElement('div',{className:'App'},null,React.createElement('h1',null,'Getting Started With React'));
  }
}

export default App;
