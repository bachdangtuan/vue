import {createApp} from 'vue'
import store from './VueStore/store.js'

import App from './App.vue'


const app = createApp(App)

// createApp(App).mount('#app')

app.use(store)
app.mount('#app')
