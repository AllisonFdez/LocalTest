<template>
  <div>
    <span class="info-box-icon bg-blue">
      <scale-loader :loading='true' color='#ffffff' height='30px' width='4px' margin='2px'></scale-loader>
    </span>
    <span class="info-box-freq">{{current}}</span>
    <span class="info-box-pf">Φ Pf: {{factor_potencia}}</span>
  </div>
</template>
<script>
import { ScaleLoader } from 'vue-spinner/dist/vue-spinner.min.js'
import { getData } from '../assets/asyncData'

export default {
  components: {
    ScaleLoader
  },
  data: () => {
    return {
      current: 80,
      factor_potencia: '100'
    }
  },
  mounted: () => {
    console.log('mounted')
    this.current = 90;
  }
}
</script>
