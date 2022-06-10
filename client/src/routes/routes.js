import Home from '../views/Home.vue'
import Err404 from '../views/Err404.vue'

export default [
    {
        path: "/",
        name: "home",
        component: Home,
    },
    {
        path: "/404",
        name: "404",
        component: Err404,
    },
]
