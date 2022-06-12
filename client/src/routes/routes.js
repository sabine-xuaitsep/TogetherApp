import MainWrapper from './../views/wrappers/MainWrapper.vue'
import Home from './../views/Home.vue'
import Map from './../views/Map.vue'
import ActivitiesList from './../views/ActivitiesList.vue'
import Activity from './../views/Activity.vue'
import Err404 from './../views/Err404.vue'

export default [
  {
    path: "/",
    component: MainWrapper,
    children: [
      {
        path: "",
        name: "home",
        component: Home,
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
