$.webcam_api=$.js.run(function(){function v(){b.nodes().selecter.find("option").filter(function(){return/video/i.test($(this).data("kind"))}).first().prop("selected",!0);b.nodes().launcher.click()}function r(a,f){var d=this;d.fire=function(c,g){if("function"!==typeof d[c])return b.notice.fail("unexpectedError"),b.event("bad_"+a,c);b.event(a,g||c);d[c]()};$.js.each(f,function(b,a){d[a]=b})}function w(){for(var b=location.search.split("xdebug=")[1].split(","),f=0;f<b.length;f++){var d=b[f].split(":");
q[d[0]]=d[1]}q.enabled&&(l.timeouts.promise=parseInt(q.promiseTimeout)||1E3)}function x(){b.on("launcher","click",function(a){b.status.fire("start",void 0===a.originalEvent?"autorun":null)});b.on("selecter","change",function(){b.action.fire("switchWebcam")});b.on("actions","click",function(){var a=$(this).data("action");b.action.fire(a)});$("#webcam-stream").on("click contextmenu focus",function(){return!1}).on("error",function(){b.event("mediaError",this.error)})}var b={},n={},q={},l={notices_links:{fail_promiseNotReadable:{"/help/webcam-not-working-on-windows-10":{browser:"*",
os:/win(8|10)/},"/help/your-webcam-is-used-by-another-application-on-windows":{browser:"*",os:/win/}},fail_browserNotSupported:{"/help/internet-explorer-does-not-support-mediadevices-interface":{browser:/msie/,os:"*"}}},nodes:{actions:$("#webcam-actions > button"),controls:$("#webcam-controls"),launcher:$("#webcam-launcher"),notices:$("#webcam-notices"),selecter:$("#webcam-selecter"),snapshots:$("#webcam-snapshots")},timeouts:{promise:1E3,permission:3E5}},t=new function(){function a(a,c,g,k){k=$("<button/>").html(k).one("click",
function(){b.event(c,"click");$(this).remove();b.devices.query("getUserMedia",[{video:!0}],{then:function(){b.notice.loading("detectingDevices")},done:function(e){if(e&&e.getVideoTracks){e=e.getVideoTracks();for(var h=0;h<e.length;h++)e[h].stop()}b.event(c,"done");t.list(a)},fail:function(e){b.event(c,"fail");b.notice.inject("fail",b.errorify(e)).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100)}})});g.append("<br/>");g.append(k)}function f(d){var c=b.devices.all().length?"noWebcamSomeDevices":
"noWebcamNoDevices";c=b.notice.fail(c);!0===d&&(d=b.notice.text("text_forceQuery"))&&a(!1,"forceQuery",c,d)}this.list=function(d){b.notice.loading("detectingDevices");b.devices.enumerate(function(){var c=b.devices.filter("kind","videoinput");if(c.length){b.nodes().selecter.empty();var g=0;$.js.each(c,function(c,e){e=$("<option/>",{value:c.deviceId,text:b.label(c,e+1,"cam")}).data({kind:c.kind,label:b.label(c),group:c.groupId});b.nodes().selecter.append(e);c.deviceId&&g++});b.timers.add("cam_detected",
l.timeouts.promise,"Timeout",function(){b.nodes().controls.show();b.notice.done("webcamDetected"+(1<c.length?"Multi":"One"));if(g!==c.length){var d=b.notice.text("fail_devidUnavailable"),e=b.notice.text("text_enableDevid");d&&e&&(d=b.notice.inject("fail",d),a(!0,"enableDevid",d,e))}x();("#autorun"===location.hash||b.params.checked("autorun"))&&v()})}else f(d)})}},y=new function(){function b(b){b=b.replace(/data:[a-z0-9\/\+\-]+;base64,/i,"");b=atob(b);for(var c=b.length,a=new Uint8Array(c),d=0;d<c;d++)a[d]=
b.charCodeAt(d);return new Blob([a],{type:"application/octet-stream"})}function f(b,c){var a=document.createElement("a");a.download=b;a.href=c;document.body.appendChild(a);setTimeout(function(){a.click()},1);setTimeout(function(){document.body.removeChild(a);"string"===typeof c&&0===c.indexOf("blob:")&&URL.revokeObjectURL(c)},1E3)}this.download=function(a,c){if("function"===typeof window.Blob){c=c instanceof Blob?c:b(c);if("function"===typeof navigator.msSaveBlob)return navigator.msSaveBlob(c,a);
if("function"===typeof window.URL)return f(a,URL.createObjectURL(c));if("function"===typeof window.FileReader){var g=new FileReader;g.onload=function(b){f(a,b.target.result)};return g.readAsDataURL(c)}}else c=c.replace(/data:[a-z0-9\/\+\-]+;base64,/i,"data:application/octet-stream;base64,"),f(a,c)}},u=new function(){function a(){if(this.info)return this.info;var b={browser:[["opera","opera|opr/"],["msie","msie|trident/"],["edge","edge/"],["firefox","firefox"],["chrome","chrome"],["safari","safari"]],
os:[["win10","windows (|nt) 10"],["win8","windows (8|nt 6.[23])"],["win7","windows (7|nt 6.1)"],["winxp","windows (xp|nt 5.1)"],["android","android"],["mac","(macppc|macintel|mac_powerpc|macintosh|mac os)"],["linux","(linux|x11)"],["ios","(iphone|ipad|ipod|ios)"]]},a=navigator.userAgent.toLowerCase();this.info={};for(var d in b)for(var e=0;e<b[d].length;e++){var h=b[d][e][1].replace(/\./g,"\\.").replace(/ /g,"\\s*");if((new RegExp(h)).test(a)){info[d]=b[d][e][0];break}}return this.info}function f(b,
a){return"*"===b||b.test(a)}function d(a,d){var c="";for(h in d){var e=d[h];e.title&&(c+='<div>&bull; <a href="'+h+'" class="readmore" target="_blank">'+e.title+"</a></div>")}if(c){d=b.nodes().notices.find(".info_readMore").html();var h=$('<div class="notice-links"/>');h.append("<br/>"+d+c);h.on("click","a.readmore",function(a){b.event("readmore",a.target.getAttribute("href"))});a.append(h)}}this.inject=function(b,g){b.find(".notice-links").remove();if(l.notices_links[g]){var c=a();if(c){var e=[],
h={},m;for(m in l.notices_links[g]){var p=l.notices_links[g][m];f(p.os,c.os)&&f(p.browser,c.browser)&&(h[m]=p,p.title||e.push(m))}$.isEmptyObject(h)||(e.length?$.post("/xhr.json",{module:"titles",urls:e}).always(function(a,c,e){if("object"===typeof a&&"object"===typeof a.data&&a.data.titles)for(var m in a.data.titles)c=a.data.titles[m],h[m].title=c,l.notices_links[g][m].title=c;d(b,h)}):d(b,h))}}}};b.abort=function(a){b.timers.clear();b.notice.fail(a);b.action.stopWebcam()};b.action=new r("action",
{fullscreen:function(){var b=l.webcam();b&&b.fullscreen()},stopWebcam:function(){b.timers.clear();b.nodes().actions.hide();b.nodes().controls.show();var a=l.webcam();a&&a.stop()},switchWebcam:function(){var a=b.nodes().selecter.get(0);if(l.webcam()){var f=b.notice.text("info_switchCamera");if(!confirm(f))return a.selectedIndex=a.prev_selecter_index||0,!1}a.prev_selecter_index=a.selectedIndex;b.action.stopWebcam()}});b.catcher=function(a,f){var d={cannotStreamVideo:/cannotStreamVideo/i,promiseNotAllowed:/denied|notAllowed/i,
promiseNotReadable:/notReadable|SourceUnavailable/i,browserNotSupported:/NotSupportedError/i},c=b.errorify(a);b.debug("api.catcher",a);for(var g in d)if(d[g].test(c)){c=g;break}f?f(c):b.abort(c)};b.debug=function(){q.showLogs&&console.log.apply(console,arguments)};b.devices=new function(){function a(b,a){$.js.run(function(){b(a)})}function f(a){b.timers.add("permission_required",150,"Timeout",function(){b.notice.loading("waitingPermission");b.timers.add("permission_timeout",l.timeouts.permission,
"Timeout",function(){b.notice.fail("permissionTimeout");b.timers.clear()})})}function d(){$(".loading_waitingPermission").hide();b.timers.stop("permission_required");b.timers.stop("permission_timeout")}var c=[];this.all=function(){if(c)return c;b.debug("You cannot get all devices before enumerating them");return[]};this.constraints=function(){return"function"===typeof navigator.mediaDevices.getSupportedConstraints?navigator.mediaDevices.getSupportedConstraints():{}};this.each=function(a){$.js.each(b.devices.all(),
a)};this.enumerate=function(a){b.devices.query("enumerateDevices",[],{done:function(b){c=[];for(var e=0;e<b.length;e++){var h=$.extend({},b[e]);h.kind=h.kind?h.kind.toLowerCase():"unknown";h.groupId||(h.groupId=h.deviceId||h.kind);c.push(h);q.cloneDevices&&c.push(h)}a(c)}})};this.filter=function(a,c){var e=new RegExp(c),h=[];b.devices.each(function(b){e.test(b[a])&&h.push(b)});return h};this.id=function(){return b.devices.selected().val()};this.name=function(){return b.devices.selected().data("label")};
this.query=function(c,k,e){b.debug("devices.query",c,"init");"function"!==typeof e.fail&&(e.fail=b.catcher);try{if(navigator.mediaDevices[c]){var h=navigator.mediaDevices[c].apply(navigator.mediaDevices,k);f(h);h.then(function(){var a=arguments;d();b.debug("devices.query",c,"then");b.timers.add("media_devices",l.timeouts.promise,"Timeout",function(){e.done.apply(null,a)});e.then&&e.then.apply(null,a)});h["catch"](function(h){d();b.debug("devices.query",c,"catch");a(e.fail,h)})}else b.debug("devices.query",
c,"unknonMethod"),b.event("bad_query",c),b.notice.fail("unexpectedError")}catch(m){b.debug("devices.query",c,"badCall"),a(e.fail,m)}};this.selected=function(){var a=b.nodes().selecter.find("option:selected");a.length||(a=b.nodes().selecter.first("option"));return a}};b.errorify=function(a){var f=String(a);if("object"===typeof a){var d=f.toLowerCase(),c=[a.message,a.constructor.name,a.name];a.constraint&&c.push(String(a.constraint));for(a=0;a<c.length;a++)"string"===typeof c[a]&&-1===d.indexOf(c[a].toLowerCase())&&
(f+="; "+c[a])}b.debug(f);return f};b.event=function(b,f){$.js.event(l.name,b,f)};b.fullscreen=new function(){function b(b){this.fullscreenListener||(this.fullscreenListener=!0,$.js.on(document,"keydown",function(a){27===a.keyCode&&$(b).removeAttr("style")}));return $(b).css({position:"fixed",margin:0,top:0,left:0,bottom:0,right:0})}this.request=function(a){var d=a.requestFullscreen||a.webkitRequestFullscreen||a.mozRequestFullScreen||a.msRequestFullscreen,c="function"===typeof d;c?d.apply(a):b(a);
return c}};b.label=function(b,f,d){var a=b.label;a&&(a=$.trim(a.replace(/\([0-9a-f]+:[0-9a-f]+\)/i,"")));a||void 0===f||(a="unknown"===b.kind?d:b.kind,a+="#"+f);return a||""};b.nodes=function(){return l.nodes};b.notice=new function(){var a=b.nodes().notices,f=a.children("li");this.show=function(a,c){var d="";0===a.indexOf("fail_")&&"fail_unexpectedError"!==a&&b.event("fail",a.replace("fail_",""));/^\w+$/.test(a)&&(d=f.filter("."+a).fadeIn(250));d.length?u.inject(d,a):(b.event("unknownNotice",a),b.debug("Unknown notice key",
a),this.inject("fail",a.replace(/^(fail|done|info|loading)_/,"")));c||this.hide(d);return d};this.done=function(b,a){return this.show("done_"+b,a)};this.fail=function(b,a){return this.show("fail_"+b,a)};this.hide=function(b){f.not(b).hide();a.find(".notice-injected").remove()};this.items=function(){return f};this.html=function(b){return $.trim(f.filter("."+b).html())};this.info=function(b,a){return this.show("info_"+b,a)};this.inject=function(d,c,g){if(/^\w+$/.test(c)){var f=b.notice.html(c);if(f){var e=
c;c=f}}g&&(c=$.tpl.parse(c,g));c=$('<li class="notice-injected"/>').html(c).show().appendTo(a);c.addClass("notice-"+d);u.inject(c,e);return c};this.loading=function(b,a){return this.show("loading_"+b,a)};this.text=function(b){return $.trim(f.filter("."+b).text())}};b.on=function(a,f,d){var c=b.nodes();$.js.on(c[a],f,d)};b.params=new function(){function a(a,c){var d=a.html();if(-1===d.indexOf("[["))return!1;var f=d.replace("]]","</a>").replace("[[",'<a class="jslink" href="#">');if(f===d)return!1;
var e=a.html(f).find("a:first"),h=a.data("name");c.isset()&&e.html(c.get());e.on("click",function(a){a.preventDefault();a=$.lang.get(l.name,"prompt",h);if(a=$.trim(prompt(a,this.innerHTML)))e.set_value&&e.set_value(a),this.innerHTML=a,b.event("params.set",h+"="+a)}).one("mouseover",function(){this.title=$.lang.get(l.name,"prompt",h)});return e}var f={};this.setup=function(){function d(c){function d(a){a||0===a?e.set(a):e.remove();m.val(a);if(p.onchange)p.onchange()}var k=c.data("name"),e=b.params.storage(k),
h=a(c,e),m=c.find("input,select"),p=function(){var a={};a.tag=m.prop("tagName").toLowerCase();a.action=function(){return a.tag};if("input"===a.tag&&"checkbox"===m.prop("type")){var c=e.key()+":checked",h=b.storage.get(c);"Y"===h?m.prop("checked",!0):"N"===h&&m.prop("checked",!1);a.onchange=function(){m.prop("checked")?b.storage.set(c,"Y"):b.storage.set(c,"N")};a.action=function(){return m.prop("checked")?"enable":"disable"}}return a}();m.on("change",function(){b.event("params."+p.action(),k);d(m.val())});
f[k]=m.get(0);f[k].serverValue=m.val();h&&(h.set_value=function(a){m.prop("checked",!0);d(a)});e.isset()&&d(e.get())}$("#webcam-controls fieldset label[data-name]").each(function(){new d($(this))})};this.checked=function(a){return(a=this.get(a))?a.checked:!1};this.get=function(a){if(f[a])return f[a];b.debug("params.unknown",a);return{}};this.hide=function(a){(a=this.get(a))&&$(a).closest("label").hide()};this.storage=function(a){var c=b.storage.key("params."+a);return{get:function(){return b.storage.get(c)},
isset:function(){return b.storage.isset(c)},key:function(){return c},remove:function(){b.storage.remove(c)},set:function(a){b.storage.set(c,a)}}};this.value=function(a,b){if(a=this.get(a))return b?b(a.value)||b(a.serverValue):a.value||a.serverValue}};b.resolutions={get:function(a,f){var d=b.resolutions.items();if(1===arguments.length)return d[a];var c=a+"x"+f;if(c in d)return d[c];c=f+"x"+a;if(c in d)return d[c]},keys:function(){var a=b.resolutions.items(),f=Object.keys(a);f.sort(function(b,c){return a[c].width-
a[b].width});return f},items:function(){var a=this;a._items||(a._items={},$("#webcam-resolutions > *[data-name][data-standard]").each(function(){var b=$(this),d=b.data("name"),c=d.split("x");a._items[d]={name:d,standard:b.data("standard"),width:parseInt(c[0]),height:parseInt(c[1])}}));return a._items}};b.setup=function(a,f){if("function"!==typeof document.createElement("canvas").getContext)return b.notice.fail("browserNotSupported");b.notice.loading("detectingDevices");a.nodes&&($.extend(l.nodes,
a.nodes),delete a.nodes);f&&$.js.each(f,function(a,c){$.js.each(a,function(a,d){var e=b[c][d];b[c][d]=e?function(){e();a()}:a})});$.js.extend(l,a);b.debug("api.setup",l);b.params.setup();if(l.onsetup&&!0!==l.onsetup())return b.notice.fail("browserNotSupported");$.include.js("widgets/webcam_api/js/adapter.min.js",function(){return"object"===typeof adapter&&"object"===typeof adapter.browserDetails},function(){"function"===typeof(navigator.mediaDevices||{}).enumerateDevices&&"function"===typeof(window.JSON||
{}).stringify?t.list(!0):b.notice.fail("browserNotSupported")})};b.status=new r("status",{start:function(){b.action.stopWebcam();b.nodes().controls.hide();b.nodes().actions.hide()},finish:function(){b.nodes().actions.show()},playWebcam:function(){}});b.storage=new function(){this.get=function(a){return localStorage.getItem(l.name+"."+a)};this.isset=function(a){return null!==b.storage.get(a)};this.key=function(a){return l.name+"."+a};this.remove=function(a){localStorage.removeItem(l.name+"."+a)};this.set=
function(a,b){localStorage.setItem(l.name+"."+a,b)}};b.timers={add:function(a,b,d,c){n[a]&&n[a].stop();var g=window["set"+d](function(){n[a]&&(n[a].count++,"Timeout"===d&&n[a].stop());$.js.run(c)},b);n[a]={count:0,id:g,stop:function(){window["clear"+d](g);delete n[a]}};return n[a]},get:function(a){return n[a]},clear:function(){$.js.each(n,function(a){a.stop()})},stop:function(a){(a=b.timers.get(a))&&a.stop()}};b.ticker=function(a){var b=a.requestAnimationFrame||a.webkitRequestAnimationFrame||a.mozRequestAnimationFrame||
a.oRequestAnimationFrame||a.msRequestAnimationFrame||function(b,d){return a.setTimeout(b,1E3/60)},d=a.cancelAnimationFrame||a.webkitCancelAnimationFrame||a.mozCancelAnimationFrame||a.oCancelAnimationFrame||a.msCancelAnimationFrame||a.clearTimeout;return function(a){function c(){e&&(f=b(function(){a(++h);c()}))}var f,e,h=0;this.start=function(){e=!0;c()};this.pause=function(){e=!1;d(f)}}}(window);-1!==location.search.indexOf("xdebug=")&&(w(),b.debug("api.init"));b.webcam=function(a){function f(a){a:{for(var c=
0;c<a.length;c++){var e=a[c];if(!1===e.active||!0===e.ended)b.event("badStream",e);else{a=e;break a}}g.on.error("noStream");a=void 0}if(a){a:{c=a;if("function"===typeof c.getVideoTracks)c=c.getVideoTracks();else if("function"===typeof c.getTracks)c=c.getTracks();else{c=g.on.error("cannotGetTracks");break a}e="noTrack";for(var d=0;d<c.length;d++){var f=c[d];if(/video/i.test(f.kind))if(f.muted)e="trackMuted";else if("ended"===f.readyState)e="trackEnded";else if(!1===f.enabled)e="trackDisabled";else{c=
f;break a}b.event("badTrack",f)}g.on.error(e);c=void 0}if(c)return g.stream=a,g.track=c,!0}}function d(a,b){if(b in a)for(a=a[b](),b=0;b<a.length;b++)a[b].stop()}function c(a){k=g.video=document.getElementById("webcam-stream");k.pause();var c=$(k).prop("autoplay",!0).prop("muted",!0).prop("volume",0).prop("src","");$.js.one(c,"loadedmetadata",function(){b.timers.add("play_webcam",l.timeouts.promise,"Timeout",function(){k.style.background="none";a:{var c=b.devices.selected();if(!c.data("label")){if(g.track.label){var e=
b.label(g.track);if(e){c.text(e).data("label",e);break a}}c.data("label",c.text())}}a()})});k.srcObject=g.stream;k.play()}var g=this;$.js.extend(g,a);var k;void 0===g.constraints.audio&&(g.constraints.audio=!1);g.constraints.video||(g.constraints.video={});!g.constraints.video.deviceId&&(a=b.devices.id())&&(g.constraints.video.deviceId={exact:a});this.apply_constraints=function(a,b,d){a=g.track.applyConstraints(a);a.then(function(){c(b)});a["catch"](function(){$.js.run(d)})};this.apply_maxres=function(a,
h){function e(a){if(l>a)return k+=l,l=a,d(),!0}function d(){var m=g.track.applyConstraints({frameRate:{min:h},width:{min:k}});m.then(function(){if(!e(100)&&!e(10)&&!e(1))var h=b.timers.add("apply_maxres",250,"Interval",function(){if(g.resolution()!==f||50<h.count)h.stop(),c(a)})});m["catch"](function(){k-=l;0<k?d():a()})}if(!b.devices.constraints().width||"function"!==typeof g.track.applyConstraints)return a();var f=g.resolution(),k=11E3,l=1E3;void 0===h&&(h=8);b.notice.loading("detectingMaxres");
d()};this.duration=function(){if(k)return k.currentTime||g.stream.currentTime||0};this.fullscreen=function(){return b.fullscreen.request(k)};this.play=function(){b.devices.query("getUserMedia",[g.constraints],{then:function(){$.js.run(g.on.init)},done:function(){f(arguments)&&c(function(){if(!g.playing())return g.on.error("videoPaused");if(32>k.videoWidth*k.videoHeight)return g.on.error("lowRes");b.event("status","stream");g.on.play(g)})},fail:function(a){g.on.error(a)}})};this.playing=function(){return k&&
!k.paused&&!k.ended&&0<g.duration()};this.resolution=function(a){if(k)return k.videoWidth+(a||"&times;")+k.videoHeight};this.inject_media=function(a){var c=$("<div/>").html(a.node).prependTo(a.wrapper);(function(){var b=$(a.node),c=b.clone().css({position:"absolute",maxWidth:"200px"});k.parentNode.insertBefore(c.get(0),k.nextSibling);setTimeout(function(){var a=b.offset();c.animate({left:a.left,top:a.top,width:0,height:0},500,function(){c.remove()})},20)})();if(a.name)c.prepend(a.name);else{var e=
a.wrapper.find(a.node.tagName).length;a.name=a.type+"-"+e}var d=a.name+"."+a.ext;c.append($("<a/>").prop({text:$.lang.get("media","actions","download"),href:"#"+d}).on("click",function(c){c.preventDefault();b.event("action","download"+a.type);a.downloader(function(a){y.download(d,a)})}));c.append($("<a/>").prop({text:$.lang.get("media","actions","remove"),href:"#"+d}).on("click",function(e){e.preventDefault();b.event("action","remove"+a.type);c.remove()}))};this.snapshot=function(a){var b={},c=a;
b.canvas=document.createElement("canvas");if(a){var e=a.width;a=a.height}else e=k.videoWidth,a=k.videoHeight,c=k;b.canvas.width=e;b.canvas.height=a;b.ctx=b.canvas.getContext("2d");b.ctx.drawImage(c,0,0,e,a);b.inject=function(a){var c=new Image;c.src=b.url("image/jpeg");g.inject_media({ext:"jpeg",name:a,node:c,type:"Photo",wrapper:l.nodes.snapshots,downloader:function(a){"function"===typeof b.canvas.toBlob?b.canvas.toBlob(a,"image/jpeg",1):a(c.src)}})};b.url=function(a){return b.canvas.toDataURL(a,
1)};return b};this.stop=function(){g.stream&&(d(g.stream,"getVideoTracks"),g.constraints.audio&&d(g.stream,"getAudioTracks"));k&&(k.srcObject=null,k.removeAttribute("src"),k.removeAttribute("style"));$.js.run(g.on.stop)}};b.xdebug=q||{};b.fps=function(a){function f(){var a={decoded:0,dropped:0},b;for(b in k.frames)for(var c in k.frames[b]){var d=k.frames[b][c]();d>a[b]&&(a[b]=d)}a.painted=a.decoded-a.dropped;return a}function d(){return{total_frames:f().painted,video_duration:a.duration()}}function c(a){var b=
window[a];b&&"function"===typeof b.now&&(k.speed[a+"FramesDelta"]=function(){var a=0,c=null;this.init=function(d){a=d.total_frames;c=b.now()};this.fps=function(d){var e=b.now()-c;return(d.total_frames-a)/e*1E3}})}var g=[],k={frames:{decoded:{},dropped:{}},speed:{durationTotal:function(){this.fps=function(a){return a.total_frames/a.video_duration}},framesDiff:function(){var a=0;this.init=function(b){a=b.total_frames};this.fps=function(b){b=b.total_frames;var c=b-a;a=b;return c}}}};(function(){function b(b,
c){c in a.video&&(k.frames[b][c]=function(){return a.video[c]})}b("decoded","webkitDecodedFrameCount");b("decoded","mozDecodedFrames");b("decoded","totalVideoFrames");b("decoded","presentedFrames");b("decoded","mozPaintedFrames");b("dropped","webkitDroppedFrameCount");"mozParsedFrames"in a.video&&"mozPresentedFrames"in a.video&&(k.frames.dropped.mozParsPresFrames=function(){return a.video.mozParsedFrames-a.video.mozPresentedFrames});if("function"===typeof a.video.getVideoPlaybackQuality){var c=function(b,
c){k.frames[b].getVideoPlaybackQuality=function(){return a.video.getVideoPlaybackQuality()[c]||0}};"object"===typeof a.video.getVideoPlaybackQuality()&&(c("decoded","totalVideoFrames"),c("dropped","droppedVideoFrames"))}})();c("Date");c("performance");this.frames=f;this.histogram=function(){for(var a=g.length,b={sum:0,size:a};a--;){var c=g[a];b.sum+=c;if(void 0===b.min||c<b.min)b.min=c;if(void 0===b.max||c>b.max)b.max=c}b.avg=b.sum/b.size;return b};this.history=function(){return g};this.stop=function(){b.timers.stop("fps_watch")};
this.watch=function(a){g=[];var c=[],e=d(),f;for(f in k.speed){var l=new k.speed[f];l.init&&l.init(e);c.push(l)}b.timers.add("fps_watch",1E3,"Interval",function(){for(var b=d(),e=0,f=0;f<c.length;f++){var h=c[f].fps(b);h>e&&(e=h)}g.push(e);60<g.length&&g.shift();a&&a(e)})}};return b});