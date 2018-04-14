<template>
    <section class='charts'>
        <h3>Line Basic
            <p>Voltage average</p>
        </h3>
        <vue-highcharts :options="options" :Highcharts="Highcharts" ref='lineCharts'></vue-highcharts>
        <button @click="load">load</button>
        <button @click="add">add Series</button>
    </section>
</template>

<script>
import VueHighcharts from 'vue2-highcharts'
import Highcharts from 'highcharts'
import * as data from '../assets/data.js'

export default {
  components: {
    VueHighcharts
  },
  data () {
    return {
      options: data.basicData,
      Highcharts: Highcharts
    }
  },
  mounted () {},
  methods: {
    load () {
      let lineCharts = this.$refs.lineCharts
      lineCharts.delegateMethod('showLoading', 'Loading...')
      setTimeout(() => {
        lineCharts.addSeries(data.asyncData)
        lineCharts.hideLoading()
      }, 2000)
    },
    add () {
      this.$refs.lineCharts.addSeries({
        data: [
          10.0,
          8.9,
          19.5,
          16.5,
          20.2,
          23.5,
          27.2,
          20.3,
          16.3,
          19.9,
          6
        ]
      })
    }
  }
}
</script>

<style lang="scss" rel="stylesheet/scss" type="text/css">
$chartWidth: 1000px;
.charts {
  width: $chartWidth;
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
