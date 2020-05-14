import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      { name: 'vignesh', age: "27" },
      { name: 'kasthurisamy', age: "61" },
      { name: 'savithiri', age: "57" }
    ]
  }


  switchNameHandler = (newChange) => {
    this.setState({
      persons: [
        { name: 'vignesh', age: "20" },
        { name: newChange, age: "61" },
        { name: 'savithiri', age: "57" }
      ]
    });
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'vignesh', age: "20" },
        { name: event.target.value, age: "61" },
        { name: 'savithiri', age: "57" }
      ]
    });
  }
  render() {

    const style = {
      backgrounColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding : '8px',
      cursor: 'pointer'
    }
    return (
      <div className="App">
        <button style={style} onClick={this.switchNameHandler.bind(this, 'kasthuri')}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}>Hobbies: playing chess</Person>
        <Person
          click={this.switchNameHandler.bind(this, 'vikasthu')}
          changed={this.nameChangedHandler}
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}></Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}></Person>
      </div>
    );
  }
};

export default App;
