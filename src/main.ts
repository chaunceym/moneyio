import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import Nav from '@/components/Nav.vue';
import Layout from '@/components/Layout.vue';
import Icon from '@/components/Icon.vue';
import Echart from 'echarts';
Vue.prototype.$echarts = Echart;

import message from 'ant-design-vue'
import 'ant-design-vue/es/message/style/index.css';

Vue.config.productionTip = false;
Vue.component('Nav', Nav);
Vue.component('Layout', Layout);
Vue.component('Icon', Icon);

Vue.use(message);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');

window.onload = function(){
  setTimeout(()=>{
    window.scrollTo(0,1000);
  },0)
};

// if(document.documentElement.clientWidth>500){
//   alert('请使用手机打开本页面,以保证浏览效果');
//   const img = document.createElement('img');
//   img.src='/qrcode.png';
//   img.style.position = 'fixed';
//   img.style.left = '50%';
//   img.style.top = '50%';
//   img.style.transform = 'translate(-50%,-50%)';
//   img.style.boxShadow = '0 0 10px rgba(0,0,0,.25)';
//   document.body.appendChild(img);
// }
