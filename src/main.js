import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router/router';
import HtmlEditor from './plugins/htmlEditor';
import 'remixicon/fonts/remixicon.css';

Vue.config.productionTip = false;

const options = {};
Vue.use(HtmlEditor, options);

new Vue({
    vuetify,
    router,
    render: h => h(App),
}).$mount('#app')
