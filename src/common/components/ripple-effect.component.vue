<template>
  <div
    class="effect"
    @mouseup="deactivateHighlight"
    @mouseleave="deactivateHighlight"
    @mousedown="createRipple"
    ref="effect"
  >
    <span class="highlight" :class="{ active }"></span>
    <slot></slot>
  </div>
</template>

<script>
  import { ref } from 'vue';
  export default {
    name: 'ripple-effect',
    props: {
      disabled: {
        type: Boolean,
        default: false,
      },
    },

    setup(props) {
      const effect = ref(null);
      const active = ref(false);

      const deactivateHighlight = () => (active.value = false);

      const createRipple = (event) => {
        if (props.disabled) return;

        active.value = true;

        const ripple = document.createElement('span');
        const diameter = Math.max(
          effect.value.clientWidth,
          effect.value.clientHeight,
        );
        const radius = diameter / 2;

        const rect = effect.value.getBoundingClientRect();
        const xPosition = event.clientX - rect.left - radius;
        const yPosition = event.clientY - rect.top - radius;

        ripple.classList.add('ripple');

        ripple.style.width = ripple.style.height = `${diameter}px`;
        ripple.style.top = `${yPosition}px`;
        ripple.style.left = `${xPosition}px`;

        ripple.addEventListener('animationend', () => ripple.remove());

        effect.value.appendChild(ripple);
      };

      return {
        effect,
        active,
        deactivateHighlight,
        createRipple,
      };
    },
  };
</script>

<style lang="scss" scoped>
  .effect {
    display: inline-block;
    position: relative;
    overflow: hidden;
    font-size: 0;

    .highlight {
      background-color: rgba(
        var(--highlight-color, (255, 255, 255)),
        var(--highlight-alpha, 0.3)
      );
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0;
      transition: opacity ease-in 0.4s;

      &.active {
        opacity: 1;
      }
    }

    :deep .ripple {
      position: absolute;
      border-radius: 50%;
      transform: scale(0);
      animation-name: ripple;
      animation-duration: var(--ripple-speed, 0.38s);
      animation-timing-function: linear;
      background-color: rgba(
        var(--splash-color, (255, 255, 255)),
        var(--splash-alpha, 0.6)
      );
    }

    @keyframes ripple {
      to {
        transform: scale(2.1);
        opacity: 0;
      }
    }
  }
</style>
