!function(e){function t(o){if(n[o])return n[o].exports;var i=n[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}({0:function(e,t,n){n("sV/x"),e.exports=n("xZZD")},"sV/x":function(e,t){$.fn.autodir=function(){return this.each(function(){var e=$(this),t=e.val()||e.text(),n=t.match("[֑-߿יִ-﷽ﹰ-ﻼ]")?"rtl":"ltr";e.css("direction",n)})},$(document).ready(function(){$(".single-track-title, .single-track-lyrics span").autodir(),$("input").keyup(function(){$(this).autodir(),$(".dropdown-item").autodir()});var e={form:$("#form-search"),input:$("#term"),btn:$(".btn-actions .btn-search"),btns:$(".btn-actions"),actions:{hide:function(){return setTimeout(function(){e.form.fadeOut(0),e.btns.fadeIn(0)},500),!0},show:function(t){t.preventDefault(),e.btns.fadeOut(0),e.form.fadeIn(0,function(){e.input.val("").focus()})}},setup:function(){e.btn.click(e.actions.show),e.input.on("blur",e.actions.hide),e.form.on("submit",e.actions.hide)}};e.setup(),$(".typeahead").typeahead({autoSelect:!1,fitToElement:!0,source:function(e,t){return $.get("/typeahead/?query="+encodeURIComponent(e),function(e){return t(e)})},afterSelect:function(){e.form.submit()}});var t={el:$(".loading"),hide:function(){t.el.fadeOut(0)},show:function(){t.el.fadeIn(0)},setup:function(){t.hide(),$("a").not(".skip-loading").click(t.show),$("form").not(".skip-loading").submit(t.show)}};t.setup(),$("a[href].download").click(function(e){e.preventDefault();var n=new XMLHttpRequest;n.open("GET",$(this).attr("href"),!0),n.responseType="blob",n.addEventListener("load",function(){var e={type:this.getResponseHeader("Content-Type"),name:decodeURIComponent(this.getResponseHeader("X-Name"))};if(200!==this.status||-1!==e.type.toLowerCase().indexOf("text"))alert("Error! but .. life goes on! (server)");else{var n=document.createElement("a"),o=new Blob([this.response],{type:e.type}),i=window.URL.createObjectURL(o);document.body.appendChild(n),n.style="display: none",n.href=i,n.download=e.name,n.click(),window.URL.revokeObjectURL(i)}t.hide()}),n.addEventListener("error",function(){alert("Houston, we have a problem! (browser)"),t.hide()}),n.send()}),$(".back, .btn-back").click(function(e){e.preventDefault(),t.hide(),window.history.back(),window.close()}),$(window).bind("unload",function(){t.hide()})})},xZZD:function(e,t){}});