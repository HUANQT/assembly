<template>
  <div :class="btnBH()" @click="fn">
    <slot> </slot>
  </div>
</template>
<script>
export default {
  created() {
    console.log(this.$attrs.type);
    console.log(this.round);
    console.log(this.circle);
  },
  methods: {
    fn() {
      this.$emit("click");
    },

    // 判断按钮颜色有无圆角
    btnBH() {
      if (this.$attrs.type) {
        // 当type属性里面有this.$attrs.type
        if (this.circle) {
          return `${this.$attrs.type} circle`; //判断round为什么布尔值
        } else {
          return this.round
            ? `${this.$attrs.type} round`
            : `${this.$attrs.type} `; //判断round为什么布尔值
        }
      } else {
        //如果没有就返回这个
        return this.round ? `btn round` : ` btn`;
      }
    },
  },
  // 提前在组件内部通过props选项来将某个属性声明为prop属性
  props: {
    round: {
      // type为布尔值
      type: Boolean,
    },

    circle: {
      type: Boolean,
    },
  },

  computed: {
    // value() {
    //   return this.$attrs.value;
    // },
  },
};
</script>
<style>
.btn {
  user-select: none;
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #fff;
  border: 1px solid #dcdfe6;
  color: #606266;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin: 0 10px 0 10px;
  transition: 0.1s;
  font-weight: 500;
  padding: 15px 20px;
  font-size: 14px;
  border-radius: 4px;
}

.btn:hover {
  color: #409eff;
  border-color: #c6e2ff;
  background-color: #ecf5ff;
}

.btn:active {
  color: #3a8ee6;
  border-color: #3a8ee6;
  outline: none;
}

.blue {
  user-select: none;
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: blue;
  border: 1px solid blue;
  color: white;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin: 0;
  transition: 0.1s;
  font-weight: 500;
  padding: 15px 20px;
  font-size: 14px;
  border-radius: 4px;
}

.yellow {
  user-select: none;
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: yellow;
  border: 1px solid yellow;
  color: red;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin: 0;
  transition: 0.1s;
  font-weight: 500;
  padding: 15px 20px;
  font-size: 14px;
  border-radius: 4px;
}

.danger {
  user-select: none;
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: red;
  border: 1px solid red;
  color: white;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin: 0;
  transition: 0.1s;
  font-weight: 500;
  padding: 15px 20px;
  font-size: 14px;
  border-radius: 4px;
}

.success {
  user-select: none;
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: green;
  border: 1px solid green;
  color: white;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin: 0;
  transition: 0.1s;
  font-weight: 500;
  padding: 15px 20px;
  font-size: 14px;
  border-radius: 4px;
}

.primary {
  height: 50px;
  width: 50px;
  background-color: blue;
}

.circle {
  border-radius: 50%;
}

.round {
  border-radius: 20px;
}
</style>
