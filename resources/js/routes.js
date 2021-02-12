import VueRouter from 'vue-router'
// Pages
import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'
import Dashboard from './pages/user/Dashboard'
import AdminDashboard from './pages/admin/Dashboard'

function guard(to, from, next){
    if(store.state.login.isLoggedIn === true) {
        // or however you store your logged in state
        next(); // allow to enter route
    } else{
        next('/login'); // go to '/login';
    }
}

export const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
        meta: {
            requiresAuth: undefined
        }
    },
    {
        path: '/register',
        name: 'register',
        component: Register,
        meta: {
            auth: false
        }
    },
    {
        path: '/login',
        name: 'login',
        component: Login,
        meta: {
            auth: false
        }
    },
    // USER ROUTES
    {
        path: '/dashboard',
        name: 'dashboard',
        component: Dashboard,
        meta: {
            auth: true
        }
    },
    // ADMIN ROUTES
    {
        path: '/admin',
        name: 'admin.dashboard',
        component: AdminDashboard,
        meta: {
            auth: {roles: 2, redirect: {name: 'login'}, forbiddenRedirect: '/403'}
        }
    },
];