import {createSelector} from 'reselect';
import NameSpace from '../name-space';
import {createArtistQuestion} from '../../../adapters/question';

export const getQuestions = (state) => {
  return state[NameSpace.DATA].questions;
};

// export const getRandomArtistQuestion = createSelector(
//     getQuestions,
//     (questions) => {
//       // console.log(createArtistQuestion(questions[Math.floor(Math.random() * questions.length)]))
//       const artistQuestions = questions.filter((q) => {
//         return q.type === `artist`;
//       });
//       console.log(artistQuestions);
//       return artistQuestions[Math.floor(Math.random() * questions.length)];
//     }
// );

export const getRandomArtistQuestion = (state) => {

  const artistQuestions = state[NameSpace.DATA].questions.filter((q) => {
    return q.type === `artist`;
  });

  const question = artistQuestions[Math.floor(Math.random() * artistQuestions.length)];
  return createArtistQuestion(question);

};

export const getGenreQuestions = createSelector(
    getQuestions,
    (questions) => {
      return questions.filter((q) => q.type === `genre`);
    }
);
