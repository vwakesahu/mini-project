if(!self.define){let e,s={};const a=(a,n)=>(a=new URL(a+".js",n).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(n,c)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let t={};const r=e=>a(e,i),o={module:{uri:i},exports:t,require:r};s[i]=Promise.all(n.map((e=>o[e]||r(e)))).then((e=>(c(...e),t)))}}define(["./workbox-fb87826f"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"20ba149529884a4be66a6b3966b3a135"},{url:"/_next/static/chunks/0e5ce63c-37fc765c548116cc.js",revision:"nZvzkaeZOlc7hBVSCmKPp"},{url:"/_next/static/chunks/318-20fca6c61eddbba7.js",revision:"nZvzkaeZOlc7hBVSCmKPp"},{url:"/_next/static/chunks/3d47b92a-ced693ac50561613.js",revision:"nZvzkaeZOlc7hBVSCmKPp"},{url:"/_next/static/chunks/473-e61ad1a8cd4574b1.js",revision:"nZvzkaeZOlc7hBVSCmKPp"},{url:"/_next/static/chunks/479ba886-b8782940464aae2d.js",revision:"nZvzkaeZOlc7hBVSCmKPp"},{url:"/_next/static/chunks/5a799df0-281901509fcfd185.js",revision:"nZvzkaeZOlc7hBVSCmKPp"},{url:"/_next/static/chunks/607-a2dd8572d8d62f92.js",revision:"nZvzkaeZOlc7hBVSCmKPp"},{url:"/_next/static/chunks/638-a16dcd42a124ccce.js",revision:"nZvzkaeZOlc7hBVSCmKPp"},{url:"/_next/static/chunks/69-648d9e5023c014d2.js",revision:"nZvzkaeZOlc7hBVSCmKPp"},{url:"/_next/static/chunks/862-747c529d6370f4d8.js",revision:"nZvzkaeZOlc7hBVSCmKPp"},{url:"/_next/static/chunks/app/ContactUs/page-74f2a096e7149382.js",revision:"nZvzkaeZOlc7hBVSCmKPp"},{url:"/_next/static/chunks/app/_not-found-fd48dbff336bbf71.js",revision:"nZvzkaeZOlc7hBVSCmKPp"},{url:"/_next/static/chunks/app/buyProduct/page-5cb53c08743d8bf3.js",revision:"nZvzkaeZOlc7hBVSCmKPp"},{url:"/_next/static/chunks/app/category/page-1e836bcf4602afbd.js",revision:"nZvzkaeZOlc7hBVSCmKPp"},{url:"/_next/static/chunks/app/create-item/page-6b2fae0a0b7c41af.js",revision:"nZvzkaeZOlc7hBVSCmKPp"},{url:"/_next/static/chunks/app/exhibition/page-db8bdaa87c9d00b6.js",revision:"nZvzkaeZOlc7hBVSCmKPp"},{url:"/_next/static/chunks/app/layout-1e29faab8530733a.js",revision:"nZvzkaeZOlc7hBVSCmKPp"},{url:"/_next/static/chunks/app/menu/page-ff331d0761757241.js",revision:"nZvzkaeZOlc7hBVSCmKPp"},{url:"/_next/static/chunks/app/page-d1bf02cb8313e2a7.js",revision:"nZvzkaeZOlc7hBVSCmKPp"},{url:"/_next/static/chunks/app/paymentsuccess/page-6e3ab445fd77da1d.js",revision:"nZvzkaeZOlc7hBVSCmKPp"},{url:"/_next/static/chunks/app/trendy/page-2a135c2a2f827799.js",revision:"nZvzkaeZOlc7hBVSCmKPp"},{url:"/_next/static/chunks/bc9e92e6-8a99330827264927.js",revision:"nZvzkaeZOlc7hBVSCmKPp"},{url:"/_next/static/chunks/dc112a36-b0e438d22936fbf5.js",revision:"nZvzkaeZOlc7hBVSCmKPp"},{url:"/_next/static/chunks/e34aaff9-18823dd1d5ed915d.js",revision:"nZvzkaeZOlc7hBVSCmKPp"},{url:"/_next/static/chunks/fd9d1056-80117e785d5673dd.js",revision:"nZvzkaeZOlc7hBVSCmKPp"},{url:"/_next/static/chunks/framework-aec844d2ccbe7592.js",revision:"nZvzkaeZOlc7hBVSCmKPp"},{url:"/_next/static/chunks/main-1babf164e65f812e.js",revision:"nZvzkaeZOlc7hBVSCmKPp"},{url:"/_next/static/chunks/main-app-12df26918aca6779.js",revision:"nZvzkaeZOlc7hBVSCmKPp"},{url:"/_next/static/chunks/pages/_app-75f6107b0260711c.js",revision:"nZvzkaeZOlc7hBVSCmKPp"},{url:"/_next/static/chunks/pages/_error-9a890acb1e81c3fc.js",revision:"nZvzkaeZOlc7hBVSCmKPp"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-852aa202af27f359.js",revision:"nZvzkaeZOlc7hBVSCmKPp"},{url:"/_next/static/css/d3e281bffba24a6b.css",revision:"d3e281bffba24a6b"},{url:"/_next/static/media/05a31a2ca4975f99-s.woff2",revision:"f1b44860c66554b91f3b1c81556f73ca"},{url:"/_next/static/media/513657b02c5c193f-s.woff2",revision:"c4eb7f37bc4206c901ab08601f21f0f2"},{url:"/_next/static/media/51ed15f9841b9f9d-s.woff2",revision:"bb9d99fb9bbc695be80777ca2c1c2bee"},{url:"/_next/static/media/anime.bde1704c.jpg",revision:"10ba4b0518ca1fee8c91c6d7087de160"},{url:"/_next/static/media/bollywood.94802691.jpg",revision:"88d733504f53636fe89712cb287d1bed"},{url:"/_next/static/media/c9a5bc6a7c948fb0-s.p.woff2",revision:"74c3556b9dad12fb76f84af53ba69410"},{url:"/_next/static/media/d6b16ce4a6175f26-s.woff2",revision:"dd930bafc6297347be3213f22cc53d3e"},{url:"/_next/static/media/ec159349637c90ad-s.woff2",revision:"0e89df9522084290e01e4127495fae99"},{url:"/_next/static/media/emptyCart.96d27f4b.svg",revision:"840927a478f9d9f9e9f689935a8a9404"},{url:"/_next/static/media/fd4db3eb5472fc27-s.woff2",revision:"71f3fcaf22131c3368d9ec28ef839831"},{url:"/_next/static/media/nonfound.d739a57c.svg",revision:"1d307f4eb0a9595f6988b88119359a58"},{url:"/_next/static/media/roll models.c557c3c2.webp",revision:"7c6af80159d82ee6606a670ee22fdcd3"},{url:"/_next/static/nZvzkaeZOlc7hBVSCmKPp/_buildManifest.js",revision:"e0a21c7d7f93d89dce16df0231dc76f2"},{url:"/_next/static/nZvzkaeZOlc7hBVSCmKPp/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/icons/android-chrome-192x192.png",revision:"62ad98ff0b7e9f737e3423204126225e"},{url:"/icons/android-chrome-384x384.png",revision:"52a1af0ed5e5b01eeded7fc244178653"},{url:"/icons/icon-512x512.png",revision:"a905d732285a3040cb6c2967844be681"},{url:"/manifest.json",revision:"53a9cd45468dcb877eee12fe45703c81"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/swe-worker-development.js",revision:"2317afc06ee70dae7a5ca090a6830494"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
