window.__require=function t(n,r,e){function o(i,u){if(!r[i]){if(!n[i]){var a=i.split("/");if(a=a[a.length-1],!n[a]){var s="function"==typeof __require&&__require;if(!u&&s)return s(a,!0);if(c)return c(a,!0);throw new Error("Cannot find module '"+i+"'")}}var f=r[i]={exports:{}};n[i][0].call(f.exports,function(t){return o(n[i][1][t]||t)},f,f.exports,t,n,r,e)}return r[i].exports}for(var c="function"==typeof __require&&__require,i=0;i<e.length;i++)o(e[i]);return o}({HelloWorld:[function(t,n,r){"use strict";cc._RF.push(n,"280c3rsZJJKnZ9RqbALVwtK","HelloWorld"),cc.Class({extends:cc.Component,properties:{cocosList:{type:[cc.Prefab],default:[]},background:{type:cc.Node,default:null}},onLoad:function(){},start:function(){this.launch()},launch:function(){var t=this;this.schedule(function(){t.createCocos(t.randPos())},1)},randValue:function(t,n){return t+(n-t)*Math.random()},randPos:function(){return cc.v2((void 0).randValue(-480,480),(void 0).randValue(-320,320))},createCocos:function(t){var n=cc.instantiate(this.getRandPrefab());n.setParent(this.background),n.setPosition(t)},getRandPrefab:function(){var t=parseInt(this.randValue(0,this.cocosList.length));if(t<this.cocosList.length)return cc.log(t),this.cocosList[t];throw new Error("no such prefab:"+t)}}),cc._RF.pop()},{}]},{},["HelloWorld"]);