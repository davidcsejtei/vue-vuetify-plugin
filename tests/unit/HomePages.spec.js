import Vue from 'vue';
import Vuetify from 'vuetify';
import { mount, createLocalVue } from '@vue/test-utils';
import HomePage from "../../src/components/pages/HomePage";

describe('HomePage', () => {
    let homePageWrapper = null;
    
    const initLocalVueInstance = () => {
        Vue.use(Vuetify);
        const localVue = createLocalVue();
        localVue.use(Vuetify);
        return localVue;
    };
    
    beforeAll(() => {
        const localVue = initLocalVueInstance();
        const vuetify = new Vuetify();
    
        homePageWrapper = mount(HomePage, {
            localVue,
            vuetify,
        });
    });
    
    test('Check props', () => {
        console.log(homePageWrapper);
        expect(homePageWrapper.find('.container').exists()).toBeTruthy();
    });
});
