<template>
<section class="content-all">
  <div class="box-header"></div>
  <div class="row">
    <div class="col-md-3 col-sm-6 col-sm-offset-3 col-xs-12">
        <span class="info-box-number">Node 650 <p>Smart grid Panel Report</p></span>
    </div>
      <div class="col-md-3 col-sm-6 col-sm-offset-3 col-xs-12">
        <frecuency class="info-box"></frecuency>
      </div>
  </div>
 <div class="row">
    <div class="col-md-7 col-sm-6 col-sm-offset-1 col-xs-12">
      <div class="box">
          <div class="box-body">
            <div class="col-sm-6 col-xs-12">
              <p class="text-center">
                <polar-chart />
              </p>
            </div>
            <div class="col-sm-6 col-xs-12">
              <p class="text-center">
                <polar-chart />
              </p>
            </div>
            <div class="col-sm-4 col-xs-12">
            </div>
          </div>
      </div>
    </div>
    <div class="col-md-3 col-sm-8 col-xs-12">
    </div>
 </div>
</section>
</template>

<script>
import Frecuency from './Frecuency.vue'
import PolarChart from '../components/PolarChart.vue'

export default {
  components: {
    Frecuency,
    PolarChart
  }
}
</script>

<style scoped>
.info-box {
  cursor: pointer;
  min-height:60px;
  width: 70%;
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
</style>
