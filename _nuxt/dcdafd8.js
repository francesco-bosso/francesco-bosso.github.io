(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{316:function(t,e,n){var content=n(329);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(65).default)("6d03950b",content,!0,{sourceMap:!1})},328:function(t,e,n){"use strict";n(316)},329:function(t,e,n){var o=n(64)(!1);o.push([t.i,".header-index[data-v-6be395e2]{font-weight:900;font-size:7vw}.center-div[data-v-6be395e2]{display:flex;align-items:center;justify-content:center;padding:0;margin:0}.margin-top[data-v-6be395e2]{margin-top:80px}@media screen and (max-width:1100px){.header-index[data-v-6be395e2]{font-size:3em}}@media screen and (max-width:375px){.header-index[data-v-6be395e2]{font-size:12vw}}@media screen and (max-width:991px){.margin-top[data-v-6be395e2]{margin-top:0}}.image[data-v-6be395e2]{padding:8px;height:400px}.img-fluid[data-v-6be395e2]{transition:.5s ease}.menu[data-v-6be395e2]{padding-bottom:6px;padding-top:6px}.row .menu:hover .img-fluid[data-v-6be395e2]{opacity:.3}.row .menu:hover .middle[data-v-6be395e2]{opacity:.9}.middle[data-v-6be395e2]{transition:.5s ease;opacity:0;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);text-align:center;color:rgba(0,0,0,.866)}@media screen and (max-width:992px){.middle[data-v-6be395e2]{color:rgba(0,0,0,.866);opacity:.9;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);text-align:center}.img-fluid[data-v-6be395e2]{opacity:.4}.center[data-v-6be395e2]{text-align:center}}.button[data-v-6be395e2]{padding:1rem 4rem;border-radius:100rem;background-color:#a65a3a;color:#fff;width:23rem;font-weight:600;transition:.5s}.button[data-v-6be395e2]:hover{width:25.5rem}.rotate[data-v-6be395e2]{transition:transform .8s ease-in-out}.rotate[data-v-6be395e2]:hover{transform:rotate(5deg)}",""]),t.exports=o},338:function(t,e,n){"use strict";n.r(e);n(26),n(66);var o={name:"IndexPage",data:function(){return{sections:{s1:{id:0,name:"Geospatial",image:"/homepage/geospatial.jpeg",col:7,path:"geospatial"},s2:{id:1,name:"Artificial Intelligence",image:"/homepage/artificialIntelligence.webp",col:5,path:"artificial-intelligence"},s3:{id:2,name:"Just Because",image:"/homepage/justBecause.jpeg",col:5,path:"just-because"},s4:{id:3,name:"About Mapflap",image:"/homepage/surrogatoMapflap.webp",col:7,path:"about-mapflap"}}}},head:function(){return{title:"Mapflap | Homepage",meta:[{hid:"descriptionHomepage",name:"description",content:"Homepage showing all possible sections of the site"},{hid:"keywordsHomepage",name:"keywords",content:["Homepage","Geospatial","Artificial Intelligence","Just Because","About Mapflap","CV"]}]}},mounted:function(){var text="Read more about Mapflap",i=0;!function t(){i<text.length&&(document.getElementById("demo").innerHTML+=text.charAt(i),i++,setTimeout(t,70))}()}},c=(n(328),n(25)),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"container mt-5"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md margin-top"},[e("h1",{staticClass:"header-index mb-4"},[t._v("Mapflap")]),t._v(" "),e("p",{staticClass:"snippet mb-4"},[t._v("\n        Hi, I'm Francesco. Nice to meet you and welcome to Mapflap! \n        Here you can find some info about myself and a selection of little \n        personal projects. Thanks for dropping by. 👾\n      ")]),t._v(" "),e("div",{staticClass:"center"},[e("NuxtLink",{attrs:{to:"about-mapflap"}},[e("div",{staticClass:"button btn typing",attrs:{id:"demo"}})])],1)]),t._v(" "),t._m(0)]),t._v(" "),e("div",{staticClass:"row mt-4 g-0"},[e("div",{class:"image col-sm-7 p-2 active position-relative menu"},[e("NuxtLink",{attrs:{to:"".concat(t.sections.s1.path)}},[e("img",{staticClass:"card-image img-fluid",attrs:{src:"".concat(t.sections.s1.image),alt:"".concat(t.sections.s1.name,"-image")}}),t._v(" "),e("div",{staticClass:"middle"},[e("h1",[t._v(t._s(t.sections.s1.name))])])])],1),t._v(" "),e("div",{class:"image col-sm-".concat(t.sections.s2.col," p-2 active position-relative menu")},[e("NuxtLink",{attrs:{to:"".concat(t.sections.s2.path)}},[e("img",{staticClass:"card-image img-fluid",attrs:{src:"".concat(t.sections.s2.image),alt:"".concat(t.sections.s2.name,"-image")}}),t._v(" "),e("div",{staticClass:"middle"},[e("h1",[t._v(t._s(t.sections.s2.name))])])])],1),t._v(" "),e("div",{class:"image col-sm-".concat(t.sections.s3.col," p-2 active position-relative menu")},[e("NuxtLink",{attrs:{to:"".concat(t.sections.s3.path)}},[e("img",{staticClass:"card-image img-fluid",attrs:{src:"".concat(t.sections.s3.image),alt:"".concat(t.sections.s3.name,"-image")}}),t._v(" "),e("div",{staticClass:"middle"},[e("h1",[t._v(t._s(t.sections.s3.name))])])])],1),t._v(" "),e("div",{class:"image col-sm-".concat(t.sections.s4.col," p-2 active position-relative menu")},[e("NuxtLink",{attrs:{to:"".concat(t.sections.s4.path)}},[e("img",{staticClass:"card-image img-fluid",attrs:{src:"".concat(t.sections.s4.image),alt:"".concat(t.sections.s4.name,"-image")}}),t._v(" "),e("div",{staticClass:"middle"},[e("h1",[t._v(t._s(t.sections.s4.name))])])])],1)])])}),[function(){var t=this._self._c;return t("div",{staticClass:"col-md center-div"},[t("img",{staticClass:"rotate",attrs:{height:"500px",src:"/homepage/face.png",alt:"Francesco Memoji"}})])}],!1,null,"6be395e2",null);e.default=component.exports}}]);