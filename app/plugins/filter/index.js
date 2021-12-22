import link from './link';
import Vue from 'vue';
import { displayTime } from './date';
Vue.filter('link', link);
Vue.filter('displayTime', displayTime);
