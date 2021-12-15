<template>
  <div class="portfolio">
    <timeline-event class="portfolio__event">
      <timeline-album></timeline-album>
    </timeline-event>
    <timeline-event class="portfolio__event">
      <timeline-album></timeline-album>
    </timeline-event>
    <timeline-event class="portfolio__event">
      <timeline-album></timeline-album>
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
    margin-right: 0;

    #{ $self }__event {
      width: 100%;
      min-height: 100vh;
      padding: 0 24px 24px;
    }
  }
</style>
