import { createApp, provide, h } from 'vue'
import { createPinia } from "pinia"
import router from "./routes/index"
import { DefaultApolloClient } from '@vue/apollo-composable'
import { apolloClient } from './apolloClient'
import App from './App.vue'

const app = createApp({
  setup () {
    provide(DefaultApolloClient, apolloClient)
  },

  render: () => h(App),
})

app.use(createPinia());
app.use(router);
app.mount('#app')
