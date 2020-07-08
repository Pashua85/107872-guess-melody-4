export const createArtistQuestion = (data) => {
  return {
    type: data.type,
    questionText: `Кто исполняет эту песню?`,
    tracks: [
      {
        artist: data.song.artist,
        src: data.song.src
      }
    ],
    answers: data.answers
  };
};

export const createGenreQuestion = (data) => {
  return {
    type: data.type,
    questionText: `Выберите музыку ${data.genre}`,
    genre: data.genre,
    tracks: data.answers
  };
};


