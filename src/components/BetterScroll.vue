<template>
  <div ref="wrapper" :class="[{ flex: option.scrollX }, 'overflow-hidden']">
    <div :class="{ 'flex flex-1 ': option.scrollX }">
      <slot> </slot>
    </div>
  </div>
</template>
<script>
import BetterScroll from "@better-scroll/core";
export default {
  props: {
    //依赖
    dep: {},
    option: {
      type: Object,
      default: () => ({
        scrollY: true,
        click: true,
      }),
    },
  },

  mounted() {
    const bs = BetterScroll(this.$refs.wrapper, this.option);
    this.$watch(
      () => this.dep,
      () => this.$nextTick(() => bs.$refresh())
    );
  },
};
</script>
