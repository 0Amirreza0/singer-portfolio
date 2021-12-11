<template>
  <div
    :theme-mode="applicationUi.themeMode"
    :theme="applicationUi.theme"
    class="application"
  >
    <router-view />
  </div>
</template>

<script>
  import { mapState } from 'vuex';

  export default {
    name: 'application',
    computed: {
      ...mapState({
        applicationUi: (state) => state.applicationUi,
      }),
    },
  };
</script>

<style src="@/assets/base-style.scss" lang="scss"></style>
