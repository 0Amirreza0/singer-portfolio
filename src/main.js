import { createApp } from 'vue';
import Application from './App.vue';
import router from './router';
import store from './store';

const app = createApp(Application);
app.use(store);
app.use(router);

app.mount('#app');
