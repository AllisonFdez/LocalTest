<template>
  <section class='dynamic-chart'>
      <vue-highcharts :options="options" :Highcharts="Highcharts" ref='dynamicChart' ></vue-highcharts>
  </section>
</template>

<script>
import VueHighcharts from 'vue2-highcharts'
import * as data from '../assets/data.js'

export default {
  components: {
    VueHighcharts
  },
  data () {
    return {
      options: data.dynamicChart
    }
  }
}
</script>

<style lang="scss" rel="stylesheet/scss" type="text/css">
$chartWidth: 1000px;
.dynamic-chart {
  width: $chartWidth;
  height: auto;
  margin: 0 auto;
  padding: 2em 0;
  text-align: center;
  h3 {
    text-align: center;
    margin: 0;
  }
  button {
    padding: 5px 20px;
    background: #fff;
    -webkit-appearance: none;
    border: 1px solid #c5c5c5;
    border-radius: 5px;
    outline: none;
    &:hover {
      background: lightgray;
      color: #333;
    }
  }
}
</style>
