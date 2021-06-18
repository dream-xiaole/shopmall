<template>
  <div id="app">
    <tab-bar>
      <tab-bar-item>
        <template #item_icon><img src="" alt=""></template>
        <template #select_item_icon><img src="" alt=""></template>
        <template #text><span>首页</span></template>
      </tab-bar-item>
      <tab-bar-item>
        <template #item_icon><img src="" alt=""></template>
        <template #select_item_icon><img src="" alt=""></template>
        <template #text><span>首页</span></template>
      </tab-bar-item>
      <tab-bar-item>
        <template #item_icon><img src="" alt=""></template>
        <template #select_item_icon><img src="" alt=""></template>
        <template #text><span>首页</span></template>
      </tab-bar-item>
      <tab-bar-item>
        <template #item_icon><img src="" alt=""></template>
        <template #select_item_icon><img src="" alt=""></template>
        <template #text><span>首页</span></template>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from '@/components/common/tabBar/TabBar.vue'
import TabBarItem from './components/common/tabBar/TabBarItem.vue'
export default {
  name: 'App',
  components: {
    TabBar,
    TabBarItem
  },
  created () {
    
  }
}
</script>

<style>
@import url('~@/assets/css/base.css');
</style>
