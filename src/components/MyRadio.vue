<template>
  <label
    :class="['MyRadio', { MyRadio_active: label == value }]"
    @click="$emit('input', label)"
  >
    <span class="MyRadio_input"> </span>
    <span class="MyRadio_label"> <slot></slot> </span>
  </label>
</template>
<script>
export default {
  updated() {
    // console.log(this.label);
    // console.log(this.value);
  },
  props: {
    label: {
      required: true,
      type: [String, Number],
    },
    value: {
      required: true,
      type: [String, Number],
    },
  },
};
</script>
<style scoped>
.MyRadio {
  margin-right: 20px;
  display: flex;
  align-items: center;
}

.MyRadio_input {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  border: 1px solid #999;
  margin-right: 12px;
  cursor: pointer;
  position: relative;
}
.MyRadio_input:hover {
  border-color: red;
}

.MyRadio_label {
  font-size: 14px;
  color: #555;
}
.MyRadio_label:hover {
  cursor: pointer;
}
.MyRadio_active > .MyRadio_input {
  border-color: #409eff;
  background: #409eff;
}

.MyRadio_active > .MyRadio_input::after {
  width: 4px;
  height: 4px;
  border-radius: 100%;
  background-color: #fff;
  content: "";
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%) scale(1);
  transition: transform 0.15s ease-in;
}

.MyRadio_active > .MyRadio_label {
  color: #409eff;
}
</style>
