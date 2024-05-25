<script>
export default {
  data() {
    return {
      visible: false,
    };
  },
  mounted() {
    this.visible = true;
  },
  methods: {
    hide() {
      this.visible = false;
      this.$nextTick(() => this.$destroy());
    },
    confirm() {
      // resolve
      this.resolve();
      this.hide();
    },
    cancel() {
      // reject
      this.reject();
      this.hide();
    },
  },
};
</script>
<template>
  <transition name="side">
    <div
      v-if="visible"
      class="el-message-box w-[300px] top-[50px] bg-red-500 absolute left-[50%] translate-x-[-100px]"
    >
      <div class="el-message-box__header">
        <div class="el-message-box__title">
          <span>{{ title }}</span>
        </div>
      </div>
      <div class="el-message-box__content">
        <div class="el-message-box__container">
          <!-- <div class="el-message-box__status el-icon-warning"></div> -->
          <div class="el-message-box__message">
            <p>{{ message }}</p>
          </div>
        </div>
      </div>
      <div class="el-message-box__btns">
        <Button @click="cancel" round>
          {{ cancelButtonText }}
        </Button>
        <Button @click="cancel" round>
          {{ confirmButtonText }}
        </Button>
      </div>
    </div>
  </transition>
</template>
<style scoped>
.el-message-box {
  display: inline-block;
  width: 420px;
  padding-bottom: 10px;
  vertical-align: middle;
  background-color: #fff;
  border-radius: 4px;
  border: 1px solid #ebeef5;
  font-size: 18px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  text-align: left;
  overflow: hidden;
  backface-visibility: hidden;
}
.el-message-box__header {
  position: relative;
  padding: 15px 15px 10px;
}
.el-message-box__content {
  padding: 10px 15px;
  color: #606266;
  font-size: 14px;
}
.el-message-box__btns {
  padding: 5px 15px 0;
  text-align: right;
}

.side-enter,
.side-leave-to {
  transform: translate(-100px, -100%);
}
.side-enter-active,
.side-leave-active {
  transition: all 0.3s ease-in;
}
.side-enter-to,
.side-leave {
  transform: translate(-100px, 0);
}
</style>
