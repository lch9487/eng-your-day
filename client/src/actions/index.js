import axios from 'axios';

export const FETCH_WORD = 'fetch_word';
export const TEST_WORD = 'test_word';

export function fetchWord(category) {
  const request = axios.get(`/api/words/${category}`);

  // console.log(request);

  return {
    type: FETCH_WORD,
    payload: request,
  };
}

export function testWord(values, callback) {
  const request = axios
    .get(`/api/words/individual/test`)
    .then(() => callback());

  // console.log(request);

  return {
    type: TEST_WORD,
    payload: request,
  };
}

// export function fetchWord(category) {
//   return {
//     type: 'FETCH_WORD',
//     payload: category,
//   };
// }
