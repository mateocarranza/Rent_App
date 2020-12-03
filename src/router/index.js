import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import firebase from 'firebase'
import Login from '../views/Auth/login.vue'
import Register from '../views/Auth/register.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home,
        meta: { requiresAuth: true }
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
        meta: { requiresAuth: false }
    },
    {
        path: '/Register',
        name: 'Register',
        component: Register,
        meta: { requiresAuth: false }
    },
    {
        path: '/view',
        name: 'View',
        component: () =>
            import ('../views/View.vue'),
        meta: { requiresAuth: true }
    }
]

const router = new VueRouter({
    routes
})

router.beforeEach((to, from, next) => {
    const rutaApp = to.matched.some(record => record.meta.requiresAuth)

    if (rutaApp) {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                next()
            } else {
                next({ name: 'Login' })
            }
        })
    } else {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                next({ name: 'Home' })
            } else {
                next()
            }
        })
    }

})

export default router