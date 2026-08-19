import React from 'react';
import { NavLink } from 'react-router-dom';

class Slider4 extends React.Component {
  constructor() {
    super();
    this.state = { isOpen: false };
    this.openModal = this.openModal.bind(this);
  }

  componentDidMount() {
    this.timer = setTimeout(() => {
      const $ = window.jQuery;
      if (!$ || typeof $.fn.revolution === 'undefined' || !$('#rev_slider_26_1').length) {
        return;
      }

      // Destroy any previous instance safely
      try {
        if ($('#rev_slider_26_1').data('revolutionapi')) {
          $('#rev_slider_26_1').revkill();
        }
      } catch (_) { /* ignore */ }

      // Initialize the slider with all options
      $('#rev_slider_26_1').show().revolution({
        sliderType: 'standard',
        jsFileLocation: 'revolution/js/',
        sliderLayout: 'fullscreen',
        dottedOverlay: 'none',
        delay: 9000,
        navigation: {
          keyboardNavigation: 'off',
          keyboard_direction: 'horizontal',
          mouseScrollNavigation: 'off',
          mouseScrollReverse: 'default',
          onHoverStop: 'off',
          touch: {
            touchenabled: 'on',
            touchOnDesktop: 'off',
            swipe_threshold: 75,
            swipe_min_touches: 50,
            swipe_direction: 'horizontal',
            drag_block_vertical: false,
          },
          arrows: {
            style: 'metis',
            enable: true,
            hide_onmobile: false,
            hide_onleave: false,
            tmp: '',
            left:  { h_align: 'right', v_align: 'bottom', h_offset: 80, v_offset: 10 },
            right: { h_align: 'right', v_align: 'bottom', h_offset: 10, v_offset: 10 },
          },
          bullets: {
            enable: false,
            hide_onmobile: false,
            style: 'bullet-bar',
            hide_onleave: false,
            direction: 'horizontal',
            h_align: 'right',
            v_align: 'bottom',
            h_offset: 30,
            v_offset: 30,
            space: 5,
            tmp: '',
          },
        },
        responsiveLevels: [1240, 1024, 778, 480],
        visibilityLevels: [1240, 1024, 778, 480],
        gridwidth:  [1270, 1024, 778, 480],
        gridheight: [729,  600,  600, 480],
        lazyType: 'none',
        parallax: {
          type: 'scroll',
          origo: 'slidercenter',
          speed: 2000,
          levels: [5,10,15,20,25,30,35,40,45,46,47,48,49,50,51,55],
        },
        shadow: 0,
        spinner: 'off',
        stopLoop: 'off',
        stopAfterLoops: -1,
        stopAtSlide: -1,
        shuffle: 'off',
        autoHeight: 'off',
        fullScreenAutoWidth: 'off',
        fullScreenAlignForce: 'off',
        fullScreenOffsetContainer: '.site-header',
        fullScreenOffset: '0px',
        hideThumbsOnMobile: 'off',
        hideSliderAtLimit: 0,
        hideCaptionAtLimit: 0,
        hideAllCaptionAtLilmit: 0,
        debugMode: false,
        fallbacks: {
          simplifyAll: 'off',
          nextSlideOnWindowFocus: 'off',
          disableFocusListener: false,
        },
      });
    }, 100);
  }

  // Prevent React from re-rendering this component after mount
  shouldComponentUpdate() {
    return false;
  }

  // Clean up timer and Revolution Slider instance before unmount
  componentWillUnmount() {
    if (this.timer) {
      clearTimeout(this.timer);
    }
    try {
      const $ = window.jQuery;
      if ($ && $('#rev_slider_26_1').data('revolutionapi')) {
        $('#rev_slider_26_1').revkill();
      }
    } catch (_) { /* ignore */ }
  }

  openModal() {
    this.setState({ isOpen: true });
  }

