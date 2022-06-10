import Home from '../views/Home.vue'
import Map from '../views/Map.vue'
import Err404 from '../views/Err404.vue'

export default [
    {
        path: "/",
        name: "home",
        component: Home,
    },
    {
        path: "/map",
        name: "map",
        component: Map,
    },
    {
        path: "/404",
        name: "404",
        component: Err404,
    },
]
