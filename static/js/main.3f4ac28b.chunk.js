(this["webpackJsonpjf-fitness"]=this["webpackJsonpjf-fitness"]||[]).push([[0],{12:function(n,e,t){n.exports=t.p+"static/media/gym2.55fea5a6.jpg"},13:function(n,e,t){n.exports=t.p+"static/media/JF_logo_White.1b3ed183.png"},15:function(n,e,t){n.exports=t(23)},20:function(n,e,t){},23:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),i=t(7),l=t.n(i),o=(t(20),t(1)),c=t(14),u=t(8),s=t.n(u),f=t(2);function d(){var n=Object(o.a)(["\n  min-height: 400px;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  flex-wrap: wrap;\n  background: ",";\n  color: ",";\n  font-weight: 100;\n\n  h1 {\n    font-size: 3em;\n    font-weight: 200;\n    margin-top: 100px;\n  }\n\n  p {\n      font-size: 1.8em;\n  }\n"]);return d=function(){return n},n}function p(){var n=Object(o.a)(["\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    height: 100vh;\n"]);return p=function(){return n},n}var m="#FFF",h="#000",g="#0D98E9",v="#D2D2D2",b="1400px",x="700px",E=(f.b.div(p()),f.b.div(d(),(function(n){return n.dark?h:m}),(function(n){return n.dark?m:h})));function w(){var n=Object(o.a)(["\n    height: 80px;\n    width: 100px;\n    background: ",";\n    position: relative;\n    align-self: flex-end;\n    cursor: pointer;\n    position: absolute;\n    top: 0;\n    right: 20px;\n    display: none;\n\n    &:hover > "," {\n        background: ",";\n    }\n\n    @media( max-width: 1100px ) {\n        display: initial;\n\n    }\n"]);return w=function(){return n},n}function y(){var n=Object(o.a)(["\n    height: 3px;\n    width: 40px;\n    background: ",";\n    transition: all 0.5s ease;\n    transition-property: height, width, transform;\n    position: absolute;\n    top: calc(50% - 12.5px);\n    left: calc(50% - 20px);\n    transform: ",";\n\n    &:before, &:after {\n        content: '';\n        position: absolute;\n        height: 3px;\n        width: 40px;\n        background: ",";\n        transition: transform 0.5s ease, opacity 0.5s ease;\n    }\n\n    &:before {\n        margin-top: 10px;\n        transform: ",";\n        opacity: ",";\n    }\n\n    &:after {\n        margin-top: 20px;\n        transform: ",";\n    }\n"]);return y=function(){return n},n}function k(){var n=Object(o.a)(["\n    display: flex;\n    justify-content: center;\n    overflow: hidden;\n    transition: all 0.3s ease;\n\n    @media( max-width: 1100px ) {\n        flex-direction: column;\n        align-self: flex-start;\n        margin-top: 80px;\n        transition: all 0.3s ease;\n        height: ",";\n\n        "," {\n            display: initial;\n            margin-right: 20px;\n            text-align: right;\n            border-radius: 0;\n            background: ",";\n            color: ",";\n            padding: 28px 25px;\n            border: 0;\n        }\n    }\n"]);return k=function(){return n},n}function O(){var n=Object(o.a)(["\n    height: 100%;\n    background: transparent;\n    color: ",";\n    border: none;\n    letter-spacing: 5px;\n    text-indent: 5px;\n    padding: 32px 20px 26px;\n    cursor: pointer;\n    font-weight: 500;\n    border-bottom: 2px solid transparent;\n    font-size: 1em;\n    text-decoration: none;\n    \n    &:hover {\n      color: "," !important;\n      border-color: ",";\n    }\n\n    &:focus {\n      outline: 0;\n    }\n\n    /* &:last-child {\n        margin-right: 50px;\n    } */\n"]);return O=function(){return n},n}function F(){var n=Object(o.a)(["\n    cursor: pointer;\n"]);return F=function(){return n},n}function j(){var n=Object(o.a)([" \n    width: 100%;\n    max-width: ",";\n    margin: auto;\n    height: 80px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    position: ",";\n    top: ",";\n    background: ",";\n    color: ",";\n    z-index: 1;\n    transition: height 0.3s ease;\n\n    & > img {\n        height: 68px;\n        margin-left: 50px;\n    }\n\n    @media(min-width: ",") {\n        left: calc(50% - ",");    \n    }\n"]);return j=function(){return n},n}var J=f.b.div(j(),b,(function(n){return n.stickyHeader?"fixed":"absolute"}),(function(n){return n.stickyHeader?"0":"100vh"}),m,h,b,x),q=f.b.img(F()),H=f.b.a(O(),h,g,g),V=f.b.div(k(),(function(n){return n.menuOpen?"400px":"0"}),H,h,m),C=f.b.div(y(),(function(n){return n.menuOpen?g:h}),(function(n){return n.menuOpen?"translateY(10px) rotate(45deg)":""}),(function(n){return n.menuOpen?g:"inherit"}),(function(n){return n.menuOpen?"translateY(-10px) rotate(180deg)":""}),(function(n){return n.menuOpen?"0":"1"}),(function(n){return n.menuOpen?"translateY(-20px) rotate(-90deg)":""})),S=f.b.div(w(),(function(n){return n.menuOpen?"#000":"transparent"}),C,g),P=function(n){var e=n.stickyHeader,t=Object(r.useState)(!1),i=Object(c.a)(t,2),l=i[0],o=i[1];return a.a.createElement(J,{stickyHeader:e},a.a.createElement(q,{src:s.a,alt:"JF Fitness Logo"}),a.a.createElement(V,{menuOpen:l},a.a.createElement(S,{menuOpen:l,onClick:function(){return o(!l)}},a.a.createElement(C,{menuOpen:l})),a.a.createElement(H,{href:"#about",onClick:function(){return o(!1)}},"ABOUT"),a.a.createElement(H,{href:"#testemonials",onClick:function(){return o(!1)}},"TESTEMONIALS"),a.a.createElement(H,{href:"#partners",onClick:function(){return o(!1)}},"PARTNERS"),a.a.createElement(H,{href:"#services",onClick:function(){return o(!1)}},"SERVICES"),a.a.createElement(H,{href:"#contact",onClick:function(){return o(!1)}},"CONTACT")))};function A(){var n=Object(o.a)(["\n    * {\n        font-family: \"Metric\", 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;\n        scroll-behavior: smooth;\n    }\n\n    ::-webkit-scrollbar {\n        width: 8px;\n    }\n\n    ::-webkit-scrollbar-track {\n        background: #fff;\n    }\n\n    ::-webkit-scrollbar-thumb {\n        background: ",";\n        border-radius: 20px;\n    }\n"]);return A=function(){return n},n}var M=Object(f.a)(A(),v);function R(){return(R=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(this,arguments)}function Z(n,e){if(null==n)return{};var t,r,a=function(n,e){if(null==n)return{};var t,r,a={},i=Object.keys(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}var z=a.a.createElement("path",{id:"Path_43","data-name":"Path 43",d:"M2222,997v21c-43.36,0-87,35.49-87,114v505c0,295.64-132.44,399.16-289.51,428.6l-3.85-20.85c82.86-38,168.36-140.56,168.36-406.75V1133c0-79-43-114-87.42-115V997.14Z",transform:"translate(-1841.64 -997)"}),D=a.a.createElement("path",{id:"Path_44","data-name":"Path 44",d:"M2267.06,997.32H2580V1215h-18c-4-165-168-197-295-197Zm154,292.68H2439v255h-17.94c-6.86-44.2-21.46-81.86-52.06-99s-77.19-13.77-100.94-16.6v-23.8c13.93-1.66,68.94-.6,101.94-22.6C2400,1365,2415,1325,2421.06,1290Z",transform:"translate(-1841.64 -997)"}),I=a.a.createElement("path",{id:"Path_45","data-name":"Path 45",d:"M104.7-135.64H45.691v47.452h54.388v22.13H45.691V0h-26.2V-157.88H104.7ZM227.282,0H200.308V-157.88h26.974ZM435.076-135.64h-45.36V0h-26.2V-135.64h-45.25v-22.24H435.076ZM659.715,0H631.09L555.673-116.043a51.451,51.451,0,0,1-4.734-9.138h-.661q.881,5.065.881,21.689V0H525.836V-157.88h30.5L629.218-44.59q4.624,7.046,5.945,9.689h.44q-1.1-6.276-1.1-21.249V-157.88h25.212ZM855.068,0H766.44V-157.88h85.105v22.24h-58.9v44.7h54.278v22.13H792.643V-22.13h62.425Zm88.448-6.276V-33.249A41.661,41.661,0,0,0,952.16-27.3a66.78,66.78,0,0,0,10.624,4.459,83.728,83.728,0,0,0,11.23,2.807,59.87,59.87,0,0,0,10.349.991q16.515,0,24.607-5.5t8.092-15.964a17.412,17.412,0,0,0-2.7-9.744,28.29,28.29,0,0,0-7.542-7.542,79.244,79.244,0,0,0-11.4-6.551Q988.877-67.49,981.39-70.9q-8.037-4.294-14.973-8.7a64.444,64.444,0,0,1-12.056-9.744,40.766,40.766,0,0,1-8.037-12.056,39.262,39.262,0,0,1-2.918-15.744,36.339,36.339,0,0,1,5.009-19.322,42.307,42.307,0,0,1,13.212-13.542,60.567,60.567,0,0,1,18.662-7.927,88.616,88.616,0,0,1,21.359-2.587q24.772,0,36.112,5.615v25.873q-13.432-9.689-34.571-9.689a61.944,61.944,0,0,0-11.615,1.1,34.53,34.53,0,0,0-10.349,3.633,22.4,22.4,0,0,0-7.432,6.5,15.921,15.921,0,0,0-2.863,9.578,18.114,18.114,0,0,0,2.2,9.138,23.572,23.572,0,0,0,6.441,7.046,65.807,65.807,0,0,0,10.349,6.221q6.11,3.028,14.148,6.551,8.257,4.294,15.579,9.028a73.44,73.44,0,0,1,12.881,10.459,45.961,45.961,0,0,1,8.808,12.716,37.343,37.343,0,0,1,3.248,15.909q0,12-4.844,20.258A39.044,39.044,0,0,1,1026.7-7.156,58.111,58.111,0,0,1,1007.814.33a106.458,106.458,0,0,1-22.57,2.312,96.106,96.106,0,0,1-9.744-.606q-5.78-.606-11.836-1.762a108.863,108.863,0,0,1-11.45-2.807A36.251,36.251,0,0,1,943.517-6.276Zm190.4,0V-33.249a41.658,41.658,0,0,0,8.643,5.945,66.782,66.782,0,0,0,10.624,4.459,83.728,83.728,0,0,0,11.23,2.807,59.869,59.869,0,0,0,10.349.991q16.515,0,24.607-5.5t8.092-15.964a17.412,17.412,0,0,0-2.7-9.744,28.289,28.289,0,0,0-7.542-7.542,79.235,79.235,0,0,0-11.4-6.551q-6.551-3.138-14.037-6.551-8.037-4.294-14.973-8.7a64.447,64.447,0,0,1-12.056-9.744,40.767,40.767,0,0,1-8.037-12.056,39.262,39.262,0,0,1-2.918-15.744,36.338,36.338,0,0,1,5.01-19.322,42.307,42.307,0,0,1,13.212-13.542,60.567,60.567,0,0,1,18.661-7.927,88.617,88.617,0,0,1,21.359-2.587q24.772,0,36.112,5.615v25.873q-13.432-9.689-34.571-9.689a61.943,61.943,0,0,0-11.615,1.1,34.529,34.529,0,0,0-10.349,3.633,22.4,22.4,0,0,0-7.432,6.5,15.921,15.921,0,0,0-2.863,9.578,18.114,18.114,0,0,0,2.2,9.138,23.572,23.572,0,0,0,6.441,7.046,65.8,65.8,0,0,0,10.349,6.221q6.11,3.028,14.148,6.551,8.257,4.294,15.579,9.028a73.44,73.44,0,0,1,12.881,10.459,45.961,45.961,0,0,1,8.808,12.716,37.343,37.343,0,0,1,3.248,15.909q0,12-4.844,20.258a39.044,39.044,0,0,1-13.047,13.432A58.11,58.11,0,0,1,1198.213.33a106.457,106.457,0,0,1-22.57,2.312,96.107,96.107,0,0,1-9.744-.606q-5.78-.606-11.836-1.762a108.87,108.87,0,0,1-11.45-2.807A36.252,36.252,0,0,1,1133.916-6.276Z",transform:"translate(720.5 501.35)"}),T=function(n){var e=n.svgRef,t=n.title,r=Z(n,["svgRef","title"]);return a.a.createElement("svg",R({id:"logo",width:1955.485,height:1068.6,viewBox:"0 0 1955.485 1068.6",ref:e},r),t?a.a.createElement("title",null,t):null,z,D,I)},_=a.a.forwardRef((function(n,e){return a.a.createElement(T,R({svgRef:e},n))}));t.p;function L(){var n=Object(o.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n  height: 100vh;\n  font-size: 72px;\n  padding: 40px;\n  background: ",";\n  color: ",";\n  position: relative;\n  padding-top: 200px;\n\n  div:nth-child(2) { font-weight: 100; }\n  div:nth-child(3) { font-weight: 300; }\n  div:nth-child(4) { font-weight: 300; font-style: italic; }\n  div:nth-child(5) { font-weight: 400; }\n  div:nth-child(6) { font-weight: 500; }\n  div:nth-child(7) { font-weight: 600; }\n  div:nth-child(8) { font-weight: 800; }\n\n  "," {\n    right: ",";\n    right: ",";\n    fill: ",";\n  }\n"]);return L=function(){return n},n}function N(){var n=Object(o.a)(["\n  position: absolute;\n  top: 40px;\n  left: calc(50% - 160px);\n  width: 300px;\n  height: 180px;\n"]);return N=function(){return n},n}var U=Object(f.b)(_)(N()),B=f.b.div(L(),(function(n){return n.black?"#000":"#fff"}),(function(n){return n.black?"#fff":"#000"}),U,(function(n){return n.black?"40px":"unset"}),(function(n){return n.black?"unset":"40px"}),(function(n){return n.black?"#fff":"#000"})),Y=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(B,null,a.a.createElement(U,null),a.a.createElement("div",null,"JF Fitness"),a.a.createElement("div",null,"JF Fitness"),a.a.createElement("div",null,"JF Fitness"),a.a.createElement("div",null,"JF Fitness"),a.a.createElement("div",null,"JF Fitness"),a.a.createElement("div",null,"JF Fitness"),a.a.createElement("div",null,"JF Fitness")),a.a.createElement(B,{black:!0},a.a.createElement(U,null),a.a.createElement("div",null,"JF Fitness"),a.a.createElement("div",null,"JF Fitness"),a.a.createElement("div",null,"JF Fitness"),a.a.createElement("div",null,"JF Fitness"),a.a.createElement("div",null,"JF Fitness"),a.a.createElement("div",null,"JF Fitness"),a.a.createElement("div",null,"JF Fitness")))},Q=t(12),W=t.n(Q),G=t(13),K=t.n(G);function X(){var n=Object(o.a)(["\n  font-size: 5.5vw;\n  font-weight: 800;\n  color: ",";\n  margin-right: 30px;\n  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;\n"]);return X=function(){return n},n}function $(){var n=Object(o.a)(["\n  width: 8vw;\n  height: 22vw;\n  position: absolute;\n  left: calc(50vw - 4vw);\n  top: calc(50% - 5vw);\n  background-image: url(",");\n  background-size: contain;\n  background-repeat: no-repeat;\n"]);return $=function(){return n},n}function nn(){var n=Object(o.a)(["\n  width: 100%;\n  height: 75vh;\n  background-image: url(",");\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position-x: 50%;\n  background-position-y: 10%;\n  display: flex;\n  flex-direction: row;\n  align-items: flex-start;\n  flex-wrap: wrap;\n  justify-content: center;\n  position: relative;\n"]);return nn=function(){return n},n}var en=f.b.div(nn(),W.a),tn=f.b.div($(),K.a),rn=f.b.div(X(),(function(n){return n.white,m})),an=function(){return a.a.createElement(en,null,a.a.createElement(rn,null,"Fitness."),a.a.createElement(rn,null,"Results Driven."),a.a.createElement(rn,null,"Client Centric."),a.a.createElement(tn,null))},ln=function(){return a.a.createElement(E,{dark:!0},a.a.createElement("h1",null,"About Us"),a.a.createElement("p",null,"JF Fitness is a high end online coaching brand that specialises in Functional Fitness, through delivering online monthly subscription programmes and 1-2-1 services for all abilities."))};function on(){var n=Object(o.a)(["\n  font-style: italic;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n\n  span {\n    font-size: 2em;\n    font-weight: 500;\n    font-style: normal;\n  }\n"]);return on=function(){return n},n}function cn(){var n=Object(o.a)(["\n  height: calc(25vh - 81px);\n  min-height: auto;\n  justify-content: center;\n"]);return cn=function(){return n},n}var un=Object(f.b)(E)(cn()),sn=f.b.div(on()),fn=function(){return a.a.createElement(un,{dark:!0},a.a.createElement(sn,null,a.a.createElement("p",null,'" I\'ve really enjoyed working with James over the past few years and feel stronger, more mobile and fitter than ever before "'),a.a.createElement("span",null,"Reem")))};function dn(){var n=Object(o.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n"]);return dn=function(){return n},n}function pn(){var n=Object(o.a)(["\n  position: absolute;\n  top: 80px;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  overflow-y: scroll;\n  -webkit-overflow-scrolling: touch;\n  border-top: 1px solid ",";\n"]);return pn=function(){return n},n}var mn=f.b.div(pn(),v),hn=f.b.div(dn()),gn=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(M,null),a.a.createElement(P,{stickyHeader:!0}),a.a.createElement(mn,null,a.a.createElement(hn,{id:"landing"},a.a.createElement(an,null)),a.a.createElement(hn,{id:"testimonials"},a.a.createElement(fn,null)),a.a.createElement(hn,{id:"about"},a.a.createElement(ln,null)),a.a.createElement(hn,{id:"partners"},a.a.createElement(E,null,a.a.createElement("h1",null,"Partners"))),a.a.createElement(hn,{id:"services"},a.a.createElement(E,{dark:!0},a.a.createElement("h1",null,"Services"))),a.a.createElement(hn,{id:"contact"},a.a.createElement(E,null,a.a.createElement("h1",null,"Contact"))),a.a.createElement(hn,{id:"metric"},a.a.createElement(Y,null))))};var vn=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(gn,null))};l.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(vn,null)),document.getElementById("root"))},8:function(n,e,t){n.exports=t.p+"static/media/logo.6e34a0e5.svg"}},[[15,1,2]]]);
//# sourceMappingURL=main.3f4ac28b.chunk.js.map