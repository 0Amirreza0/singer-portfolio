<template>
  <div class="timeline-event">
    <slot />
  </div>
</template>

<script>
  export default {
    name: 'timeline-event',
  };
</script>

<style lang="scss" scoped>
  .timeline-event {
    $bullet-width: 16px;

    border-left: 1px solid var(--divider-color);
    position: relative;
    padding-left: $bullet-width;

    &::before {
      content: '';
      display: block;
      width: $bullet-width;
      height: $bullet-width;
      border-radius: 50%;
      background-color: var(--divider-color);
      position: absolute;
      left: -$bullet-width / 2;
      top: 0;
    }
  }
</style>
