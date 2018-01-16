webpackJsonp([1],{NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s("7+uW"),r={name:"course-component",props:["name","type","row","col","len"],computed:{overlayStyle:function(){return{left:(60*parseInt(this.col)).toString()+"px",top:(15*parseInt(this.row)-8).toString()+"px",height:(15*parseInt(this.len)-1).toString()+"px",width:"59px",fontSize:"8px",backgroundColor:"#ADD8E6",position:"absolute"}}}},a={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("p",{style:t.overlayStyle},[t._v("\n  "+t._s(t.name)+" ("+t._s(t.type)+")\n")])},staticRenderFns:[]},o=s("VU/8")(r,a,!1,null,null,null).exports,i=s("PJh5"),u=s.n(i),c=["8:00","","9:00","","10:00","","11:00","","12:00","","1:00","","2:00","","3:00","","4:00","","5:00","","06:00",""],l={name:"schedule-component",props:["term","sun","mon","tue","wed","thu","fri","sat"],data:function(){return{times:c}},methods:{timeBetween:function(t,e){var s=u()(t.toString(),"HH:mm");return u()(e.toString(),"HH:mm").diff(s,"minutes")/30},timeFromStart:function(t){return this.timeBetween("08:00",t)+1}},components:{CourseComponent:o}},d={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"schedule"},[t._l(t.mon,function(e){return s("course-component",{key:e.id,attrs:{name:e.name,type:e.type,row:t.timeFromStart(e.start),col:1,len:t.timeBetween(e.start,e.end)}})}),t._v(" "),t._l(t.tue,function(e){return s("course-component",{key:e.id,attrs:{name:e.name,type:e.type,row:t.timeFromStart(e.start),col:2,len:t.timeBetween(e.start,e.end)}})}),t._v(" "),t._l(t.wed,function(e){return s("course-component",{key:e.id,attrs:{name:e.name,type:e.type,row:t.timeFromStart(e.start),col:3,len:t.timeBetween(e.start,e.end)}})}),t._v(" "),t._l(t.thu,function(e){return s("course-component",{key:e.id,attrs:{name:e.name,type:e.type,row:t.timeFromStart(e.start),col:4,len:t.timeBetween(e.start,e.end)}})}),t._v(" "),t._l(t.fri,function(e){return s("course-component",{key:e.id,attrs:{name:e.name,type:e.type,row:t.timeFromStart(e.start),col:5,len:t.timeBetween(e.start,e.end)}})}),t._v(" "),s("div",{staticClass:"col"},[s("div",{staticClass:"day term"},[t._v("Term "+t._s(t.term))]),t._v(" "),t._l(t.times,function(e){return s("div",{key:e.id,staticClass:"day"},[t._v(t._s(e))])})],2),t._v(" "),s("div",{staticClass:"col"},[s("div",{staticClass:"day"},[t._v("MON")]),t._v(" "),t._l(t.times,function(t){return s("div",{key:t.id,staticClass:"day"})})],2),t._v(" "),s("div",{staticClass:"col"},[s("div",{staticClass:"day"},[t._v("TUE")]),t._v(" "),t._l(t.times,function(t){return s("div",{key:t.id,staticClass:"day"})})],2),t._v(" "),s("div",{staticClass:"col"},[s("div",{staticClass:"day"},[t._v("WED")]),t._v(" "),t._l(t.times,function(t){return s("div",{key:t.id,staticClass:"day"})})],2),t._v(" "),s("div",{staticClass:"col"},[s("div",{staticClass:"day"},[t._v("THU")]),t._v(" "),t._l(t.times,function(t){return s("div",{key:t.id,staticClass:"day"})})],2),t._v(" "),s("div",{staticClass:"col"},[s("div",{staticClass:"day"},[t._v("FRI")]),t._v(" "),t._l(t.times,function(t){return s("div",{key:t.id,staticClass:"day"})})],2)],2)},staticRenderFns:[]};var m={BASE:"https://sheltered-taiga-32349.herokuapp.com",SCHEDULES_API:"/schedules",schedules:[],dayStrToIndex:function(t){switch(t){case"Sun":return 0;case"Mon":return 1;case"Tue":return 2;case"Wed":return 3;case"Thu":return 4;case"Fri":return 5;case"Sat":return 6;default:throw Error(t+" is not a valid day!")}},intTimeToStr:function(t){var e=t.toString(),s=e.length-2;return u()({hours:parseInt(e.substring(0,s)),minutes:parseInt(e.substring(s))}).format("HH:mm")},formatSchedule:function(t){for(var e=[[[],[],[],[],[],[],[]],[[],[],[],[],[],[],[]]],s=t.courses,n=0;n<s.length;n++)for(var r=s[n].name,a=s[n].sessions,o=0;o<a.length;o++){var i=a[o],u={name:r,type:i.activity,start:this.intTimeToStr(i.start),end:this.intTimeToStr(i.end)};switch(i.term){case"1":e[0][this.dayStrToIndex(i.day)].push(u);break;case"2":e[1][this.dayStrToIndex(i.day)].push(u);break;case"1-2":e[0][this.dayStrToIndex(i.day)].push(u),e[1][this.dayStrToIndex(i.day)].push(u);break;default:throw Error(i.term+" not recognized!")}}return e},create:function(t,e){var s=t.join(",");this.schedules=[],fetch(this.BASE+this.SCHEDULES_API+"?courses="+s,{method:"GET"}).then(function(t){return t.json()}).then(function(t){var s=t.body;m.schedules=s.map(function(t){return m.formatSchedule(t)}),e.call()})}},j={name:"App",components:{ScheduleComponent:s("VU/8")(l,d,!1,function(t){s("dPok")},"data-v-0fc1b895",null).exports},data:function(){return{inputCourses:[{name:""}],loading:!1,schedules:[]}},methods:{add:function(t){20!==this.inputCourses.length&&this.inputCourses.splice(t+1,0,{name:""})},remove:function(t){this.inputCourses.length>1&&this.inputCourses.splice(t,1)},backspace:function(t,e){""===t&&this.remove(e)},generateSchedule:function(){this.loading=!0;var t=this.inputCourses.filter(function(t){return 0!==t.name.length}).map(function(t){return t.name.toUpperCase()});this.schedules=[];var e=this;m.create(t,function(){e.schedules=m.schedules,e.loading=!1})}}},v={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("h1",[t._v("UBC Course Scheduler")]),t._v(" "),s("div",[s("div",[t._v("Enter your courses here (e.g. CPSC 110)")]),t._v(" "),s("div",[t._l(t.inputCourses,function(e,n){return s("div",{key:e.id},[s("button",{on:{click:t.add}},[t._v("+")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"c.name"}],attrs:{type:"text"},domProps:{value:e.name},on:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.add(n)},input:function(s){s.target.composing||t.$set(e,"name",s.target.value)}}}),t._v(" "),s("button",{on:{click:function(e){t.remove(n)}}},[t._v("x")])])}),t._v(" "),s("button",{on:{click:function(e){t.generateSchedule()}}},[t._v("Generate")])],2)]),t._v(" "),t.loading?s("div",[t._v("LOADING")]):t._e(),t._v(" "),s("div",t._l(t.schedules,function(e,n){return s("div",{key:e.id},[s("h3",[t._v("Schedule "+t._s(n+1))]),t._v(" "),s("schedule-component",{attrs:{term:1,sun:e[0][0],mon:e[0][1],tue:e[0][2],wed:e[0][3],thu:e[0][4],fri:e[0][5],sat:e[0][6]}}),t._v(" "),s("schedule-component",{attrs:{term:2,sun:e[1][0],mon:e[1][1],tue:e[1][2],wed:e[1][3],thu:e[1][4],fri:e[1][5],sat:e[1][6]}})],1)}))])},staticRenderFns:[]};var h=s("VU/8")(j,v,!1,function(t){s("a0B5")},null,null).exports;n.a.config.productionTip=!1,new n.a({el:"#app",components:{App:h},template:"<App/>"})},a0B5:function(t,e){},dPok:function(t,e){},uslO:function(t,e,s){var n={"./af":"3CJN","./af.js":"3CJN","./ar":"3MVc","./ar-dz":"tkWw","./ar-dz.js":"tkWw","./ar-kw":"j8cJ","./ar-kw.js":"j8cJ","./ar-ly":"wPpW","./ar-ly.js":"wPpW","./ar-ma":"dURR","./ar-ma.js":"dURR","./ar-sa":"7OnE","./ar-sa.js":"7OnE","./ar-tn":"BEem","./ar-tn.js":"BEem","./ar.js":"3MVc","./az":"eHwN","./az.js":"eHwN","./be":"3hfc","./be.js":"3hfc","./bg":"lOED","./bg.js":"lOED","./bm":"hng5","./bm.js":"hng5","./bn":"aM0x","./bn.js":"aM0x","./bo":"w2Hs","./bo.js":"w2Hs","./br":"OSsP","./br.js":"OSsP","./bs":"aqvp","./bs.js":"aqvp","./ca":"wIgY","./ca.js":"wIgY","./cs":"ssxj","./cs.js":"ssxj","./cv":"N3vo","./cv.js":"N3vo","./cy":"ZFGz","./cy.js":"ZFGz","./da":"YBA/","./da.js":"YBA/","./de":"DOkx","./de-at":"8v14","./de-at.js":"8v14","./de-ch":"Frex","./de-ch.js":"Frex","./de.js":"DOkx","./dv":"rIuo","./dv.js":"rIuo","./el":"CFqe","./el.js":"CFqe","./en-au":"Sjoy","./en-au.js":"Sjoy","./en-ca":"Tqun","./en-ca.js":"Tqun","./en-gb":"hPuz","./en-gb.js":"hPuz","./en-ie":"ALEw","./en-ie.js":"ALEw","./en-nz":"dyB6","./en-nz.js":"dyB6","./eo":"Nd3h","./eo.js":"Nd3h","./es":"LT9G","./es-do":"7MHZ","./es-do.js":"7MHZ","./es-us":"INcR","./es-us.js":"INcR","./es.js":"LT9G","./et":"XlWM","./et.js":"XlWM","./eu":"sqLM","./eu.js":"sqLM","./fa":"2pmY","./fa.js":"2pmY","./fi":"nS2h","./fi.js":"nS2h","./fo":"OVPi","./fo.js":"OVPi","./fr":"tzHd","./fr-ca":"bXQP","./fr-ca.js":"bXQP","./fr-ch":"VK9h","./fr-ch.js":"VK9h","./fr.js":"tzHd","./fy":"g7KF","./fy.js":"g7KF","./gd":"nLOz","./gd.js":"nLOz","./gl":"FuaP","./gl.js":"FuaP","./gom-latn":"+27R","./gom-latn.js":"+27R","./gu":"rtsW","./gu.js":"rtsW","./he":"Nzt2","./he.js":"Nzt2","./hi":"ETHv","./hi.js":"ETHv","./hr":"V4qH","./hr.js":"V4qH","./hu":"xne+","./hu.js":"xne+","./hy-am":"GrS7","./hy-am.js":"GrS7","./id":"yRTJ","./id.js":"yRTJ","./is":"upln","./is.js":"upln","./it":"FKXc","./it.js":"FKXc","./ja":"ORgI","./ja.js":"ORgI","./jv":"JwiF","./jv.js":"JwiF","./ka":"RnJI","./ka.js":"RnJI","./kk":"j+vx","./kk.js":"j+vx","./km":"5j66","./km.js":"5j66","./kn":"gEQe","./kn.js":"gEQe","./ko":"eBB/","./ko.js":"eBB/","./ky":"6cf8","./ky.js":"6cf8","./lb":"z3hR","./lb.js":"z3hR","./lo":"nE8X","./lo.js":"nE8X","./lt":"/6P1","./lt.js":"/6P1","./lv":"jxEH","./lv.js":"jxEH","./me":"svD2","./me.js":"svD2","./mi":"gEU3","./mi.js":"gEU3","./mk":"Ab7C","./mk.js":"Ab7C","./ml":"oo1B","./ml.js":"oo1B","./mr":"5vPg","./mr.js":"5vPg","./ms":"ooba","./ms-my":"G++c","./ms-my.js":"G++c","./ms.js":"ooba","./mt":"oCzW","./mt.js":"oCzW","./my":"F+2e","./my.js":"F+2e","./nb":"FlzV","./nb.js":"FlzV","./ne":"/mhn","./ne.js":"/mhn","./nl":"3K28","./nl-be":"Bp2f","./nl-be.js":"Bp2f","./nl.js":"3K28","./nn":"C7av","./nn.js":"C7av","./pa-in":"pfs9","./pa-in.js":"pfs9","./pl":"7LV+","./pl.js":"7LV+","./pt":"ZoSI","./pt-br":"AoDM","./pt-br.js":"AoDM","./pt.js":"ZoSI","./ro":"wT5f","./ro.js":"wT5f","./ru":"ulq9","./ru.js":"ulq9","./sd":"fW1y","./sd.js":"fW1y","./se":"5Omq","./se.js":"5Omq","./si":"Lgqo","./si.js":"Lgqo","./sk":"OUMt","./sk.js":"OUMt","./sl":"2s1U","./sl.js":"2s1U","./sq":"V0td","./sq.js":"V0td","./sr":"f4W3","./sr-cyrl":"c1x4","./sr-cyrl.js":"c1x4","./sr.js":"f4W3","./ss":"7Q8x","./ss.js":"7Q8x","./sv":"Fpqq","./sv.js":"Fpqq","./sw":"DSXN","./sw.js":"DSXN","./ta":"+7/x","./ta.js":"+7/x","./te":"Nlnz","./te.js":"Nlnz","./tet":"gUgh","./tet.js":"gUgh","./th":"XzD+","./th.js":"XzD+","./tl-ph":"3LKG","./tl-ph.js":"3LKG","./tlh":"m7yE","./tlh.js":"m7yE","./tr":"k+5o","./tr.js":"k+5o","./tzl":"iNtv","./tzl.js":"iNtv","./tzm":"FRPF","./tzm-latn":"krPU","./tzm-latn.js":"krPU","./tzm.js":"FRPF","./uk":"ntHu","./uk.js":"ntHu","./ur":"uSe8","./ur.js":"uSe8","./uz":"XU1s","./uz-latn":"/bsm","./uz-latn.js":"/bsm","./uz.js":"XU1s","./vi":"0X8Q","./vi.js":"0X8Q","./x-pseudo":"e/KL","./x-pseudo.js":"e/KL","./yo":"YXlc","./yo.js":"YXlc","./zh-cn":"Vz2w","./zh-cn.js":"Vz2w","./zh-hk":"ZUyn","./zh-hk.js":"ZUyn","./zh-tw":"BbgG","./zh-tw.js":"BbgG"};function r(t){return s(a(t))}function a(t){var e=n[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}r.keys=function(){return Object.keys(n)},r.resolve=a,t.exports=r,r.id="uslO"}},["NHnr"]);
//# sourceMappingURL=app.4a70c24ed61f71578bf4.js.map