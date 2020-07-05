export default [
  {
    type: `artist`,
    questionText: `Кто исполняет эту песню?`,
    tracks: [
      {
        artist: `Gregory Porter`,
        src: `audio/gregory_porter_ hey_laura.mp3`
      }
    ],
    answers: [{
      picture: `img/kurt_elling.jpg`,
      artist: `Kurt Elling`
    }, {
      picture: `img/gregory_porter.jpg`,
      artist: `Gregory Porter`
    }, {
      picture: `img/tonny_bennett.jpg`,
      artist: `Tony Bennett`
    }]
  },
  {
    type: `genre`,
    questionText: `Выберите музыку барокко`,
    genre: `baroque`,
    tracks: [{
      src: `audio/handel_concerto_grosso_in_g_minor_allegro.mp3`,
      genre: `baroque`
    }, {
      src: `audio/haydn_symphony_no_6_finale.mp3`,
      genre: `classical`
    }, {
      src: `audio/franz_liszt_hungarian_rhapsody_no_11.mp3`,
      genre: `romantic`
    }, {
      src: `audio/philip_glass_string_quartet_no_2_company_movement_2.mp3`,
      genre: `minimalism`
    }]
  }
];
