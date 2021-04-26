import {
	createRouter,
	createWebHashHistory
} from "vue-router";
import Home from '../views/Home';
import Login from '../views/Login';

const router = createRouter({
	history: createWebHashHistory(),
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home
		},
		{
			path: '/Login',
			name: 'login',
			component: Login
		},

	]
})

export default router;
