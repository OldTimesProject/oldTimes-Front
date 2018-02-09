// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

// BEGIN GLOBAL MANDATORY STYLES
import './assets/css/google_font.css';
import 'socicon/css/socicon.css';
import 'bootstrap-social/bootstrap-social.css';
import 'font-awesome/css/font-awesome.css';
import 'simple-line-icons/css/simple-line-icons.css';
import 'animate.css/animate.css';
import 'bootstrap/dist/css/bootstrap.css';


import '../static/plugins/revo-slider/css/settings.css';
import '../static/plugins/revo-slider/css/layers.css';
import '../static/plugins/revo-slider/css/navigation.css';
import '../static/plugins/cubeportfolio/css/cubeportfolio.css';
import '../static/plugins/owl-carousel/assets/owl.carousel.css';
import '../static/plugins/fancybox/jquery.fancybox.css';
import '../static/plugins/slider-for-bootstrap/css/slider.css';

import './assets/css/plugins.css';
import './assets/css/components.css';
import './assets/css/theme.css';

// BEGIN: CORE PLUGINS
import '../static/plugins/jquery-vendor';
import 'jquery-migrate';
import 'bootstrap';
import 'jquery.easing';
import 'wowjs';
import './assets/js/reveal-animate/reveal-animate';

// import '../static/plugins/revo-slider/js/jquery.themepunch.tools.min';

/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   router,
//   components: { App },
//   template: '<App/>'
// })
