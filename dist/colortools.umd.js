!function(r,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((r||self).palettoColorTools={})}(this,function(r){function t(r){var t=r.r,n=r.g,e=r.b;return t=t/255<=.03928?t/255/12.92:Math.pow((t/255+.055)/1.055,2.4),n=n/255<=.03928?n/255/12.92:Math.pow((n/255+.055)/1.055,2.4),e=e/255<=.03928?e/255/12.92:Math.pow((e/255+.055)/1.055,2.4),Math.round(1e3*(.2126*t+.7152*n+.0722*e))/1e3}function n(r){if("#"!==r.substring(0,1))throw new Error("Invalid input ("+r+'). Input must start with "#".');if(7!==r.length)throw new Error("Invalid input ("+r+"). Input should be #000000-#FFFFFF. Also, shorthand not allowed.");var t=parseInt(r.substring(1,3),16),n=parseInt(r.substring(3,5),16),e=parseInt(r.substring(5,7),16);return{r:t,g:n,b:e,rgb:"rgb("+t+","+n+","+e+")"}}function e(r){var t,n,e,a=r.h,s=r.s,o=r.l;if(a<0||a>360||s<0||s>100||o<0||o>100)throw new Error("Invalid input. Input should be h: 0-360, s: 0-100, l: 0-100.");if(a/=360,o/=100,0==(s/=100))t=n=e=o;else{var i=function(r,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?r+6*(t-r)*n:n<.5?t:n<2/3?r+(t-r)*(2/3-n)*6:r},h=o<.5?o*(1+s):o+s-o*s,u=2*o-h;t=i(u,h,a+1/3),n=i(u,h,a),e=i(u,h,a-1/3)}return{r:t=Math.round(255*t),g:n=Math.round(255*n),b:e=Math.round(255*e),rgb:"rgb("+t+","+n+","+e+")"}}function a(r){return"string"==typeof r&&"#"===r.substring(0,1)&&parseInt(r.substring(1,3),16)>=0&&parseInt(r.substring(1,3),16)<=255&&parseInt(r.substring(3,5),16)>=0&&parseInt(r.substring(3,5),16)<=255&&parseInt(r.substring(5,7),16)>=0&&parseInt(r.substring(5,7),16)<=255}function s(r){return r.h>=0&&r.h<=360&&r.s>=0&&r.s<=100&&r.l>=0&&r.l<=100}function o(r){return r.r>=0&&r.r<=255&&r.g>=0&&r.g<=255&&r.b>=0&&r.b<=255}function i(r){var t=r.g,n=r.b;function e(r){var t=r.toString(16);return 1===t.length&&(t="0"+t),t.toUpperCase()}return"#"+e(r.r)+e(t)+e(n)}function h(r){var t=r.r,n=r.g,e=r.b;t/=255,n/=255,e/=255;var a,s,o=Math.max(t,n,e),i=Math.min(t,n,e),h=o-i,u=(o+i)/2;if(0===h)a=s=0;else{switch(s=u>.5?h/(2-o-i):h/(o+i),o){case t:a=(n-e)/h+(n<e?6:0);break;case n:a=(e-t)/h+2;break;case e:a=(t-n)/h+4;break;default:a=0}a/=6}return{h:a=Math.round(360*a),s:s=Math.round(100*s),l:u=Math.round(100*u),hsl:"hsl("+a+","+s+","+u+")"}}function u(r){var t=r.r,n=r.g,e=r.b;return{r:t,g:n,b:e,rgb:"rgb("+t+","+n+","+e+")"}}function l(r){var l,g,b,f,p,d,c,w;if(o(r))l="rgb",g=u(r),b=h(r),f=i(r);else if(s(r))l="hsl",b={h:d=(p=r).h,s:c=p.s,l:w=p.l,hsl:"hsl("+d+","+c+"%,"+w+"%)"},g=e(r),f=i(g);else{if(!a(r))throw console.error("Bad input",r),new Error("Bad input!");l="hex",f=r,b=h(g=n(r))}return Object.assign({},g,{hex:f},b,{lum:t(g)},{src:l},{toString:function(){return f}})}function g(r,t){var n;if(t.hasOwnProperty("red")||t.hasOwnProperty("green")||t.hasOwnProperty("blue")){var e=r.r,a=r.g,s=r.b;n=l({r:e=Math.max(Math.min(e+(t.red||0),255),0),g:a=Math.max(Math.min(a+(t.green||0),255),0),b:s=Math.max(Math.min(s+(t.blue||0),255),0)})}else if(t.hasOwnProperty("hue")||t.hasOwnProperty("saturation")||t.hasOwnProperty("lightness")){var o=r.h,i=r.s,h=r.l;(o+=(t.hue||0)%360)<0&&(o=360-o),n=l({h:o,s:i=Math.max(Math.min(i+(t.saturation||0),100),0),l:h=Math.max(Math.min(h+(t.lightness||0),100),0)})}return n}function b(r,t){var n=0,e=0;if(r.hasOwnProperty("lum"))n=r.lum;else{if(!(r>=0||r<=1))throw new Error("Invalid input ("+r+").");n=r}if(t.hasOwnProperty("lum"))e=t.lum;else{if(!(t>=0||t<=1))throw new Error("Invalid input ("+t+").");e=t}return n===e?1:n>e?(n+.05)/(e+.05):(e+.05)/(n+.05)}function f(r,t){if(t<=0||t>100)throw new Error("Bad input: "+t);var n=r.l;return l({h:r.h,s:r.s,l:n*=t=1-(t/=100)})}function p(r){return l({r:255-r.r,g:255-r.g,b:255-r.b})}function d(r,t){if(t<=0||t>100)throw new Error("Bad input: "+t);var n=r.l;return l({h:r.h,s:r.s,l:n+=(100-n)*(t/=100)})}function c(r,t){var n;if(t.hasOwnProperty("r")||t.hasOwnProperty("g")||t.hasOwnProperty("b"))n=l({r:void 0!==t.r?parseInt(t.r):r.r,g:void 0!==t.g?parseInt(t.g):r.g,b:void 0!==t.b?parseInt(t.b):r.b});else{if(!(t.hasOwnProperty("h")||t.hasOwnProperty("s")||t.hasOwnProperty("l")))throw console.error("Bad input",t),new Error("Bad input!");n=l({h:void 0!==t.h?parseInt(t.h):r.h,s:void 0!==t.s?parseInt(t.s):r.s,l:void 0!==t.l?parseInt(t.l):r.l})}return n}function w(r,t){t=Math.round(1e3*t)/1e3;var n=l(r);if(t===n.lum)return r;if(0===t)n=c(n,{l:0});else if(n.lum<t)for(;n.lum<t;)n=g(n,{lightness:1});else if(n.lum>t)for(;n.lum>t;)n=g(n,{lightness:-1});return n}function m(r,t){var n;if(t.hasOwnProperty("red")||t.hasOwnProperty("green")||t.hasOwnProperty("blue")){var e=r.r,a=r.g,s=r.b;n=l({r:e=Math.max(Math.min(e*(t.red||1),255),0),g:a=Math.max(Math.min(a*(t.green||1),255),0),b:s=Math.max(Math.min(s*(t.blue||1),255),0)})}else if(t.hasOwnProperty("hue")||t.hasOwnProperty("saturation")||t.hasOwnProperty("lightness")){var o=r.h,i=r.s,h=r.l;(o=o*(t.hue||1)%360)<0&&(o=360-o),n=l({h:o,s:i=Math.max(Math.min(i*(t.saturation||1),100),0),l:h=Math.max(Math.min(h*(t.lightness||1),100),0)})}return n}function v(r,t,n){for(var e=[],a=[],s=[],o=Math.round((t.r-r.r)/(n+1)),i=Math.round((t.g-r.g)/(n+1)),h=Math.round((t.b-r.b)/(n+1)),u=0;u<n;u++)e[u]=r.r+o*(u+1),a[u]=r.g+i*(u+1),s[u]=r.b+h*(u+1);for(var g=[],b=0;b<n;b++)g[b]=l({r:e[b],g:a[b],b:s[b]});return g}var M={adjust:g,calcContrast:b,calcLum:t,createColor:l,darken:f,hexToRgb:n,hslToRgb:e,invert:p,isValidHex:a,isValidHsl:s,isValidRgb:o,lighten:d,matchLum:w,redefine:c,rgbToHex:i,rgbToHsl:h,rgbToRgb:u,scale:m,step:v};r.adjust=g,r.calcContrast=b,r.calcLum=t,r.createColor=l,r.darken=f,r.default=M,r.hexToRgb=n,r.hslToRgb=e,r.invert=p,r.isValidHex=a,r.isValidHsl=s,r.isValidRgb=o,r.lighten=d,r.matchLum=w,r.redefine=c,r.rgbToHex=i,r.rgbToHsl=h,r.rgbToRgb=u,r.scale=m,r.step=v});
//# sourceMappingURL=colortools.umd.js.map
