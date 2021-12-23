import News from './news.js';
import Author from './author.js';
export default (name, ax) => {
  switch (name) {
    case 'news':
      return new News(ax);
    case 'author':
      return new Author(ax);
  }
};
