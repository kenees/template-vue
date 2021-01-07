import Vue from 'vue'
import Router from 'vue-router'
import homePage from '@/component/Home.vue'
import aboutPage from '@/component/About.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            component: homePage,
        },
        {
            path: '/about',
            component: aboutPage,
        }
    ]
})