<template>
  <div class="portfolio">
    <timeline-event>
      <timeline-album class="portfolio__timeline-album"></timeline-album>
    </timeline-event>
    <timeline-event>
      <timeline-album class="portfolio__timeline-album"></timeline-album>
    </timeline-event>
    <timeline-event>
      <timeline-album class="portfolio__timeline-album"></timeline-album>
    </timeline-event>
  </div>
</template>

<script>
  import timelineEvent from '@/common/components/timeline-event.component.vue';
  import timelineAlbum from '@/common/view-components/timeline-album.component.vue';
  export default {
    name: 'portfolio-view',
    components: { timelineEvent, timelineAlbum },
  };
</script>

<style lang="scss" scoped>
  .portfolio {
    $self: &;

    margin: 64px;

    #{ $self }__timeline-album {
      height: 100vh;
      width: 100%;
    }
  }
</style>
