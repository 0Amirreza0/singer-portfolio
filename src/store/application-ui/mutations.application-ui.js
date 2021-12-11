const mutations = {
  setState(state, data) {
    const { key, value } = data;
    state[key] = value;
  },
};

export default mutations;
