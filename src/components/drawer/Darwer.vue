<template>
  <transition name="fade_rlt">
    <div v-if="visible" class="drawer-container p-[3vw] h-[100vh]">
      <div class="drawer-header" v-if="withHeader">
        <div>
          {{ title }}
        </div>
      </div>
      <slot></slot>
    </div>
  </transition>
</template>

<script>
export default {
  name: "Darwer",
  props: {
    title: String,
    visible: Boolean,
    withHeader: {
      type: Boolean,
      default: true,
    },
    direction: {
      type: String,
    },
  },
  updated() {
    console.log(this);
  },
};
</script>

<style scoped>
/* 从右往左 */
.fade_rlt-enter-active,
.fade_rlt-leave-active {
  /* transition: opacity 1s; */
  transform: translateX(100%);
}

.drawer-container {
  position: fixed;
  top: 0;
  right: 0;
  width: 300px;
  background-color: red;
  overflow-y: auto;
  transition: all 0.5s ease-out;
}

.drawer-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}
</style>
