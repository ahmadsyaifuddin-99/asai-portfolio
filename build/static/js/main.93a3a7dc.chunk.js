(this["webpackJsonpreact-tailwindcss-portfolio"]=this["webpackJsonpreact-tailwindcss-portfolio"]||[]).push([[0],{18:function(e,t,r){"use strict";var a=r(2);t.a=function(e){var t=e.title;return Object(a.jsx)("button",{children:t})}},23:function(e,t,r){"use strict";var a=r(8),s=r(1);t.a=function(){var e=Object(s.useState)(localStorage.theme),t=Object(a.a)(e,2),r=t[0],n=t[1],c="dark"===r?"light":"dark";return Object(s.useEffect)((function(){var e=window.document.documentElement;e.classList.remove(c),e.classList.add(r),localStorage.setItem("theme",r)}),[r,c]),[c,n]}},26:function(e,t,r){},29:function(e,t,r){},37:function(e,t,r){"use strict";r.r(t);r(26);var a=r(40),s=r(1),n=r(13),c=r(3),i=function(){var e=Object(c.e)().pathname;return Object(s.useEffect)((function(){window.scrollTo(0,0)}),[e]),null},l=r(6),d=r(2);var o=function(){return Object(d.jsx)("div",{className:"font-general-regular flex justify-center items-center text-center",children:Object(d.jsxs)("div",{className:"text-lg text-ternary-dark dark:text-ternary-light",children:["\xa9 ",(new Date).getFullYear(),Object(d.jsx)("a",{href:"https://github.com/ahmadsyaifuddin-99",target:"__blank",className:"hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 ml-1 duration-500",children:"Build in with React Js & Tailwind"}),Object(d.jsx)("span",{children:" |"}),Object(d.jsx)("a",{target:"__blank",className:"text-secondary-dark dark:text-secondary-light font-medium hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 ml-1 duration-500",children:"Ahmad Syaifuddin"})]})})},m=[{id:1,icon:Object(d.jsx)(l.f,{})},{id:2,icon:Object(d.jsx)(l.e,{}),url:"https://github.com/ahmadsyaifuddin-99"},{id:3,icon:Object(d.jsx)(l.q,{})},{id:4,icon:Object(d.jsx)(l.h,{})},{id:5,icon:Object(d.jsx)(l.g,{}),url:"https://www.instagram.com/asai.ahmadsyaifuddin"}],x=function(){return Object(d.jsx)("div",{className:"container mx-auto",children:Object(d.jsxs)("div",{className:"pt-20 sm:pt-30 pb-8 mt-20 border-t-2 border-primary-light dark:border-secondary-dark",children:[Object(d.jsxs)("div",{className:"font-general-regular flex flex-col justify-center items-center mb-12 sm:mb-28",children:[Object(d.jsx)("p",{className:"text-3xl sm:text-4xl text-primary-dark dark:text-primary-light mb-5",children:"Follow me"}),Object(d.jsx)("ul",{className:"flex gap-4 sm:gap-8",children:m.map((function(e){return Object(d.jsx)("a",{href:e.url,target:"__blank",className:"text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer rounded-lg bg-gray-50 dark:bg-ternary-dark hover:bg-gray-100 shadow-sm p-4 duration-300",children:Object(d.jsx)("i",{className:"text-xl sm:text-2xl md:text-3xl",children:e.icon})},e.id)}))})]}),Object(d.jsx)(o,{})]})})},b=r(8),j=r(23),h=r(39),u=r(18),g=["Web Application","UI/UX Design","Branding"],y=function(e){var t=e.onClose;e.onRequest;return Object(d.jsxs)(h.a.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"font-general-medium fixed inset-0 z-30 transition-all duration-500",children:[Object(d.jsx)("div",{className:"bg-filter bg-black bg-opacity-50 fixed inset-0 w-full h-full z-20"}),Object(d.jsx)("main",{className:"flex flex-col items-center justify-center h-full w-full",children:Object(d.jsx)("div",{className:"modal-wrapper flex items-center z-30",children:Object(d.jsxs)("div",{className:"modal max-w-md mx-5 xl:max-w-xl lg:max-w-xl md:max-w-xl bg-secondary-light dark:bg-primary-dark max-h-screen shadow-lg flex-row rounded-lg relative",children:[Object(d.jsxs)("div",{className:"modal-header flex justify-between gap-10 p-5 border-b border-ternary-light dark:border-ternary-dark",children:[Object(d.jsx)("h5",{className:" text-primary-dark dark:text-primary-light text-xl",children:"What project are you looking for?"}),Object(d.jsx)("button",{onClick:t,className:"px-4 font-bold text-primary-dark dark:text-primary-light",children:Object(d.jsx)(l.r,{className:"text-3xl"})})]}),Object(d.jsx)("div",{className:"modal-body p-5 w-full h-full",children:Object(d.jsxs)("form",{onSubmit:function(e){e.preventDefault()},className:"max-w-xl m-4 text-left",children:[Object(d.jsx)("div",{className:"",children:Object(d.jsx)("input",{className:"w-full px-5 py-2 border dark:border-secondary-dark rounded-md text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light",id:"name",name:"name",type:"text",required:"",placeholder:"Name","aria-label":"Name"})}),Object(d.jsx)("div",{className:"mt-6",children:Object(d.jsx)("input",{className:"w-full px-5 py-2 border dark:border-secondary-dark rounded-md text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light",id:"email",name:"email",type:"text",required:"",placeholder:"Email","aria-label":"Email"})}),Object(d.jsx)("div",{className:"mt-6",children:Object(d.jsx)("select",{className:"w-full px-5 py-2 border dark:border-secondary-dark rounded-md text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light",id:"subject",name:"subject",type:"text",required:"","aria-label":"Project Category",children:g.map((function(e){return Object(d.jsx)("option",{className:"text-normal sm:text-md",children:e},e)}))})}),Object(d.jsx)("div",{className:"mt-6",children:Object(d.jsx)("textarea",{className:"w-full px-5 py-2 border dark:border-secondary-dark rounded-md text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light",id:"message",name:"message",cols:"14",rows:"4","aria-label":"Details",placeholder:"Project description"})}),Object(d.jsx)("div",{className:"mt-6 pb-4 sm:pb-1",children:Object(d.jsx)("span",{onClick:t,type:"submit",className:"px-4 sm:px-6 py-2 sm:py-2.5 text-white bg-indigo-500 hover:bg-indigo-600 rounded-md focus:ring-1 focus:ring-indigo-900 duration-500","aria-label":"Submit Request",children:Object(d.jsx)(u.a,{title:"Send Request"})})})]})}),Object(d.jsx)("div",{className:"modal-footer mt-2 sm:mt-0 py-5 px-8 border0-t text-right",children:Object(d.jsx)("span",{onClick:t,type:"button",className:"px-4 sm:px-6 py-2 bg-gray-600 text-primary-light hover:bg-ternary-dark dark:bg-gray-200 dark:text-secondary-dark dark:hover:bg-primary-light rounded-md focus:ring-1 focus:ring-indigo-900 duration-500","aria-label":"Close Modal",children:Object(d.jsx)(u.a,{title:"Close"})})})]})})})]})},p=r.p+"static/media/Asai-light.fceffc32.svg",k=r.p+"static/media/Asai-dark.12374127.svg",f=function(){var e=Object(s.useState)(!1),t=Object(b.a)(e,2),r=t[0],a=t[1],c=Object(s.useState)(!1),i=Object(b.a)(c,2),o=i[0],m=i[1],x=Object(j.a)(),g=Object(b.a)(x,2),f=g[0],O=g[1];function v(){o?(document.getElementsByTagName("html")[0].classList.remove("overflow-y-hidden"),m(!1)):(document.getElementsByTagName("html")[0].classList.add("overflow-y-hidden"),m(!0))}return Object(d.jsxs)(h.a.nav,{initial:{opacity:0},animate:{opacity:1},id:"nav",className:"sm:container sm:mx-auto",children:[Object(d.jsxs)("div",{className:"z-10 max-w-screen-lg xl:max-w-screen-xl block sm:flex sm:justify-between sm:items-center py-6",children:[Object(d.jsxs)("div",{className:"flex justify-between items-center px-4 sm:px-0",children:[Object(d.jsx)("div",{children:Object(d.jsx)(n.b,{to:"/",children:"dark"===f?Object(d.jsx)("img",{src:k,className:"w-40",alt:"Dark Logo"}):Object(d.jsx)("img",{src:p,className:"w-40",alt:"Dark Logo"})})}),Object(d.jsx)("div",{onClick:function(){return O(f)},"aria-label":"Theme Switcher",className:"block sm:hidden ml-0 bg-primary-light dark:bg-ternary-dark p-3 shadow-sm rounded-xl cursor-pointer",children:"dark"===f?Object(d.jsx)(l.l,{className:"text-ternary-dark hover:text-gray-400 dark:text-ternary-light dark:hover:text-primary-light text-xl"}):Object(d.jsx)(l.o,{className:"text-gray-200 hover:text-gray-50 text-xl"})}),Object(d.jsx)("div",{className:"sm:hidden",children:Object(d.jsx)("button",{onClick:function(){a(!r)},type:"button",className:"focus:outline-none","aria-label":"Hamburger Menu",children:Object(d.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",className:"h-7 w-7 fill-current text-secondary-dark dark:text-ternary-light",children:r?Object(d.jsx)(l.r,{className:"text-3xl"}):Object(d.jsx)(l.k,{className:"text-3xl"})})})})]}),Object(d.jsxs)("div",{className:r?"block m-0 sm:ml-4 mt-5 sm:mt-3 sm:flex p-5 sm:p-0 justify-center items-center shadow-lg sm:shadow-none":"hidden",children:[Object(d.jsx)(n.b,{to:"/projects",className:"block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2","aria-label":"Projects",children:"Projects"}),Object(d.jsx)(n.b,{to:"/about",className:"block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark","aria-label":"About Me",children:"About Me"}),Object(d.jsx)(n.b,{to:"/contact",className:"block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark","aria-label":"Contact",children:"Contact"}),Object(d.jsx)("div",{className:"border-t-2 pt-3 sm:pt-0 sm:border-t-0 border-primary-light dark:border-secondary-dark",children:Object(d.jsx)("span",{onClick:v,className:"font-general-medium sm:hidden block text-left text-md bg-indigo-500 hover:bg-indigo-600 text-white shadow-sm rounded-sm px-4 py-2 mt-2 duration-300 w-24","aria-label":"Hire Me Button",children:Object(d.jsx)(u.a,{title:"Hire Me"})})})]}),Object(d.jsxs)("div",{className:"font-general-medium hidden m-0 sm:ml-4 mt-5 sm:mt-3 sm:flex p-5 sm:p-0 justify-center items-center shadow-lg sm:shadow-none",children:[Object(d.jsx)(n.b,{to:"/projects",className:"block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2","aria-label":"Projects",children:"Projects"}),Object(d.jsx)(n.b,{to:"/about",className:"block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2","aria-label":"About Me",children:"About Me"}),Object(d.jsx)(n.b,{to:"/contact",className:"block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2","aria-label":"Contact",children:"Contact"})]}),Object(d.jsxs)("div",{className:"hidden sm:flex justify-between items-center flex-col md:flex-row",children:[Object(d.jsx)("div",{className:"hidden md:flex",children:Object(d.jsx)("span",{onClick:v,className:"text-md font-general-medium bg-indigo-500 hover:bg-indigo-600 text-white shadow-sm rounded-md px-5 py-2.5 duration-300","aria-label":"Hire Me Button",children:Object(d.jsx)(u.a,{title:"Hire Me"})})}),Object(d.jsx)("div",{onClick:function(){return O(f)},"aria-label":"Theme Switcher",className:"ml-8 bg-primary-light dark:bg-ternary-dark p-3 shadow-sm rounded-xl cursor-pointer",children:"dark"===f?Object(d.jsx)(l.l,{className:"text-ternary-dark hover:text-gray-400 dark:text-ternary-light dark:hover:text-primary-light text-xl"}):Object(d.jsx)(l.o,{className:"text-gray-200 hover:text-gray-50 text-xl"})})]})]}),Object(d.jsxs)("div",{children:[o?Object(d.jsx)(y,{onClose:v,onRequest:v}):null,o?v:null]})]})},O=(r(29),function(){var e=Object(s.useState)(!1),t=Object(b.a)(e,2),r=t[0],a=t[1];Object(s.useEffect)((function(){return window.addEventListener("scroll",n),function(){window.removeEventListener("scroll",n)}}));var n=function(){!r&&window.pageYOffset>400?a(!0):r&&window.pageYOffset<=400&&a(!1)};return window.addEventListener("scroll",n),Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(l.b,{className:"scrollToTop",onClick:function(){window.scrollTo({top:0,behavior:"smooth"})},style:{height:45,width:45,borderRadius:50,right:50,bottom:50,display:r?"flex":"none",padding:5}})})}),v=Object(s.lazy)((function(){return r.e(5).then(r.bind(null,49))})),w=Object(s.lazy)((function(){return r.e(7).then(r.bind(null,51))})),N=Object(s.lazy)((function(){return r.e(3).then(r.bind(null,52))})),C=Object(s.lazy)((function(){return r.e(4).then(r.bind(null,47))})),S=Object(s.lazy)((function(){return r.e(6).then(r.bind(null,50))}));var E=function(){return Object(d.jsx)(a.a,{children:Object(d.jsxs)("div",{className:" bg-secondary-light dark:bg-primary-dark transition duration-300",children:[Object(d.jsxs)(n.a,{children:[Object(d.jsx)(i,{}),Object(d.jsx)(f,{}),Object(d.jsx)(s.Suspense,{fallback:"",children:Object(d.jsxs)(c.c,{children:[Object(d.jsx)(c.a,{path:"/",element:Object(d.jsx)(N,{})}),Object(d.jsx)(c.a,{path:"projects",element:Object(d.jsx)(C,{})}),Object(d.jsx)(c.a,{path:"projects/single-project",element:Object(d.jsx)(S,{})}),Object(d.jsx)(c.a,{path:"about",element:Object(d.jsx)(v,{})}),Object(d.jsx)(c.a,{path:"contact",element:Object(d.jsx)(w,{})})]})}),Object(d.jsx)(x,{})]}),Object(d.jsx)(O,{})]})})},L=function(e){e&&e instanceof Function&&r.e(8).then(r.bind(null,48)).then((function(t){var r=t.getCLS,a=t.getFID,s=t.getFCP,n=t.getLCP,c=t.getTTFB;r(e),a(e),s(e),n(e),c(e)}))},T=r(25),M=document.getElementById("root");Object(T.createRoot)(M).render(Object(d.jsx)(E,{})),L()}},[[37,1,2]]]);
//# sourceMappingURL=main.93a3a7dc.chunk.js.map