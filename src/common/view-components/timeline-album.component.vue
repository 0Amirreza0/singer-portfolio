<template>
  <h2 class="title">{{ title }}</h2>
  <p>{{ description }}</p>
  <album-cover v-if="image" :image="image" class="album-cover"></album-cover>
  <album-details :name="name" :releaseDate="releaseDate"></album-details>
  <ripple-button class="more" trailing-icon-name="arrow_circle_right">
    More Details
  </ripple-button>
</template>

<script>
  import albumCover from '@/common/components/album-cover.component.vue';
  import rippleButton from '@/common/components/ripple-button.component.vue';
  import albumDetails from '@/common/view-components/album-details.component.vue';

  export default {
    name: 'timeline-album',
    components: { rippleButton, albumCover, albumDetails },
    props: {
      id: String,
      title: String,
      description: String,
      name: String,
      releaseDate: Number,
      image: String,
    },
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

  .more {
    margin-top: 16px;
  }
</style>
