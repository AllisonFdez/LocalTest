<template>
<div class="content-all">
  <div class="box-header"></div>
  <div class="row">
    <div class="col-md-3 col-sm-6 col-sm-offset-3 col-xs-12">
        <span class="info-box-number" >Node 650 <p>Smart grid Panel Report</p></span>
    </div>
      <div class="col-md-3 col-sm-6 col-sm-offset-3 col-xs-12">
        <frequency class="info-box" />
      </div>
  </div>
 <div class="row">
    <div class="col-md-4 col-sm-6 col-sm-offset-1 col-xs-12">
      <div class="box">
        <p class="text-center" >
         <polar-chart />
        </p>
      </div>
    </div>
    <div class="col-md-4 col-sm-6 col-xs-12">
      <div class="box">
        <p class="text-center">
         <polar-chart-currents />
        </p>
      </div>
    </div>
    <div class="col-md-2 col-sm-8 col-xs-12">
       <div class="content-all">
        <p class="text-center">

        </p>
      </div>
      <div class="content-all">
        <p class="text-center">
         <power-report />
        </p>
      </div>
      <div class="content-all">
        <p class="text-center">
         <energy-report />
        </p>
      </div>
    </div>
 </div>
</div>
</template>

<script>
import Frequency from './Frequency.vue'
import PolarChart from '../components/PolarChart.vue'
import PolarChartCurrents from '../components/PolarChartCurrents.vue'
import PowerReport from '../components/PowerReport.vue'
import EnergyReport from '../components/EnergyReport.vue'

export default {
  components: {
    Frequency,
    PolarChart,
    PolarChartCurrents,
    PowerReport,
    EnergyReport
  }
}
</script>

<style scoped>
.info-box-number {
  font-size: 20px
}
.info-box {
  cursor: pointer;
  min-height:89px;
  width: 80%;
  align-content: center
}
.info-box-content {
  align-content: center;
  vertical-align: middle;
  display: inherit;
}
.info-box-icon {
  height:72px;
  width:60px;
  font-size:50px;
  line-height:70px
}
.box {
  align-content: center
}
</style>
