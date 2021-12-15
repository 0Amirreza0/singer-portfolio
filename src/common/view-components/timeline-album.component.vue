<template>
  <h2 class="title">The Beginning</h2>
  <p>Written the songs while i was at the camp.</p>
  <album-cover class="album-cover"></album-cover>
</template>

<script>
  import albumCover from '@/common/components/album-cover.component.vue';
  export default {
    name: 'timeline-album',
    components: { albumCover },
  };
</script>

<style lang="scss" scoped>
  .title {
    margin-bottom: 6px;
  }

  .album-cover {
    margin: 24px 0 8px;
  }
</style>
