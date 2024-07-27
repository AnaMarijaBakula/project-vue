import { createRouter, createWebHistory} from 'vue-router'

//Lazy loading

const Home = () => import("../views/Home.vue");
const About = () => import("../views/About.vue");
const Products = () => import("../views/Products.vue");
const ProductDetail = () => import("../views/ProductDetail.vue");
const ShoppingCart = () => import("../views/ShoppingCart.vue");

const routes = [
    {path: '/', component: Home},
    {path: '/about', component: About},
    {path: '/products', component: Products},
    {path: '/productdetail', component: ProductDetail},
    {path: '/shoppingcart', component: ShoppingCart},
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;