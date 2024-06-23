import { createRouter, createWebHistory} from 'vue-router'

//Lazy loading

const Home = () => import("../views/Home.vue");
const About = () => import("../views/About.vue");
const Products = () => import("../views/Products.vue");

const routes = [
    {path: '/', component: Home},
    {path: '/about', component: About},
    {path: '/products', component: Products},
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;