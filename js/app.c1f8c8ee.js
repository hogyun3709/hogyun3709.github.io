(function(t){function e(e){for(var s,o,i=e[0],a=e[1],u=e[2],d=0,f=[];d<i.length;d++)o=i[d],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&f.push(r[o][0]),r[o]=0;for(s in a)Object.prototype.hasOwnProperty.call(a,s)&&(t[s]=a[s]);l&&l(e);while(f.length)f.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],s=!0,i=1;i<n.length;i++){var a=n[i];0!==r[a]&&(s=!1)}s&&(c.splice(e--,1),t=o(o.s=n[0]))}return t}var s={},r={app:0},c=[];function o(e){if(s[e])return s[e].exports;var n=s[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=s,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(n,s,function(e){return t[e]}.bind(null,s));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],a=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var l=a;c.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"13bf":function(t,e,n){"use strict";n("7bac")},1752:function(t,e,n){},"1f48":function(t,e,n){},2114:function(t,e,n){},2976:function(t,e,n){"use strict";n("2114")},"2cd5":function(t,e,n){},3145:function(t,e,n){"use strict";n("5f28")},"3f2b":function(t,e,n){"use strict";n("1f48")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var s=n("7a23");function r(t,e,n,r,c,o){var i=Object(s["x"])("router-view");return Object(s["q"])(),Object(s["e"])("div",null,[Object(s["h"])(i)])}var c={name:"App",components:{}};n("3f2b");c.render=r;var o=c,i=(n("4e82"),n("5502")),a=[{rice:["간장 계란밥","김밥","비빔밥","참치마요 덮밥","김치 볶음밥","제육덮밥","오므라이스","짜장밥","새우볶음밥","낚지 볶음밥"],noodle:["라면","스파겟티","비빔냉면","물냉면","칼국수","콩국수","우동","볶음우동","잔치국수","짜장면","짬뽕","메밀"],soup:["육개장","떡국","감자탕","갈비탕","삼계탕","돼지국밥","소고기 무국","된장찌개","김치찌개","마라탕","만두국","미역국"],japvet:["초밥","치킨 가라아게","돈캇츠","오니기리","규동","야끼소바","소바","우동","라멘","카레","쌀국수","분짜"],dessert:["빙수","아이스크림","도넛","베이글 크림치즈","떡볶이","마카롱","케이크","샌드위치","토스트","크로플","스콘","마늘빵"],meatchicken:["찜닭","돼지고기","양고기","소고기","오리고기","후라이드 치킨","양념치킨","간장치킨","뿌링클","마늘치킨닭"],custom:[]}],u=Object(i["a"])({state:function(){return{menuData:a,setMenu:"",step:0,menuKor:""}},mutations:{updateUserInput:function(t,e){t.userInput=e},setRice:function(){this.state.setMenu=[],this.state.setMenu=this.state.menuData[0].rice.sort((function(){return.5-Math.random()})),this.state.step=1,this.state.menuKor="밥"},setNoodle:function(){this.state.setMenu=[],this.state.setMenu=this.state.menuData[0].noodle.sort((function(){return.5-Math.random()})),this.state.step=2,this.state.menuKor="면"},setSoup:function(){this.state.setMenu=[],this.state.setMenu=this.state.menuData[0].soup.sort((function(){return.5-Math.random()})),this.state.step=3,this.state.menuKor="국"},setJapvet:function(){this.state.setMenu=[],this.state.setMenu=this.state.menuData[0].japvet.sort((function(){return.5-Math.random()})),this.state.step=4,this.state.menuKor="일식&베트남식"},setDessert:function(){this.state.setMenu=[],this.state.setMenu=this.state.menuData[0].dessert.sort((function(){return.5-Math.random()})),this.state.step=5,this.state.menuKor="디저트"},setMeatchicken:function(){this.state.setMenu=[],this.state.setMenu=this.state.menuData[0].meatchicken.sort((function(){return.5-Math.random()})),this.state.step=6,this.state.menuKor="고기&치킨"},setCustom:function(){this.state.setMenu=[],this.state.setMenu=this.state.menuData[0].custom.sort((function(){return.5-Math.random()})),this.state.step=7,this.state.menuKor="직접 골라서"}}}),l=u,d=n("6c02"),f=Object(s["g"])("> ");function h(t,e,n,r,c,o){var i=Object(s["x"])("Navbar"),a=Object(s["x"])("Menu"),u=Object(s["x"])("Roulette");return Object(s["q"])(),Object(s["e"])("div",null,[Object(s["h"])(i),Object(s["h"])(a,{menus:c.menuData},null,8,["menus"]),Object(s["h"])(u,{menus:c.menuData},null,8,["menus"]),f])}var b={class:"container"},m=Object(s["h"])("div",{class:"arrow"},null,-1),p={class:"roulette"},v={class:"fill fill_1"},O={class:"content"},j={class:"fill fill_2"},g={class:"content"},k={class:"fill fill_3"},w={class:"content"},M={class:"fill fill_4"},T={class:"content"},y={class:"fill fill_5"},D={class:"content"},_={class:"fill fill_6"},C={class:"content"},R={class:"fill fill_7"},$={class:"content"},A={class:"fill fill_8"},E={class:"content"},x=Object(s["h"])("div",{class:"line line_1"},null,-1),I=Object(s["h"])("div",{class:"line line_2"},null,-1),U=Object(s["h"])("div",{class:"line line_3"},null,-1),S=Object(s["h"])("div",{class:"line line_4"},null,-1),q={key:0},P={key:1},L={key:2,class:"pd-sm"},z=Object(s["h"])("i",{class:"fas fa-plus"},null,-1),K=Object(s["h"])("i",{class:"fas fa-redo"},null,-1);function N(t,e,n,r,c,o){return Object(s["q"])(),Object(s["e"])("div",b,[m,Object(s["h"])("div",p,[Object(s["h"])("div",v,[Object(s["h"])("div",O,Object(s["z"])(c.ROULETTE_DATA[0]),1)]),Object(s["h"])("div",j,[Object(s["h"])("div",g,Object(s["z"])(c.ROULETTE_DATA[1]),1)]),Object(s["h"])("div",k,[Object(s["h"])("div",w,Object(s["z"])(c.ROULETTE_DATA[2]),1)]),Object(s["h"])("div",M,[Object(s["h"])("div",T,Object(s["z"])(c.ROULETTE_DATA[3]),1)]),Object(s["h"])("div",y,[Object(s["h"])("div",D,Object(s["z"])(c.ROULETTE_DATA[4]),1)]),Object(s["h"])("div",_,[Object(s["h"])("div",C,Object(s["z"])(c.ROULETTE_DATA[5]),1)]),Object(s["h"])("div",R,[Object(s["h"])("div",$,Object(s["z"])(c.ROULETTE_DATA[6]),1)]),Object(s["h"])("div",A,[Object(s["h"])("div",E,Object(s["z"])(c.ROULETTE_DATA[7]),1)]),x,I,U,S]),0==t.$store.state.step?(Object(s["q"])(),Object(s["e"])("div",q,[Object(s["h"])("button",{class:"trigger",onClick:e[1]||(e[1]=function(){return o.onClickTigger&&o.onClickTigger.apply(o,arguments)})}," 메뉴를 선택해주세요! ")])):t.$store.state.step<=7?(Object(s["q"])(),Object(s["e"])("div",P,[Object(s["h"])("button",{class:"trigger",onClick:e[2]||(e[2]=function(){return o.onClickTigger&&o.onClickTigger.apply(o,arguments)})},Object(s["z"])(t.$store.state.menuKor)+" 먹을래요! ",1)])):Object(s["f"])("",!0),7==t.$store.state.step?(Object(s["q"])(),Object(s["e"])("div",L,[Object(s["D"])(Object(s["h"])("input",{class:"input is-info is-small",placeholder:"메뉴를 기입해주세요","onUpdate:modelValue":e[3]||(e[3]=function(t){return o.userInput=t}),ref:"menuFocus"},null,512),[[s["B"],o.userInput]]),Object(s["h"])("button",{class:"button is-small is-primary is-outlined",onClick:e[4]||(e[4]=function(){return o.addUserInput&&o.addUserInput.apply(o,arguments)})},[z]),Object(s["h"])("button",{class:"button is-small is-info is-outlined",onClick:e[5]||(e[5]=function(){return o.clearUserInput&&o.clearUserInput.apply(o,arguments)})},[K])])):Object(s["f"])("",!0)])}var F={name:"Roulette",data:function(){return{ROULETTE_DATA:[],imeInput:[]}},updated:function(){this.ROULETTE_DATA=this.$store.state.setMenu},computed:{userInput:{get:function(){return this.$store.state.userInput},set:function(t){this.$store.commit("updateUserInput",t)}}},methods:{clearUserInput:function(){this.$store.state.menuData[0].custom=[],this.$store.state.setMenu=[],this.ROULETTE_DATA=[],this.$refs.menuFocus.focus(),console.log(this.$store.state.menuData[0].custom),console.log(this.$store.state.setMenu)},addUserInput:function(){this.$store.state.setMenu.push(this.userInput),this.$store.state.menuData[0].custom=this.$store.state.setMenu,this.userInput="",this.$refs.menuFocus.focus(),console.log(this.$store.state.menuData[0].custom),console.log(this.$store.state.setMenu)},onClickTigger:function(){var t={fill:"forwards",duration:2e3,easing:"ease-in-out"},e=document.querySelector(".roulette"),n=Math.floor(7*Math.random()),s=22.5*(2*(1-n)+1),r=7200+s,c=[{transform:"rotate(0deg)"},{transform:"rotate(".concat(r,"deg)")}];e.animate(c,t)}}};n("8010");F.render=N;var J=F,B={class:"topnav"},G=Object(s["h"])("p",{class:"active"},"오늘 뭐 먹지?",-1);function H(t,e,n,r,c,o){return Object(s["q"])(),Object(s["e"])("div",B,[G])}var V={};n("3145");V.render=H;var W=V,Y={class:"menu-container"};function Q(t,e,n,r,c,o){return Object(s["q"])(),Object(s["e"])("div",Y,[Object(s["h"])("div",{onClick:e[1]||(e[1]=function(e){return t.$store.commit("setRice")}),class:"menu-item"},"밥"),Object(s["h"])("div",{onClick:e[2]||(e[2]=function(e){return t.$store.commit("setNoodle")}),class:"menu-item"},"면"),Object(s["h"])("div",{onClick:e[3]||(e[3]=function(e){return t.$store.commit("setSoup")}),class:"menu-item"},"국"),Object(s["h"])("div",{onClick:e[4]||(e[4]=function(e){return t.$store.commit("setJapvet")}),class:"menu-item"}," 일식 & 베트남 "),Object(s["h"])("div",{onClick:e[5]||(e[5]=function(e){return t.$store.commit("setDessert")}),class:"menu-item"},"디저트"),Object(s["h"])("div",{onClick:e[6]||(e[6]=function(e){return t.$store.commit("setMeatchicken")}),class:"menu-item"}," 고기 & 치킨 "),Object(s["h"])("div",{onClick:e[7]||(e[7]=function(e){return t.$store.commit("setCustom")}),class:"menu-item"},"DIY")])}var X={props:{menus:Object},methods:{}};n("77cf");X.render=Q;var Z=X,tt={name:"Home",components:{Roulette:J,Navbar:W,Menu:Z},data:function(){return{menuData:a}}};tt.render=h;var et=tt,nt=Object(s["E"])("data-v-a4f508f2");Object(s["t"])("data-v-a4f508f2");var st={class:"wrapper"},rt={style:{display:"none"},ref:"canva"},ct={class:"photo-button-container"};Object(s["r"])();var ot=nt((function(t,e,n,r,c,o){var i=Object(s["x"])("b-icon"),a=Object(s["x"])("PhotosGallery");return Object(s["q"])(),Object(s["e"])("div",st,[Object(s["h"])("video",{class:["video","user"===c.facingMode?"front":""],ref:"video"},null,2),Object(s["h"])("canvas",rt,null,512),c.videoDevices.length>1?(Object(s["q"])(),Object(s["e"])("button",{key:0,class:"button is-rounded is-outlined switch-button",onClick:e[1]||(e[1]=function(){return o.switchCamera&&o.switchCamera.apply(o,arguments)}),disabled:c.switchingCamera},[Object(s["h"])(i,{pack:"fas",icon:"sync-alt"})],8,["disabled"])):Object(s["f"])("",!0),Object(s["h"])("div",ct,[Object(s["h"])("button",{class:"button photo-button",onClick:e[2]||(e[2]=function(){return o.TakePhoto&&o.TakePhoto.apply(o,arguments)})},[Object(s["h"])(i,{pack:"fas",icon:"camera"})])]),Object(s["h"])(a,{class:"gallery",photos:c.photos},null,8,["photos"])])})),it=n("1da1"),at=(n("159b"),n("4de4"),n("96cf"),Object(s["E"])("data-v-50a442f7")),ut=at((function(t,e,n,r,c,o){var i=Object(s["x"])("Photo");return Object(s["q"])(),Object(s["e"])(s["b"],{class:"photos-container",name:"list-animated"},{default:at((function(){return[(Object(s["q"])(!0),Object(s["e"])(s["a"],null,Object(s["w"])(n.photos,(function(t){return Object(s["q"])(),Object(s["e"])(i,{class:"list-animated-item",key:t.id,src:t.src},null,8,["src"])})),128))]})),_:1})})),lt=Object(s["E"])("data-v-4e9ddb58"),dt=lt((function(t,e,n,r,c,o){return Object(s["q"])(),Object(s["e"])("img",{src:n.src},null,8,["src"])})),ft={props:{src:{type:String,default:null}}};n("64db");ft.render=dt,ft.__scopeId="data-v-4e9ddb58";var ht=ft,bt={components:{Photo:ht},props:{photos:{type:Array,default:function(){return[]}}}};n("2976");bt.render=ut,bt.__scopeId="data-v-50a442f7";var mt=bt,pt={components:{PhotosGallery:mt},data:function(){return{photos:[],mediaStream:null,videoDevices:[],facingMode:"environment",counter:0,switchingCamera:!1}},methods:{StartRecording:function(t){var e=this;return Object(it["a"])(regeneratorRuntime.mark((function n(){var s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.facingMode=t,s=e.$refs.video,n.next=4,navigator.mediaDevices.getUserMedia({video:{facingMode:t}});case 4:return e.mediaStream=n.sent,s.srcObject=e.mediaStream,n.next=8,s.play();case 8:return n.abrupt("return",n.sent);case 9:case"end":return n.stop()}}),n)})))()},TakePhoto:function(){var t=this;return Object(it["a"])(regeneratorRuntime.mark((function e(){var n,s,r,c,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n=t.$refs.video,s=t.$refs.canva,r=n.videoWidth,c=n.videoHeight,s.width=r,s.height=c,o=s.getContext("2d"),o.save(),"user"===t.facingMode?(o.scale(-1,1),o.drawImage(n,-1*r,0,r,c)):o.drawImage(n,0,0),o.restore(),t.photos.push({id:t.counter++,src:s.toDataURL("image/png")});case 11:case"end":return e.stop()}}),e)})))()},switchCamera:function(){var t=this;return Object(it["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.switchingCamera=!0,n=t.mediaStream.getVideoTracks(),n.forEach((function(t){t.stop()})),e.next=5,t.StartRecording("environment"===t.facingMode?"user":"environment");case 5:t.switchingCamera=!1;case 6:case"end":return e.stop()}}),e)})))()}},mounted:function(){var t=this;return Object(it["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,navigator.mediaDevices.enumerateDevices();case 2:return n=e.sent,t.videoDevices=n.filter((function(t){return"videoinput"===t.kind})),e.next=6,t.StartRecording(1===t.videoDevices.length?"user":"environment");case 6:case"end":return e.stop()}}),e)})))()}};n("13bf");pt.render=ot,pt.__scopeId="data-v-a4f508f2";var vt=pt,Ot=[{path:"/",component:et},{path:"/camera",component:vt}],jt=Object(d["a"])({history:Object(d["b"])(),routes:Ot}),gt=jt,kt=n("9483");Object(kt["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var wt=Object(s["d"])(o);wt.use(l).use(gt).mount("#app")},"5f28":function(t,e,n){},"64db":function(t,e,n){"use strict";n("2cd5")},"77cf":function(t,e,n){"use strict";n("1752")},"7bac":function(t,e,n){},8010:function(t,e,n){"use strict";n("e06e")},e06e:function(t,e,n){}});
//# sourceMappingURL=app.c1f8c8ee.js.map