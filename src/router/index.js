import Vue from 'vue'
import Router from 'vue-router'
import weatherIndex from '@/components/Weather/weatherIndex'
import weatherPredict from '@/components/Weather/weatherPredict'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'weather.index',
      component: weatherIndex
    },
    {
      path: '/predict',
      name: 'weather.predict',
      component: weatherPredict
    }
  ]
})
