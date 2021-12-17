<template>
  <h3 class="album-name">{{ name }}</h3>
  <p class="caption">
    Release Date:
    <span class="overline-1 date">{{ getReleaseDate }}</span>
  </p>
</template>

<script>
  export default {
    name: 'album-details',
    props: {
      name: String,
      releaseDate: Number,
    },
    computed: {
      getReleaseDate() {
        return new Date(this.releaseDate).toDateString();
      },
    },
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
