/**
 * @Author: Ali Ismail
 * @Date:   2018-04-09T10:46:38+02:00
 * @Last modified by:   Ali Ismail
 * @Last modified time: 2018-04-09T12:00:40+02:00
 */



import React, { Component } from 'react';
import './App.css';

const people = [
  {
    id:1,
    first:"Ali",
    last:"me",
    age:33
  },
  {
    id:2,
    first:"Sam",
    last:"Dha",
    age:44
  },
  {
    id:3,
    first:"Toni",
    last:"Jane",
    age:22
  }
]
function theFilter(searchInput) {
 return function (x) {
   return x.first.toLowerCase().includes(searchInput.toLowerCase()) || !searchInput;
 }
}
class App extends Component {
  constructor(){
    super();
    this.state = {
      searchInput:'',
      people:people
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e){
    this.setState({searchInput:e.target.value});
  }
  render() {
    const { searchInput, people } = this.state;
    return (
      <div className="App">
        <form>
          <input
            type="text"
            value={searchInput}
            onChange={this.handleChange}
          />
        </form>
        {people.filter(theFilter(searchInput)).map( person =>
          <div key={person.id}>
            <h3>{person.first}</h3>
            <h3>{person.last}</h3>
          </div>
        )}
      </div>
    );
  }
}

export default App;
/*

  people.filter(theFilter({searchInput}).map( person =>
    <div key={person.id}>
      <h1> {person.name} </h1>
      <h1> {person.last} </h1>
      <h1> {person.age} </h1>
    </div>
  )
*/
