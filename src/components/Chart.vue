<script>
import { Line } from 'vue-chartjs'

export default {
  extends: Line,
  data () {
    return {
      datacollection: {
        labels: ['En', 'Fb', 'Ma'],
        datasets: [{ label: 'My activities', backgroundColor: '#FFFFFF', data: [20, 50, 45] }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false
      }
    }
  },
  mounted () {
    this.renderChart(this.datacollection, this.options)
  }
}
</script>
