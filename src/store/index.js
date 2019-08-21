import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';
import inspections from './inspections';
import loader from './loader';

Vue.use(Vuex);

Vue.config.debug = true;

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
	modules: {
		inspections,
		loader
	},
	strict: false,
	middlewares: debug ? [createLogger()] : []
});
