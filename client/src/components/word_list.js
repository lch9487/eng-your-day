import React from 'react';
import WordListItem from './word_list_item';

const WordList = props => {
  const wordItems = props.contents.map(word => {
    return <WordListItem word={word} />;
  });

  return <ul>{wordItems}</ul>;
};

export default WordList;
