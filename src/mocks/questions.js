const AVATAR_URL = `https://api.adorable.io/avatars/17`;

export default [
  {
    type: `artist`,
    questionText: `Кто исполняет эту песню?`,
    song: {
      artist: `Gregory Porter`,
      src: `audio/gregory_porter_ hey_laura.mp3`
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
      src: `audio/handel_concerto_grosso_in_g_minor_allegro.mp3`,
      genre: `baroque`
    }, {
      src: `audio/haydn_symphony_no_6_finale.mp3`,
      genre: `classical`
    }, {
      src: `audio/franz_liszt_hungarian_rhapsody_no_11.mp3`,
      genre: `romantic`
    }, {
      src: `audio/philip_glass_string_quartet_no_2_company_movement_2`,
      genre: `minimalism`
    }]
  }
];
