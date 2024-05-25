<template>
  <div class="flex">
    <slot />
  </div>
</template>
<script>
export default {
  props: {
    value: {
      type: Array,
      required: true,
    },
  },
  methods: {
    trigger(newValue) {
      this.$emit("input", newValue);
    },
  },
  created() {
    // console.log("MyCheckboxGroup", this.value);
  },
};
</script>
