export default [
  {
    type: `artist`,
    questionText: `Кто исполняет эту композицию?`,
    song: {
      artist: `Miles Davis`,
      src: `someTestSrc-4`
    },
    answers: [{
      picture: `someTestSrc-5`,
      artist: `Charles Mingus`
    }, {
      picture: `someTestSrc-6`,
      artist: `Miles Davis`
    }, {
      picture: `someTestSrc-7`,
      artist: `Thad Jones`
    }]
  },
  {
    type: `genre`,
    questionText: `Выберите музыку диксиленд`,
    genre: `dixieland`,
    answers: [{
      src: `someTestSrc-0`,
      genre: `bebop`
    }, {
      src: `someTestSrc-1`,
      genre: `dixieland`
    }, {
      src: `someTestSrc-2`,
      genre: `free-jazz`
    }, {
      src: `someTestSrc-3`,
      genre: `funk`
    }]
  }
];
