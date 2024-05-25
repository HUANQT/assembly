<script>
export default {
  created() {
    // console.log(this.$attrs);
  },
  data() {
    return {
      // 判断开关
      Switchopen: false,
    };
  },
  props: {
    SwitchColor_dow: {
      default: "",
      type: String,
    },

    SwitchColor_open: {
      default: "",
      type: String,
    },
  },
  methods: {
    textBlock() {
      if (this.$attrs.SwitchText_dow) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>
<template>
  <div>
    <div
      role="cwitch"
      aria-checked="true"
      class="swirch"
      @click="Switchopen = !Switchopen"
    >
      <span
        v-show="textBlock()"
        :style="Switchopen ? { color: 'black' } : { color: '#409eff' }"
        >{{ $attrs.SwitchText_dow }}
      </span>
      <span
        class="switch_core"
        :class="{ checked_switch_core: Switchopen }"
        :style="
          Switchopen
            ? `backgroundColor:${SwitchColor_open}`
            : `backgroundColor:${SwitchColor_dow}`
        "
      >
      </span>
      <span
        v-show="textBlock()"
        :style="Switchopen ? { color: '#409eff' } : { color: 'black' }"
        >{{ $attrs.SwitchText_open }}</span
      >
    </div>
  </div>
</template>
<style>
.switch {
  display: inline-flex;

  -items: center;
  position: relative;
  font-size: 14px;
  line-height: 20px;
  height: 20px;
  vertical-align: middle;
}
.switch_input {
  position: absolute;
  width: 0;
  height: 0;
  opacity: 0;
  margin: 0;
}
.switch_core {
  margin: 0;
  display: inline-block;
  position: relative;
  width: 40px;
  height: 20px;
  border: 1px solid #dcdfe6;
  outline: none;
  border-radius: 10px;
  box-sizing: border-box;
  background: #dcdfe6;
  cursor: pointer;
  transition: border-color 0.3s, background-color 0.3s;
  vertical-align: middle;
}
.switch_core:after {
  content: "";
  position: absolute;
  top: 1px;
  left: 1px;
  border-radius: 100%;
  transition: all 0.3s;
  width: 16px;
  height: 16px;
  background-color: #fff;
}

.checked_switch_core:after {
  left: 100%;
  margin-left: -17px;
  content: "";
  position: absolute;
  border-radius: 100%;
  transition: all 0.3s;
  width: 16px;
  height: 16px;
  background-color: #fff;
}
</style>
