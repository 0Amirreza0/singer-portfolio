<script>
  import { h } from 'vue';

  import album from '@/assets/icons/album.svg';
  import arrowCircleRight from '@/assets/icons/arrow-circle-right.svg';

  const iconMap = {
    album,
    arrow_circle_right: arrowCircleRight,
  };

  export default {
    name: 'custom-icons',
    props: {
      name: {
        type: String,
        required: true,
      },
    },

    computed: {
      iconComponent() {
        return iconMap[this.name];
      },
    },

    render() {
      return h(this.iconComponent);
    },
  };
</script>
