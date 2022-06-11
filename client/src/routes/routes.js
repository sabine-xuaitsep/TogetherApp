import Home from './../views/Home.vue'
import Dashboard from './../components/Dashboard.vue'
import Map from './../components/Map.vue'
import ActivitiesList from './../components/ActivitiesList.vue'
import Activity from './../views/Activity.vue'
import Err404 from './../views/Err404.vue'

export default [
  {
    path: "/",
    component: Home,
    children: [
      {
        path: "",
        name: "home",
        component: Dashboard,
      },
      {
        path: "/map",
        name: "map",
        component: Map,
      },
      {
        path: "/activities/:query",
        name: "activities",
        component: ActivitiesList,
      },
    ]
  },
  {
    path: "/activity/:id",
    name: "activity",
    component: Activity,
  },
  {
    path: "/404",
    name: "404",
    component: Err404,
  },
]
