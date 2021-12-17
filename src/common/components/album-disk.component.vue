<template>
  <div class="disk">
    <div class="disk__ring">
      <div class="disk__cover">
        <img src="http://127.0.0.1:8585/images/mehrdad/cover-1.jpg" />
        <div class="disk__hole"></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'album-disk',
  };
</script>

<style lang="scss" scoped>
  .disk {
    $self: &;

    @mixin flex-center {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    background-color: #121212;
    border-radius: 50%;
    padding: 6px;

    #{ $self }__ring {
      @include flex-center;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      border: 2px solid #454545;

      #{ $self }__cover {
        @include flex-center;
        width: 68px;
        height: 68px;
        border-radius: 50%;
        overflow: hidden;
        position: relative;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          position: absolute;
          top: 0;
          left: 0;
        }

        #{ $self }__hole {
          position: relative;
          z-index: 1;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background-color: #ffffff;
          box-shadow: inset 1px 2px 3px rgba(0, 0, 0, 0.5);
        }
      }
    }
  }
</style>
