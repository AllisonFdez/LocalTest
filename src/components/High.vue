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

import axios from 'axios'

export default {
  components: {
    VueHighcharts
  },
  data () {
    return {
      options: data.basicData,
      Highcharts: Highcharts,
      datos: [],
      asyncData: {
        name: 'Red',
        marker: {
          symbol: 'square'
        },
        data: [
          7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 23.3
        ]
      }
    }
  },
  mounted () {
    this.getPowers()
  },
  methods: {
    getPowers () {
      axios.get('http://localhost:8080/load_powers').then(response => {
        this.datos = response.data
        console.log('dato', response.data)
      })
    },
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
          0, 1, this.datos.watt, 2
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
