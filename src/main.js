import {
  Field, Form, ErrorMessage, defineRule, configure,
} from 'vee-validate';
import AllRules from '@vee-validate/rules';

import { localize, setLocale } from '@vee-validate/i18n';

import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json';

import axios from 'axios';
import VueAxios from 'vue-axios';
import VueLoading from 'vue-loading-overlay';

import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';

import 'vue-loading-overlay/dist/vue-loading.css';

import 'bootstrap';

import { createApp } from 'vue';
import router from './router';
import App from './App.vue';

Object.keys(AllRules).forEach((rule) => {
  defineRule(rule, AllRules[rule]);
});

configure({
  generateMessage: localize({ zh_TW: zhTW }), // 載入繁體中文語系

  validateOnInput: true, // 當輸入任何內容直接進行驗證
});

console.log(AllRules);

setLocale('zh_TW');

const app = createApp(App);

app.use(VueAxios, axios);
app.use(router);

app.provide('axios', app.config.globalProperties.axios);

app.use(VueLoading);

app.component('Form', Form);

app.component('Field', Field);

app.component('ErrorMessage', ErrorMessage);

app.component('Datepicker', Datepicker);

app.mount('#app');
