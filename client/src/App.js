import React, { Component } from 'react';
import './App.css';
import WordList from './components/word_list';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      word: 'disease',
      contents: ['a', 'b', 'c'],
    };
  }

  render() {
    return (
      <div>
        {this.state.word}
        <WordList contents={this.state.contents} />
      </div>
    );
  }
}

export default App;
