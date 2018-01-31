import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _15639e76 = () => import('../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)
const _4dcb6c9b = () => import('../pages/Portfolio.vue' /* webpackChunkName: "pages/Portfolio" */).then(m => m.default || m)
const _2f3f5233 = () => import('../pages/Contact.vue' /* webpackChunkName: "pages/Contact" */).then(m => m.default || m)
const _97b99710 = () => import('../pages/Music.vue' /* webpackChunkName: "pages/Music" */).then(m => m.default || m)



const scrollBehavior = (to, from, savedPosition) => {
  // SavedPosition is only available for popstate navigations.
  if (savedPosition) {
    return savedPosition
  } else {
    let position = {}
    // If no children detected
    if (to.matched.length < 2) {
      // Scroll to the top of the page
      position = { x: 0, y: 0 }
    }
    else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
      // If one of the children has scrollToTop option set to true
      position = { x: 0, y: 0 }
    }
    // If link has anchor, scroll to anchor by returning the selector
    if (to.hash) {
      position = { selector: to.hash }
    }
    return position
  }
}


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/Portfolio-Website/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
		{
			path: "/",
			component: _15639e76,
			name: "index"
		},
		{
			path: "/Portfolio",
			component: _4dcb6c9b,
			name: "Portfolio"
		},
		{
			path: "/Contact",
			component: _2f3f5233,
			name: "Contact"
		},
		{
			path: "/Music",
			component: _97b99710,
			name: "Music"
		}
    ],
    
    
    fallback: false
  })
}
