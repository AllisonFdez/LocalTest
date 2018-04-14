<template>
<div id="esto">
    <div class="color-header">
      <Icon style="width: 300px; height: 300px">
        vue-js-grid
      </Icon>
    </div>
    <div class="v-grid-item-wrapper v-grid-item-animate">
        Hola
    </div>
  </div>
</template>

<script>
import Icon from './Icon.vue'
export default {
  name: 'esto',
  components: {
    Icon
  },
  methods: {
    click ({ items, index }) {
      let value = items.find(v => v.index === index)
      this.selected = value.item
      console.log(this.selected)
    }
  }
}
</script>

<style>
body {
  background: #ca0e0e;
}
.color-header {
  position: relative;
  padding: 10px 0;
  box-sizing: border-box;
}
.v-grid-item-wrapper {
    width: 100px;
    height: 100px;
    position: relative;
  padding: 10px 0;
  box-sizing: border-box;
}
</style>
