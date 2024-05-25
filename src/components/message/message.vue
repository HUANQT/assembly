<script>
export default {
  data() {
    return {
      a: 1,
      visible: false,
    };
  },
  mounted() {
    this.visible = true;

    const timer = setTimeout(() => {
      this.visible = false;
      this.$nextTick(() => {
        this.$destroy();
      });
    }, 3000);
  },
};
</script>
<template>
  <transition name="fade">
    <div
      v-if="visible"
      class="w-[300px] h-[80px] top-[100px] bg-red-500 text-[#fff] text-center rounded-sm absolute left-[50%] translate-x-[-100px]"
    >
      {{ cosnter }}
    </div>
  </transition>
</template>
<style>
.fade-enter,
.fade-leave-to {
  transform: translate(-100px, -100%);
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease-in;
}
.fade-enter-to,
.fade-leave {
  transform: translate(-100px, 0);
}
</style>
