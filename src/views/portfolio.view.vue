<template>
  <div class="portfolio">
    <timeline-event
      v-for="album in albumMap"
      :key="album.id"
      class="portfolio__event"
    >
      <timeline-album v-bind="album"></timeline-album>
    </timeline-event>
  </div>
</template>

<script>
  import timelineEvent from '@/common/components/timeline-event.component.vue';
  import timelineAlbum from '@/common/view-components/timeline-album.component.vue';
  export default {
    name: 'portfolio-view',
    components: { timelineEvent, timelineAlbum },
    computed: {
      albumMap() {
        return {
          '6f9036ef-c34b-4a81-9462-29b544c5f292': {
            id: '6f9036ef-c34b-4a81-9462-29b544c5f292',
            title: 'The Beginning',
            name: 'The Underground World',
            description: 'Written the songs while i was at the camp.',
            releaseDate: 1639776765968,
          },
        };
      },
    },
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
