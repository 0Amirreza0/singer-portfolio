const actions = {
  changeThemeMode({ commit }, themeMode) {
    commit('setState', { key: 'themeMode', value: themeMode });
  },
  changeTheme({ commit }, theme) {
    commit('setState', { key: 'theme', value: theme });
  },
};

export default actions;
