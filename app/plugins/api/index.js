import News from './news.js';

export default (name, ax) => {
  switch (name) {
    case 'news':
      return new News(ax);
  }
};
