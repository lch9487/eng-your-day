import axios from 'axios';

export const FETCH_WORD = 'fetch_word';

export function fetchWord(category) {
  const request = axios.get(`/api/words/${category}`);

  // console.log(request);

  return {
    type: FETCH_WORD,
    payload: request,
  };
}

// export function fetchWord(category) {
//   return {
//     type: 'FETCH_WORD',
//     payload: category,
//   };
// }
