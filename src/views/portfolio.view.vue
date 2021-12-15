<template>
  <div class="portfolio">
    <timeline-event>
      <div class="portfolio__event">
        <p>Born In 1998</p>
      </div>
    </timeline-event>
    <timeline-event>
      <div class="portfolio__event">
        <p>Born In 1998</p>
      </div>
    </timeline-event>
    <timeline-event>
      <div class="portfolio__event">
        <p>Born In 1998</p>
      </div>
    </timeline-event>
  </div>
</template>

<script>
  import timelineEvent from '@/common/components/timeline-event.component.vue';
  export default {
    name: 'portfolio-view',
    components: { timelineEvent },
  };
</script>

<style lang="scss" scoped>
  .portfolio {
    $self: &;

    margin: 64px;

    #{ $self }__event {
    }
  }
</style>
