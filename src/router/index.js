import Vue from 'vue';
import Router from 'vue-router';
import Home from '../pages/Home';
import Inspections from '../pages/Inspections';
import Calendar from '../pages/Calendar';
import Contacts from '../pages/Contacts';
import Templates from '../pages/Templates';
import Metrics from '../pages/Metrics';
import Admin from '../pages/Admin';

Vue.use(Router);

const router = new Router({
	mode: 'history',
	base: __dirname,
	linkActiveClass: 'active',
	routes: [
		{
			path: '/',
			component: Home,
			name: 'home'
		},
		{
			path: '/inspections',
			component: Inspections,
			name: 'inspections'
		},
		{
			path: '/calendar',
			component: Calendar,
			name: 'calendar'
		},
		{
			path: '/contacts',
			component: Contacts,
			name: 'contacts'
		},
		{
			path: '/templates',
			component: Templates,
			name: 'templates'
		},
		{
			path: '/metrics',
			component: Metrics,
			name: 'metrics'
		},
		{
			path: '/admin',
			component: Admin,
			name: 'admin'
		},
	]
});

export default router;
