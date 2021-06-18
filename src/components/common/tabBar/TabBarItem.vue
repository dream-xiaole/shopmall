<template>
  <div class="tab-bar-item">
    <div v-if="true"><slot name="item_icon"></slot></div>
    <div v-else><slot name="select_item_icon"></slot></div>
    <div><slot name="text"></slot></div>
  </div>
</template>

<script>
export default {
  name: 'tabBarItem',
  props: {

  },
  data(){
    return{

    }
  },
}
</script>

<style>

</style>