<template>
  <div class="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'tabBar',
}
</script>

<style>
.tab-bar{
  width: 100%;
  display: flex;
  justify-content: space-between;
  height: 45px;
  border: 1px solid #f7f7f7;
  box-shadow: 0 -1px 2px 1px rgba(0, 0, 0, .2);
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
}

</style>