<template>
<v-layout justify-center>
    <v-card class="Grid">
        <img v-bind:src="url"/>
         <v-card class="red220">
         </v-card>
         <v-card class="n650" @click.native.stop="dialog650 = true">
             <v-dialog v-model="dialog650" width="80%" scrollable="true">
                 <prueba />
             </v-dialog>
         </v-card>
        <v-dialog v-model="dialog611" fullscreen transition="dialog-bottom-transition" :overlay="false">
         <v-card class="n611" slot="activator"></v-card>
         <v-card>
          <v-toolbar dark color="primary">
            <v-btn icon @click.native="dialog611 = false" dark>
              <v-icon>close</v-icon>
            </v-btn>
            <v-toolbar-title>Node 611 Dashboard</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
         </v-card>
        </v-dialog>
    </v-card>
</v-layout>
</template>

<script>
import Prueba from '../components/Prueba.vue'
export default {
  components: {
    Prueba
  },
  data () {
    return {
      url: '/static/smart-grid.png',
      dialog650: false,
      dialog611: false
    }
  }
}
</script>

<style scoped>
.v-card .img {
  width: 1148px;
}
.Grid {
  position: absolute;
}
.red220 {
  position: absolute;
  background-color: transparent;
  top: 10px;
  bottom: 0;
  right: 0;
  left: 216px;
  width: 82px;
  max-height: 64px;
  cursor: pointer;
}
.n650 {
  position: absolute;
  background-color: transparent;
  top: 8px;
  bottom: 0;
  right: 0;
  left: 339px;
  width: 19px;
  max-height: 71px;
  cursor: pointer;
}
.n611 {
  position: absolute;
  background-color: transparent;
  top: 496px;
  bottom: 0;
  right: 0;
  left: 159px;
  width: 20px;
  max-height: 71px;
  cursor: pointer;
}
</style>
