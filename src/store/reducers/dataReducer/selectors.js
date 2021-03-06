import NameSpace from '../name-space';
import {createArtistQuestion, createGenreQuestion} from '../../../adapters/question';

export const getQuestions = (state) => {
  return state[NameSpace.DATA].questions;
};

export const getRandomArtistQuestion = (state) => {

  const artistQuestions = state[NameSpace.DATA].questions.filter((q) => {
    return q.type === `artist`;
  });

  const question = artistQuestions[Math.floor(Math.random() * artistQuestions.length)];
  return createArtistQuestion(question);

};

export const getRandomGenreQuestion = (state) => {
  const genreQuestions = state[NameSpace.DATA].questions.filter((q) => {
    return q.type === `genre`;
  });

  const question = genreQuestions[Math.floor(Math.random() * genreQuestions.length)];
  return createGenreQuestion(question);
};

