"use strict";
!function (e, f) {
  typeof exports === "object" && typeof module === "object" ? module.exports = f() : typeof define === "function" && define.amd ? define([], f) : typeof exports === "object" ? exports.luoPostDownFile = f() : e.luoPostDownFile = f();
}(this, function () {
  return function (type, res, name) {
    if (type === 'link') {
      let fileName = name ? name : new Date().getTime();
      if ("download" in document.createElement("a")) {
        const elink = document.createElement("a");
        elink.download = fileName;
        elink.style.display = "none";
        elink.href = res;
        document.body.appendChild(elink);
        elink.click();
        URL.revokeObjectURL(elink.href); 
        document.body.removeChild(elink);
      } else {
        throw new Error('下载图片出错！');
      }
      return;
    } else if (type === 'blob') {
      const blob = new Blob([res]);
      let fileName = name ? name : new Date().getTime();
      if ("download" in document.createElement("a")) {
        const elink = document.createElement("a");
        elink.download = fileName;
        elink.style.display = "none";
        elink.href = URL.createObjectURL(blob);
        document.body.appendChild(elink);
        elink.click();
        URL.revokeObjectURL(elink.href); 
        document.body.removeChild(elink);
      } else {
        navigator.msSaveBlob(blob, fileName);
      }
      return;
    }
  }
});
