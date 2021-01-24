import Projects from './projects.js';
import About from './about.js';

const routes = [
    { path: '/projects', component: Projects },
    { path: '/about', component: About }
];

const router = new VueRouter({
    routes // short for `routes: routes`
});