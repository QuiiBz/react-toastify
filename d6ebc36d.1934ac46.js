(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{140:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return b}));var a=n(1),o=n(6),i=(n(0),n(146)),r={id:"migration-v8",title:"Migrate to v8",sidebar_label:"\ud83d\ude80 Migrate to v8"},s={id:"migration-v8",title:"Migrate to v8",description:"React-toastify has been around for 5 years(will turn five the 8 November \ud83c\udf82). Since the beginning, one of the goals was to provide a library that is highly customizable and also able to work out of the box. Every major release introduces breaking changes but this is for the best \ud83d\udc4c.",source:"@site/docs/migrate-to-v8.md",permalink:"/react-toastify/migration-v8",editUrl:"https://github.com/fkhadra/react-toastify-doc/edit/master/docs/migrate-to-v8.md",sidebar_label:"\ud83d\ude80 Migrate to v8",sidebar:"someSidebar",previous:{title:"Installation",permalink:"/react-toastify/installation"},next:{title:"Release notes",permalink:"/react-toastify/release-notes"}},c=[{value:"What is new in v8",id:"what-is-new-in-v8",children:[{value:"Who doesn&#39;t like icons",id:"who-doesnt-like-icons",children:[]},{value:"Clear separation between type and theme",id:"clear-separation-between-type-and-theme",children:[]},{value:"I promise this is new, I&#39;ll tell you if you await",id:"i-promise-this-is-new-ill-tell-you-if-you-await",children:[]},{value:"Pass data even when you are not rendering a react component",id:"pass-data-even-when-you-are-not-rendering-a-react-component",children:[]},{value:"I just want to change few colors",id:"i-just-want-to-change-few-colors",children:[]}]},{value:"Breaking changes",id:"breaking-changes",children:[]}],l={rightToc:c};function b(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"React-toastify has been around for 5 years(will turn five the 8 November \ud83c\udf82). Since the beginning, one of the goals was to provide a library that is highly customizable and also able to work out of the box. Every major release introduces breaking changes but this is for the best \ud83d\udc4c."),Object(i.b)("h2",{id:"what-is-new-in-v8"},"What is new in v8"),Object(i.b)("p",null,"A video is worth a thousand words."),Object(i.b)("iframe",{width:"100%",height:"415",src:"https://www.youtube.com/embed/cZ4Uj4ojTH4",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),Object(i.b)("h3",{id:"who-doesnt-like-icons"},"Who doesn't like icons"),Object(i.b)("p",null,"Let's break down what is happening in the video above. Notifications of different types (",Object(i.b)("inlineCode",{parentName:"p"},"toast.info"),", ",Object(i.b)("inlineCode",{parentName:"p"},"toast.error"),", ",Object(i.b)("inlineCode",{parentName:"p"},"toast.success"),", ",Object(i.b)("inlineCode",{parentName:"p"},"toast.warning"),") display an icon associated with the selected type. You can also notice that the progress bar color matches the type color."),Object(i.b)("img",{width:"200",alt:"v8-icons-light",src:"https://user-images.githubusercontent.com/5574267/130860515-c9cf2b64-88b4-4711-971f-9149ec497152.png"}),Object(i.b)("img",{width:"200",alt:"v8-icons-dark",src:"https://user-images.githubusercontent.com/5574267/130860512-3a165ce6-7af3-4c24-8e81-f3f5a4561841.png"}),Object(i.b)("img",{width:"200",alt:"v8-icons-colored",src:"https://user-images.githubusercontent.com/5574267/130860506-750d2799-fb73-45cf-971a-7f4f3f8f48ce.png"}),Object(i.b)("p",null,"Don't be afraid \ud83d\ude31, if you don't like those icons you can use your own or remove them. This is what it looks like in practice."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),'toast("Default toast behavior is untouched, no icon to display");\ntoast.info("Lorem ipsum dolor"); // same as toast(message, {type: "info"});\ntoast.error("Lorem ipsum dolor")\ntoast.success("Lorem ipsum dolor")\ntoast.warn("Lorem ipsum dolor")\ntoast.error("Without icon", {\n  icon: false\n});\ntoast.success("You can provide any string", {\n  icon: "\ud83d\ude80"\n});\n// custom icons have access to the theme and the toast type\ntoast.success("And of course a component of your choice", {\n  icon: MyIcon\n});\ntoast.success("Even a function, given you return something that can be rendered", {\n  icon: ({theme, type}) =>  <img src="url"/>\n});\n//Disable icons\n<ToastContainer icon={false} />\n')),Object(i.b)("h3",{id:"clear-separation-between-type-and-theme"},"Clear separation between type and theme"),Object(i.b)("p",null,"Prior to v8, ",Object(i.b)("inlineCode",{parentName:"p"},"toast.info"),", ",Object(i.b)("inlineCode",{parentName:"p"},"toast.error"),", etc... Would display respectively a blue notification, a red notification, etc... This is not the case anymore. There are 3 distinct themes: ",Object(i.b)("inlineCode",{parentName:"p"},"light"),", ",Object(i.b)("inlineCode",{parentName:"p"},"dark"),", ",Object(i.b)("inlineCode",{parentName:"p"},"colored"),". The theme can be applied globally or per notification."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),'//Set the theme globally \n<ToastContainer theme="dark" />\n\n// define per toast\ntoast.info("Display a dark notification of type info");\ntoast.info("Display a light notification of type info", { theme: "light" });\ntoast.info("Display a blue notification of type info", { theme: "colored" });\n')),Object(i.b)("p",null,"This separation will benefit theming in the future."),Object(i.b)("h3",{id:"i-promise-this-is-new-ill-tell-you-if-you-await"},"I promise this is new, I'll tell you if you await"),Object(i.b)("img",{width:"400",alt:"v8-promise",src:"https://user-images.githubusercontent.com/5574267/130862557-8d13ddf0-c6bf-4f52-968a-1d91c62b6016.png"}),Object(i.b)("img",{width:"400",alt:"v8-promise-resolved",src:"https://user-images.githubusercontent.com/5574267/130862554-652397ed-1b1e-40d4-a250-c38734ec8e5d.png"}),Object(i.b)("p",null,"The library exposes a ",Object(i.b)("inlineCode",{parentName:"p"},"toast.promise")," function. Supply a promise and the notification will be updated if it resolves or fails. When the promise is pending a spinner is displayed. Again you hide it, I bet you already know how to\ud83d\ude06."),Object(i.b)("p",null,"Let's start with a simple example"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"const resolveAfter3Sec = new Promise(resolve => setTimeout(resolve, 3000));\ntoast.promise(\n    resolveAfter3Sec,\n    {\n      pending: 'Promise is pending',\n      success: 'Promise resolved \ud83d\udc4c',\n      error: 'Promise rejected \ud83e\udd2f'\n    }\n)\n")),Object(i.b)("p",null,"Displaying a simple message is what you would want to do in 90% of cases. But what if the message you want to display depends on the promise response, what if you want to change some options for the error notification? Rest assured, under the hood, the library uses ",Object(i.b)("inlineCode",{parentName:"p"},"toast.update"),". Thanks to this, you have full control over each notification."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),'const resolveWithSomeData = new Promise(resolve => setTimeout(() => resolve("world"), 3000));\ntoast.promise(\n    resolveAfter3Sec,\n    {\n      pending: \'Promise is pending\',\n      success: {\n        render({data}){\n          return `Hello ${data}`\n        },\n        // other options\n        icon: "\ud83d\udfe2",\n      },\n      error: {\n        render({data}){\n          // When the promise reject, data will contains the error\n          return <MyErrorComponent message={data.message} />\n        }\n      }\n    }\n)\n')),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"Because you have the full power of ",Object(i.b)("inlineCode",{parentName:"h5"},"toast.update"),", you can even supply a custom transition if you want \ud83e\udd2f")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("img",{width:"300",alt:"v8-promise-resolved",src:"https://user-images.githubusercontent.com/5574267/130869645-586777a3-3326-4664-917e-a13aee367c43.gif"}))),Object(i.b)("p",null,"If you want to take care of each step yourself you can use ",Object(i.b)("inlineCode",{parentName:"p"},"toast.loading")," and update the notification yourself."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),'const id = toast.loading("Please wait...")\n//do something else\ntoast.update(id, { render: "All is good", type: "success" });\n')),Object(i.b)("h3",{id:"pass-data-even-when-you-are-not-rendering-a-react-component"},"Pass data even when you are not rendering a react component"),Object(i.b)("p",null,"One way to pass data to the notification was to use the context api or provide your own component. Starting v8 a ",Object(i.b)("inlineCode",{parentName:"p"},"data")," option is now available to make it easier."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),'toast(({data}) => `Hello ${data}`, {\n  data: "world"\n})\n')),Object(i.b)("h3",{id:"i-just-want-to-change-few-colors"},"I just want to change few colors"),Object(i.b)("p",null,"Most of the time, users are ok with the default style, they just want to change some colors to match their brand. I think one way to improve the DX for all of us is to embrace CSS variables. That's why the library has switched to css variables!\nAll you want is to change the color of the progress bar? No problem"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-css"}),":root{\n  // this is the default value below\n  --toastify-color-progress-light: linear-gradient(\n    to right,\n    #4cd964,\n    #5ac8fa,\n    #007aff,\n    #34aadc,\n    #5856d6,\n    #ff2d55\n  );\n}\n")),Object(i.b)("p",null,"You can find the list of all exposed variables ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/react-toastify/how-to-style#override-css-variables"}),"here")),Object(i.b)("h2",{id:"breaking-changes"},"Breaking changes"),Object(i.b)("p",null,"There are few breaking changes. "),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"The separation between theme and type. The type ",Object(i.b)("inlineCode",{parentName:"li"},"dark")," has been removed")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),'// before v8\ntoast("hello", {\n  type: "dark"\n})\n// toast.TYPE.DARK is no longer available\n\n// in v8\ntoast("hello", {\n  theme: "dark"\n})\n// or\ntoast.dark("hello")\n')),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Notifications of different types are not colored by default, but they look pretty by default now \ud83d\ude06. You can use the ",Object(i.b)("inlineCode",{parentName:"li"},"colored")," theme to get the same behavior as the previous version")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),'toast.info("hello", {\n  theme: "colored"\n})\n// or apply the theme globally\n<ToastContainer theme="colored" />\n')),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"An icon is displayed by default for the notificaiton of type ",Object(i.b)("inlineCode",{parentName:"li"},"info"),", ",Object(i.b)("inlineCode",{parentName:"li"},"error"),", ",Object(i.b)("inlineCode",{parentName:"li"},"warning"),", ",Object(i.b)("inlineCode",{parentName:"li"},"success"))),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),'// to opt-out gloablly from this behavior\n<ToastContainer icon={false} />\n\n// or per toast\ntoast.info("hello", {\n  icon: false\n});\n')),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"the following css classes has been removed")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-css"}),".Toastify__toast--dark {\n}\n.Toastify__toast--default {\n}\n.Toastify__toast--info {\n}\n.Toastify__toast--success {\n}\n.Toastify__toast--warning {\n}\n.Toastify__toast--error {\n}\n")),Object(i.b)("p",null,"That's it for this release. Thank you for using react-toastify and happy coding!"))}b.isMDXComponent=!0},146:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return h}));var a=n(0),o=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),b=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s({},t,{},e)),n},p=function(e){var t=b(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=b(n),u=a,h=p["".concat(r,".").concat(u)]||p[u]||d[u]||i;return n?o.a.createElement(h,s({ref:t},l,{components:n})):o.a.createElement(h,s({ref:t},l))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var l=2;l<i;l++)r[l]=n[l];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);