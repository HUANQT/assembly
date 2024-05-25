<template>
  <div
    class="flex items-center text-[14px] text-[#555] relative"
    :class="{ 'is-checked': isChecked }"
    @click="toggle"
  >
    <div
      class="w-[14px] h-[14px] ml-[4px] rounded-sm border-sm border-[1px] checkbox_inner"
      :class="{
        'border-[#409eff] bg-[#409eff]': isChecked,
      }"
    ></div>
    <div
      class="mx-[4px] checkbox_text"
      :class="{ 'text-[#409eff]': isChecked }"
    >
      {{ label }}
    </div>
  </div>
</template>
<script>
export default {
  created() {
    console.log(this.$parent.value);
    console.log(this.$parent.$children);
  },
  computed: {
    isChecked() {
      return this.$parent.value.includes(this.label);
    },
  },
  methods: {
    toggle() {
      const res = this.isChecked
        ? this.$parent.value.filter((item) => item != this.label)
        : [...this.$parent.value, this.label];
      this.$parent.trigger(res);
    },
  },

  props: {
    label: {
      type: String,
    },
  },
};
</script>
<style>
.checkbox_inner:hover {
  border-color: #409eff;
  cursor: pointer;
}
.checkbox_text:hover {
  cursor: pointer;
}

.checkbox_inner::after {
  box-sizing: content-box;
  content: "";
  border: 1px solid #fff;
  border-left: 0;
  border-top: 0;
  height: 7px;
  left: 9px;
  position: absolute;
  top: 5px;
  transform: rotate(45deg) scaleY(0);
  width: 3px;
  transition: transform 0.15s ease-in 0.05s;
  transform-origin: center;
}

.is-checked .checkbox_inner:after {
  transform: rotate(45deg) scaleY(1);
}
</style>
