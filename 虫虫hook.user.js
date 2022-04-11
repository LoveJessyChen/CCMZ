// ==UserScript==
// @name         虫虫hook
// @namespace    ququ.taozhiyu.gitee.io
// @version      0.1
// @description  绕过referrer检测
// @author       涛之雨
// @match        *://www.gangqinpu.com/sheetplayer/web.html?*
// @icon         https://www.gangqinpu.com/favicon.ico
// @run-at       document-start
// @grant        none
// ==/UserScript==

(function() {'use strict';!document.referrer&&(location.href+="")})();