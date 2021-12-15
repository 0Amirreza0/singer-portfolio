<template>
  <div class="album-cover">
    <album-disk class="album-cover__disk"></album-disk>
    <div class="album-cover__cover">
      <img src="http://127.0.0.1:8585/images/mehrdad/cover-1.jpg" />
    </div>
  </div>
</template>

<script>
  import albumDisk from '@/common/components/album-disk.component.vue';
  export default {
    name: 'album-cover',
    components: { albumDisk },
  };
</script>

<style lang="scss" scoped>
  .album-cover {
    $self: &;

    position: relative;
    width: 160px;
    height: 160px;

    #{$self}__cover {
      width: 100%;
      height: 100%;
      background-color: var(--divider-color);
      border-radius: 6px;
      overflow: hidden;
      z-index: 1;
      position: relative;
      box-shadow: 4px 0 12px rgba(0, 0, 0, 0.15);

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    #{ $self }__disk {
      $spacing: 16px;
      width: calc(100% - #{$spacing});
      height: calc(100% - #{$spacing});
      position: absolute;
      top: $spacing / 2;
      left: 60%;
      transform: rotate(-45deg);
    }
  }
</style>
