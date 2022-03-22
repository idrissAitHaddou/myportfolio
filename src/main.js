import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import AOS from 'aos'
import 'aos/dist/aos.css'


Vue.config.productionTip = false
new Vue({
  router,
  components:{
    
  },
  render: h => h(App),
  mounted() {
    AOS.init()
  },
}).$mount('#app')
