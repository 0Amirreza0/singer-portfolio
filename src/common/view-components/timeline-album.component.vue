<template>
  <h2 class="title">The Beginning</h2>
  <p>Written the songs while i was at the camp.</p>
  <album-cover class="album-cover"></album-cover>
  <album-details></album-details>
</template>

<script>
  import albumCover from '@/common/components/album-cover.component.vue';
  import albumDetails from '@/common/view-components/album-details.component.vue';
  export default {
    name: 'timeline-album',
    components: { albumCover, albumDetails },
  };
</script>

<style lang="scss" scoped>
  .title {
    margin-bottom: 6px;
  }

  .album-cover {
    margin: 24px 0 8px;
    cursor: pointer;
  }
</style>
