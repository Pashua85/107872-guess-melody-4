import questions from './mocks/questions';

function checkAnswers(type, answer) {
  switch (type) {
    case `artist`: {
      return answer === questions[0].tracks[0].artist;
    }
    case `genre`: {
      const genre = questions[1].genre;
      const rightAnswer = questions[1].tracks.map((t) => (
        t.genre === genre
      ));
      return JSON.stringify(answer) === JSON.stringify(rightAnswer);
    }
    default: {
      return false;
    }
  }
}

export {checkAnswers};

