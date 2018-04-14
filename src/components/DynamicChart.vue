<template>
  <section class='charts'>
        <h3>Voltage Chart</h3>
        <highcharts :options="options" :Highcharts="Highcharts" ></highcharts>
        <polar-chart />
    </section>
</template>

<script>
import PolarChart from '../components/PolarChart'
import VueHighcharts from 'vue2-highcharts'
import Highcharts from 'highcharts/highstock'

const data = {
  chart: {
    type: 'spline',
    animation: Highcharts.svg, // don't animate in old IE
    marginRight: 10,
    events: {
      load: function () {
        var series = this.series[0]
        setInterval(function () {
          var x = new Date().getTime()
          var y = Math.random()
          series.addPoint([x, y], true, true)
        }, 1000)
      }
    }
  },
  title: {
    text: '[V]'
  },
  xAxis: {
    type: 'datetime',
    tickPixelInterval: 50
  },
  yAxis: {
    title: {
      text: 'Value'
    },
    plotLines: [
      {
        value: 0,
        width: 1,
        color: '#808080'
      }
    ]
  },
  tooltip: {
    formatter: function () {
      return (
        '<b>' +
        this.series.name +
        '</b><br/>' +
        Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x) +
        '<br/>' +
        Highcharts.numberFormat(this.y, 2)
      )
    }
  },
  legend: {
    enabled: true
  },
  exporting: {
    enabled: true
  },
  series: [
    {
      name: 'Random data',
      data: (function () {
        var data = []
        var time = new Date().getTime()
        var i
        for (i = -19; i <= 0; i += 1) {
          data.push({
            x: time + i * 1000,
            y: Math.random()
          })
        }
        return data
      })()
    }
  ],
  navigator: {
    enabled: true,
    adaptToUpdatedData: false
  }
}
export default {
  components: {
    VueHighcharts,
    PolarChart
  },
  data () {
    return {
      options: data
    }
  }
}
</script>
