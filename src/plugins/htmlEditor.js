import Vuetify from 'vuetify/lib';
import vuetify from './vuetify';
import HtmlEditor from '../custom-components/HtmlEditor';

export default {
    install(Vue, options) {
        Vue.component('html-editor', HtmlEditor);
        Vue.use(Vuetify);
        options.vuetify = vuetify;
    }
};
