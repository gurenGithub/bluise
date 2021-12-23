import Base from './base';

class News extends Base {
  constructor(axios) {
    super(axios);
  }

  getHeaders() {
    return {
      // 'x-app-id': 'arU9WZF7TC9m7nWn',
      //  'x-version': '1.0.1',
    };
  }

  getList(params) {
    let url = this.getUrl('/news/list/latest.json');
    return this.get(url, params);
  }

  getById(id) {
    let url = this.getUrl(`/author/details/${id}.json`);
    return this.get(url, {});
  }
}

export default News;
