<template>
<section class="content-all">
  <div class="box-header"></div>
  <div class="row">
    <div class="col-md-3 col-sm-6 col-sm-offset-1 col-xs-12">
      <div class="info-box-report-611">
        <span class="info-box-icon-power bg-6"><i class="material-icons">battery_unknown</i></span>
        <div class="info-box-content">
          <span class="info-box-power">##</span>
          <span class="info-box-text-data">Power 1</span>
        </div>
      </div>
    </div>
     <div class="col-md-3 col-sm-6 col-xs-12">
      <div class="info-box-report-611">
        <span class="info-box-icon-power bg-7"><i class="material-icons">wb_sunny</i></span>
        <div class="info-box-content">
          <span class="info-box-power">##</span>
          <span class="info-box-text-data">Power 2</span>
        </div>
      </div>
    </div>
     <div class="col-md-3 col-sm-6 col-xs-12">
      <div class="info-box-report-611">
        <span class="info-box-icon-power bg-8"><i class="material-icons">power</i></span>
        <div class="info-box-content">
          <span class="info-box-power">##</span>
          <span class="info-box-text-data">Power 3</span>
        </div>
      </div>
    </div>
     <div class="col-md-2 col-sm-6 col-xs-12">
      <div class="info-box-report-611"><i class="material-icons">wb_incandescent</i>
      </div>
    </div>
  </div>
  <div class="box-header"></div>
  <div class="row">
    <div class="col-md-10 col-sm-6 col-sm-offset-1 col-xs-12">
        <p class="text-center" >
         <dynamic-chart />
        </p>
    </div>
  </div>
</section>
</template>

<script>
import DynamicChart from '../components/DynamicChart.vue'
export default {
  components: {
    DynamicChart
  }
}
</script>

<style scoped>
.content-all{
  overflow-x: hidden;
}
.info-box-report-611{
  display:block;min-height:70px;background:#fff;width:70%;box-shadow:0 1px 1px rgba(0,0,0,0.1);border-radius:2px;margin-bottom:15px;font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}
.material-icons{
  font-size: 50px
}
</style>
