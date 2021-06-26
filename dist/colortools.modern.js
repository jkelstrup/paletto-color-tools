function r({r,g:t,b:n}){return r=r/255<=.03928?r/255/12.92:Math.pow((r/255+.055)/1.055,2.4),t=t/255<=.03928?t/255/12.92:Math.pow((t/255+.055)/1.055,2.4),n=n/255<=.03928?n/255/12.92:Math.pow((n/255+.055)/1.055,2.4),Math.round(1e3*(.2126*r+.7152*t+.0722*n))/1e3}function t(r){if("#"!==r.substring(0,1))throw new Error(`Invalid input (${r}). Input must start with "#".`);if(7!==r.length)throw new Error(`Invalid input (${r}). Input should be #000000-#FFFFFF. Also, shorthand not allowed.`);let t=parseInt(r.substring(1,3),16),n=parseInt(r.substring(3,5),16),e=parseInt(r.substring(5,7),16);return{r:t,g:n,b:e,rgb:`rgb(${t},${n},${e})`}}function n({h:r,s:t,l:n}){if(r<0||r>360||t<0||t>100||n<0||n>100)throw new Error("Invalid input. Input should be h: 0-360, s: 0-100, l: 0-100.");let e,s,a;if(r/=360,n/=100,0==(t/=100))e=s=a=n;else{function h(r,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?r+6*(t-r)*n:n<.5?t:n<2/3?r+(t-r)*(2/3-n)*6:r}let i=n<.5?n*(1+t):n+t-n*t,o=2*n-i;e=h(o,i,r+1/3),s=h(o,i,r),a=h(o,i,r-1/3)}return e=Math.round(255*e),s=Math.round(255*s),a=Math.round(255*a),{r:e,g:s,b:a,rgb:`rgb(${e},${s},${a})`}}function e(r){return"string"==typeof r&&"#"===r.substring(0,1)&&parseInt(r.substring(1,3),16)>=0&&parseInt(r.substring(1,3),16)<=255&&parseInt(r.substring(3,5),16)>=0&&parseInt(r.substring(3,5),16)<=255&&parseInt(r.substring(5,7),16)>=0&&parseInt(r.substring(5,7),16)<=255}function s(r){return r.h>=0&&r.h<=360&&r.s>=0&&r.s<=100&&r.l>=0&&r.l<=100}function a(r){return r.r>=0&&r.r<=255&&r.g>=0&&r.g<=255&&r.b>=0&&r.b<=255}function h({r,g:t,b:n}){function e(r){let t=r.toString(16);return 1===t.length&&(t="0"+t),t.toUpperCase()}return"#"+e(r)+e(t)+e(n)}function i({r,g:t,b:n}){r/=255,t/=255,n/=255;let e,s,a=Math.max(r,t,n),h=Math.min(r,t,n),i=a-h,o=(a+h)/2;if(0===i)e=s=0;else{switch(s=o>.5?i/(2-a-h):i/(a+h),a){case r:e=(t-n)/i+(t<n?6:0);break;case t:e=(n-r)/i+2;break;case n:e=(r-t)/i+4;break;default:e=0}e/=6}return e=Math.round(360*e),s=Math.round(100*s),o=Math.round(100*o),{h:e,s,l:o,hsl:`hsl(${e},${s},${o})`}}function o({r,g:t,b:n}){return{r,g:t,b:n,rgb:`rgb(${r},${t},${n})`}}function u(u){let l,g,b,p;if(a(u))l="rgb",g=o(u),b=i(u),p=h(u);else if(s(u))l="hsl",b=function({h:r,s:t,l:n}){return{h:r,s:t,l:n,hsl:`hsl(${r},${t}%,${n}%)`}}(u),g=n(u),p=h(g);else{if(!e(u))throw console.error("Bad input",u),new Error("Bad input!");l="hex",p=u,g=t(u),b=i(g)}return Object.assign({},g,{hex:p},b,{lum:r(g)},{src:l})}function l(r,t){let n;if(t.hasOwnProperty("red")||t.hasOwnProperty("green")||t.hasOwnProperty("blue")){let{r:e,g:s,b:a}=r;e=Math.max(Math.min(e+(t.red||0),255),0),s=Math.max(Math.min(s+(t.green||0),255),0),a=Math.max(Math.min(a+(t.blue||0),255),0),n=u({r:e,g:s,b:a})}else if(t.hasOwnProperty("hue")||t.hasOwnProperty("saturation")||t.hasOwnProperty("lightness")){let{h:e,s,l:a}=r;e+=(t.hue||0)%360,e<0&&(e=360-e),s=Math.max(Math.min(s+(t.saturation||0),100),0),a=Math.max(Math.min(a+(t.lightness||0),100),0),n=u({h:e,s,l:a})}return n}function g(r,t){let n;if(t.hasOwnProperty("r")||t.hasOwnProperty("g")||t.hasOwnProperty("b"))n=u({r:void 0!==t.r?parseInt(t.r):r.r,g:void 0!==t.g?parseInt(t.g):r.g,b:void 0!==t.b?parseInt(t.b):r.b});else{if(!(t.hasOwnProperty("h")||t.hasOwnProperty("s")||t.hasOwnProperty("l")))throw console.error("Bad input",t),new Error("Bad input!");n=u({h:void 0!==t.h?parseInt(t.h):r.h,s:void 0!==t.s?parseInt(t.s):r.s,l:void 0!==t.l?parseInt(t.l):r.l})}return n}const b={adjust:l,calcContrast:function(r,t){let n=0,e=0,s=0;if(r.hasOwnProperty("lum"))n=r.lum;else{if(!(r>=0||r<=1))throw new Error(`Invalid input (${r}).`);n=r}if(t.hasOwnProperty("lum"))e=t.lum;else{if(!(t>=0||t<=1))throw new Error(`Invalid input (${t}).`);e=t}return s=n===e?1:n>e?(n+.05)/(e+.05):(e+.05)/(n+.05),s},calcLum:r,createColor:u,darken:function(r,t){if(t<=0||t>100)throw new Error(`Bad input: ${t}`);let{h:n,s:e,l:s}=r;return s*=t=1-(t/=100),u({h:n,s:e,l:s})},hexToRgb:t,hslToRgb:n,invert:function(r){return u({r:255-r.r,g:255-r.g,b:255-r.b})},isValidHex:e,isValidHsl:s,isValidRgb:a,lighten:function(r,t){if(t<=0||t>100)throw new Error(`Bad input: ${t}`);let{h:n,s:e,l:s}=r;return s+=(100-s)*(t/=100),u({h:n,s:e,l:s})},matchLum:function(r,t){t=Math.round(1e3*t)/1e3;let n=u(r);if(t===n.lum)return r;if(0===t)n=g(n,{l:0});else if(n.lum<t){let r=0;for(;n.lum<t&&r<100;)n=l(n,{lightness:1})}else if(n.lum>t){let r=0;for(;n.lum>t&&r<100;)n=l(n,{lightness:-1})}return n},redefine:g,rgbToHex:h,rgbToHsl:i,rgbToRgb:o,scale:function(r,t){let n;if(t.hasOwnProperty("red")||t.hasOwnProperty("green")||t.hasOwnProperty("blue")){let{r:e,g:s,b:a}=r;e=Math.max(Math.min(e*(t.red||1),255),0),s=Math.max(Math.min(s*(t.green||1),255),0),a=Math.max(Math.min(a*(t.blue||1),255),0),n=u({r:e,g:s,b:a})}else if(t.hasOwnProperty("hue")||t.hasOwnProperty("saturation")||t.hasOwnProperty("lightness")){let{h:e,s,l:a}=r;e=e*(t.hue||1)%360,e<0&&(e=360-e),s=Math.max(Math.min(s*(t.saturation||1),100),0),a=Math.max(Math.min(a*(t.lightness||1),100),0),n=u({h:e,s,l:a})}return n},step:function(r,t,n){let e=[],s=[],a=[],h=Math.round((t.r-r.r)/(n+1)),i=Math.round((t.g-r.g)/(n+1)),o=Math.round((t.b-r.b)/(n+1));for(let t=0;t<n;t++)e[t]=r.r+h*(t+1),s[t]=r.g+i*(t+1),a[t]=r.b+o*(t+1);let l=[];for(let r=0;r<n;r++)l[r]=u({r:e[r],g:s[r],b:a[r]});return l}};export default b;
//# sourceMappingURL=colortools.modern.js.map