  render() {
    return (
      <>
        <div id="rev_slider_26_1_wrapper" className="rev_slider_wrapper fullscreen-container home-rev-slider" data-alias="mask-showcase" data-source="gallery">
          {/* START REVOLUTION SLIDER 5.4.1 fullscreen mode */}
          <div id="rev_slider_26_1" className="rev_slider fullscreenbanner" style={{ display: 'none' }} data-version="5.4.1">
            <ul>
              {/* SLIDE 1 */}
              <li data-index="rs-73" data-transition="fade" data-slotamount="default" data-hideafterloop={0} data-hideslideonmobile="off" data-easein="default" data-easeout="default" data-masterspeed={300} data-thumb={require('./../../images/main-slider/slider1/slide1.jpg')} data-rotate={0} data-saveperformance="off" data-title data-param1={1} data-param2 data-param3 data-param4 data-param5 data-param6 data-param7 data-param8 data-param9 data-param10 data-description>
                {/* MAIN IMAGE */}
                <img loading="lazy" height={800} width={1200} src={require('./../../images/azim/66.webp')} alt="Azim Facilities banner" data-bgcolor="#f8f8f8" data-bgposition="center center" data-bgfit="cover" data-bgrepeat="no-repeat" data-bgparallax="off" className="rev-slidebg" data-no-retina />
                {/* Tint Overlay */}
                <div className="tp-caption tp-shape tp-shapewrapper rs-parallaxlevel-tobggroup" id="slide-73-layer-tint" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['0','0','0','0']" data-width="full" data-height="full" data-whitespace="nowrap" data-type="shape" data-basealign="slide" data-responsive_offset="off" data-responsive="off" data-frames="[{&quot;delay&quot;:0,&quot;speed&quot;:100,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;opacity:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" style={{ zIndex: 5, backgroundColor: 'rgba(0, 0, 0, 0.4)' }} />
                {/* LAYERS 2 number block*/}
                <div className="tp-caption rev-btn  tp-resizeme slider-block " id="slide-73-layer-2" data-x="['left','left','left','left']" data-hoffset="['140','60','30','50']" data-y="['middle','middle','middle','top']" data-voffset="['-220','-220','-220','50']" data-fontweight="['600','600','600','600']" data-fontsize="['100','120','80','40']" data-lineheight="['120','120','80','80']" data-whitespace="nowrap" data-type="button" data-responsive_offset="on" data-frames="[{&quot;from&quot;:&quot;y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;&quot;,&quot;mask&quot;:&quot;x:0px;y:0px;s:inherit;e:inherit;&quot;,&quot;speed&quot;:1500,&quot;to&quot;:&quot;o:1;&quot;,&quot;delay&quot;:1000,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},
                          {&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:500,&quot;to&quot;:&quot;y:[-100%];&quot;,&quot;mask&quot;:&quot;x:inherit;y:inherit;s:inherit;e:inherit;&quot;,&quot;ease&quot;:&quot;Power1.easeIn&quot;}]" data-textalign="['center','left','left','center']" data-paddingtop="[0,20,20,0]" data-paddingright="[10,10,10,10]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[10,10,10,10]" style={{ zIndex: 10, fontFamily: '"Poppins", sans-serif' }}><img loading="lazy" height={800} width={1200} src={require('./../../images/azim/71.webp')} alt="Azim Facilities campaign artwork" /></div>
                
                <div className="tp-caption tp-resizeme" id="slide-74-layer-4" data-x="['left','left','left','center']" data-hoffset="['0','60','30','0']" data-y="['middle','middle','middle','top']" data-voffset="['10','10','10','200']" data-fontsize="['54','64','60','40']" data-lineheight="['64','74','70','50']" data-width="['300','700','700','400']" data-height="none" data-whitespace="normal" data-type="text" data-responsive_offset="on" data-frames="[{&quot;delay&quot;:200,&quot;speed&quot;:750,&quot;sfxcolor&quot;:&quot;#fff&quot;,&quot;sfx_effect&quot;:&quot;blockfromleft&quot;,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;z:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},
                          {&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:500,&quot;sfxcolor&quot;:&quot;#ffffff&quot;,&quot;sfx_effect&quot;:&quot;blocktoleft&quot;,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;z:0;&quot;,&quot;ease&quot;:&quot;Power4.easeOut&quot;}]" data-textalign="['left','left','left','left']" data-paddingtop="[200,20,20,10]" data-paddingright="[20,20,20,10]" data-paddingbottom="[30,30,30,30]" data-paddingleft="[0,0,0,10]" style={{ zIndex: 10, textTransform: 'uppercase', letterSpacing: 6, whiteSpace: 'normal', fontWeight: 600, color: '#fff', fontFamily: '"Poppins", sans-serif' }}>AZIM Facilities Management & Serivices. Doha, qatar</div>
                
                {/* LAYER 7 left dark Block */}
                <div className="tp-caption rev-btn  tp-resizeme rev-slider-white-block" id="slide-73-layer-7" data-x="['right','right','left','right']" data-hoffset="['800','570','0','870']" data-y="['middle','middle','middle','middle']" data-voffset="['0','0','0','0']" data-width="full" data-height="full" data-whitespace="nowrap" data-type="button" data-responsive_offset="on" data-frames="[{&quot;from&quot;:&quot;y:[-0%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;&quot;,&quot;mask&quot;:&quot;x:0px;y:0px;s:inherit;e:inherit;&quot;,&quot;speed&quot;:0,&quot;to&quot;:&quot;o:1;&quot;,&quot;delay&quot;:0,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},
                          {&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:0,&quot;to&quot;:&quot;y:[-0%];&quot;,&quot;mask&quot;:&quot;x:inherit;y:inherit;s:inherit;e:inherit;&quot;,&quot;ease&quot;:&quot;Power1.easeIn&quot;}]" data-textalign="['left','left','left','left']" data-paddingtop="[250,250,250,250]" data-paddingright="[250,150,150,150]" data-paddingbottom="[250,250,250,250]" data-paddingleft="[250,150,250,250]" style={{ zIndex: 6, width: 6000, backgroundColor: '#121C22', height: '100vh' }} />
                {/* Border left Part */}
                <div className="tp-caption tp-shape tp-shapewrapper " id="slide-73-layer-8" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['0','0','0','0']" data-width="full" data-height="full" data-whitespace="nowrap" data-visibility="['on','on','off','off']" data-type="shape" data-basealign="slide" data-responsive_offset="off" data-responsive="off" data-frames="[{&quot;delay&quot;:50,&quot;speed&quot;:100,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;opacity:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;opacity:0;&quot;,&quot;ease&quot;:&quot;Power3.easeIn&quot;}]" data-textalign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{ zIndex: 8, backgroundColor: 'rgba(0, 0, 0, 0)', borderLeft: '40px solid #eef1f2' }}> </div>
                {/* Border bottom Part */}
                <div className="tp-caption tp-shape tp-shapewrapper " id="slide-73-layer-7b" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['0','0','0','0']" data-width="full" data-height="full" data-whitespace="nowrap" data-visibility="['on','on','off','off']" data-type="shape" data-basealign="slide" data-responsive_offset="off" data-responsive="off" data-frames="[{&quot;delay&quot;:50,&quot;speed&quot;:100,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;opacity:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;opacity:0;&quot;,&quot;ease&quot;:&quot;Power3.easeIn&quot;}]" data-textalign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{ zIndex: 8, backgroundColor: 'rgba(0, 0, 0, 0)', borderBottom: '80px solid #eef1f2' }}> </div>
              </li>

              {/* SLIDE 2 */}
              <li data-index="rs-74" data-transition="fade" data-slotamount="default" data-hideafterloop={0} data-hideslideonmobile="off" data-easein="default" data-easeout="default" data-masterspeed={300} data-thumb={require('./../../images/main-slider/slider1/slide2.jpg')} data-rotate={0} data-saveperformance="off" data-title data-param1={1} data-param2 data-param3 data-param4 data-param5 data-param6 data-param7 data-param8 data-param9 data-param10 data-description>
                {/* MAIN IMAGE */}
                <img loading="lazy" height={800} width={1200} src={require('./../../images/azim/2.webp')} alt="" data-bgcolor="#f8f8f8" data-bgposition="center center" data-bgfit="cover" data-bgrepeat="no-repeat" data-bgparallax="off" className="rev-slidebg" data-no-retina />
                {/* Tint Overlay */}
                <div className="tp-caption tp-shape tp-shapewrapper rs-parallaxlevel-tobggroup" id="slide-74-layer-tint" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['0','0','0','0']" data-width="full" data-height="full" data-whitespace="nowrap" data-type="shape" data-basealign="slide" data-responsive_offset="off" data-responsive="off" data-frames="[{&quot;delay&quot;:0,&quot;speed&quot;:100,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;opacity:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" style={{ zIndex: 5, backgroundColor: 'rgba(0, 0, 0, 0.4)' }} />
                
                {/* LAYER 1 right image overlay dark */}
                <div className="tp-caption tp-shape tp-shapewrapper  rs-parallaxlevel-tobggroup" id="slide-74-layer-1" data-x="['right','right','right','center']" data-hoffset="['0','0','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['0','0','0','0']" data-fontweight="['100','100','400','400']" data-width="['full','full','full','full']" data-height="['full','full','full','full']" data-whitespace="nowrap" data-type="shape" data-basealign="slide" data-responsive_offset="off" data-responsive="off" data-frames="[{&quot;from&quot;:&quot;opacity:0;&quot;,&quot;speed&quot;:1500,&quot;to&quot;:&quot;o:1;&quot;,&quot;delay&quot;:150,&quot;ease&quot;:&quot;Power2.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1500,&quot;to&quot;:&quot;opacity:0;&quot;,&quot;ease&quot;:&quot;Power2.easeInOut&quot;}]" data-textalign="['left','left','left','left']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{ zIndex: 6, textTransform: 'left', backgroundColor: 'rgba(0,0,0,0)' }} />
                
                {/* LAYER 4 Bold Title */}
                <div className="tp-caption tp-resizeme" id="slide-74-layer-4b" data-x="['left','left','left','center']" data-hoffset="['0','60','30','0']" data-y="['middle','middle','middle','top']" data-voffset="['10','10','10','330']" data-fontsize="['54','64','60','40']" data-lineheight="['64','74','70','50']" data-width="['300','700','700','400']" data-height="none" data-whitespace="normal" data-type="text" data-responsive_offset="on" data-frames="[{&quot;delay&quot;:200,&quot;speed&quot;:750,&quot;sfxcolor&quot;:&quot;#fff&quot;,&quot;sfx_effect&quot;:&quot;blockfromleft&quot;,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;z:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},
                          {&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:500,&quot;sfxcolor&quot;:&quot;#ffffff&quot;,&quot;sfx_effect&quot;:&quot;blocktoleft&quot;,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;z:0;&quot;,&quot;ease&quot;:&quot;Power4.easeOut&quot;}]" data-textalign="['left','left','left','left']" data-paddingtop="[20,20,20,10]" data-paddingright="[20,20,20,10]" data-paddingbottom="[30,30,30,30]" data-paddingleft="[0,0,0,10]" style={{ zIndex: 10, textTransform: 'uppercase', letterSpacing: 6, whiteSpace: 'normal', fontWeight: 600, color: '#fff', fontFamily: '"Poppins", sans-serif' }}>QUEST FOR EXCELLENCE BEGINS HERE</div>
                
                {/* LAYER 6 Read More */}
                <div className="tp-caption rev-btn  tp-resizeme" id="slide-74-layer-6" data-x="['left','left','left','left']" data-hoffset="['0','60','30','50']" data-y="['middle','middle','middle','top']" data-voffset="['210','180','180','290']" data-width="none" data-height="none" data-whitespace="nowrap" data-type="button" data-responsive_offset="on" data-frames="[{&quot;from&quot;:&quot;y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;&quot;,&quot;mask&quot;:&quot;x:0px;y:0px;s:inherit;e:inherit;&quot;,&quot;speed&quot;:1500,&quot;to&quot;:&quot;o:1;&quot;,&quot;delay&quot;:1000,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},
                          {&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:500,&quot;to&quot;:&quot;y:[-100%];&quot;,&quot;mask&quot;:&quot;x:inherit;y:inherit;s:inherit;e:inherit;&quot;,&quot;ease&quot;:&quot;Power1.easeIn&quot;}]" data-textalign="['left','left','left','left']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{ zIndex: 9, lineHeight: 30 }}><NavLink to={"/about"} className="site-button-secondry btn-half"><span>Read about our facilities management services</span></NavLink></div>
                
                {/* LAYER 7 left dark Block */}
                <div className="tp-caption rev-btn  tp-resizeme rev-slider-white-block" id="slide-74-layer-7" data-x="['right','right','left','right']" data-hoffset="['870','570','0','870']" data-y="['middle','middle','middle','middle']" data-voffset="['0','0','0','0']" data-width="full" data-height="full" data-whitespace="nowrap" data-type="button" data-responsive_offset="on" data-frames="[{&quot;from&quot;:&quot;y:[-0%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;&quot;,&quot;mask&quot;:&quot;x:0px;y:0px;s:inherit;e:inherit;&quot;,&quot;speed&quot;:0,&quot;to&quot;:&quot;o:1;&quot;,&quot;delay&quot;:0,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},
                          {&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:0,&quot;to&quot;:&quot;y:[-0%];&quot;,&quot;mask&quot;:&quot;x:inherit;y:inherit;s:inherit;e:inherit;&quot;,&quot;ease&quot;:&quot;Power1.easeIn&quot;}]" data-textalign="['left','left','left','left']" data-paddingtop="[250,250,250,250]" data-paddingright="[250,150,150,150]" data-paddingbottom="[250,250,250,250]" data-paddingleft="[250,150,250,250]" style={{ zIndex: 6, width: 6000, backgroundColor: '#F89733', height: '100vh' }} />
                {/* Border left Part */}
                <div className="tp-caption tp-shape tp-shapewrapper " id="slide-74-layer-8" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['0','0','0','0']" data-width="full" data-height="full" data-whitespace="nowrap" data-visibility="['on','on','off','off']" data-type="shape" data-basealign="slide" data-responsive_offset="off" data-responsive="off" data-frames="[{&quot;delay&quot;:50,&quot;speed&quot;:100,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;opacity:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;opacity:0;&quot;,&quot;ease&quot;:&quot;Power3.easeIn&quot;}]" data-textalign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{ zIndex: 8, backgroundColor: 'rgba(0, 0, 0, 0)', borderLeft: '40px solid #eef1f2' }}> </div>
                {/* Border bottom Part */}
                <div className="tp-caption tp-shape tp-shapewrapper " id="slide-74-layer-7b" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['0','0','0','0']" data-width="full" data-height="full" data-whitespace="nowrap" data-visibility="['on','on','off','off']" data-type="shape" data-basealign="slide" data-responsive_offset="off" data-responsive="off" data-frames="[{&quot;delay&quot;:50,&quot;speed&quot;:100,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;opacity:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;opacity:0;&quot;,&quot;ease&quot;:&quot;Power3.easeIn&quot;}]" data-textalign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{ zIndex: 8, backgroundColor: 'rgba(0, 0, 0, 0)', borderBottom: '80px solid #eef1f2' }}> </div>
              </li>

              {/* SLIDE 3 */}
              <li data-index="rs-75" data-transition="fade" data-slotamount="default" data-hideafterloop={0} data-hideslideonmobile="off" data-easein="default" data-easeout="default" data-masterspeed={300} data-thumb={require('./../../images/main-slider/slider1/slide3.jpg')} data-rotate={0} data-saveperformance="off" data-title data-param1={1} data-param2 data-param3 data-param4 data-param5 data-param6 data-param7 data-param8 data-param9 data-param10 data-description>
                {/* MAIN IMAGE */}
                <img loading="lazy" height={800} width={1200} src={require('./../../images/azim/3.webp')} alt="" data-bgcolor="#f8f8f8" data-bgposition="center center" data-bgfit="cover" data-bgrepeat="no-repeat" data-bgparallax="off" className="rev-slidebg" data-no-retina />
                {/* Tint Overlay */}
                <div className="tp-caption tp-shape tp-shapewrapper rs-parallaxlevel-tobggroup" id="slide-75-layer-tint" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['0','0','0','0']" data-width="full" data-height="full" data-whitespace="nowrap" data-type="shape" data-basealign="slide" data-responsive_offset="off" data-responsive="off" data-frames="[{&quot;delay&quot;:0,&quot;speed&quot;:100,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;opacity:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" style={{ zIndex: 5, backgroundColor: 'rgba(0, 0, 0, 0.4)' }} />
                
                {/* LAYER 1 right image overlay dark */}
                <div className="tp-caption tp-shape tp-shapewrapper  rs-parallaxlevel-tobggroup" id="slide-75-layer-1" data-x="['right','right','right','center']" data-hoffset="['0','0','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['0','0','0','0']" data-fontweight="['100','100','400','400']" data-width="['full','full','full','full']" data-height="['full','full','full','full']" data-whitespace="nowrap" data-type="shape" data-basealign="slide" data-responsive_offset="off" data-responsive="off" data-frames="[{&quot;from&quot;:&quot;opacity:0;&quot;,&quot;speed&quot;:1500,&quot;to&quot;:&quot;o:1;&quot;,&quot;delay&quot;:150,&quot;ease&quot;:&quot;Power2.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1500,&quot;to&quot;:&quot;opacity:0;&quot;,&quot;ease&quot;:&quot;Power2.easeInOut&quot;}]" data-textalign="['left','left','left','left']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{ zIndex: 6, textTransform: 'left', backgroundColor: 'rgba(0,0,0,0)' }} />
                
                {/* LAYER 4 Bold Title */}
                <div className="tp-caption tp-resizeme" id="slide-75-layer-4b" data-x="['left','left','left','center']" data-hoffset="['0','60','30','0']" data-y="['middle','middle','middle','top']" data-voffset="['-50','10','10','260']" data-fontsize="['54','64','60','40']" data-lineheight="['64','74','70','50']" data-width="['300','700','700','400']" data-height="none" data-whitespace="normal" data-type="text" data-responsive_offset="on" data-frames="[{&quot;delay&quot;:200,&quot;speed&quot;:750,&quot;sfxcolor&quot;:&quot;#fff&quot;,&quot;sfx_effect&quot;:&quot;blockfromleft&quot;,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;z:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},
                          {&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:500,&quot;sfxcolor&quot;:&quot;#ffffff&quot;,&quot;sfx_effect&quot;:&quot;blocktoleft&quot;,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;z:0;&quot;,&quot;ease&quot;:&quot;Power4.easeOut&quot;}]" data-textalign="['left','left','left','left']" data-paddingtop="[20,20,20,20]" data-paddingright="[20,20,20,10]" data-paddingbottom="[30,30,30,60]" data-paddingleft="[0,0,0,10]" style={{ zIndex: 10, textTransform: 'uppercase', letterSpacing: 6, whiteSpace: 'normal', fontWeight: 600, color: '#fff', fontFamily: '"Poppins", sans-serif' }}>DISCOVER OUR EXCITING UPCOMING EVENTS</div>
                
                {/* LAYER 6 Read More */}
                <div className="tp-caption rev-btn  tp-resizeme" id="slide-75-layer-6" data-x="['left','left','left','left']" data-hoffset="['0','60','30','50']" data-y="['middle','middle','middle','top']" data-voffset="['180','180','180','280']" data-width="none" data-height="none" data-whitespace="nowrap" data-type="button" data-responsive_offset="on" data-frames="[{&quot;from&quot;:&quot;y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;&quot;,&quot;mask&quot;:&quot;x:0px;y:0px;s:inherit;e:inherit;&quot;,&quot;speed&quot;:1500,&quot;to&quot;:&quot;o:1;&quot;,&quot;delay&quot;:1000,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},
                          {&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:500,&quot;to&quot;:&quot;y:[-100%];&quot;,&quot;mask&quot;:&quot;x:inherit;y:inherit;s:inherit;e:inherit;&quot;,&quot;ease&quot;:&quot;Power1.easeIn&quot;}]" data-textalign="['left','left','left','left']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{ zIndex: 9, lineHeight: 30 }}><NavLink to={"/about"} className="site-button-secondry btn-half"><span>Read about our facilities management services</span></NavLink></div>
                
                {/* LAYER 7 left Dark Block */}
                <div className="tp-caption rev-btn  tp-resizeme rev-slider-white-block" id="slide-75-layer-7" data-x="['right','right','left','right']" data-hoffset="['870','570','0','870']" data-y="['middle','middle','middle','middle']" data-voffset="['0','0','0','0']" data-width="full" data-height="full" data-whitespace="nowrap" data-type="button" data-responsive_offset="on" data-frames="[{&quot;from&quot;:&quot;y:[-0%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;&quot;,&quot;mask&quot;:&quot;x:0px;y:0px;s:inherit;e:inherit;&quot;,&quot;speed&quot;:0,&quot;to&quot;:&quot;o:1;&quot;,&quot;delay&quot;:0,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},
                          {&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:0,&quot;to&quot;:&quot;y:[-0%];&quot;,&quot;mask&quot;:&quot;x:inherit;y:inherit;s:inherit;e:inherit;&quot;,&quot;ease&quot;:&quot;Power1.easeIn&quot;}]" data-textalign="['left','left','left','left']" data-paddingtop="[250,250,250,250]" data-paddingright="[250,150,150,150]" data-paddingbottom="[250,250,250,250]" data-paddingleft="[250,150,250,250]" style={{ zIndex: 6, width: 6000, backgroundColor: '#F89733', height: '100vh' }} />
                {/* Border left Part */}
                <div className="tp-caption tp-shape tp-shapewrapper " id="slide-75-layer-8" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['0','0','0','0']" data-width="full" data-height="full" data-whitespace="nowrap" data-visibility="['on','on','off','off']" data-type="shape" data-basealign="slide" data-responsive_offset="off" data-responsive="off" data-frames="[{&quot;delay&quot;:50,&quot;speed&quot;:100,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;opacity:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;opacity:0;&quot;,&quot;ease&quot;:&quot;Power3.easeIn&quot;}]" data-textalign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{ zIndex: 8, backgroundColor: 'rgba(0, 0, 0, 0)', borderLeft: '40px solid #eef1f2' }}> </div>
                {/* Border bottom Part */}
                <div className="tp-caption tp-shape tp-shapewrapper " id="slide-75-layer-7b" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['0','0','0','0']" data-width="full" data-height="full" data-whitespace="nowrap" data-visibility="['on','on','off','off']" data-type="shape" data-basealign="slide" data-responsive_offset="off" data-responsive="off" data-frames="[{&quot;delay&quot;:50,&quot;speed&quot;:100,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;opacity:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;opacity:0;&quot;,&quot;ease&quot;:&quot;Power3.easeIn&quot;}]" data-textalign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{ zIndex: 8, backgroundColor: 'rgba(0, 0, 0, 0)', borderBottom: '80px solid #eef1f2' }}> </div>
              </li>
            </ul>
            <div className="tp-bannertimer" />
            {/* left side social bar*/}
            <div className="slide-left-social">
              <ul className="clearfix">
                <li>
                  <a
                    href="https://x.com/Azimgroupqtr"
                    className="fa-brands fa-x-twitter"
                    target="_blank"
                    rel="noopener noreferrer"
                  ></a>
                </li>
                <li><a href="https://www.instagram.com/azimgroup.qtr/" className="fa-brands fa-instagram" target="_blank" rel="noopener noreferrer"></a></li>
                <li><a href="https://www.facebook.com/azimgroupqtr" className="fa-brands fa-facebook" target="_blank" rel="noopener noreferrer"></a></li>
                <li><a href="https://www.linkedin.com/company/azim-facilities-management-services/" className="fa-brands fa-linkedin" target="_blank" rel="noopener noreferrer"></a></li>
                <li>
                  <a
                    href="https://wa.me/97477047248"
                    className="fa-brands fa-whatsapp"
                    target="_blank"
                    rel="noopener noreferrer"
                  ></a>
                </li>

              </ul>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default Slider4;