<template>
<div>
  <div class="info-box-report">
    <span class="info-box-icon-off bg-1"><i class="material-icons">power_settings_new</i></span>
    <div class="info-box-content-report">
      <span class="info-box-text-power">Powers</span>
    </div>
  </div>
  <div class="info-box-text">
    <div class="info-box-content-report">
      <span class="info-box-icon-data bg-2"><b>P</b><span class="info-box-units"> [kW]:</span></span><span class="info-box-number"> {{ powers.watt }}</span>
    </div>
    <div class="info-box-content-report">
      <span class="info-box-icon-data bg-3"><b>S</b><span class="info-box-units"> [kVA]:</span></span><span class="info-box-number"> {{ powers.vas }}</span>
    </div>
    <div class="info-box-content-report">
      <span class="info-box-icon-data bg-4"><b>Q</b><span class="info-box-units"> [kVAR]:</span></span><span class="info-box-number"> {{ powers.var }}</span>
    </div>
  </div>
</div>
</template>

<script>
import axios from 'axios'
export default {
  mounted () {
    this.getPowers()
  },
  data () {
    return {
      powers: ''
    }
  },
  methods: {
    getPowers: function () {
      axios.get('http://localhost:8080/load_powers').then(response => {
        this.powers = response.data
      })
    }
  }
}
</script>
