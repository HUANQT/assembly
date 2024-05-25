<template>
  <div>
    <Icon icon="tabler:error-404-off" class="text-[300px]" />
    <div>{{ seconds }}秒后返回首页！</div>
    <button @click="$router.replace('/')">返回首页</button>
  </div>
</template>
<script>
export default {
  data() {
    return { seconds: 10 };
  },
  mounted() {
    const timer = setInterval(() => {
      this.seconds--;
      console.log(this.seconds);
      if (this.seconds === 0) {
        clearInterval(timer);
        this.$router.replace("/");
      }
    }, 1000);
    this.$on("hook:beforeDestroy", () => clearInterval(timer));
  },
};
</script>
