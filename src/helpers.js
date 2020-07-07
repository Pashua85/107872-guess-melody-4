function checkAnswers(question, answer) {
  switch (question.type) {
    case `artist`: {
      return answer === question.tracks[0].artist;
    }
    case `genre`: {
      const genre = question.genre;
      const rightAnswer = question.tracks.map((t) => (
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

