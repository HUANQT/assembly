<template>
  <!-- TabPane组件模板，内容仅在该标签页被激活时显示 -->
  <div v-show="isActive">
    <slot>{{}}</slot>
  </div>
</template>

<script>
export default {
  props: {
    label: String,
    name: String,
  },

  computed: {
    isActive() {
      return this.$parent.activeName === this.name;
    },
  },

  mounted() {
    this.$parent.addPane(this);
  },

  beforeDestroy() {
    this.$parent.removePane(this);
  },
};
</script>
<style>
.tab-pane {
  display: none;
  &.active {
    display: block;
  }
}
</style>
