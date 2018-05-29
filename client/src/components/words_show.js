import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchWord } from '../actions/index';

class WordsShow extends Component {
  componentDidMount() {
    const { category } = this.props.match.params;
    this.props.fetchWord(category);
  }

  render() {
    const { word } = this.props;

    if (!word) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <Link to="/">Back To Index</Link>

        <h3>
          {word.name} {word.meaning}
        </h3>
        <h6>
          {word.related[0].name} {word.related[0].meaning}
        </h6>
        <h6>
          {word.related[1].name} {word.related[1].meaning}
        </h6>

        <Link to={`/words/${word.category}/test`}>Next</Link>
      </div>
    );
  }
}

function mapStateToProps({ words }, ownProps) {
  // return { word: words[ownProps.match.params.category] };
  // console.log(words);
  return { word: words[0] };
}

export default connect(
  mapStateToProps,
  { fetchWord }
)(WordsShow);

// function mapStateToProps(state) {
//   return {
//     word: state.activeWord,
//   };
// }

// export default connect(mapStateToProps)(WordsShow);
