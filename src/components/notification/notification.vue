<template>
  <div
    role="alert"
    class="el-notification right"
    style="top: 16px; z-index: 2062"
    v-show="visible"
  >
    <div class="el-notification__group">
      <h2 class="el-notification__title flex items-center justify-between">
        <span>{{ title }}</span>
        <span @click="cancel" class="cursor-pointer"
          ><Icon icon="icon-park-solid:error"
        /></span>
      </h2>
      <div class="el-notification__content">
        <p>{{ message }}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: String,
    message: [String, Object],
    type: String,
    duration: {
      type: Number,
      default: 4500,
    },
  },
  data() {
    return { visible: false };
  },
  mounted() {
    this.visible = true;
    if (this.duration > 0) {
      const timer = setTimeout(() => {
        this.hide();
      }, this.duration);
      // 清除定时器
      this.$once("hook:beforeDestroy", () => clearTimeout(timer));
    }
  },
  methods: {
    hide() {
      this.visible = false;
      this.$nextTick(() => this.$destroy());
    },
    cancel() {
      // reject "取消"
      this.hide();
    },
  },
};
</script>
<style>
.el-notification {
  position: absolute;
  right: 0;
  display: flex;
  width: 250px;
  padding: 14px 26px 14px 13px;
  border-radius: 8px;
  box-sizing: border-box;
  border: 1px solid #ebeef5;
  position: fixed;
  background-color: #fff;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  transition: opacity 0.3s, transform 0.3s, left 0.3s, right 0.3s, top 0.4s,
    bottom 0.3s;
  overflow: hidden;
}
.el-notification__group {
  margin-left: 13px;
  margin-right: 8px;
}
.el-notification__title {
  font-weight: 700;
  font-size: 16px;
  color: #303133;
  margin: 0;
}
.el-notification__content {
  font-size: 14px;
  line-height: 21px;
  margin: 6px 0 0;
  color: #606266;
  text-align: justify;
}
</style>
