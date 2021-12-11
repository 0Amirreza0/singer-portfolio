import { createStore } from 'vuex';
import applicationUi from './application-ui';

export default new createStore({
  modules: {
    applicationUi,
  },
});
