import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: '',
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder="search monsters"
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters}></CardList>
      </div>
    );
  }
}

export default App;

{
  /*
  seher - The snow glows white on the mountain tonight
  Not a footprint to be seen
  A kingdom of isolation
  And it looks like
  I'm the queen

  seher - The wind is howling like this swirling storm inside
  Couldn't keep it in
  Heaven knows I tried

  seher - Don't let them in
  Don't let them see
  Be the good girl you always have to be
  Conceal, don't feel
  Don't let them know
  Well, now they know

  safin - Let it go
  Let it go

  seher - Can't hold it back anymore

  safin - Let it go
  Let it go

  seher - Turn away and slam the door

  safin - I don't care
  What they're going to say
  Let the storm rage on
  The cold never bothered me anyway
*/
}
