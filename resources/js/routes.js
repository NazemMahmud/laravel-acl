import LoginComponent from './components/LoginComponent.vue';
import AllPosts from './components/AllPosts.vue';
import AddPost from './components/AddPost.vue';
import EditPost from './components/EditPost.vue';

export const routes = [
    {
        name: 'login',
        path: '/',
        component: LoginComponent
    },
    {
        name: 'posts',
        path: '/posts',
        component: AllPosts
    },
    {
        name: 'add',
        path: '/add',
        component: AddPost
    },
    {
        name: 'edit',
        path: '/edit/:id',
        component: EditPost
    }
];
