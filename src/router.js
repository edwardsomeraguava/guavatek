import Vue from 'vue'
import Router from 'vue-router'
import Index from './components/Index.vue'
import About from './components/About.vue'
import Contact from './components/Contact.vue'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			name: 'index',
			component: Index
		},
		{
			path: '/about',
			name: 'about',
			component: About
		},
		{
			path: '/contact',
			name: 'contact',
			component: Contact
		}
	]
})