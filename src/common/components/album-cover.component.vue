<template>
  <div class="album-cover">
    <album-disk :image="image" class="album-cover__disk"></album-disk>
    <div class="album-cover__cover">
      <img :src="image" />
    </div>
  </div>
</template>

<script>
  import albumDisk from '@/common/components/album-disk.component.vue';
  export default {
    name: 'album-cover',
    components: { albumDisk },
    props: {
      image: {
        type: String,
        required: true,
      },
    },
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
      border-radius: 8px;
      overflow: hidden;
      z-index: 1;
      position: relative;
      box-shadow: 6px 0 12px -3px rgba(0, 0, 0, 0.25);

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
      transform: translateX(30%) rotate(-90deg);
      transition: transform 0.25s ease-out;
    }

    &:hover {
      #{ $self }__disk {
        transform: translateX(100%) rotate(0deg);
      }
    }
  }
</style>
