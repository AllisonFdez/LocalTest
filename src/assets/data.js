export let basicData = {
  chart: {
    type: 'spline'
  },
  title: {
    text: 'Monthly Average Voltages'
  },
  subtitle: {
    text: '[V]'
  },
  xAxis: {
    categories: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec'
    ]
  },
  yAxis: {
    title: {
      text: 'Voltages'
    },
    labels: {
      formatter: function () {
        return this.value
      }
    }
  },
  tooltip: {
    crosshairs: true,
    shared: true
  },
  credits: {
    enabled: false
  },
  plotOptions: {
    spline: {
      marker: {
        radius: 4,
        lineColor: '#666666',
        lineWidth: 1
      }
    }
  },
  series: []
}

export let asyncData = {
  name: 'Red',
  marker: {
    symbol: 'square'
  },
  data: [
    7.0,
    6.9,
    9.5,
    14.5,
    18.2,
    21.5,
    25.2,
    23.3,
    18.3,
    13.9,
    9.6
  ]
}

export const polarData = {
  chart: {
    polar: true
  },
  title: {
    text: 'Highcharts Polar Chart'
  },
  pane: {
    startAngle: 0,
    endAngle: 360
  },
  credits: {
    enabled: false
  },
  xAxis: {
    tickInterval: 120,
    min: -120,
    max: 240,
    labels: {
      enabled: false,
      formatter: function () {
        return this.value + '°'
      },
      rotation: 45
    }
  },
  yAxis: {
    tickInterval: 0.05,
    min: 0.9,
    max: 1.1,
    labels: {
      enabled: true
    }
  },
  plotOptions: {
    series: {
      pointStart: 0,
      pointInterval: 45
    },
    column: {
      pointPadding: 0,
      groupPadding: 0
    }
  },
  series: [{
    type: 'line',
    name: 'Line',
    data: [0]
  }]
}
