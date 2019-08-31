"use strict";
!function (e, f) {
  typeof exports === "object" && typeof module === "object" ? module.exports = f() : typeof define === "function" && define.amd ? define([], f) : typeof exports === "object" ? exports.luoPostDownFile = f() : e.luoPostDownFile = f();
}(this, function () {
  return function (res, name) {
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
  }
});
