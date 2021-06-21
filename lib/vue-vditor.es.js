var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
import { defineComponent, openBlock, createBlock } from "vue";
import Vditor from "vditor";
import { ref, computed, onMounted, toRaw, watch } from "vue-demi";
import { nanoid } from "nanoid";
var index$1 = `/*!
 * Vditor v3.8.5 - A markdown editor written in TypeScript.
 *
 * MIT License
 *
 * Copyright (c) 2018-present B3log \u5F00\u6E90, b3log.org
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */
.vditor{--border-color: #d1d5da;--second-color: rgba(88, 96, 105, 0.36);--panel-background-color: #fff;--panel-shadow: 0 1px 2px rgba(0, 0, 0, .2);--toolbar-background-color: #f6f8fa;--toolbar-icon-color: #586069;--toolbar-icon-hover-color: #4285f4;--toolbar-height: 35px;--toolbar-divider-margin-top: 8px;--textarea-background-color: #fafbfc;--textarea-text-color: #24292e;--resize-icon-color: var(--toolbar-icon-color);--resize-background-color: var(--toolbar-background-color);--resize-hover-icon-color: var(--panel-background-color);--resize-hover-background-color: var(--toolbar-icon-hover-color);--count-background-color:rgba(27, 31, 35, .05);--heading-border-color: #eaecef;--blockquote-color: #6a737d;--ir-heading-color: #660e7a;--ir-title-color: #808080;--ir-bi-color: #0033b3;--ir-link-color: #008000;--ir-bracket-color: #0000ff;--ir-paren-color: #008000}.vditor--dark{--border-color: #141414;--second-color: rgba(185, 185, 185, .36);--panel-background-color: #24292e;--panel-shadow: 0 1px 2px rgba(255, 255, 255, .2);--toolbar-background-color: #1d2125;--toolbar-icon-color: #b9b9b9;--toolbar-icon-hover-color: #fff;--textarea-background-color: #2f363d;--textarea-text-color: #d1d5da;--resize-icon-color: var(--border-color);--resize-background-color: var(--second-color);--resize-hover-icon-color: var(--toolbar-icon-hover-color);--resize-hover-background-color: rgba(185, 185, 185, .86);--count-background-color:  rgba(66,133,244,0.36);--heading-border-color: var(--textarea-text-color);--blockquote-color: var(--toolbar-icon-color);--ir-heading-color: #9876aa;--ir-title-color: #808080;--ir-bi-color: #cc7832;--ir-link-color: #ffc66d;--ir-bracket-color: #287bde;--ir-paren-color: #6a8759}@-webkit-keyframes tooltip-appear{from{opacity:0}to{opacity:1}}@keyframes tooltip-appear{from{opacity:0}to{opacity:1}}.vditor-tooltipped{position:relative;cursor:pointer}.vditor-tooltipped::after{position:absolute;z-index:1000000;display:none;padding:5px 8px;font-size:11px;font-weight:normal;-webkit-font-smoothing:subpixel-antialiased;color:#fff;text-align:center;text-decoration:none;text-shadow:none;text-transform:none;letter-spacing:normal;word-wrap:break-word;white-space:pre;pointer-events:none;content:attr(aria-label);background:#3b3e43;border-radius:3px;line-height:16px;opacity:0}.vditor-tooltipped::before{position:absolute;z-index:1000001;display:none;width:0;height:0;color:#3b3e43;pointer-events:none;content:"";border:5px solid transparent;opacity:0}.vditor-tooltipped--hover::before,.vditor-tooltipped--hover::after,.vditor-tooltipped:hover::before,.vditor-tooltipped:hover::after,.vditor-tooltipped:active::before,.vditor-tooltipped:active::after,.vditor-tooltipped:focus::before,.vditor-tooltipped:focus::after{display:inline-block;text-decoration:none;-webkit-animation-name:tooltip-appear;animation-name:tooltip-appear;-webkit-animation-duration:0.15s;animation-duration:0.15s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}.vditor-tooltipped__s::after,.vditor-tooltipped__se::after,.vditor-tooltipped__sw::after{top:100%;right:50%;margin-top:5px}.vditor-tooltipped__s::before,.vditor-tooltipped__se::before,.vditor-tooltipped__sw::before{top:auto;right:50%;bottom:-5px;margin-right:-5px;border-bottom-color:#3b3e43}.vditor-tooltipped__se::after{right:auto;left:50%;margin-left:-15px}.vditor-tooltipped__sw::after{margin-right:-15px}.vditor-tooltipped__n::after,.vditor-tooltipped__ne::after,.vditor-tooltipped__nw::after{right:50%;bottom:100%;margin-bottom:5px}.vditor-tooltipped__n::before,.vditor-tooltipped__ne::before,.vditor-tooltipped__nw::before{top:-5px;right:50%;bottom:auto;margin-right:-5px;border-top-color:#3b3e43}.vditor-tooltipped__ne::after{right:auto;left:50%;margin-left:-15px}.vditor-tooltipped__nw::after{margin-right:-15px}.vditor-tooltipped__s::after,.vditor-tooltipped__n::after{transform:translateX(50%)}.vditor-tooltipped__w::after{right:100%;bottom:50%;margin-right:5px;transform:translateY(50%)}.vditor-tooltipped__w::before{top:50%;bottom:50%;left:-5px;margin-top:-5px;border-left-color:#3b3e43}.vditor-tooltipped__e::after{bottom:50%;left:100%;margin-left:5px;transform:translateY(50%)}.vditor-tooltipped__e::before{top:50%;right:-5px;bottom:50%;margin-top:-5px;border-right-color:#3b3e43}@media screen and (max-width: 520px){.vditor-tooltipped:before,.vditor-tooltipped:after{content:none}}@-webkit-keyframes scale-in{0%{opacity:0;transform:scale(0.5)}100%{opacity:1;transform:scale(1)}}@keyframes scale-in{0%{opacity:0;transform:scale(0.5)}100%{opacity:1;transform:scale(1)}}.vditor-panel{background-color:var(--panel-background-color);position:absolute;box-shadow:var(--panel-shadow);border-radius:3px;padding:5px;z-index:3;font-size:14px;display:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;max-width:320px;min-width:80px;-webkit-animation-duration:.15s;animation-duration:.15s;-webkit-animation-name:scale-in;animation-name:scale-in;-webkit-animation-timing-function:cubic-bezier(0.2, 0, 0.13, 1.5);animation-timing-function:cubic-bezier(0.2, 0, 0.13, 1.5);color:var(--toolbar-icon-color)}.vditor-panel--none{padding:0;-webkit-animation:none;animation:none;min-width:auto;max-width:none;white-space:nowrap;opacity:.86}.vditor-panel--arrow:before{position:absolute;width:0;height:0;pointer-events:none;content:" ";border:7px solid transparent;top:-14px;left:5px;border-bottom-color:var(--panel-background-color)}.vditor-panel--left{right:0}.vditor-panel--left.vditor-panel--arrow:before{right:5px;left:auto}.vditor-input{border:0;padding:3px 5px;background-color:var(--panel-background-color);font-size:12px;color:var(--textarea-text-color)}.vditor-input:focus{background-color:var(--toolbar-background-color);outline:none}.vditor-icon{color:var(--toolbar-icon-color);cursor:pointer;float:left;padding:4px 5px;height:21px;width:23px;background-color:transparent;border:0;box-sizing:border-box}.vditor-icon:hover,.vditor-icon--current{color:var(--toolbar-icon-hover-color);background-color:transparent}.vditor-icon:focus{outline:none}.vditor-icon svg{height:13px !important;width:13px !important;float:left;fill:currentColor;pointer-events:none}.vditor-toolbar{background-color:var(--toolbar-background-color);border-bottom:1px solid var(--border-color);padding:0 5px;line-height:1}.vditor-toolbar--pin{position:sticky;top:0;z-index:1}.vditor-toolbar--hide{transition:all 0.15s ease-in-out;height:5px;overflow:hidden}.vditor-toolbar--hide:hover{background-color:var(--toolbar-background-color);height:auto;overflow:visible}.vditor-toolbar__item{float:left;position:relative}.vditor-toolbar__item .vditor-tooltipped{color:var(--toolbar-icon-color);border:0;padding:10px 5px;background-color:transparent;height:var(--toolbar-height);width:25px;box-sizing:border-box;font-size:0}.vditor-toolbar__item .vditor-tooltipped:focus{outline:none}.vditor-toolbar__item .vditor-tooltipped:focus{cursor:pointer;color:var(--toolbar-icon-hover-color)}.vditor-toolbar__item svg{fill:currentColor;display:inline-block;stroke-width:0;stroke:currentColor;width:15px;height:15px}.vditor-toolbar__item input{position:absolute;width:25px;height:var(--toolbar-height);top:0;left:0;cursor:pointer;opacity:.001;overflow:hidden}.vditor-toolbar__divider{float:left;height:calc(var(--toolbar-height) - (var(--toolbar-divider-margin-top) * 2));border-left:1px solid var(--second-color);margin:var(--toolbar-divider-margin-top) 8px}.vditor-toolbar__br{width:100%;padding:0 !important;height:0 !important}.vditor-menu--current{color:var(--toolbar-icon-hover-color) !important}.vditor-menu--disabled{color:var(--second-color) !important;cursor:not-allowed !important}.vditor-emojis{display:inline-block;overflow:auto}.vditor-emojis::-webkit-scrollbar{display:none}.vditor-emojis__tip{flex:1;min-width:1px;width:200px;margin-right:10px;color:var(--toolbar-icon-color);white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.vditor-emojis__tail{margin-top:5px;font-size:12px;color:var(--toolbar-icon-color);display:flex}.vditor-emojis__tail a{text-decoration:none;color:var(--toolbar-icon-color)}.vditor-emojis__tail a:hover{color:var(--toolbar-icon-hover-color)}.vditor-emojis button{cursor:pointer;border-radius:3px;float:left;height:30px;width:30px;text-align:center;line-height:26px;padding:3px;box-sizing:border-box;font-size:16px;transition:all 0.15s ease-in-out;border:0;margin:0;background-color:transparent;overflow:hidden}.vditor-emojis button:focus{outline:none}.vditor-emojis button:hover .vditor-emojis__icon{display:inline-block;transform:scale(1.2)}.vditor-emojis img{height:20px;width:20px;float:left;margin:3px 0 0 3px}@media screen and (max-width: 520px){.vditor-toolbar__item{padding:0 12px}.vditor-panel--left.vditor-panel--arrow:before{right:17px}}@media (hover: hover) and (pointer: fine){.vditor-toolbar__item .vditor-tooltipped:hover{color:var(--toolbar-icon-hover-color)}}@-webkit-keyframes slideInDown{from{transform:translate3d(0, -100%, 0);visibility:visible}to{transform:translate3d(0, 0, 0)}}@keyframes slideInDown{from{transform:translate3d(0, -100%, 0);visibility:visible}to{transform:translate3d(0, 0, 0)}}.vditor{display:flex;flex-direction:column;border:1px solid var(--border-color);border-radius:3px;box-sizing:border-box;font-family:"Helvetica Neue","Luxi Sans","DejaVu Sans","Hiragino Sans GB","Microsoft Yahei",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Noto Color Emoji","Segoe UI Symbol","Android Emoji","EmojiSymbols"}.vditor .vditor-copy{z-index:auto}.vditor--fullscreen{position:fixed;top:0;width:100% !important;left:0;height:100vh !important;z-index:90;border-radius:0}.vditor-content{display:flex;min-height:60px;flex:1;min-width:1px;position:relative}.vditor-preview{flex:1;min-width:1px;overflow:auto;margin-left:-1px;border-left:1px solid var(--border-color);box-sizing:border-box;border-radius:0 0 3px 0;background-color:var(--textarea-background-color)}.vditor-preview::-webkit-scrollbar{display:none}.vditor-preview__action{text-align:center;padding:10px;background-color:var(--toolbar-background-color)}.vditor-preview__action button{background-color:var(--toolbar-background-color);color:var(--toolbar-icon-color);line-height:20px;border:0;margin:0 10px;cursor:pointer;padding:0 7px;font-size:12px}.vditor-preview__action button.vditor-preview__action--current,.vditor-preview__action button:hover{color:var(--toolbar-icon-hover-color);background-color:var(--toolbar-background-color)}.vditor-preview__action button:focus{outline:none}.vditor-preview__action button svg{fill:currentColor;height:15px;width:15px;vertical-align:middle}.vditor-preview>.vditor-reset{padding:10px;margin:0 auto}.vditor-devtools{display:none;background-color:var(--textarea-background-color);overflow:auto;flex:1;min-width:1px;box-shadow:inset 1px 0 var(--border-color);box-sizing:border-box;border-radius:0 0 3px 0;padding:10px}.vditor-counter{padding:3px;color:var(--toolbar-icon-color);background-color:var(--count-background-color);border-radius:3px;font-size:12px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;float:right;margin:8px 3px 0 0}.vditor-counter--error{color:#d23f31;background-color:rgba(210,63,49,0.1)}.vditor-resize{padding:3px 0;cursor:row-resize;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:absolute;width:100%}.vditor-resize--top{top:-3px}.vditor-resize--bottom{bottom:-3px}.vditor-resize>div{height:3px;background-color:var(--resize-background-color);transition:all 0.15s ease-in-out}.vditor-resize:hover>div,.vditor-resize--selected>div{background-color:var(--resize-hover-background-color)}.vditor-resize:hover svg,.vditor-resize--selected svg{color:var(--resize-hover-icon-color)}.vditor-resize svg{fill:currentColor;stroke-width:0;stroke:currentColor;width:13px;height:3px;display:block;margin:0 auto;color:var(--resize-icon-color)}.vditor-upload{position:absolute;height:3px;left:0;top:-2px;transition:all 0.15s ease-in-out;background-color:#4285f4}.vditor-tip{position:absolute;font-size:12px;top:10px;-webkit-animation-duration:.15s;animation-duration:.15s;-webkit-animation-fill-mode:both;animation-fill-mode:both;left:50%;z-index:5}.vditor-tip--show{display:block;-webkit-animation-name:slideInDown;animation-name:slideInDown}.vditor-tip__content{text-align:left;display:inline-block;line-height:16px;padding:3px 10px;border-radius:3px;background:var(--toolbar-background-color);position:relative;margin-left:-50%;color:var(--toolbar-icon-color);max-width:100%;box-shadow:var(--panel-shadow)}.vditor-tip__content ul{margin:2px 0;padding:0 0 0 18px}.vditor-tip__content a{color:#4285f4}.vditor-tip__close{position:absolute;color:var(--toolbar-icon-color);top:-7px;right:-15px;font-weight:bold;cursor:pointer}.vditor-tip__close:hover{color:var(--toolbar-icon-hover-color)}.vditor-img{position:fixed;top:0;left:0;right:0;bottom:0;display:flex;flex-direction:column;z-index:3}.vditor-img__bar{border-bottom:1px solid var(--border-color);background-color:var(--toolbar-background-color);text-align:center;height:36px;box-sizing:border-box;display:flex;align-items:center;justify-content:center}.vditor-img__btn{display:flex;align-items:center;cursor:pointer;margin-left:24px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;color:var(--toolbar-icon-color)}.vditor-img__btn:hover{color:var(--toolbar-icon-hover-color)}.vditor-img__btn svg{height:14px;width:14px;margin-right:8px;fill:currentColor}.vditor-img__img{flex:1;background-color:var(--textarea-background-color);overflow:auto;cursor:zoom-out}.vditor-img__img img{max-width:none}.vditor-hint{background-color:var(--panel-background-color);position:absolute;box-shadow:var(--panel-shadow);border-radius:3px;padding:5px 0;z-index:4;line-height:20px;list-style:none;font-size:12px;margin:0;max-width:250px;min-width:80px;display:none}.vditor-hint .vditor-hint{margin-top:-31px;left:100%;right:auto}.vditor-hint .vditor-hint.vditor-panel--left{right:100%;left:auto}.vditor-hint button{color:var(--toolbar-icon-color);display:block;padding:3px 10px;border:0;border-radius:0;line-height:20px;width:100%;box-sizing:border-box;text-align:left;margin:0;background-color:transparent;cursor:pointer;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.vditor-hint button:focus{outline:none}.vditor-hint--current,.vditor-hint button:not(.vditor-menu--disabled):hover{background-color:var(--toolbar-background-color) !important;color:var(--toolbar-icon-hover-color) !important}.vditor-hint__emoji{font-size:16px;float:left;margin-right:3px}.vditor-hint img{height:20px;width:20px;float:left;margin-right:3px}.vditor-reset{color:#24292e;font-variant-ligatures:no-common-ligatures;font-family:"Helvetica Neue","Luxi Sans","DejaVu Sans","Hiragino Sans GB","Microsoft Yahei",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Noto Color Emoji","Segoe UI Symbol","Android Emoji","EmojiSymbols";word-wrap:break-word;overflow:auto;line-height:1.5;font-size:16px;word-break:break-word}.vditor-reset--anchor{padding-left:20px}.vditor-reset--error{color:#d23f31;font-size:12px;display:block;line-height:16px}.vditor-reset ul ul ul{list-style-type:square}.vditor-reset ul ul{list-style-type:circle}.vditor-reset ul{list-style-type:disc}.vditor-reset ul,.vditor-reset ol{padding-left:2em;margin-top:0;margin-bottom:16px}.vditor-reset li+li{margin-top:0.25em}.vditor-reset audio{max-width:100%}.vditor-reset audio:focus{outline:none}.vditor-reset video{max-height:90vh;max-width:100%}.vditor-reset img{max-width:100%}.vditor-reset img.emoji{cursor:auto;max-width:20px;vertical-align:sub}.vditor-reset h1,.vditor-reset h2,.vditor-reset h3,.vditor-reset h4,.vditor-reset h5,.vditor-reset h6{margin-top:24px;margin-bottom:16px;font-weight:600;line-height:1.25}.vditor-reset h1:hover .vditor-anchor svg,.vditor-reset h2:hover .vditor-anchor svg,.vditor-reset h3:hover .vditor-anchor svg,.vditor-reset h4:hover .vditor-anchor svg,.vditor-reset h5:hover .vditor-anchor svg,.vditor-reset h6:hover .vditor-anchor svg{visibility:visible}.vditor-reset h1{font-size:1.75em}.vditor-reset h2{font-size:1.55em}.vditor-reset h3{font-size:1.38em}.vditor-reset h4{font-size:1.25em}.vditor-reset h5{font-size:1.13em}.vditor-reset h6{font-size:1em}.vditor-reset hr{height:2px;padding:0;margin:24px 0;background-color:#eaecef;border:0}.vditor-reset p{margin-top:0;margin-bottom:16px}.vditor-reset blockquote{padding:0 1em;color:#6a737d;border-left:0.25em solid #eaecef;margin:0 0 16px 0}.vditor-reset blockquote>:first-child{margin-top:0}.vditor-reset blockquote>:last-child{margin-bottom:0}.vditor-reset ins>iframe{border:0}.vditor-reset iframe{border:1px solid #d1d5da;max-width:100%;box-sizing:border-box}.vditor-reset iframe.iframe__video{min-width:80%;min-height:36vh}.vditor-reset table{border-collapse:collapse;empty-cells:show;margin-bottom:16px;overflow:auto;border-spacing:0}.vditor-reset table tr{background-color:#fafbfc;border-top:1px solid #c6cbd1}.vditor-reset table td,.vditor-reset table th{padding:6px 13px;border:1px solid #dfe2e5;word-break:normal}.vditor-reset table th{font-weight:600}.vditor-reset table tbody tr:nth-child(2n){background-color:#fff}.vditor-reset code:not(.hljs):not(.highlight-chroma){padding:0.2em 0.4em;margin:0;font-size:85%;border-radius:3px;font-family:mononoki,Consolas,"Liberation Mono",Menlo,Courier,monospace,"Apple Color Emoji","Segoe UI Emoji","Noto Color Emoji","Segoe UI Symbol","Android Emoji","EmojiSymbols";word-break:break-word;background-size:20px 20px;white-space:pre-wrap}.vditor-reset pre{margin:1em 0}.vditor-reset pre>code{margin:0;font-size:85%;padding:0.5em;border-radius:5px;display:block;overflow:auto;white-space:pre;font-family:mononoki,Consolas,"Liberation Mono",Menlo,Courier,monospace,"Apple Color Emoji","Segoe UI Emoji","Noto Color Emoji","Segoe UI Symbol","Android Emoji","EmojiSymbols";background-size:20px 20px;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8AgMAAABHkjHhAAAACVBMVEWAgIBaWlo+Pj7rTFvWAAAAA3RSTlMHCAw+VhR4AAAA+klEQVQoz4WSMW7EQAhFPxKWNh2FCx+HkaZI6RRb5DYbyVfIJXLKDCFoMbaTKSw/8ZnPAPjaH2xgZcUNUDADD7D9LtDBCLZ45fbkvo/30K8yeI64pPwl6znd/3n/Oe93P3ho9qeh72btTFzqkz0rsJle8Zr81OLEwZ1dv/713uWqvu2pl+k0fy7MWtj9r/tN5q/02z89qa/L4Dc2LvM93kezPfXlME/O86EbY/V9GB9ePX8G1/6W+/9h1dq/HGfTfzT3j/xNo7522Bfnqe5jO/fvhVthlfk434v3iO9zG/UOphyPeinPl1J8Gtaa7xPTa/Dk+RIs4deMvwGvcGsmsCvJ0AAAAABJRU5ErkJggg==);word-break:initial;word-wrap:normal}.vditor-reset pre:hover div.vditor-copy{display:block}.vditor-reset .language-math,.vditor-reset .language-echarts,.vditor-reset .language-mindmap,.vditor-reset .language-plantuml,.vditor-reset .language-mermaid,.vditor-reset .language-abc,.vditor-reset .language-flowchart,.vditor-reset .language-graphviz{margin-bottom:16px}.vditor-reset .language-math mjx-container:focus{outline:none;cursor:context-menu}.vditor-reset .language-echarts,.vditor-reset .language-mindmap{overflow:hidden;height:420px}.vditor-reset .language-mermaid,.vditor-reset .language-flowchart,.vditor-reset .language-graphviz{text-align:center}.vditor-reset .language-graphviz parsererror{overflow:auto}.vditor-reset kbd{display:inline-block;padding:3px 5px;font:11px Consolas, "Liberation Mono", Menlo, Courier, monospace;line-height:10px;color:#24292e;vertical-align:middle;background-color:#fafbfc;border:solid 1px #d1d5da;border-radius:3px;box-shadow:inset 0 -1px 0 #d1d5da}.vditor-reset summary{cursor:pointer}.vditor-reset summary:focus{outline:none}.vditor-reset svg{height:auto;width:auto;stroke-width:initial}.vditor-reset p:last-child,.vditor-reset blockquote:last-child,.vditor-reset pre:last-child,.vditor-reset ul:last-child,.vditor-reset ol:last-child,.vditor-reset hr:last-child{margin-bottom:0}.vditor-comment{border-bottom:2px solid #f8e6ab}.vditor-comment--focus,.vditor-comment--hover{background-color:#faf1d1;border-bottom:2px solid #ffc60a}.vditor-comment--focus .vditor-comment,.vditor-comment--hover .vditor-comment{border-bottom:2px solid #ffc60a}.vditor-task{list-style:none !important;word-break:break-all}.vditor-task input{margin:0 .2em .25em -1.6em;font-size:12px;vertical-align:middle}.vditor-copy{position:relative;display:none;z-index:1}.vditor-copy textarea{position:absolute;left:-100000px;height:10px}.vditor-copy span{cursor:pointer;position:absolute;right:15px;top:0.5em}.vditor-copy svg{color:#586069;height:14px;width:14px !important;display:block;fill:currentColor}.vditor-linenumber{padding-left:4em !important;position:relative}.vditor-linenumber__rows{position:absolute;pointer-events:none;top:0.5em;left:0;width:3em;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;counter-reset:linenumber}.vditor-linenumber__rows>span{pointer-events:none;display:block}.vditor-linenumber__rows>span::before{counter-increment:linenumber;content:counter(linenumber);color:rgba(158,150,150,0.38);display:block;padding-right:1em;text-align:right}.vditor-speech{position:absolute;display:none;background-color:#f6f8fa;border:1px solid #d1d5da;border-radius:3px;padding:3px;cursor:pointer;color:#586069}.vditor-speech:hover,.vditor-speech--current{color:#4285f4}.vditor-speech svg{height:14px;width:14px;fill:currentColor;display:block;stroke-width:0;stroke:currentColor}.vditor-anchor{margin-left:5px}.vditor-anchor--left{float:left;padding-right:4px;margin-left:-20px}.vditor-anchor svg{visibility:hidden}.vditor-anchor:hover svg{visibility:visible}.vditor-anchor:focus{outline:none}.vditor-linkcard{margin:31px auto 16px;transition:all 0.15s ease-in-out;cursor:pointer;max-width:768px;padding:0 10px}.vditor-linkcard a{border-radius:3px;background-color:#f6f8fa;overflow:hidden;max-height:250px;display:flex;text-decoration:none;flex-wrap:wrap-reverse;box-shadow:0 1px 2px rgba(0,0,0,0.2)}.vditor-linkcard a:hover{box-shadow:0 0 3px rgba(0,0,0,0.13),0 3px 6px rgba(0,0,0,0.26);text-decoration:none}.vditor-linkcard a:visited .vditor-linkcard__abstract{color:rgba(88,96,105,0.36)}.vditor-linkcard__info{padding:10px;min-width:200px;box-sizing:border-box;flex:1}.vditor-linkcard__title{font-size:14px;font-weight:400;color:#24292e;display:flex;align-items:center}.vditor-linkcard__title img{cursor:pointer;height:20px;width:20px;border-radius:3px;flex-shrink:0;margin-right:5px}.vditor-linkcard__abstract{word-wrap:break-word;word-break:break-all;-webkit-line-clamp:2;overflow:hidden;text-overflow:ellipsis;-webkit-box-orient:vertical;display:-webkit-box;font-size:13px;color:#586069;margin:5px 0}.vditor-linkcard__site{font-size:12px;color:#4285f4}.vditor-linkcard__image{background-size:cover;background-repeat:no-repeat;background-position:center center;max-width:250px;min-width:126px;cursor:pointer;background-color:rgba(88,96,105,0.36)}.vditor-footnotes__goto-ref{text-decoration:none}.vditor-toc{margin-bottom:16px;-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;user-select:text;color:#4285f4}.vditor-toc .vditor-outline__action{display:none}.vditor-toc ul{list-style:none !important;padding-left:1em}.vditor-toc>ul{padding-left:0}.vditor-toc span{cursor:pointer}.vditor-toc li>span>svg{width:0;height:0}.vditor-outline{width:250px;border-right:1px solid var(--border-color);background-color:var(--panel-background-color);display:none;overflow:auto}.vditor-outline--right{border-right:0;border-left:1px solid var(--border-color)}.vditor-outline::-webkit-scrollbar{display:none}.vditor-outline ul{list-style:none !important;padding-left:1em;margin:0}.vditor-outline__content>ul{padding-left:0}.vditor-outline li>span{display:flex;align-items:center;padding:5px 10px;cursor:pointer;color:var(--textarea-text-color)}.vditor-outline li>span>svg{height:10px;width:10px}.vditor-outline li>span:hover{color:var(--toolbar-icon-hover-color)}.vditor-outline li>span>span{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.vditor-outline__title{border-bottom:1px dashed var(--border-color);padding:5px 10px;color:var(--toolbar-icon-color);font-size:12px}.vditor-outline__action{transition:all 0.15s ease-in-out;fill:currentColor;margin-right:5px;flex-shrink:0}.vditor-outline__action--close{transform:rotate(-90deg)}.vditor-wysiwyg{box-sizing:border-box;flex:1;position:relative;width:100%;min-width:1px}.vditor-wysiwyg pre.vditor-reset{background-color:var(--panel-background-color);margin:0;white-space:pre-wrap;height:100%;box-sizing:border-box}.vditor-wysiwyg pre.vditor-reset[contenteditable="false"]{opacity:0.3;cursor:not-allowed}.vditor-wysiwyg pre.vditor-reset:empty::before{content:attr(placeholder);color:var(--second-color)}.vditor-wysiwyg pre.vditor-reset:focus{outline:none;background-color:var(--textarea-background-color)}.vditor-wysiwyg pre.vditor-reset:after{content:"";height:var(--editor-bottom);display:block}.vditor-wysiwyg blockquote:empty::before,.vditor-wysiwyg pre>code:empty::before,.vditor-wysiwyg p:empty::before,.vditor-wysiwyg h1:empty::after,.vditor-wysiwyg h2:empty::after,.vditor-wysiwyg h3:empty::after,.vditor-wysiwyg h4:empty::after,.vditor-wysiwyg h5:empty::after,.vditor-wysiwyg h6:empty::after{content:' '}.vditor-wysiwyg code[data-marker="\`"]{padding-left:0 !important;padding-right:0 !important}.vditor-wysiwyg__block pre:first-child{margin-bottom:-1em}.vditor-wysiwyg__block pre:first-child code{height:auto;color:var(--textarea-text-color);height:auto;text-align:left}.vditor-wysiwyg__block pre:last-child{margin-bottom:1em}.vditor-wysiwyg__preview{cursor:pointer;white-space:initial;min-height:27px}.vditor-wysiwyg>.vditor-reset>h1:before,.vditor-wysiwyg>.vditor-reset>h2:before,.vditor-wysiwyg>.vditor-reset>h3:before,.vditor-wysiwyg>.vditor-reset>h4:before,.vditor-wysiwyg>.vditor-reset>h5:before,.vditor-wysiwyg>.vditor-reset>h6:before,.vditor-wysiwyg div.vditor-wysiwyg__block:before,.vditor-wysiwyg div[data-type="link-ref-defs-block"]:before,.vditor-wysiwyg div[data-type="footnotes-block"]:before,.vditor-wysiwyg .vditor-toc:before{float:left;padding-right:4px;margin-left:-29px;content:'H1';font-size:0.85rem;font-weight:normal;color:var(--second-color)}.vditor-wysiwyg>.vditor-reset>h2:before{content:'H2'}.vditor-wysiwyg>.vditor-reset>h3:before{content:'H3'}.vditor-wysiwyg>.vditor-reset>h4:before{content:'H4'}.vditor-wysiwyg>.vditor-reset>h5:before{content:'H5'}.vditor-wysiwyg>.vditor-reset>h6:before{content:'H6'}.vditor-wysiwyg div[data-type="link-ref-defs-block"]:before{content:'"A"'}.vditor-wysiwyg div[data-type="footnotes-block"]:before{content:'^F'}.vditor-wysiwyg div.vditor-wysiwyg__block:before{content:"</>"}.vditor-wysiwyg div.vditor-wysiwyg__block[data-type="yaml-front-matter"]:before{content:"F"}.vditor-wysiwyg div.vditor-wysiwyg__block[data-type="math-block"]:before{content:"$$"}.vditor-wysiwyg .vditor-toc:before{content:"ToC"}.vditor-wysiwyg hr{display:inline-block;margin:12px 0;width:100%}.vditor-wysiwyg details{white-space:initial}.vditor-wysiwyg a{cursor:pointer}.vditor-wysiwyg span[data-type="backslash"]>span{display:none;color:var(--second-color)}.vditor-wysiwyg span[data-type="link-ref"],.vditor-wysiwyg sup[data-type="footnotes-ref"]{color:#4285f4}.vditor-wysiwyg span[data-type="toc-h"]{color:#4285f4;text-decoration:underline}.vditor-wysiwyg div[data-type="footnotes-block"]{border-top:2px solid var(--heading-border-color);padding-top:24px;margin-top:24px}.vditor-wysiwyg div[data-type="link-ref-defs-block"]{color:var(--blockquote-color)}@media screen and (max-width: 520px){.vditor-wysiwyg h1:before,.vditor-wysiwyg h2:before,.vditor-wysiwyg h3:before,.vditor-wysiwyg h4:before,.vditor-wysiwyg h5:before,.vditor-wysiwyg h6:before,.vditor-wysiwyg div.vditor-wysiwyg__block:before,.vditor-wysiwyg div[data-type="link-ref-defs-block"]:before,.vditor-wysiwyg div[data-type="footnotes-block"]:before,.vditor-wysiwyg .vditor-toc:before{content:none}}.vditor-ir{box-sizing:border-box;flex:1;min-width:1px;position:relative;width:100%}.vditor-ir__node[data-type="code-block"]:before,.vditor-ir__node[data-type="code-block"]:after,.vditor-ir__node[data-type="yaml-front-matter"]:before,.vditor-ir__node[data-type="yaml-front-matter"]:after,.vditor-ir__node[data-type="math-block"]:before,.vditor-ir__node[data-type="math-block"]:after{content:' ';color:var(--second-color)}.vditor-ir__node:not(.vditor-ir__node--expand) .vditor-ir__marker{padding:0 !important}.vditor-ir__node:not(.vditor-ir__node--expand)[data-type="a"]{cursor:pointer}.vditor-ir__node[data-type="link-ref"],.vditor-ir__node[data-type="footnotes-ref"]{color:#4285f4}.vditor-ir__node[data-type="html-block"]{margin-bottom:1em}.vditor-ir__node .vditor-ir__marker{width:0;overflow:hidden;display:inline-block;height:0;transition:all 0.15s ease-in-out}.vditor-ir__node--hidden .vditor-ir__marker{visibility:hidden}.vditor-ir__node--expand .vditor-ir__marker{color:var(--second-color);display:inline;height:auto;width:auto}.vditor-ir__node--expand .vditor-ir__marker--hide{display:none}.vditor-ir__node--expand .vditor-ir__marker--heading{color:var(--ir-heading-color)}.vditor-ir__node--expand .vditor-ir__marker--bi{color:var(--ir-bi-color)}.vditor-ir__node--expand .vditor-ir__marker--link{color:var(--ir-link-color)}.vditor-ir__node--expand .vditor-ir__marker--title{color:var(--ir-title-color)}.vditor-ir__node--expand .vditor-ir__marker--bracket{color:var(--ir-bracket-color);text-decoration:underline}.vditor-ir__node--expand .vditor-ir__marker--paren{color:var(--ir-paren-color)}.vditor-ir__node--expand .vditor-ir__marker--info{color:var(--ir-heading-color)}.vditor-ir__node--expand .vditor-ir__marker--pre code{color:var(--textarea-text-color);height:auto;text-align:left}.vditor-ir__node--expand[data-type="code-block"]:before,.vditor-ir__node--expand[data-type="code-block"]:after{content:'\`\`\`'}.vditor-ir__node--expand[data-type="yaml-front-matter"]:before,.vditor-ir__node--expand[data-type="yaml-front-matter"]:after{content:'---'}.vditor-ir__node--expand[data-type="math-block"]:before,.vditor-ir__node--expand[data-type="math-block"]:after{content:'$$'}.vditor-ir__node span[data-type="code-block-open-marker"],.vditor-ir__node span[data-type="code-block-close-marker"],.vditor-ir__node span[data-type="yaml-front-matter-open-marker"],.vditor-ir__node span[data-type="yaml-front-matter-close-marker"],.vditor-ir__node span[data-type="math-block-open-marker"],.vditor-ir__node span[data-type="math-block-close-marker"]{display:none}.vditor-ir__preview{cursor:pointer;white-space:initial;min-height:27px}.vditor-ir__link{color:var(--ir-bracket-color);text-decoration:underline}.vditor-ir pre.vditor-reset{background-color:var(--panel-background-color);margin:0;white-space:pre-wrap;height:100%;box-sizing:border-box}.vditor-ir pre.vditor-reset[contenteditable="false"]{opacity:0.3;cursor:not-allowed}.vditor-ir pre.vditor-reset:empty::before{content:attr(placeholder);color:var(--second-color)}.vditor-ir pre.vditor-reset:focus{outline:none;background-color:var(--textarea-background-color)}.vditor-ir pre.vditor-reset:after{content:"";height:var(--editor-bottom);display:block}.vditor-ir pre.vditor-reset pre{margin:0}.vditor-ir hr{display:inline-block;margin:12px 0;width:100%}.vditor-ir blockquote:empty::before,.vditor-ir pre>code:empty::before,.vditor-ir p:empty::before,.vditor-ir h1:empty::after,.vditor-ir h2:empty::after,.vditor-ir h3:empty::after,.vditor-ir h4:empty::after,.vditor-ir h5:empty::after,.vditor-ir h6:empty::after{content:' '}.vditor-ir .vditor-reset>h1:before,.vditor-ir .vditor-reset>h2:before,.vditor-ir .vditor-reset>h3:before,.vditor-ir .vditor-reset>h4:before,.vditor-ir .vditor-reset>h5:before,.vditor-ir .vditor-reset>h6:before,.vditor-ir div[data-type="link-ref-defs-block"]:before,.vditor-ir div[data-type="footnotes-block"]:before,.vditor-ir .vditor-toc:before{float:left;padding-right:4px;margin-left:-29px;content:'H1';font-size:0.85rem;font-weight:normal;color:var(--second-color)}.vditor-ir .vditor-reset>h2:before{content:'H2'}.vditor-ir .vditor-reset>h3:before{content:'H3'}.vditor-ir .vditor-reset>h4:before{content:'H4'}.vditor-ir .vditor-reset>h5:before{content:'H5'}.vditor-ir .vditor-reset>h6:before{content:'H6'}.vditor-ir div[data-type="link-ref-defs-block"]{color:var(--blockquote-color)}.vditor-ir div[data-type="link-ref-defs-block"]:before{content:'"A"'}.vditor-ir div[data-type="footnotes-block"]{border-top:2px solid var(--heading-border-color);padding-top:24px;margin-top:24px}.vditor-ir div[data-type="footnotes-block"]:before{content:'^F'}.vditor-ir div[data-type="footnotes-block"]>div[data-type="footnotes-def"]>ul,.vditor-ir div[data-type="footnotes-block"]>div[data-type="footnotes-def"]>ol,.vditor-ir div[data-type="footnotes-block"]>div[data-type="footnotes-def"]>p,.vditor-ir div[data-type="footnotes-block"]>div[data-type="footnotes-def"]>blockquote,.vditor-ir div[data-type="footnotes-block"]>div[data-type="footnotes-def"]>pre,.vditor-ir div[data-type="footnotes-block"]>div[data-type="footnotes-def"]>table,.vditor-ir div[data-type="footnotes-block"]>div[data-type="footnotes-def"]>hr{margin-left:8px}.vditor-ir .vditor-toc:before{content:"ToC"}.vditor-ir .vditor-toc span[data-type="toc-h"]{color:#4285f4;text-decoration:underline}@media screen and (max-width: 520px){.vditor-ir h1:before,.vditor-ir h2:before,.vditor-ir h3:before,.vditor-ir h4:before,.vditor-ir h5:before,.vditor-ir h6:before,.vditor-ir div[data-type="link-ref-defs-block"]:before,.vditor-ir div[data-type="footnotes-block"]:before,.vditor-ir .vditor-toc:before{content:none}}.vditor-sv{font-family:"Helvetica Neue","Luxi Sans","DejaVu Sans","Hiragino Sans GB","Microsoft Yahei",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Noto Color Emoji","Segoe UI Symbol","Android Emoji","EmojiSymbols";margin:0 1px 0 0;overflow:auto;width:100%;flex:1;min-width:1px;border:0;resize:none;padding:10px 9px 10px 10px;box-sizing:border-box;background-color:var(--panel-background-color);outline:0 none;font-size:16px;line-height:22px;color:var(--textarea-text-color);border-radius:0 0 3px 3px;font-variant-ligatures:no-common-ligatures;white-space:pre-wrap;word-break:break-word;word-wrap:break-word}.vditor-sv[contenteditable="false"]{opacity:0.3;cursor:not-allowed}.vditor-sv:empty::before{content:attr(placeholder);color:var(--second-color)}.vditor-sv:focus{background-color:var(--textarea-background-color)}.vditor-sv:after{content:"";height:var(--editor-bottom);display:block}.vditor-sv span[data-type="newline"]+span[data-type="text"]:empty{display:inherit}.vditor-sv .sup{vertical-align:super;font-size:smaller}.vditor-sv .strong{font-weight:bold}.vditor-sv .em{font-style:italic}.vditor-sv .s{text-decoration:line-through}.vditor-sv .mark:not(.vditor-sv__marker){background-color:yellow;color:black}.vditor-sv .h1{font-size:1.75em;line-height:44px}.vditor-sv .h2{font-size:1.55em;line-height:38px}.vditor-sv .h3{font-size:1.38em;line-height:27px}.vditor-sv .h4{font-size:1.25em;line-height:25px}.vditor-sv .h5{font-size:1.13em}.vditor-sv .h6{font-size:1em}.vditor-sv__marker{color:var(--second-color)}.vditor-sv__marker--heading{color:var(--ir-heading-color)}.vditor-sv__marker--bi{color:var(--ir-bi-color)}.vditor-sv__marker--link{color:var(--ir-link-color)}.vditor-sv__marker--title{color:var(--ir-title-color)}.vditor-sv__marker--bracket{color:var(--ir-bracket-color)}.vditor-sv__marker--paren{color:var(--ir-paren-color)}.vditor-sv__marker--info{color:var(--ir-heading-color)}.vditor-sv__marker--strong{font-weight:bold}

`;
const simpleConfig = [
  "emoji",
  "headings",
  "bold",
  "italic",
  "strike",
  "link",
  "|",
  "list",
  "ordered-list",
  "check",
  "outdent",
  "indent",
  "|",
  "quote",
  "line",
  "code",
  "inline-code",
  "insert-before",
  "insert-after",
  "|",
  "table"
];
const mobileConfig = [
  "emoji",
  "link",
  "upload",
  "edit-mode",
  {
    name: "more",
    toolbar: ["insert-after", "fullscreen", "preview"]
  }
];
const defaultConfig = [
  "emoji",
  "headings",
  "bold",
  "italic",
  "strike",
  "link",
  "|",
  "list",
  "ordered-list",
  "check",
  "outdent",
  "indent",
  "|",
  "quote",
  "line",
  "code",
  "inline-code",
  "insert-before",
  "insert-after",
  "|",
  "upload",
  "record",
  "table",
  "|",
  "undo",
  "redo",
  "|",
  "fullscreen",
  "edit-mode",
  "|",
  "content-theme",
  "code-theme",
  {
    name: "more",
    toolbar: ["both", "export", "outline", "preview", "devtools"]
  }
];
var _sfc_main = defineComponent({
  expose: [],
  props: {
    mode: {
      type: String,
      default: "full"
    },
    options: {
      type: Object,
      default: () => {
      }
    },
    modelValue: {
      type: String,
      default: ""
    }
  },
  emits: ["update:modelValue", "after", "focus", "blur", "esc", "ctrlEnter", "select"],
  setup(__props, { emit }) {
    var _a;
    const props = __props;
    const options = {
      simple: simpleConfig,
      full: defaultConfig,
      mobile: mobileConfig
    };
    const editorId = "vue-vditor-" + nanoid();
    const contentEditor = ref(null);
    const toolbarOptions = computed(() => options[props.mode]);
    let preview = __spreadValues({
      actions: ["desktop", "tablet", "mobile"]
    }, ((_a = props == null ? void 0 : props.options) == null ? void 0 : _a.preview) || {});
    console.log(preview);
    onMounted(() => {
      contentEditor.value = new Vditor(editorId, __spreadProps(__spreadValues({
        toolbar: toolbarOptions.value
      }, props.options), {
        preview,
        value: props.modelValue,
        after() {
          emit("after", toRaw(contentEditor.value));
        },
        input(value) {
          emit("update:modelValue", value);
        },
        focus(value) {
          emit("focus", value);
        },
        blur(value) {
          emit("blur", value);
        },
        esc(value) {
          emit("esc", value);
        },
        ctrlEnter(value) {
          emit("ctrlEnter", value);
        },
        select(value) {
          emit("select", value);
        }
      }));
    });
    watch(() => props.modelValue, (newVal) => {
      var _a2;
      return (_a2 = contentEditor.value) == null ? void 0 : _a2.setValue(newVal);
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock("div", {
        id: editorId,
        class: "vue-vditor"
      });
    };
  }
});
var index_vue_vue_type_style_index_0_lang = "\n.vditor-img__img img{\n  max-width: 100%;\n}\n";
var index = {
  install(Vue) {
    Vue.component("VueVditor", _sfc_main);
  }
};
export default index;
//# sourceMappingURL=vue-vditor.es.js.map