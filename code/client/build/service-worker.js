"use strict";var precacheConfig=[["/index.html","ca50cec30c07fed7407208fa36c48eaa"],["/static/css/main.fa166c95.css","b09190d0fb75476d6914aeae7f45ab88"],["/static/js/main.04f42154.js","c6720cf616acfaac6f39300bc370db7f"],["/static/media/1.2519e7ad.jpg","2519e7adf907460e35cc574af26a5fbd"],["/static/media/arrow_down.ebe1c3a6.svg","ebe1c3a69ddb3b046edbb1f11f689d78"],["/static/media/cart.4dfa156e.svg","4dfa156e444147e64a0755b3a6a9a111"],["/static/media/default_pic.9a3a77b0.svg","9a3a77b036e71e348abe3dfabb4e5486"],["/static/media/iphone_xr.387846cc.jpg","387846cc92acb6076721ecd6e85f651c"],["/static/media/magic_keyboard.bd2b59fd.jpg","bd2b59fdd7964ea6ad794f323a523062"],["/static/media/market.e7167249.svg","e716724995e7c399f5b43ccd5281121b"],["/static/media/mbp_13.a713397b.jpg","a713397b3b8387dbc1870b9c2c4e0a40"],["/static/media/mbp_15.fc827b14.jpg","fc827b1423ec0bdd00b796e7d41271f3"],["/static/media/products.8efc3b3f.svg","8efc3b3f75efd836d0ae7daf54b6e33e"],["/static/media/support.e3be11d1.svg","e3be11d199e470c8f7bdf339cd21fbd5"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var r="/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});