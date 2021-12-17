<template>
  <h3 class="album-name">The Underground World</h3>
  <p class="caption">
    Release Date:
    <span class="overline-1 date">2013/05/06</span>
  </p>
</template>

<script>
  export default {
    name: 'album-details',
  };
</script>

<style lang="scss" scoped>
  .album-name {
    margin: 24px 0 8px;
  }

  .date {
    color: var(--text-color-87);
    margin: 0 4px;
  }
</style>
