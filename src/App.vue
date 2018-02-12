<template>
  <div id="app">

    <!-- BEGIN: LAYOUT/HEADERS/HEADER-ONEPAGE -->
    <!-- BEGIN: HEADER -->
    <header class="c-layout-header c-layout-header-onepage c-layout-header-default c-layout-header-dark-mobile c-header-transparent-dark" id="home" data-minimize-offset="0">
      <div class="c-navbar">
        <div class="container-fluid">
          <!-- BEGIN: BRAND -->
          <div class="c-navbar-wrapper clearfix">
            <div class="c-brand c-pull-left">
              <a href="index.html" class="c-logo">
                <img src="../static/images/layout/logos/logo-1.png" alt="JANGO" class="c-desktop-logo">
                <img src="../static/images/layout/logos/logo-1.png" alt="JANGO" class="c-desktop-logo-inverse">
                <img src="../static/images/layout/logos/logo-1.png" alt="JANGO" class="c-mobile-logo">
              </a>
              <button class="c-hor-nav-toggler c-quick-sidebar-toggler" type="button">
                <span class="c-line"></span>
                <span class="c-line"></span>
                <span class="c-line"></span>
              </button>
              <a href="javascript:;" data-toggle="modal" data-target="#login-form" class="c-btn-login c-btn-border-opacity-04 c-btn btn btn-sm c-btn-border-1x c-btn-white c-btn-circle c-btn-uppercase c-btn-sbold"><i class="icon-user"></i><span>Sign In</span>
              </a>
              <button class="c-search-toggler" type="button">
                <i class="fa fa-search"></i>
              </button>
            </div>
            <!-- END: BRAND -->
            <!-- BEGIN: QUICK SEARCH -->
            <form class="c-quick-search" action="#">
              <input type="text" name="query" placeholder="Type to search..." value="" class="form-control" autocomplete="off">
              <span class="c-theme-link">&times;</span>
            </form>
            <!-- END: QUICK SEARCH -->
            <!-- BEGIN: HOR NAV -->
            <!-- BEGIN: LAYOUT/HEADERS/MEGA-MENU-ONEPAGE -->
            <!-- BEGIN: MEGA MENU -->
            <nav class="c-mega-menu c-pull-right c-mega-menu-dark c-mega-menu-dark-mobile c-fonts-uppercase c-fonts-bold">
              <ul class="nav navbar-nav c-theme-nav">

                <li class="c-search-toggler-wrapper">
                  <a  href="#" class="c-btn-icon c-search-toggler"><i class="fa fa-search"></i></a>
                </li>

                <li>
                  <a href="javascript:;" data-toggle="modal" data-target="#login-form" class="c-btn-border-opacity-04 c-btn btn-no-focus c-btn-header btn btn-sm c-btn-border-1x c-btn-white c-btn-circle c-btn-uppercase c-btn-sbold"><i class="icon-user"></i> Sign In</a>
                </li>

                <li class="c-quick-sidebar-toggler-wrapper">
                  <a href="#" class="c-quick-sidebar-toggler">
                    <span class="c-line"></span>
                    <span class="c-line"></span>
                    <span class="c-line"></span>
                  </a>
                </li>

              </ul>
            </nav>

            <nav class="c-mega-menu-onepage-dots c-theme" data-onepage-animation-speed="700">
              <ul class="nav navbar-nav c-onepage-dots-nav">
                <li class="c-onepage-link c-active active">
                  <a href="#home" class="c-link tooltips" data-placement="left" data-trigger="hover" data-original-title="Home">
                  </a>
                </li>
                <li class="c-onepage-link ">
                  <a href="#product" class="c-link tooltips" data-placement="left" data-trigger="hover" data-original-title="Product">
                  </a>
                </li>
                <li class="c-onepage-link ">
                  <a href="#features" class="c-link tooltips" data-placement="left" data-trigger="hover" data-original-title="Features">
                  </a>
                </li>
                <li class="c-onepage-link ">
                  <a href="#stats" class="c-link tooltips" data-placement="left" data-trigger="hover" data-original-title="Stats">
                  </a>
                </li>
                <li class="c-onepage-link ">
                  <a href="#clients" class="c-link tooltips" data-placement="left" data-trigger="hover" data-original-title="Clients">
                  </a>
                </li>
                <li class="c-onepage-link ">
                  <a href="#pricing" class="c-link tooltips" data-placement="left" data-trigger="hover" data-original-title="Pricing">
                  </a>
                </li>
                <li class="c-onepage-link ">
                  <a href="#contact" class="c-link tooltips" data-placement="left" data-trigger="hover" data-original-title="Contact">
                  </a>
                </li>
              </ul>
            </nav>
            <!-- END: MEGA MENU --><!-- END: LAYOUT/HEADERS/MEGA-MENU-ONEPAGE -->
            <!-- END: HOR NAV -->
          </div>
        </div>
      </div>
    </header>
    <!-- END: HEADER --><!-- END: LAYOUT/HEADERS/HEADER-ONEPAGE -->

    <!-- BEGIN: CONTENT/USER/FORGET-PASSWORD-FORM -->
    <div class="modal fade c-content-login-form" id="forget-password-form" role="dialog">
      <div class="modal-dialog">
        <div class="modal-content c-square">
          <div class="modal-header c-no-border">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
          </div>
          <div class="modal-body">
            <h3 class="c-font-24 c-font-sbold">Password Recovery</h3>
            <p>To recover your password please fill in your email address</p>
            <form>
              <div class="form-group">
                <label for="forget-email" class="hide">Email</label>
                <input type="email" class="form-control input-lg c-square" id="forget-email" placeholder="Email">
              </div>
              <div class="form-group">
                <button type="submit" class="btn c-theme-btn btn-md c-btn-uppercase c-btn-bold c-btn-square c-btn-login">Submit</button>
                <a href="javascript:;" class="c-btn-forgot" data-toggle="modal" data-target="#login-form" data-dismiss="modal">Back To Login</a>
              </div>
            </form>
          </div>
          <div class="modal-footer c-no-border">
            <span class="c-text-account">Don't Have An Account Yet ?</span>
            <a href="javascript:;" data-toggle="modal" data-target="#signup-form" data-dismiss="modal" class="btn c-btn-dark-1 btn c-btn-uppercase c-btn-bold c-btn-slim c-btn-border-2x c-btn-square c-btn-signup">Signup!</a>
          </div>
        </div>
      </div>
    </div>
    <!-- END: CONTENT/USER/FORGET-PASSWORD-FORM -->
    <!-- BEGIN: CONTENT/USER/SIGNUP-FORM -->
    <div class="modal fade c-content-login-form" id="signup-form" role="dialog">
      <div class="modal-dialog">
        <div class="modal-content c-square">
          <div class="modal-header c-no-border">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
          </div>
          <div class="modal-body">
            <h3 class="c-font-24 c-font-sbold">Create An Account</h3>
            <p>Please fill in below form to create an account with us</p>
            <form>
              <div class="form-group">
                <label for="signup-email" class="hide">Email</label>
                <input type="email" class="form-control input-lg c-square" id="signup-email" placeholder="Email">
              </div>
              <div class="form-group">
                <label for="signup-username" class="hide">Username</label>
                <input type="email" class="form-control input-lg c-square" id="signup-username" placeholder="Username">
              </div>
              <div class="form-group">
                <label for="signup-fullname" class="hide">Fullname</label>
                <input type="email" class="form-control input-lg c-square" id="signup-fullname" placeholder="Fullname">
              </div>
              <div class="form-group">
                <label for="signup-country" class="hide">Country</label>
                <select class="form-control input-lg c-square" id="signup-country">
                  <option value="1">Country</option>
                </select>
              </div>
              <div class="form-group">
                <button type="submit" class="btn c-theme-btn btn-md c-btn-uppercase c-btn-bold c-btn-square c-btn-login">Signup</button>
                <a href="javascript:;" class="c-btn-forgot" data-toggle="modal" data-target="#login-form" data-dismiss="modal">Back To Login</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <!-- END: CONTENT/USER/SIGNUP-FORM -->
    <!-- BEGIN: CONTENT/USER/LOGIN-FORM -->
    <div class="modal fade c-content-login-form" id="login-form" role="dialog">
      <div class="modal-dialog">
        <div class="modal-content c-square">
          <div class="modal-header c-no-border">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
          </div>
          <div class="modal-body">
            <h3 class="c-font-24 c-font-sbold">Good Afternoon!</h3>
            <p>Let's make today a great day!</p>
            <form>
              <div class="form-group">
                <label for="login-email" class="hide">Email</label>
                <input type="email" class="form-control input-lg c-square" id="login-email" placeholder="Email">
              </div>
              <div class="form-group">
                <label for="login-password" class="hide">Password</label>
                <input type="password" class="form-control input-lg c-square" id="login-password" placeholder="Password">
              </div>
              <div class="form-group">
                <div class="c-checkbox">
                  <input type="checkbox" id="login-rememberme" class="c-check">
                  <label for="login-rememberme" class="c-font-thin c-font-17">
                    <span></span>
                    <span class="check"></span>
                    <span class="box"></span>
                    Remember Me
                  </label>
                </div>
              </div>
              <div class="form-group">
                <button type="submit" class="btn c-theme-btn btn-md c-btn-uppercase c-btn-bold c-btn-square c-btn-login">Login</button>
                <a href="javascript:;" data-toggle="modal" data-target="#forget-password-form" data-dismiss="modal" class="c-btn-forgot">Forgot Your Password ?</a>
              </div>
              <div class="clearfix">
                <div class="c-content-divider c-divider-sm c-icon-bg c-bg-grey c-margin-b-20">
                  <span>第三方账号登录</span>
                </div>
                <ul class="c-content-list-adjusted">
                  <li>
                    <a class="btn btn-block c-btn-square btn-social btn-twitter">
                      <i class="fa fa-twitter"></i>
                      Twitter
                    </a>
                  </li>
                  <li>
                    <a class="btn btn-block c-btn-square btn-social btn-facebook">
                      <i class="fa fa-facebook"></i>
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a class="btn btn-block c-btn-square btn-social btn-google">
                      <i class="fa fa-google"></i>
                      Google
                    </a>
                  </li>
                </ul>
              </div>
            </form>
          </div>
          <div class="modal-footer c-no-border">
            <span class="c-text-account">Don't Have An Account Yet ?</span>
            <a href="javascript:;" data-toggle="modal" data-target="#signup-form" data-dismiss="modal" class="btn c-btn-dark-1 btn c-btn-uppercase c-btn-bold c-btn-slim c-btn-border-2x c-btn-square c-btn-signup">Signup!</a>
          </div>
        </div>
      </div>
    </div>
    <!-- END: CONTENT/USER/LOGIN-FORM -->

    <!-- BEGIN: LAYOUT/SIDEBARS/QUICK-SIDEBAR -->
    <nav class="c-layout-quick-sidebar">
      <div class="c-header">
        <button type="button" class="c-link c-close">
          <i class="icon-login"></i>
        </button>
      </div>
      <div class="c-content">
        <div class="c-section">
          <h3>JANGO DEMOS</h3>
          <div class="c-settings c-demos c-bs-grid-reset-space">
            <div class="row">
              <div class="col-md-12">
                <a href="../default/index.html" class="c-demo-container c-demo-img-lg">
                  <div class="c-demo-thumb active">
                    <img src="../static/images/content/quick-sidebar/default.jpg" class="c-demo-thumb-img"/>
                  </div>
                </a>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <a href="../corporate_1/index.html" class="c-demo-container">
                  <div class="c-demo-thumb  c-thumb-left">
                    <img src="../static/images/content/quick-sidebar/corporate_1.jpg" class="c-demo-thumb-img"/>
                  </div>
                </a>
              </div>
              <div class="col-md-6">
                <a href="../agency_1/index.html" class="c-demo-container">
                  <div class="c-demo-thumb  c-thumb-right">
                    <img src="../static/images/content/quick-sidebar/corporate_1-onepage.jpg" class="c-demo-thumb-img"/>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="c-section">
          <h3>Theme Colors</h3>
          <div class="c-settings">

            <span class="c-color c-default c-active" data-color="default"></span>

            <span class="c-color c-green1" data-color="green1"></span>
            <span class="c-color c-green2" data-color="green2"></span>
            <span class="c-color c-green3" data-color="green3"></span>

            <span class="c-color c-yellow1" data-color="yellow1"></span>
            <span class="c-color c-yellow2" data-color="yellow2"></span>
            <span class="c-color c-yellow3" data-color="yellow3"></span>

            <span class="c-color c-red1" data-color="red1"></span>
            <span class="c-color c-red2" data-color="red2"></span>
            <span class="c-color c-red3" data-color="red3"></span>

            <span class="c-color c-purple1" data-color="purple1"></span>
            <span class="c-color c-purple2" data-color="purple2"></span>
            <span class="c-color c-purple3" data-color="purple3"></span>

            <span class="c-color c-blue1" data-color="blue1"></span>
            <span class="c-color c-blue2" data-color="blue2"></span>
            <span class="c-color c-blue3" data-color="blue3"></span>

            <span class="c-color c-brown1" data-color="brown1"></span>
            <span class="c-color c-brown2" data-color="brown2"></span>
            <span class="c-color c-brown3" data-color="brown3"></span>

            <span class="c-color c-dark1" data-color="dark1"></span>
            <span class="c-color c-dark2" data-color="dark2"></span>
            <span class="c-color c-dark3" data-color="dark3"></span>
          </div>
        </div>
        <div class="c-section">
          <h3>Header Type</h3>
          <div class="c-settings">
            <input type="button" class="c-setting_header-type btn btn-sm c-btn-square c-btn-border-1x c-btn-white c-btn-sbold c-btn-uppercase active" data-value="boxed" value="boxed"/>
            <input type="button" class="c-setting_header-type btn btn-sm c-btn-square c-btn-border-1x c-btn-white c-btn-sbold c-btn-uppercase" data-value="fluid" value="fluid"/>
          </div>
        </div>
        <div class="c-section">
          <h3>Header Mode</h3>
          <div class="c-settings">
            <input type="button" class="c-setting_header-mode btn btn-sm c-btn-square c-btn-border-1x c-btn-white c-btn-sbold c-btn-uppercase active" data-value="fixed" value="fixed"/>
            <input type="button" class="c-setting_header-mode btn btn-sm c-btn-square c-btn-border-1x c-btn-white c-btn-sbold c-btn-uppercase" data-value="static" value="static"/>
          </div>
        </div>
        <div class="c-section">
          <h3>Mega Menu Style</h3>
          <div class="c-settings">
            <input type="button" class="c-setting_megamenu-style btn btn-sm c-btn-square c-btn-border-1x c-btn-white c-btn-sbold c-btn-uppercase active" data-value="dark" value="dark"/>
            <input type="button" class="c-setting_megamenu-style btn btn-sm c-btn-square c-btn-border-1x c-btn-white c-btn-sbold c-btn-uppercase" data-value="light" value="light"/>
          </div>
        </div>
        <div class="c-section">
          <h3>Font Style</h3>
          <div class="c-settings">
            <input type="button" class="c-setting_font-style btn btn-sm c-btn-square c-btn-border-1x c-btn-white c-btn-sbold c-btn-uppercase active" data-value="default" value="default"/>
            <input type="button" class="c-setting_font-style btn btn-sm c-btn-square c-btn-border-1x c-btn-white c-btn-sbold c-btn-uppercase" data-value="light" value="light"/>
          </div>
        </div>
        <div class="c-section">
          <h3>Reading Style</h3>
          <div class="c-settings">
            <a href="http://www.themehats.com/themes/jango/" class="c-setting_font-style btn btn-sm c-btn-square c-btn-border-1x c-btn-white c-btn-sbold c-btn-uppercase active">LTR</a>
            <a href="http://www.themehats.com/themes/jango/rtl/" class="c-setting_font-style btn btn-sm c-btn-square c-btn-border-1x c-btn-white c-btn-sbold c-btn-uppercase ">RTL</a>
          </div>
        </div>
      </div>
    </nav><!-- END: LAYOUT/SIDEBARS/QUICK-SIDEBAR -->

    <!-- BEGIN: PAGE CONTAINER -->
    <div class="c-layout-page">
      <!-- BEGIN: PAGE CONTENT -->
      <!-- BEGIN: LAYOUT/SLIDERS/REVO-SLIDER-6 -->
      <section class="c-layout-revo-slider c-layout-revo-slider-6" dir="ltr">
        <div class="tp-banner-container  tp-fullscreen tp-fullscreen-mobile" data-bullets-pos="center">
          <div class="tp-banner rev_slider" data-version="5.0">
            <ul>
              <!--BEGIN: SLIDE #1 -->
              <li data-transition="fade" data-slotamount="1" data-masterspeed="1000">
                <img
                  alt=""
                  src="../static/images/content/backgrounds/bg-19.jpg"
                  data-bgposition="center center"
                  data-bgfit="cover"
                  data-bgrepeat="no-repeat"
                >

                <!--BEGIN: MAIN TITLE -->
                <div class="tp-caption customin customout"
                     data-x="center"
                     data-y="center"
                     data-hoffset="0"
                     data-voffset="-70"

                     data-speed="500"
                     data-start="1000"
                     data-transform_in="x:0;y:0;z:0;rotationX:0.5;rotationY:0;rotationZ:0;scaleX:0.75;scaleY:0.75;skewX:0;skewY:0;opacity:0;s:500;e:Back.easeInOut;"
                     data-transform_out="x:0;y:0;z:0;rotationX:0;rotationY:0;rotationZ:0;scaleX:0.75;scaleY:0.75;skewX:0;skewY:0;opacity:0;s:600;e:Back.easeInOut;"

                     data-splitin="none"
                     data-splitout="none"
                     data-elementdelay="0.1"
                     data-endelementdelay="0.1"
                     data-endspeed="600"

                >
                  <h3 class="c-main-title c-font-40 c-font-bold c-font-white c-center">
                    <!--每个生活中的点滴都值得被铭记-->
                    亿万人之中，我只属于你
                  </h3>
                </div>
                <!--END -->

                <!--BEGIN: SUB TITLE -->
                <div class="tp-caption customin customout"
                     data-x="center"
                     data-y="center"
                     data-hoffset="0"
                     data-voffset="10"

                     data-speed="500"
                     data-start="1500"
                     data-transform_in="x:0;y:0;z:0;rotationX:0.5;rotationY:0;rotationZ:0;scaleX:0.75;scaleY:0.75;skewX:0;skewY:0;opacity:0;s:500;e:Back.easeInOut;"
                     data-transform_out="x:0;y:0;z:0;rotationX:0;rotationY:0;rotationZ:0;scaleX:0.75;scaleY:0.75;skewX:0;skewY:0;opacity:0;s:600;e:Back.easeInOut;"

                     data-splitin="none"
                     data-splitout="none"
                     data-elementdelay="0.1"
                     data-endelementdelay="0.1"
                     data-endspeed="600"

                >
                  <p class="c-font-20 c-line-height-30 c-font-white c-opacity-07 c-font-thin c-center c-sub-title">
                    随手一拍，记录生活中每个精彩点滴<br>
                  </p>
                </div>
                <!--END -->

                <!--BEGIN: ACTION BUTTON -->
                <div class="tp-caption randomrotateout"
                     data-x="center"
                     data-y="center"
                     data-hoffset="0"
                     data-voffset="100"
                     data-speed="500"
                     data-start="2000"
                     data-transform_in="x:0;y:0;z:0;rotationX:0.5;rotationY:0;rotationZ:0;scaleX:0.75;scaleY:0.75;skewX:0;skewY:0;opacity:0;s:500;e:Back.easeInOut;"
                     data-transform_out="x:0;y:0;z:0;rotationX:0;rotationY:0;rotationZ:0;scaleX:0.75;scaleY:0.75;skewX:0;skewY:0;opacity:0;s:500;e:Back.easeInOut;" >
                  <a href="#" class="c-action-btn btn btn-lg c-btn-square c-btn-border-2x c-btn-white c-btn-bold c-btn-uppercase">立即体验</a>
                </div>
                <!--END -->
              </li>
              <!--END -->

              <!--BEGIN: SLIDE #2 -->

              <li data-transition="fade" data-slotamount="1" data-masterspeed="1000">
                <img
                  alt=""
                  src="../static/images/content/backgrounds/bg-61.jpg"
                  data-bgposition="center center"
                  data-bgfit="cover"
                  data-bgrepeat="no-repeat"
                >

                <!--BEGIN: MAIN TITLE -->
                <div class="tp-caption customin customout tp-resizeme"
                     data-x="center"
                     data-y="center"
                     data-hoffset="[-350,-350, -150, -150]"
                     data-voffset="-180"
                     data-speed="500"
                     data-start="1000"
                     data-transform_in="x:0;y:0;z:0;rotationX:0.5;rotationY:0;rotationZ:0;scaleX:0.75;scaleY:0.75;skewX:0;skewY:0;opacity:0;s:500;e:Back.easeInOut;"
                     data-transform_out="x:0;y:0;z:0;rotationX:0;rotationY:0;rotationZ:0;scaleX:0.75;scaleY:0.75;skewX:0;skewY:0;opacity:0;s:600;e:Back.easeInOut;"

                     data-splitin="none"
                     data-splitout="none"
                     data-elementdelay="0.1"
                     data-endelementdelay="0.1"
                     data-endspeed="600"

                >
                  <h3 class="c-main-title c-font-44 c-font-bold  c-font-white ">
                    Life Writes the Best Stories
                  </h3>
                </div>
                <!--END -->

                <!--BEGIN: SUB TITLE -->
                <div class="tp-caption customin customout tp-resizeme"
                     data-x="center"
                     data-y="center"
                     data-hoffset="[-345,-345, -145, -145]"
                     data-voffset="-70"
                     data-speed="500"
                     data-start="1500"
                     data-transform_in="x:0;y:0;z:0;rotationX:0.5;rotationY:0;rotationZ:0;scaleX:0.75;scaleY:0.75;skewX:0;skewY:0;opacity:0;s:500;e:Back.easeInOut;"
                     data-transform_out="x:0;y:0;z:0;rotationX:0;rotationY:0;rotationZ:0;scaleX:0.75;scaleY:0.75;skewX:0;skewY:0;opacity:0;s:600;e:Back.easeInOut;"

                     data-splitin="none"
                     data-splitout="none"
                     data-elementdelay="0.1"
                     data-endelementdelay="0.1"
                     data-endspeed="600"
                >
                  <p class="c-sub-title c-font-24 c-font-white ">
                    Lorem ipsum dolor sit amet, consectetuer et<br>
                    Dolor sit amet, consectetuer et nibh<br>
                    elit sed diam nonummy et nibh<br>
                  </p>
                </div>
                <!--END -->

                <!--BEGIN: ACTION BUTTON -->
                <div class="tp-caption randomrotateout tp-resizeme"
                     data-x="center"
                     data-y="center"
                     data-hoffset="[-470,-470, -270, -270]"
                     data-voffset="45"
                     data-speed="500"
                     data-start="2000"
                     data-transform_in="x:0;y:0;z:0;rotationX:0.5;rotationY:0;rotationZ:0;scaleX:0.75;scaleY:0.75;skewX:0;skewY:0;opacity:0;s:500;e:Back.easeInOut;"
                     data-transform_out="x:0;y:0;z:0;rotationX:0;rotationY:0;rotationZ:0;scaleX:0.75;scaleY:0.75;skewX:0;skewY:0;opacity:0;s:600;e:Back.easeInOut;" >
                  <a href="#" class="c-action-btn btn btn-lg c-btn-square c-btn-bold c-btn-border-2x c-theme-btn c-btn-uppercase">查看详情</a>

                </div>
                <!--END -->
              </li>
              <!--END -->
            </ul>
          </div>
        </div>
      </section><!-- END: LAYOUT/SLIDERS/REVO-SLIDER-6 -->

      <section id="product">
        <!-- BEGIN: CONTENT/PRODUCTS/PRODUCT-1 -->
        <div class="c-content-box c-size-md c-bg-white c-no-bottom-padding">
          <div class="container">
            <div class="c-content-product-1 c-opt-1">
              <div class="c-content-title-1">
                <h3 class="c-center c-font-uppercase c-font-bold">Learn More About JANGO</h3>
                <div class="c-line-center"></div>
              </div>
              <div class="row">
                <div class="col-md-4 wow animate slideInUp">
                  <div class="c-media">
                    <img src="../static/images/content/misc/jango-intro-3.png" alt=""/>
                  </div>
                </div>
                <div class="col-md-8">
                  <div class="c-body">
                    <ul class="c-row">
                      <li class="wow animate fadeInUp">
                        <h4>Code Quality</h4>
                        <p>Lorem ipsum dolor sit amet consectetuer adipiscing elit sed diam nonummy nibh euismod</p>
                      </li>
                      <li class="wow animate fadeInUp">
                        <h4>Angular JS Support</h4>
                        <p>Lorem ipsum dolor sit amet consectetuer adipiscing elit sed diam nonummy nibh euismod</p>
                      </li>
                    </ul>
                    <ul class="c-row">
                      <li class="wow animate fadeInUp">
                        <h4>Every Growing Unique Layouts</h4>
                        <p>Lorem ipsum dolor sit amet consectetuer adipiscing elit sed diam nonummy nibh euismod</p>
                      </li>
                      <li class="wow animate fadeInUp">
                        <h4>Fully Mobile Optimized</h4>
                        <p>Lorem ipsum dolor sit amet consectetuer adipiscing elit sed diam nonummy nibh euismod</p>
                      </li>
                    </ul>
                    <button type="button" class="btn btn-md c-btn-border-2x c-btn-square c-btn-regular c-btn-uppercase c-btn-bold c-margin-b-100">Learn More</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div><!-- END: CONTENT/PRODUCTS/PRODUCT-1 -->
      </section>

      <section id="features">
        <!-- BEGIN: CONTENT/STEPS/STEPS-2 -->
        <div class="c-content-box c-size-lg c-bg-parallax" style="background-image: url(../static/images/content/backgrounds/bg-37.jpg)">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <div class="c-content-title-1 c-margin-b-60">
                  <h3 class="c-center c-font-uppercase c-font-white c-font-bold">
                    Great Support For All Customers
                  </h3>
                  <p class="c-center c-font-uppercase c-font-17  c-font-white">
                    Lorem ipsum dolor sit amet consectetuer dolore
                  </p>
                  <div class="c-line-center"></div>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-md-4 col-sm-6">
                <div class="c-content-step-1 c-opt-1">
                  <div class="c-icon">
						<span class="c-hr c-hr-first c-theme-border-after c-theme-border-before">
							<span class="c-content-line-icon c-icon-14"></span>
						</span>
                  </div>
                  <div class="c-title c-font-20 c-font-bold c-font-white c-font-uppercase">1. First Important STEP</div>
                  <div class="c-description c-font-17 c-font-white">
                    Lorem ipsum dolor sit consectetuer
                    adipiscing elit et diam nonummy.
                  </div>
                  <button class="btn btn-md c-btn-square c-btn-border-2x c-btn-green c-btn-uppercase c-btn-bold">EXPLORE</button>
                </div>
              </div>
              <div class="col-md-4 col-sm-6">
                <div class="c-content-step-1 c-opt-1">
                  <div class="c-icon"><span class="c-hr c-theme-border-after c-theme-border-before"><span class="c-content-line-icon c-icon-11"></span></span></div>
                  <div class="c-title c-font-20 c-font-bold c-font-white c-font-uppercase">2. Second Phase</div>
                  <div class="c-description c-font-17 c-font-white">
                    Lorem ipsum dolor sit consectetuer
                    adipiscing elit et diam nonummy.
                  </div>
                  <button class="btn btn-md c-btn-square c-btn-border-2x c-btn-green c-btn-uppercase c-btn-bold">EXPLORE</button>
                </div>
              </div>
              <div class="col-md-4 col-sm-12">
                <div class="c-content-step-1 c-opt-1">
                  <div class="c-icon"><span class="c-hr c-hr-last c-theme-border-after c-theme-border-before"><span class="c-content-line-icon c-icon-16"></span></span></div>
                  <div class="c-title c-font-20 c-font-bold c-font-white c-font-uppercase">3. Final Action</div>
                  <div class="c-description c-font-17 c-font-white">
                    Lorem ipsum dolor sit consectetuer
                    adipiscing elit et diam nonummy.
                  </div>
                  <button class="btn btn-md c-btn-square c-btn-border-2x c-btn-green c-btn-uppercase c-btn-bold">EXPLORE</button>
                </div>
              </div>
            </div>
          </div>
        </div><!-- END: CONTENT/STEPS/STEPS-2 -->
      </section>

      <section id="stats">
        <!-- BEGIN: CONTENT/STATS/COUNTER-1 -->
        <div class="c-content-box c-size-md c-bg-white">
          <div class="container">
            <div class="c-content-counter-1 c-opt-1">
              <div class="c-content-title-1">
                <h3 class="c-center c-font-uppercase c-font-bold">We never stop improving</h3>
                <div class="c-line-center"></div>
              </div>
              <div class="row">
                <div class="col-md-4">
                  <div class="c-counter c-theme-border c-font-bold c-theme-font" data-counter="counterup">201</div>
                  <h4 class="c-title c-first c-font-uppercase c-font-bold">Current Pages</h4>
                  <p class="c-content">..and growing. We will never stop improving and updating JANGO. Expect more.</p>
                </div>
                <div class="col-md-4">
                  <div class="c-counter c-theme-border c-font-bold c-theme-font" data-counter="counterup">3841</div>
                  <h4 class="c-title c-font-uppercase c-font-bold">Satisfied Customers</h4>
                  <p class="c-content">Our Professional and dedicated team are on stand by to server your every concern.</p>
                </div>
                <div class="col-md-4">
                  <div class="c-counter c-theme-border c-font-bold c-theme-font" data-counter="counterup">110,865</div>
                  <h4 class="c-title c-font-uppercase c-font-bold">Total Downloads</h4>
                  <p class="c-content">Join the community of over 110,865 users.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- END: CONTENT/STATS/COUNTER-1 -->
      </section>

      <section id="clients">
        <!-- BEGIN: CONTENT/TESTIMONIALS/TESTIMONIALS-6-1 -->
        <div class="c-content-box c-size-md c-bg-grey-1">
          <div class="container">
            <div class="c-content-blog-post-card-1-slider" data-slider="owl">
              <div class="c-content-title-1">
                <h3 class="c-center c-font-uppercase c-font-bold">Customer Reviews</h3>
                <div class="c-line-center c-theme-bg"></div>
                <p class="c-center c-font-uppercase1">Lorem ipsum dolor sit amet et consectetuer adipiscing elit</p>
              </div>
              <div class="owl-carousel owl-theme c-theme c-owl-nav-center" data-items="3" data-slide-speed="8000" data-rtl="false">
                <div class="item">
                  <div class="c-content-testimonial-3 c-option-default">
                    <div class="c-content">
                      Lorem ipsum dolor sit amet et consectetuer adipiscing elit, sed nonummy nib euismod
                      tincid unt ut ed laoreet dolore sit amet consectetuer adipiscing.
                    </div>
                    <div class="c-person">
                      <img src="../static/images/content/avatars/team1.jpg" class="img-responsive">
                      <div class="c-person-detail c-font-uppercase">
                        <h4 class="c-name">Mark Doe</h4>
                        <p class="c-position c-font-bold c-theme-font">CFO, Walmart</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="item">
                  <div class="c-content-testimonial-3 c-option-default">
                    <div class="c-content">
                      Lorem ipsum dolor sit amet et consectetuer adipiscing elit, sed nonummy nib euismod
                      tincid unt ut ed laoreet dolore sit amet consectetuer adipiscing.
                    </div>
                    <div class="c-person">
                      <img src="../static/images/content/avatars/team6.jpg" class="img-responsive">
                      <div class="c-person-detail c-font-uppercase">
                        <h4 class="c-name">Ashley Benson</h4>
                        <p class="c-position c-font-bold c-theme-font">CFO, Loop Inc</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="item">
                  <div class="c-content-testimonial-3 c-option-default">
                    <div class="c-content">
                      Lorem ipsum dolor sit amet et consectetuer adipiscing elit, sed nonummy nib euismod
                      tincid unt ut ed laoreet dolore sit amet consectetuer adipiscing.
                    </div>
                    <div class="c-person">
                      <img src="../static/images/content/avatars/team4.jpg" class="img-responsive">
                      <div class="c-person-detail c-font-uppercase">
                        <h4 class="c-name">Nina Kunis</h4>
                        <p class="c-position c-font-bold c-theme-font">CFO, ERA Tech</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="item">
                  <div class="c-content-testimonial-3 c-option-default">
                    <div class="c-content">
                      Lorem ipsum dolor sit amet et consectetuer adipiscing elit, sed nonummy nib euismod
                      tincid unt ut ed laoreet dolore sit amet consectetuer adipiscing.
                    </div>
                    <div class="c-person">
                      <img src="../static/images/content/avatars/team8.jpg" class="img-responsive">
                      <div class="c-person-detail c-font-uppercase">
                        <h4 class="c-name">Ashley Benson</h4>
                        <p class="c-position c-font-bold c-theme-font">CFO, Loop Inc</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="item">
                  <div class="c-content-testimonial-3 c-option-default">
                    <div class="c-content">
                      Lorem ipsum dolor sit amet et consectetuer adipiscing elit, sed nonummy nib euismod
                      tincid unt ut ed laoreet dolore sit amet consectetuer adipiscing.
                    </div>
                    <div class="c-person">
                      <img src="../static/images/content/avatars/team7.jpg" class="img-responsive">
                      <div class="c-person-detail c-font-uppercase">
                        <h4 class="c-name">Mark Jeep</h4>
                        <p class="c-position c-font-bold c-theme-font">CFO, ERA Tech</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div><!-- END: CONTENT/TESTIMONIALS/TESTIMONIALS-6-1 -->
      </section>

      <section id="pricing">
        <!-- BEGIN: CONTENT/PRICING/PRICING-5 -->
        <div class="c-content-box c-size-md">
          <div class="container">
            <div class="row c-margin-t-10 c-margin-b-10">
              <div class="col-md-12">
                <div class="c-content-title-1 c-title-pricing-1">
                  <h3 class="c-font-uppercase c-font-bold">Purchase a Package</h3>
                  <div class="c-row c-try">
                    <button class="btn btn-md c-btn-square c-btn-red c-btn-uppercase c-btn-bold">TRY IT FOR FREE</button>
                  </div>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="c-content-pricing-1 c-opt-1">

                <div class="col-md-3 c-sm-hidden">
                  <div class="c-content c-column-odd c-padding-adjustment">
                    <div class="c-row c-type c-font-20 c-align-left">Product Features</div>
                    <div class="c-row c-title c-font-17">End Products</div>
                    <div class="c-row c-title c-font-17">Standard Features</div>
                    <div class="c-row c-title c-font-17">Free Issues</div>
                    <div class="c-row c-title c-font-17">Paid Issues</div>
                    <div class="c-row c-empty">&nbsp;</div>
                    <div class="c-row c-empty">&nbsp;</div>
                  </div>
                </div>

                <div class="col-md-3 col-sm-4">
                  <div class="c-content c-column-even c-padding-adjustment">
                    <div class="c-row c-type c-font-20">Starter</div>
                    <div class="c-row c-font-17">
                      10 <span class="c-sub-title">End Products</span>
                    </div>
                    <div class="c-row">
                      <i class="fa fa-check c-font-20"></i> <span class="c-sub-title">Standard Features</span>
                    </div>
                    <div class="c-row">
                      <i class="fa fa-times c-font-20"></i> <span class="c-sub-title">Free Issues</span>
                    </div>
                    <div class="c-row">
                      <i class="fa fa-times c-font-20"></i> <span class="c-sub-title">Paid Issues</span>
                    </div>
                    <div class="c-row c-price">
                      <span class="c-dollar c-font-20">$</span> <span class="c-font-30 c-font-bold">49</span>
                    </div>
                    <div class="c-row c-purchase">
                      <button class="btn btn-md c-btn-square c-btn-green c-btn-uppercase c-btn-bold">PURCHASE</button>
                    </div>
                  </div>
                </div>

                <div class="col-md-3 col-sm-4">
                  <div class="c-content c-column-odd c-padding-adjustment">
                    <div class="c-row c-type c-font-20">Community</div>
                    <div class="c-row c-font-17">100 <span class="c-sub-title">End Products</span></div>
                    <div class="c-row">
                      <i class="fa fa-check c-font-20"></i> <span class="c-sub-title">Standard Features</span>
                    </div>
                    <div class="c-row">
                      <i class="fa fa-check c-font-20"></i> <span class="c-sub-title">Free Issues</span>
                    </div>
                    <div class="c-row">
                      <i class="fa fa-check c-font-20"></i> <span class="c-sub-title">Paid Issues</span>
                    </div>
                    <div class="c-row c-price">
                      <span class="c-dollar c-font-20">$</span> <span class="c-font-30 c-font-bold">99</span>
                    </div>
                    <div class="c-row c-purchase">
                      <button class="btn btn-md c-btn-square c-btn-green c-btn-uppercase c-btn-bold">PURCHASE</button>
                    </div>
                  </div>
                </div>

                <div class="col-md-3 col-sm-4">
                  <div class="c-content c-column-even">
                    <div class="c-row c-type c-font-20">Professional</div>
                    <div class="c-row c-font-17">Unlimited <span class="c-sub-title">End Products</span></div>
                    <div class="c-row">
                      <i class="fa fa-check c-font-20"></i> <span class="c-sub-title">Standard Features</span>
                    </div>
                    <div class="c-row">
                      <i class="fa fa-check c-font-20"></i> <span class="c-sub-title">Free Issues</span>
                    </div>
                    <div class="c-row">
                      <i class="fa fa-check c-font-20"></i> <span class="c-sub-title">Paid Issues</span>
                    </div>
                    <div class="c-row c-price">
                      <span class="c-dollar c-font-20">$</span> <span class="c-font-30 c-font-bold">149</span>
                    </div>
                    <div class="c-row c-purchase">
                      <button class="btn btn-md c-btn-square c-btn-green c-btn-uppercase c-btn-bold">PURCHASE</button>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div><!-- END: CONTENT/PRICING/PRICING-5 -->
      </section>

      <section id="contact">

      </section>
      <!-- END: PAGE CONTENT -->


    </div>
    <!-- END: PAGE CONTAINER -->

    <!-- BEGIN: LAYOUT/FOOTERS/FOOTER-1 -->
    <a name="footer"></a>
    <footer class="c-layout-footer c-layout-footer-4 c-bg-footer-8">
      <div class="c-footer">
        <div class="container">
          <div class="row">
            <div class="col-md-6 c-footer-4-p-right">
              <div class="c-content-title-1">
                <h3 class="c-font-uppercase c-font-bold c-font-white c-border">JAN<span class="c-theme-font">GO</span></h3>
              </div>
              <p class="c-about">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed elit diam nonummy ad minim veniam quis nostrud
                exerci et tation diam nisl ut aliquip exit commodo consequat euismod tincidunt ut laoreet dolore magna aluam.
              </p>
              <div class="c-links">
                <ul class="c-nav">
                  <li><a class="c-active c-theme-border c-theme-font" href="#">Home</a></li>
                  <li><a href="#">About</a></li>
                  <li><a href="#">Work</a></li>
                  <li><a href="#">Careers</a></li>
                  <li><a href="#">Contact</a></li>
                </ul>
              </div>
              <p class="c-contact">
                联系电话: 199-2103-0113<br>
                联系地址：海市徐汇区虹梅路2007号<br>
                邮政编码: 200030
              </p>
              <ul class="c-socials">
                <li><a href="#"><i class="icon-social-twitter"></i></a></li>
                <li><a href="#"><i class="icon-social-facebook"></i></a></li>
                <li><a href="#"><i class="icon-social-youtube"></i></a></li>
                <li><a href="#"><i class="icon-social-dribbble"></i></a></li>
              </ul>
            </div>
            <div class="col-md-6 c-footer-4-p-left">
              <div class="c-feedback">
                <h3 class="c-font-thin">联系我们</h3>
                <form action="#">
                  <input type="text" placeholder="请输入用户昵称" class="form-control">
                  <input type="text" placeholder="请输入联系邮箱" class="form-control">
                  <textarea rows="8" name="message" placeholder="请在此处输入您的观点 ..." class="form-control"></textarea>
                  <button type="submit" class="btn c-btn-white c-btn-border-2x c-btn-uppercase btn-lg c-btn-bold c-btn-square">发送</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer><!-- END: LAYOUT/FOOTERS/FOOTER-1 -->

    <!-- BEGIN: LAYOUT/FOOTERS/GO2TOP -->
    <div class="c-layout-go2top">
      <i class="icon-arrow-up"></i>
    </div><!-- END: LAYOUT/FOOTERS/GO2TOP -->
  </div>
