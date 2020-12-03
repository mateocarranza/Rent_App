<template>
  <button @click="$emit('click')" :class="color">
    <slot></slot>
  </button>
</template>
<script>
export default {
  name: "ButtonApp",
  props: {
      color: {
          type: String,
          default: 'primary'
      }
  }
};
</script>
<style lang="less" scoped>
button {
  cursor: pointer;
  padding: 10px 15px;
  border: none;
  outline: none;
  border-radius: 10px;
  color: white;
  font-weight: bold;
  display: flex;
  align-items: center;
  i{
    margin-right: 10px;
  }
  &.secondary{
      background-color: rgba(151, 34, 38);
  }
  &.primary{
    background-color: rgba(70, 208, 218);
  }
}
</style>