webpackJsonp([1],{"/Fw9":function(e,t,a){"use strict";var i=a("S1sr"),o=a("/set"),s=!1;var r=function(e){s||a("rX/q")},n=a("VU/8")(i.a,o.a,!1,r,null,null);n.options.__file="components/PortfolioItem.vue",t.a=n.exports},"/set":function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{class:e.classObject,attrs:{"data-myorder":"order"}},[a("div",{staticClass:"single-work"},[a("img",{attrs:{src:e.image,alt:"#"}}),a("div",{staticClass:"overlay"},[a("h3",[e._v(e._s(e.title))]),a("a",{attrs:{href:"#",type:"button","data-toggle":"modal","data-target":"#myModal"+e.order}},[a("i",{staticClass:"fa fa-search-plus"})]),a("div",{staticClass:"modal fade",attrs:{id:"myModal"+e.order,role:"dialog"}},[a("div",{staticClass:"modal-dialog"},[a("div",{staticClass:"modal-content text-center"},[a("div",{staticClass:"modal-header"},[a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal"}},[e._v("×")]),a("h4",[e._v(e._s(e.title))])]),a("div",{staticClass:"col-md-12"},[a("div",{staticClass:"modal-body col-md-8 col-md-offset-2"},[e.video?a("no-ssr",[a("youtube",{attrs:{"video-id":e.videoId}})],1):a("img",{attrs:{src:e.image,alt:"#"}}),a("ul",{staticClass:"list-inline"},[e.video?e._e():a("li",[a("a",{attrs:{href:e.url,target:"_blank"}},[e._v(e._s(e.url))])]),a("li",[e._v("Worked on "+e._s(e.period))]),a("li",[e._v("Technology: "+e._s(e.technology))])]),a("no-ssr",[a("p",{domProps:{innerHTML:e._s(e.description)}})])],1)]),e._m(0)])])])])])])};i._withStripped=!0;var o={render:i,staticRenderFns:[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-default",attrs:{type:"button","data-dismiss":"modal"}},[e._v("Close "),a("i",{staticClass:"fa fa-times"})])])}]};t.a=o},"21Rd":function(e,t,a){"use strict";var i=a("/Fw9"),o=a("rXqi");t.a={components:{PortfolioItem:i.a},data:function(){return{projects:o.a}}}},BIBb:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a("21Rd"),o=a("vcWJ"),s=!1;var r=function(e){s||a("GUvh")},n=a("VU/8")(i.a,o.a,!1,r,null,null);n.options.__file="pages/Portfolio.vue",t.default=n.exports},GUvh:function(e,t,a){var i=a("Q8DB");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);a("rjj0")("7981e7ac",i,!1)},Q8DB:function(e,t,a){(e.exports=a("FZ+f")(!1)).push([e.i,"",""])},S1sr:function(e,t,a){"use strict";var i=a("bOdI"),o=a.n(i),s=a("5/be");a.n(s);t.a={name:"PortfolioItem",props:["title","category","image","description","url","period","order","technology","video"],data:function(){var e;return{classObject:(e={"col-md-4":!0,"col-sm-6":!0,mix:!0},o()(e,this.category,!0),o()(e,"all",!0),e)}},computed:{videoId:function(){return Object(s.getIdFromURL)(this.video)}}}},bOdI:function(e,t,a){"use strict";t.__esModule=!0;var i,o=a("C4MV"),s=(i=o)&&i.__esModule?i:{default:i};t.default=function(e,t,a){return t in e?(0,s.default)(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}},lruM:function(e,t,a){(e.exports=a("FZ+f")(!1)).push([e.i,"",""])},"rX/q":function(e,t,a){var i=a("lruM");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);a("rjj0")("e91f6d58",i,!1)},rXqi:function(e,t,a){"use strict";a.d(t,"b",function(){return i});var i=[{title:"Liszt - Waldesrauschen",description:"<p>Piano has always been my favorite hobby. I have been playing the piano and receiving trainings for about 15 years. I enjoying polishing my skills and listening to harmonius music  flowing out of my fingers. </p><p>This is me playing  Liszt&#39;s famous piece <em>Waldesrauschen</em> in Baisi Piano Store, Harbin, China.</p>",image:"img/piano-performance.png",video:"https://www.youtube.com/watch?v=mClh6Ly0fQE&t=28s"},{title:"Unity of Opposites",description:"<p>A computer music composition for experiment.  Ancient Chinese people believe the unity is held with dual power, Yin and Yang. Yang represents the active and masculine, while Yin  represents the opposite. The world is under constant movement with the divergence and unification of the two power. The piece intends to sonify this kind of feeling.</p><p>The piece&#39;s additive and granular synthesis is coded in music programming language Chuck, and it&#39;s finally mixed with LogicX</p>",image:"img/unity-of-opposites.jpg",audio:"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/384850499&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true&amp;visual=true"},{title:"Pocket Operator - Contra",description:"<p>A short improvising piece performed by me and my friend Zhao Yan. We connected two Pocket Operators together, and played this piece to demonstrate the interdependencies of electronic instruments, and a basic music pattern, call and response. </p><p>In this piece I was playing PO-16 (Factory) and Yan was playing PO-20 (Arcade). The riff is inspired by a background track from famous video game <em>Contra</em></p>",image:"img/po-contra.jpg",audio:"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/384857597&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true&amp;visual=true"}];t.a=[{title:"Varidada",category:"web-development",image:"img/varidada.png",description:"<p>Varidada Inc. is a music technology startup that aims at creating new ways for musiccollaboration. I did an internship there and participated in the development of their first product, varidada.com</p><p>This is a platform that helps musicians to upload their recordings/sound tracks and collaborate with the other players jamming online. It provides cute cartoon characters, powerful online recorder and online practicing systems. The whole project is based on MEAN stack (MongoDB, Express, AngularJS, NodeJS). As a full stack developer, I participated in setting up the basic functionalities of it, especially music mixing and recording mechanism.</p>",url:"https://www.varidada.com",technology:"NodeJS, AngularJS, MongoDB",period:"05/2016-02/2017"},{title:"Earsketch",category:"web-development",image:"img/earsketch.png",description:"<p>EarSketch is a National Science Foundation (NSF) funded project that aims to teach kids computer science by making music. The users could write Python/Javascript code in theeditor, making use of our API. Our compiler will compile these codes into music snippets, then display and play them back.</p><p>It is a great computer science/music learning tool and is used by a lot of schools in the States.</p><p>I worked as a graduate developer for this project for one semester,focusing on solving bugs related to web audio, and re-arrange the layout of the app.</p>",url:"https://earsketch.gatech.edu",technology:"AngularJS, BootStrap",period:"01/2016-05/2016"},{title:"SoundWhich",category:"web-development",image:"img/soundwhich.png",description:"<p>This is the second product of Varidada Inc., a platform for users to customize and assemble songs with online tracks. Just like how we build sandwiches layer by layer. </p><p>I worked on background track mixing system with Pydub and Librosa (A Audio library for audio analysis). Also built some backend RESTFUL API services  for this project, like the music mixing and sharing APIs</p><p>&nbsp;</p>",url:"https://www.soundwhich.com",technology:"AngularJS, NodeJS, Pydub",period:"11/2016-02/2017"},{title:"Sound Hockey",category:"research",image:"img/soundhockey.png",description:"<p>Sound Hockey is my master’s project used as a sound design and parameter visualization tool. In this project, either a synth unit or effect unit is wrapped as a &#39;ball&#39;. The users could add balls to the stage and make them move, just like hitting balls on an air hockey table. Through the balls&#39; movement, users are able to explore different kinds of sound effects and visualize them by mapping music parameters with basic physics parameters.</p><p>The project makes use of ToneJS and provides rich sound effects. It also utilized Web MIDI API and is able to receive MIDI messages directly in the browsers.</p>",technology:"ToneJS, VueJS, PhaserJS",period:"09/2016-05/2017",video:"https://www.youtube.com/watch?v=HsuWYHg_aFQ&t=3s"},{title:"Traffic Visulization and Prediction",category:"research",image:"img/polo.jpg",description:"<p>This is the final project for course <em>Data Analysis and Visualization</em>. We scraped traffic data from Georgia Department of Transportation, and collected weather data from Weather Underground.  Through processing and analyzing the data,  we tried to find the relationship between weather and traffic condition. Our system will finally give out a prediction on traffic condition based on date, time and weather,  then visualize it on a dynamically generated map using OpenCV.</p><p>&nbsp;</p>",url:"files/polo-poster.pdf",technology:"D3, OpenCV, JQuery",period:"05/2015"},{title:"Sonic HITS",category:"web-development",description:"<p>A simple digital branding site for a music technology startup, Sonic Hits.</p>",url:"https://sonichits.studio",image:"img/sonichits.png",technology:"PHP, WordPress",period:"06/2017"},{title:"Water Instrument",category:"music",description:'<p>The project is an interactive music system that allows the users to produce sounds bytouching and stirring the water. It makes use of the Makey Makey board (hardware) andMaxMSP (software), and connects them together. The fancy part of the system is its input,which is a group of glasses with water. The glasses, actually the water in the glasses, cantrigger sound once they are pressed, just like normal keyboards. And the users can definedifferent sound timbre/effects in software.</p><p>Unfortunately I don’t have a better video demo for this project because it is not easy to setup. The system looks a little bit dull in the video, but that’s because it’s not designed for onesingle player. Trust me it is fine when multiple users are playing it.</p><p><em><u>Breakdown Diagram</u></em>:</p><p><img src="img/water-instrument-chart.png" alt="Water Instrument Breakdown Chart"/></p>',image:"img/water-instrument.png",technology:"Max/MSP, Arduino",period:"09/2015-12/2015",video:"https://www.youtube.com/watch?v=AZwArOEwXao&t=1s"},{title:"Pipe Broken",category:"music",description:'<p>This is a project built for 2017 Moog/Guthman Hackathon. Over 30 teams from variousbackground joined the competition. Each team was given a Moog Werkstatt (an electronicsynth kit) and asked to build an instrument based on that. The participants were allowed tobut not limited to add their own modules, modify the Werkstatt circuit, program orreprogram the controller.</p><p>My team included five people, all of which are from Georgia Tech Center for MusicTechnology. As a team leader, I was in charge of the architecture of the project, selectingsuitable tech stack, including hardware modules/components and software kits. Also, Imanaged the pace of the project so that everybody found the right spot on the team andwere clear about specific roles. Meanwhile as one of the developers, I programmed theinterface between hardware (Arduino, Moog synthesizer) and part of the software (MaxMSP),and implemented the functionality of arpeggiator for the electronic bagpipe.</p>\n<p>The project was extremely popular and attracted a lot of people to try it during the finalpresentation. It earned us an honorable mention among over 30 groups of competitiveparticipants.</p><p>Unfortunately I didn’t keep any good video demos for this project, neither do I have myselfin the demo video since I don’t play any pipe instrument. In the demo video I was the onebeside introducing the features of the project.</p><p><u><em>Breakdown diagram:</em></u></p><p><img src="img/pipe-broken-chart.png" alt="Pipe Broken Breakdown Chart" /></p>',image:"img/pipe-broken.png",technology:"SuperCollider, Arduino, Rawsberry PI",period:"03/2017",video:"https://www.youtube.com/watch?v=slsZ8dNtxKI"}]},vcWJ:function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"works text-center page"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[e._m(0),e._l(e.projects,function(e,t){return a("portfolio-item",{key:"index",attrs:{title:e.title,image:e.image,url:e.url,description:e.description,category:e.category,period:e.period,technology:e.technology,video:e.video,order:t+1}})})],2)])])};i._withStripped=!0;var o={render:i,staticRenderFns:[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"col-md-12"},[a("h2",[e._v("My latest Works")]),a("ul",{staticClass:"list-inline"},[a("li",{staticClass:"filter active",attrs:{"data-filter":".all"}},[e._v("All")]),a("li",{staticClass:"filter",attrs:{"data-filter":".web-development"}},[e._v("Web Development")]),a("li",{staticClass:"filter",attrs:{"data-filter":".music"}},[e._v("Interactive Music")]),a("li",{staticClass:"filter",attrs:{"data-filter":".research"}},[e._v("Research")])])])}]};t.a=o}});