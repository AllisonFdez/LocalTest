import Vue from 'vue'
import Router from 'vue-router'
import Cards from '@/components/Cards'
import Prueba from '@/components/Prueba'
import Prueba611 from '@/components/Prueba611'
import Grid from '@/components/Grid'
import Imagen from '@/components/Imagen'
import High from '@/components/High'
import Chart from '@/components/Chart'
import LineChart from '@/components/LineChart'
import PolarChart from '@/components/PolarChart'
import DynamicChart from '@/components/DynamicChart'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Cards',
      component: Cards
    },
    {
      path: '/prueba',
      name: 'Prueba',
      component: Prueba
    },
    {
      path: '/prueba611',
      name: 'Prueba611',
      component: Prueba611
    },
    {
      path: '/grid',
      name: 'Grid',
      component: Grid
    },
    {
      path: '/imagen',
      name: 'Imagen',
      component: Imagen
    },
    {
      path: '/high',
      name: 'High',
      component: High
    },
    {
      path: '/chart',
      name: 'Chart',
      component: Chart
    },
    {
      path: '/linechart',
      name: 'LineChart',
      component: LineChart
    },
    {
      path: '/polarchart',
      name: 'PolarChart',
      component: PolarChart
    },
    {
      path: '/dynamicchart',
      name: 'DynamicChart',
      component: DynamicChart
    },
    {
      path: '/high',
      name: 'High',
      component: High
    }
  ]
})
