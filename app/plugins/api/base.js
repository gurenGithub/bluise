import axios from 'axios';
import configs from './../../content/settings/manifest.json';

let { BASE_URL } = configs;
//let BASE_URL = 'https://bluise.oss-cn-hangzhou.aliyuncs.com/json';
//let BASE_URL = 'https://bluise.oss-cn-hangzhou.aliyuncs.com';
class Base {
  constructor(axios) {
    this.axios = axios;
  }

  setClientType(type) {
    this.clientType = type;
  }

  getClientTypeOptions(url) {
    return {}; // this.clientType;
  }
  getJson(url) {
    if (process.env.NODE_ENV === 'development') {
      //console.log({method:'getJson',url})
    }
    const UcClient = axios.create({
      timeout: 20000,
      withCredentials: false,
      headers: {},
    });
    return UcClient.get(`${url}`);
  }

  getUrl(path) {
    return `${BASE_URL}${path}`;
  }
  get(url, params) {
    console.log({ url, params });
    return this.axios.get(url, {
      params: { ...params, ...this.getClientTypeOptions(url), t: new Date().getTime() },
      handleError: true,
      withCredentials: true,
      headers: this.getHeaders(),
    });
  }
  post(url, data) {
    return this.axios.post(url, data, {
      handleError: true,
      withCredentials: true,
      headers: this.getHeaders(),
    });
  }

  getHeaders() {
    return {
      clientType: getClientType(),
    };
  }

  getDataWidthMock(mockData, fn) {
    if (process.ISMOCK) {
      return new Promise((r) => {
        r(mockData);
      });
    }

    return new Promise((r) => {
      fn().then((data) => {
        r(data);
      });
    });
  }
}
export default Base;
