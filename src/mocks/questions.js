const AVATAR_URL = `https://api.adorable.io/avatars/17`;

export default [
  {
    type: `artist`,
    questionText: `Кто исполняет эту песню?`,
    song: {
      artist: `Gregory Porter`,
      src: `someSrc-4`
    },
    answers: [{
      picture: `${AVATAR_URL}/${Math.random()}`,
      artist: `Kurt Elling`
    }, {
      picture: `${AVATAR_URL}/${Math.random()}`,
      artist: `Gregory Porter`
    }, {
      picture: `${AVATAR_URL}/${Math.random()}`,
      artist: `Tony Bennett`
    }]
  },
  {
    type: `genre`,
    questionText: `Выберите музыку барокко`,
    genre: `baroque`,
    answers: [{
      src: `someSrc-0`,
      genre: `baroque`
    }, {
      src: `someSrc-1`,
      genre: `classical`
    }, {
      src: `someSrc-2`,
      genre: `romantic`
    }, {
      src: `someSrc-3`,
      genre: `minimalism`
    }]
  }
];
