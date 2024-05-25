<template>
  <div>
    <div class="tabs flex" :class="{ card: type === 'card' }">
      <div
        class="mx-[2vw]"
        v-for="(pane, index) in panes"
        :key="index"
        @click="changeActive(pane.name)"
        :class="{ active: pane.name === activeName }"
      >
        {{ pane.label }}
      </div>
    </div>
    <div class="tab-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    type: String,
    active: String,
  },
  data() {
    return {
      activeName: this.active,
      panes: [],
    };
  },

  methods: {
    changeActive(name) {
      this.activeName = name;
      this.$emit("input", name);
    },
    addPane(pane) {
      this.panes.push(pane);
    },

    removePane(pane) {
      const index = this.panes.indexOf(pane);
      if (index > -1) {
        this.panes.splice(index, 1);
      }
    },
  },
};
</script>
<style>
.active {
  color: #409eff;
  border-bottom: 1px solid #409eff;
}
</style>
