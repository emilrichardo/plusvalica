"use strict";(self.webpackChunkgatsby_starter_hello_world=self.webpackChunkgatsby_starter_hello_world||[]).push([[102],{6810:function(e,t,n){var l=n(7294);t.Z=function(e){var t=e.children,n=e.className,a=e.size,r={default:"  ",md:" max-w-screen-md px-5 md:px-24 ",lg:" max-w-screen-lg px-5 md:px-24 ",xl:" max-w-screen-xl px-5 md:px-24 ",xxl:" max-w-screen-2xl px-5 md:px-24 "};return l.createElement("div",{className:"\n        container \n         "+n+" \n        "+(r[a]||r.default)+"\n         mx-auto  py-4 md:py-14\n    "},t)}},1202:function(e,t,n){var l=n(7294),a={default:"  md:text-2xl text-2xl mb-4",md:"  md:text-4xl text-2xl mb-5",lg:"  md:text-6xl text-2xl mb-6",xl:"  md:text-7xl text-4xl mb-7",xxl:"  md:text-9xl text-4xl mb-7"};t.Z=function(e){var t=e.children,n=e.size,r=(e.level,e.className);return l.createElement(l.Fragment,null,l.createElement("h2",{className:"\n            "+r+" \n            "+(a[n]||a.default)+"\n             font-normal title-font tracking-wide\n            "},t))}},993:function(e,t,n){n.r(t),n.d(t,{default:function(){return u}});var l=n(7294),a=n(5414),r=n(1721),m=n(1202),c=n(6810),s=n(5444),x=function(e){var t=e.post;return l.createElement("article",{className:"mt-14 mb-14",key:t.id},l.createElement(s.Link,{className:"text-primary",to:"/"+t.slug+"/"},l.createElement("h2",{className:"text-2xl md:text-4xl"},t.title)),l.createElement("small",null,t.date," - posted by ",t.author.name,l.createElement(s.Link,{to:"/author/"+t.author.slug},t.author.name)),l.createElement("div",{className:"mt-2 text-md",dangerouslySetInnerHTML:{__html:t.excerpt}}))},o=function(e){function t(){return e.apply(this,arguments)||this}return(0,r.Z)(t,e),t.prototype.render=function(){var e=this.props,t=e.posts,n=e.title,a=e.count;return l.createElement(c.Z,{size:"lg"},l.createElement("div",{className:"content"},l.createElement(m.Z,{size:"xl"},n),l.createElement("h6",null,a,1===a?" publicacion ":" publicaciones ")),t.map((function(e){var t=e.node;return l.createElement(x,{post:t})})))},t}(l.Component),u=function(e){var t=e.data,n=e.pageContext,r=t.allWpPost,m=r.edges,c=r.totalCount,s=t.site.siteMetadata.title,x=n.name;return l.createElement(l.Fragment,null,l.createElement(a.Z,{title:x+" | "+s}),l.createElement(o,{posts:m,title:x,count:c}))}}}]);
//# sourceMappingURL=component---src-templates-category-js-34a04910a13cbf1ab3f8.js.map