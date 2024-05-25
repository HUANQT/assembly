<template>
  <div>
    <Input
      v-model="val"
      placeholder="请输入用户名"
      name="username"
      show-password
      clearable
    />
    <!-- 开关 -->
    <div class="my-[10px]">
      <span> 变换颜色: </span>
      <MySwitch
        SwitchColor_dow="rgb(255,37,37)"
        SwitchColor_open="rgb(19,206,102)"
      >
      </MySwitch>
      <h2>字体颜色变换</h2>
      <MySwitch
        SwitchColor_dow=""
        SwitchColor_open="#409eff"
        SwitchText_dow="按年付费"
        SwitchText_open="按月付费"
      >
      </MySwitch>
      <h2>字体背景颜色变换</h2>
      <MySwitch
        SwitchColor_dow="rgb(255,37,37)"
        SwitchColor_open="rgb(19,206,102)"
        SwitchText_dow="按年付费"
        SwitchText_open="按月付费"
      >
      </MySwitch>
    </div>
    <hr />
    <!-- 单选框 -->
    <div class="my-[10px]">
      <h2>当前选中的城市{{ city }}(单选)</h2>
      <MyRadio v-model="city" label="bj">北京</MyRadio>
      <MyRadio v-model="city" label="sh">上海</MyRadio>
      <MyRadio v-model="city" label="gz">广州</MyRadio>
    </div>
    <hr />
    <!-- 多选框 -->
    <div class="my-[10px]">
      <h2>当前选中的城市{{ chekedlist }}(多选)</h2>
      <MyCheckboxGroup v-model="chekedlist">
        <MyCheckbox label="北京"> </MyCheckbox>
        <MyCheckbox label="上海"> </MyCheckbox>
        <MyCheckbox label="广州"> </MyCheckbox>
        <MyCheckbox label="深圳"> </MyCheckbox>
      </MyCheckboxGroup>
    </div>
    <hr />
    <!-- 多标签 -->
    <div class="my-[10px]">
      <h2>当前选中{{ name }}</h2>
      <Tabs v-model="name">
        <Tab label="用户管理" name="first">用户管理</Tab>
        <Tab label="用户配置" name="second">用户配置</Tab>
        <Tab label="角色管理" name="third">角色管理</Tab>
        <Tab label="定时任务补偿" name="fourth">定时任务补偿</Tab>
      </Tabs>
    </div>
    <hr />
    <!-- 侧边栏 -->
    <div class="my-[10px]">
      <Button @click="isDrawerVisible = true">点我打开</Button>
      <Darwer
        :title="'标题'"
        :visible="isDrawerVisible"
        @update:visible="onUpdateDrawerVisibility"
        class="relative"
      >
        <span
          @click="isDrawerVisible = false"
          class="absolute top-[1vw] right-[1vw] p-[1vw]"
          >关闭</span
        >
        <span>我来啦</span>
      </Darwer>
    </div>
    <hr />
    <!--  消息提示框 -->
    <div class="my-[10px]">
      <Button @click="$message('这是一条消息')">成功</Button>
      <Button @click="$message('这是一条消息')">失败</Button>
      <Button @click="$message('这是一条消息')">警告</Button>
    </div>
    <hr />
    <div class="my-[10px]">
      <Button @click="fn">点击</Button>
    </div>
    <hr />
    <div class="my-[10px]">
      <Button @click="open1">自动关闭</Button>
      <Button @click="open2">手动关闭</Button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      val: "123",
      city: "bj",
      chekedlist: ["北京", "上海"],
      name: "",
      isDrawerVisible: false,
    };
  },
  methods: {
    open1() {
      const h = this.$createElement;
      this.$notify({
        title: "标题名称",
        message:
          ("i",
          { style: "color: teal" },
          "这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案"),
      });
    },
    open2() {
      this.$notify({
        title: "提示",
        message: "这是一条不会自动关闭的消息",
        duration: 0,
      });
    },
    fn() {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          console.log("确定");
        })
        .catch(() => {
          console.log("取消");
        });
    },
    handleClick(tab, event) {
      console.log(tab, event);
    },
    onUpdateDrawerVisibility(visible) {
      this.isDrawerVisible = visible;
    },
  },
};
</script>
<style scoped></style>
