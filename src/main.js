// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Container from './App'
import router from './router'

Vue.config.productionTip = false

// BEGIN GLOBAL MANDATORY STYLES
import './assets/css/google_font.css';
import 'socicon/css/socicon.css';
import 'bootstrap-social/bootstrap-social.css';
import 'font-awesome/css/font-awesome.css';
import 'simple-line-icons/css/simple-line-icons.css';
import '../static/plugins/animate/animate.css';
import 'bootstrap/dist/css/bootstrap.css';


import '../static/plugins/revo-slider/css/settings.css';
import '../static/plugins/revo-slider/css/layers.css';
import '../static/plugins/revo-slider/css/navigation.css';
import '../static/plugins/cubeportfolio/css/cubeportfolio.css';
import '../static/plugins/owl-carousel/assets/owl.carousel.css';
import '../static/plugins/fancybox/jquery.fancybox.css';
import '../static/plugins/slider-for-bootstrap/css/slider.css';
// import '../static/plugins/typo/typo.css';
import './assets/css/plugins.css';
import './assets/css/components.css';
import './assets/css/theme.css';

// BEGIN: CORE PLUGINS
import '../static/plugins/jquery-vendor';
import '../static/plugins/jquery-migrate.min';
import 'bootstrap';
import 'jquery.easing';
// import 'wowjs';
import './assets/js/reveal-animate/reveal-animate';

import '../static/plugins/revo-slider/js/jquery.themepunch.tools.min';
import '../static/plugins/revo-slider/js/jquery.themepunch.revolution.min';
import '../static/plugins/revo-slider/js/extensions/revolution.extension.slideanims.min';
import '../static/plugins/revo-slider/js/extensions/revolution.extension.layeranimation.min';
import '../static/plugins/revo-slider/js/extensions/revolution.extension.navigation.min';
import '../static/plugins/revo-slider/js/extensions/revolution.extension.video.min';
import '../static/plugins/revo-slider/js/extensions/revolution.extension.parallax.min';

import '../static/plugins/cubeportfolio/js/jquery.cubeportfolio';
import '../static/plugins/owl-carousel/owl.carousel';
import 'jquery-waypoints/waypoints';
import '../static/plugins/counterup/jquery.counterup';
import '../static/plugins/fancybox/jquery.fancybox.pack';
import '../static/plugins/smooth-scroll/jquery.smooth-scroll';
import '../static/plugins/typed/typed.min';
import '../static/plugins/slider-for-bootstrap/js/bootstrap-slider';
import 'js-cookie';



import './assets/js/components';
import './assets/js/components-shop';
import App from './assets/js/app';

window.App = App;



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {Container},
  template: '<Container/>',
  mounted:()=>{

    App.init(); // init core



    // var slider = $('.c-layout-revo-slider .tp-banner');
    //
    // var cont = $('.c-layout-revo-slider .tp-banner-container');
    // console.log( slider.show().revolution);
    // var api = slider.show().revolution({
    //   sliderType:"standard",
    //   sliderLayout:"fullscreen",
    //   dottedOverlay:"none",
    //   delay:15000,
    //   navigation: {
    //     keyboardNavigation:"off",
    //     keyboard_direction: "horizontal",
    //     mouseScrollNavigation:"off",
    //     onHoverStop:"off",
    //     arrows: {
    //       style:"circle",
    //       enable:true,
    //       hide_onmobile:false,
    //       hide_onleave:false,
    //       tmp:'',
    //       left: {
    //         h_align:"left",
    //         v_align:"center",
    //         h_offset:30,
    //         v_offset:0
    //       },
    //       right: {
    //         h_align:"right",
    //         v_align:"center",
    //         h_offset:30,
    //         v_offset:0
    //       }
    //     }
    //   },
    //   responsiveLevels:[2048,1024,778,480],
    //   gridwidth: [1240, 1024, 778, 480],
    //   gridheight: [868, 768, 960, 720],
    //   lazyType:"none",
    //   shadow:0,
    //   spinner:"spinner2",
    //   stopLoop:"on",
    //   stopAfterLoops:0,
    //   stopAtSlide:1,
    //   shuffle:"off",
    //   autoHeight:"off",
    //   disableProgressBar:"on",
    //   hideThumbsOnMobile:"off",
    //   hideSliderAtLimit:0,
    //   hideCaptionAtLimit:0,
    //   hideAllCaptionAtLilmit:0,
    //   debugMode:false,
    //   fallbacks: {
    //     simplifyAll:"off",
    //     nextSlideOnWindowFocus:"off",
    //     disableFocusListener:false,
    //   }
    // });
  }
})