</template>

<script type="es6">
export default {
  name: 'Container',
  mounted(){
    let slider = $('.c-layout-revo-slider .tp-banner');
    let onepageMode = $('.c-mega-menu-onepage-dots').size() > 0 ? true : false;
    if (onepageMode) {
      let api = slider.show().revolution({
        sliderType: "standard",
        sliderLayout: "fullscreen",
        responsiveLevels: [2048, 1024, 778, 480],
        gridwidth: [1170, 1024, 778, 480],
        gridheight: [868, 768, 960, 720],
        delay: 15000,
        startwidth: 1170,
        startheight: 1000,

        navigation: {
          keyboardNavigation: "off",
          keyboard_direction: "horizontal",
          mouseScrollNavigation: "off",
          onHoverStop: "off",
          bullets: {
            style: "round",
            enable: true,
            hide_onmobile: false,
            hide_onleave: true,
            hide_delay: 200,
            hide_delay_mobile: 1200,
            hide_under: 0,
            hide_over: 9999,
            direction: "horizontal",
            h_align: "center",
            v_align: "bottom",
            space: 5,
            v_offset: 60,

          },
          touch: {
            touchenabled: 'off',
          }
        },

        spinner: "spinner2",

        shadow: 0,
        fullWidth: "off",
        forceFullWidth: "off",

        hideThumbsOnMobile: "on",
        hideNavDelayOnMobile: 1500,
        hideBulletsOnMobile: "on",
        hideArrowsOnMobile: "on",
        hideThumbsUnderResolution: 0
      });
    }
  }
}
</script>
