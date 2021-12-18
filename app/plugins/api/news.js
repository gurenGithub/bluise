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

    console.log(url, params);
    return this.get(url, params);
  }
}

export default News;
