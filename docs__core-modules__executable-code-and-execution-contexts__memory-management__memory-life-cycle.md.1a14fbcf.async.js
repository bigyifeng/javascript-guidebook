(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[169],{"8Xx2":function(e,n,a){e.exports=a.p+"static/memory-life-cycle.33fa7f96.png"},J2iu:function(e,n,a){"use strict";a.r(n);var t=a("wx14"),l=a("q1tI"),r=a.n(l),c=(a("B2uJ"),a("+su7"),a("qOys")),i=a.n(c),m=a("5Yjd"),o=a.n(m),s=r.a.memo((function(){var e=a("TqRt"),n=e(a("q1tI")),t=e(a("8Xx2")),l=function(){return n["default"].createElement("img",{alt:"\u5185\u5b58\u751f\u547d\u5468\u671f",src:t["default"],width:720})};return n["default"].createElement(l)}));n["default"]=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"markdown"},r.a.createElement("h1",{id:"\u5185\u5b58\u751f\u547d\u5468\u671f"},r.a.createElement("a",{"aria-hidden":"true",href:"#\u5185\u5b58\u751f\u547d\u5468\u671f"},r.a.createElement("span",{className:"icon icon-link"})),"\u5185\u5b58\u751f\u547d\u5468\u671f")),r.a.createElement(o.a,Object(t["a"])({source:{jsx:"import React from 'react';\nimport img from '../../../assets/memory-life-cycle/memory-life-cycle.png';\n\nexport default () => <img alt=\"\u5185\u5b58\u751f\u547d\u5468\u671f\" src={img} width={720} />;"}},{inline:!0,dependencies:{},files:{}}),r.a.createElement(s,null)),r.a.createElement("div",{className:"markdown"},r.a.createElement("p",null,"JavaScript \u73af\u5883\u4e2d\u5206\u914d\u7684\u5185\u5b58\u4e00\u822c\u6709\u5982\u4e0b\u751f\u547d\u5468\u671f\uff1a"),r.a.createElement("ol",null,r.a.createElement("li",null,"\u5185\u5b58\u5206\u914d\uff1a\u5f53\u6211\u4eec\u58f0\u660e\u53d8\u91cf\u3001\u51fd\u6570\u3001\u5bf9\u8c61\u7684\u65f6\u5019\uff0c\u7cfb\u7edf\u4f1a\u81ea\u52a8\u4e3a\u4ed6\u4eec\u5206\u914d\u5185\u5b58"),r.a.createElement("li",null,"\u5185\u5b58\u4f7f\u7528\uff1a\u5373\u8bfb\u5199\u5185\u5b58\uff0c\u4e5f\u5c31\u662f\u4f7f\u7528\u53d8\u91cf\u3001\u51fd\u6570\u7b49"),r.a.createElement("li",null,"\u5185\u5b58\u56de\u6536\uff1a\u4f7f\u7528\u5b8c\u6bd5\uff0c\u7531\u5783\u573e\u56de\u6536\u673a\u5236\u81ea\u52a8\u56de\u6536\u4e0d\u518d\u4f7f\u7528\u7684\u5185\u5b58")),r.a.createElement("p",null,"\ud83c\udf30 ",r.a.createElement("strong",null,"\u6807\u51c6\u793a\u4f8b\uff1a")),r.a.createElement(i.a,{code:"// \u5728\u5185\u5b58\u4e2d\u7ed9\u6570\u503c\u53d8\u91cf\u5206\u914d\u7a7a\u95f4\nvar a = 20;\n\n// \u4f7f\u7528\u5185\u5b58\nconsole.log(a + 80);\n\n// \u4f7f\u7528\u5b8c\u6bd5\u4e4b\u540e\uff0c\u91ca\u653e\u5185\u5b58\u7a7a\u95f4\nvar a = null;\n",lang:"js"}),r.a.createElement("h2",{id:"\u5185\u5b58\u5206\u914d"},r.a.createElement("a",{"aria-hidden":"true",href:"#\u5185\u5b58\u5206\u914d"},r.a.createElement("span",{className:"icon icon-link"})),"\u5185\u5b58\u5206\u914d"),r.a.createElement("h3",{id:"\u503c\u7684\u521d\u59cb\u5316"},r.a.createElement("a",{"aria-hidden":"true",href:"#\u503c\u7684\u521d\u59cb\u5316"},r.a.createElement("span",{className:"icon icon-link"})),"\u503c\u7684\u521d\u59cb\u5316"),r.a.createElement("p",null,"\u4e3a\u4e86\u4e0d\u8ba9\u5f00\u53d1\u8005\u8d39\u5fc3\u5206\u914d\u5185\u5b58\uff0cJavaScript \u5728\u5b9a\u4e49\u53d8\u91cf\u65f6\u5c31\u5b8c\u6210\u4e86\u5185\u5b58\u5206\u914d\u3002"),r.a.createElement(i.a,{code:"// \u7ed9\u6570\u503c\u53d8\u91cf\u5206\u914d\u5185\u5b58\nvar a = 123;\n\n// \u7ed9\u5b57\u7b26\u4e32\u5206\u914d\u5185\u5b58\nvar b = 'Hello';\n\n// \u7ed9\u5bf9\u8c61\u53ca\u5176\u5305\u542b\u7684\u503c\u5206\u914d\u5185\u5b58\nvar c = {\n    a: 1,\n    b: null\n}\n\n// \u7ed9\u6570\u7ec4\u53ca\u5176\u5305\u542b\u7684\u503c\u5206\u914d\u5185\u5b58\nvar d = [0, null, undefined, 'Hello']\n\n// \u7ed9\u51fd\u6570\u5206\u914d\u5185\u5b58\nfunction e(){\n    return 1\n}\n\n// \u51fd\u6570\u8868\u8fbe\u5f0f\u4e5f\u80fd\u5206\u914d\u5185\u5b58\nsomeElement.addEventListener('click', function(){\n  someElement.style.backgroundColor = 'blue';\n}, false);\n",lang:"js"}),r.a.createElement("h3",{id:"\u51fd\u6570\u8c03\u7528\u5206\u914d"},r.a.createElement("a",{"aria-hidden":"true",href:"#\u51fd\u6570\u8c03\u7528\u5206\u914d"},r.a.createElement("span",{className:"icon icon-link"})),"\u51fd\u6570\u8c03\u7528\u5206\u914d"),r.a.createElement("p",null,"\u51fd\u6570\u8c03\u7528\u7ed3\u679c\u5206\u914d\u5bf9\u8c61\u5185\u5b58\u3002"),r.a.createElement(i.a,{code:"// \u5206\u914d Date \u5bf9\u8c61\u5b9e\u4f8b\nvar f = new Date();\n\n// \u5206\u914d DOM \u5143\u7d20\nvar g = document.createElement('div');\n",lang:"js"}),r.a.createElement("p",null,"\u5206\u914d\u65b0\u53d8\u91cf\u6216\u65b0\u5bf9\u8c61\u3002"),r.a.createElement(i.a,{code:"var s = 'bingo';\nvar q = s.substr(0, 3);\n// q \u662f\u4e00\u4e2a\u65b0\u7684\u5b57\u7b26\u4e32\n// \u56e0\u4e3a\u5b57\u7b26\u4e32\u662f\u4e0d\u53ef\u53d8\u91cf\n// JavaScript \u53ef\u80fd\u51b3\u5b9a\u4e0d\u5206\u914d\u5185\u5b58\n// \u53ea\u662f\u5b58\u50a8 [0-3] \u7684\u8303\u56f4\n\nvar x = ['a', 'b'];\nvar y = ['c', 'd'];\nvar z = x.concat(y)\n// \u65b0\u6570\u7ec4\u6709\u56db\u4e2a\u5143\u7d20 \u662f x \u548c y \u8fde\u63a5\u7684\u7ed3\u679c\n",lang:"js"}),r.a.createElement("h2",{id:"\u5185\u5b58\u4f7f\u7528"},r.a.createElement("a",{"aria-hidden":"true",href:"#\u5185\u5b58\u4f7f\u7528"},r.a.createElement("span",{className:"icon icon-link"})),"\u5185\u5b58\u4f7f\u7528"),r.a.createElement("p",null,"\u4f7f\u7528\u503c\u7684\u8fc7\u7a0b\u5b9e\u9645\u4e0a\u662f\u5bf9\u5206\u914d\u5185\u5b58\u8fdb\u884c\u8bfb\u53d6\u4e0e\u5199\u5165\u7684\u64cd\u4f5c\u3002\u8bfb\u53d6\u4e0e\u5199\u5165\u53ef\u80fd\u662f\u5199\u5165\u4e00\u4e2a\u53d8\u91cf\u6216\u8005\u4e00\u4e2a\u5bf9\u8c61\u7684\u5c5e\u6027\u503c\uff0c\u751a\u81f3\u4f20\u9012\u51fd\u6570\u7684\u53c2\u6570\u3002"),r.a.createElement("h2",{id:"\u5185\u5b58\u56de\u6536"},r.a.createElement("a",{"aria-hidden":"true",href:"#\u5185\u5b58\u56de\u6536"},r.a.createElement("span",{className:"icon icon-link"})),"\u5185\u5b58\u56de\u6536"),r.a.createElement("p",null,"\u5927\u591a\u6570\u5185\u5b58\u7ba1\u7406\u7684\u95ee\u9898\u90fd\u5728\u8fd9\u4e2a\u9636\u6bb5\u3002\u5728\u8fd9\u91cc\u6700\u8270\u96be\u7684\u4efb\u52a1\u662f\u627e\u5230\u6240\u5206\u914d\u7684\u5185\u5b58\u786e\u5b9e\u5df2\u7ecf\u4e0d\u518d\u9700\u8981\u4e86\u3002\u5b83\u5f80\u5f80\u8981\u6c42\u5f00\u53d1\u8005\u6765\u786e\u5b9a\u5728\u7a0b\u5e8f\u4e2d\u54ea\u4e00\u5757\u5185\u5b58\u4e0d\u518d\u9700\u8981\u5e76\u4e14\u91ca\u653e\u5b83\u3002"),r.a.createElement("p",null,"\u9ad8\u7ea7\u8bed\u8a00\u89e3\u91ca\u5668\u5d4c\u5165\u4e86 ",r.a.createElement("a",{href:"garbage-collection.md"},"\u5783\u573e\u56de\u6536\u5668"),"\uff0c\u5b83\u7684\u4e3b\u8981\u5de5\u4f5c\u662f\u8ddf\u8e2a\u5185\u5b58\u7684\u5206\u914d\u548c\u4f7f\u7528\uff0c\u4ee5\u4fbf\u5f53\u5206\u914d\u7684\u5185\u5b58\u4e0d\u518d\u4f7f\u7528\u65f6\uff0c\u81ea\u52a8\u91ca\u653e\u5b83\u3002\u8fd9\u53ea\u80fd\u662f\u4e00\u4e2a\u8fd1\u4f3c\u7684\u8fc7\u7a0b\uff0c\u56e0\u4e3a\u8981\u77e5\u9053\u662f\u5426\u4ecd\u7136\u9700\u8981\u67d0\u5757\u5185\u5b58\u662f",r.a.createElement("a",{href:"http://en.wikipedia.org/wiki/Decidability_%28logic%29",target:"_blank",rel:"noopener noreferrer"},"\u65e0\u6cd5\u5224\u5b9a\u7684",r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0,x:"0px",y:"0px",viewBox:"0 0 100 100",width:"15",height:"15",className:"__dumi-default-external-link-icon"},r.a.createElement("path",{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"}),r.a.createElement("polygon",{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"}))),"\uff08\u65e0\u6cd5\u901a\u8fc7\u67d0\u79cd\u7b97\u6cd5\u89e3\u51b3\uff09\u3002"),r.a.createElement("hr",null),r.a.createElement("p",null,r.a.createElement("strong",null,"\u53c2\u8003\u8d44\u6599\uff1a")),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"https://blog.sessionstack.com/how-javascript-works-memory-management-how-to-handle-4-common-memory-leaks-3f28b94cfbec",target:"_blank",rel:"noopener noreferrer"},"\ud83d\udcdd How JavaScript works:memory management + how to handle 4 common memory leaks",r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0,x:"0px",y:"0px",viewBox:"0 0 100 100",width:"15",height:"15",className:"__dumi-default-external-link-icon"},r.a.createElement("path",{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"}),r.a.createElement("polygon",{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"})))))))}},TqRt:function(e,n){function a(e){return e&&e.__esModule?e:{default:e}}e.exports=a}}]);