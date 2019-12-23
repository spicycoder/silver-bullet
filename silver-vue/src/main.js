import Vue from 'vue'
import App from './App.vue'

// import { applyPolyfills, defineCustomElements } from "silver-components/loader";

Vue.config.productionTip = false

// Tell Vue to ignore all components defined in the silver-components
// package. The regex assumes all components names are prefixed
// 'silver'
Vue.config.ignoredElements = [/silver-\w*/];

// Bind the custom elements to the window object
// applyPolyfills().then(() => {
//   defineCustomElements(window);
// });

new Vue({
  render: h => h(App),
}).$mount('#app')
