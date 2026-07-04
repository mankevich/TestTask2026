export interface IContent {
  title: string;
  desc: string;
  img: string;
}

export const SUBSCRIPTION_CONTENT: Record<string, IContent> = {
  trainyrbrain: {
    title: 'Train Yr Brain',
    desc: 'Test your world geography skills',
    img: '/img/trainyrbrain.svg'
  },
  ynquiz: {
    title: 'Ynquiz',
    desc: 'Test your knowledge with our fun and challenging quiz game! Compete, learn, and improve with a wide range of topics.',
    img: '/img/ynquiz.svg'
  },
  finditquiz: {
    title: 'Find It Quiz',
    desc: 'Guess the song from short clips',
    img: '/img/finditquiz.svg'
  },
  moviequizonline: {
    title: 'Movie Quiz Online',
    desc: 'Identify films from iconic scenes',
    img: '/img/moviequizonline.svg'
  },
  findsuperstar: {
    title: 'Find Superstar',
    desc: 'Challenge your historical knowledge',
    img: '/img/findsuperstar.svg'
  },
  whatcountry: {
    title: 'What Country',
    desc: 'Answer questions on various sports',
    img: '/img/whatcountry.svg'
  },
  testyrmind: {
    title: 'Test Your Mind',
    desc: 'Prove your science smarts',
    img: '/img/testyrmind.svg'
  }
};