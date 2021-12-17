<template>
  <div class="avatar">
    <img
      src="http://127.0.0.1:8585/images/mehrdad/profile.png"
      alt="profile-picture"
    />
  </div>
  <h2 class="title">Mehrdad Mehmanii</h2>
  <p>Born in 1998 | <span class="overline">Mashhad, Iran</span></p>
</template>

<script>
  export default {
    name: 'timeline-profile',
  };
</script>

<style lang="scss" scoped>
  .avatar {
    width: 240px;
    height: 320px;
    background: var(--divider-color);
    border-radius: 120px;
    padding-top: 24px;
    margin-bottom: 24px;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  .title {
    margin-bottom: 6px;
  }
</style>
