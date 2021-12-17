<template>
  <button :type="type" :disabled="disabled">
    <ripple-effect
      :disabled="disabled"
      :class="{ 'ripple-button': true, elevated, disabled }"
    >
      <transition name="bounce">
        <slot name="leading">
          <div v-if="leadingIconName" class="ripple-button__icon-container">
            <custom-icons
              class="ripple-button__icon"
              :name="leadingIconName"
            ></custom-icons>
            <div class="ripple-button__spacer"></div>
          </div>
        </slot>
      </transition>
      <slot></slot>
      <transition name="bounce">
        <slot name="trailing">
          <div v-if="trailingIconName" class="ripple-button__icon-container">
            <div class="ripple-button__spacer"></div>
            <custom-icons
              class="ripple-button__icon"
              :name="trailingIconName"
            ></custom-icons>
          </div>
        </slot>
      </transition>
    </ripple-effect>
  </button>
</template>

<script>
  import RippleEffect from '@/common/components/ripple-effect.component.vue';
  import customIcons from '@/common/components/custom-icons.component.vue';

  export default {
    name: 'ripple-button',
    components: { RippleEffect, customIcons },
    props: {
      elevated: {
        type: Boolean,
        default: true,
      },
      disabled: {
        type: Boolean,
        default: false,
      },
      leadingIconName: String,
      trailingIconName: String,
      type: {
        type: String,
        default: 'button',
      },
    },
  };
</script>

<style lang="scss" scoped>
  @mixin flex-center {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .ripple-button {
    $self: &;
    $ripple-effect-color: var(--ripple-button-ripple-effect-color);

    --splash-color: #{$ripple-effect-color};
    --splash-alpha: 0.4;
    --highlight-color: #{$ripple-effect-color};
    --highlight-alpha: 0.15;

    padding: var(--ripple-button-padding, 8px 12px);
    border-radius: var(--ripple-button-border-radius, 64px);
    font-size: 12px;
    cursor: pointer;
    min-width: 96px;
    width: 100%;
    background-color: var(--ripple-button-background-color, transparent);
    color: var(--ripple-button-color);

    @include flex-center;

    #{ $self }__icon-container {
      @include flex-center;
      font-size: 0;

      #{ $self }__icon {
        // box-sizing: content-box;
        fill: var(--ripple-button-icon-color, var(--ripple-button-color));
        width: var(--ripple-button-icon-size, 18px);
        height: var(--ripple-button-icon-size, 18px);
      }

      #{ $self }__spacer {
        margin: 0 4px;
      }
    }

    &.elevated {
      $elevated-ripple-effect-color: var(
        --ripple-button-elevated-ripple-effect-color,
        (255, 255, 255)
      );

      box-shadow: var(--ripple-button-elevated-shadow);
      transition: box-shadow ease-out 0.2s, background-color ease-out 0.2s,
        color ease-out 0.2s;
      background-color: var(--ripple-button-elevated-background-color, #673ab7);
      color: var(--ripple-button-elevated-color);
      --splash-color: #{$elevated-ripple-effect-color};
      --splash-alpha: 0.6;
      --highlight-color: #{$elevated-ripple-effect-color};
      --highlight-alpha: 0.3;

      #{ $self }__icon {
        fill: var(
          --ripple-button-elevated-icon-color,
          var(--ripple-button-elevated-color)
        );
      }

      &:active {
        box-shadow: var(--ripple-button-elevated-shadow-active);
      }
    }

    &.disabled {
      background-color: var(--ripple-button-disabled-background-color, #cacaca);
      color: var(--ripple-button-disabled-color, #787878);
      cursor: default;
      box-shadow: none;

      &:active {
        box-shadow: none;
      }
    }

    .bounce-enter-active {
      animation: bounce-in 0.45s;
    }

    .bounce-leave-active {
      animation: bounce-in 0.25s reverse;
    }

    @keyframes bounce-in {
      0% {
        transform: scale(0);
      }
      50% {
        transform: scale(1.25);
      }
      100% {
        transform: scale(1);
      }
    }
  }
</style>
