!function(e,n,a){function r(t){return isNaN(t)||t==1/0||t<0?void 0:t}function o(t){return Math.random().toString(36).slice(-t)}function i(t){return Math.ceil(Math.random()*(t-1))+1}var d=e.screen,c=encodeURIComponent,g=Math.max,t=e.performance,m=t&&t.timing;function s(){var t=[o(i(4))+"="+o(i(6)),"ga="+e.ga_tid,"dt="+c(n.title),"de="+c(n.characterSet||n.charset),"dr="+c(n.referrer),"ul="+(a.language||a.browserLanguage||a.userLanguage),"sd="+d.colorDepth+"-bit","sr="+d.width+"x"+d.height,"vp="+g(n.documentElement.clientWidth,e.innerWidth||0)+"x"+g(n.documentElement.clientHeight,e.innerHeight||0),"plt="+r(m.loadEventStart-m.navigationStart||0),"dns="+r(m.domainLookupEnd-m.domainLookupStart||0),"pdt="+r(m.responseEnd-m.responseStart||0),"rrt="+r(m.redirectEnd-m.redirectStart||0),"tcp="+r(m.connectEnd-m.connectStart||0),"srt="+r(m.responseStart-m.requestStart||0),"dit="+r(m.domInteractive-m.domLoading||0),"clt="+r(m.domContentLoadedEventStart-m.navigationStart||0),"z="+Date.now()];e.__ga_img=new Image,e.__ga_img.src=e.ga_api+"?"+t.join("&")}e.cfga=s,"complete"===n.readyState?s():e.addEventListener("load",s)}(window,document,navigator);