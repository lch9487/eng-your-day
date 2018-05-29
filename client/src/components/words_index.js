import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// import { fetchWords } from '../actions';

class WordsIndex extends Component {
  //   componentDidMount() {
  //     this.props.fetchPosts();
  //   }

  renderWords() {
    return _.map(
      [{ category: 'food' }, { category: 'movies' }, { category: 'diseases' }],
      word => {
        return (
          <li>
            <Link to={`/words/${word.category}`}>{word.category}</Link>
          </li>
        );
      }
    );
  }

  render() {
    return (
      <div>
        <h3>Categories</h3>
        <ul>{this.renderWords()}</ul>
      </div>
    );
  }
}

// function mapStateToProps(state) {
//   return { words: state.words };
// }

// export default connect(mapStateToProps)(WordsIndex);

function mapStateToProps(state) {
  return { words: state.words };
}

export default connect(mapStateToProps)(WordsIndex);
