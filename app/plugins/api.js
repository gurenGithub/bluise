let axios = null;

import qs from 'qs';
import getApi from './api/index';
const api = {
  getApi(name) {
    return getApi(name, axios);
  },
};

let isDev = process.env.NODE_ENV !== 'production';
export default function ({ $axios, redirect, store }, inject) {
  axios = $axios;
  let startTime = new Date().getTime();
  axios.onRequest((config) => {
    startTime = new Date().getTime();
    if (config.method === 'get') {
      // 如果是get请求，且params是数组类型如arr=[1,2]，则转换成arr=1&arr=2
      config.paramsSerializer = function (params) {
        return qs.stringify(params, { arrayFormat: 'repeat' });
      };
    }
  });
  axios.onResponse((response) => {
    //console.log(response)
    const data = response.data;
    if (data.code && data.code !== 200) {
      const responseError = new Error(data.message);
      Object.assign(responseError, {
        response,
      });

      console.error(response);

      //if (!isDev && process.server) {

      console.log('--msg - error --');

      store.dispatch('setErrorMessage', data.msg);

      // redirect(`/error?msg=${data.msg}`);
      //}
      //  redirect(`/error?msg=${data.msg}`);
    }

    let endTime = new Date().getTime();
    let diff = endTime - startTime;

    //console.log(response)
    /* console.log(
      `所用：${diff / 1000}秒,Time：${new Date().toLocaleString()},URL：${
        response.config.url
      }`
    );*/
    return data;
  });
  axios.onResponseError((error) => {
    if (error.response) {
      console.log(error);
    }
    //if (!isDev && process.server) {
    //redirect(`/error?msg=${error.response.data.msg}`);
    //Message.error(error.response.data.msg);
    //}
    store.dispatch('setErrorMessage', error.response.data.msg);
    //throw error;
  });
  axios.onError((error) => {
    //console.log(error, "-error-");
    console.log(error);
    store.dispatch('setErrorMessage', error.response.data.msg);
    //Message.error(error.response.data.msg);
  });
  inject('api', api);
}
