(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,n){e.exports=n(30)},22:function(e,t,n){},23:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),l=n(5),r=n.n(l),s=(n(22),n(23),n(6)),o=n(7),c=n(13),u=n(8),h=n(14);var m=function(e){var t="";return 1===e.length?t=e[0]:2===e.length?t=e.join(" and "):e.length>2&&(t=e.slice(0,-1).join(", ")+", and "+e.slice(-1)),t};var p=function(e){var t=[],n=[],a=[],l=[];Object.keys(e.strain.cannabinoids).forEach(function(a){e.temperature>=e.strain.cannabinoids[a].bp&&(t.push(e.strain.cannabinoids[a].name),e.strain.cannabinoids[a].effects.forEach(function(e){n.push(e)}))}),Object.keys(e.strain.terpenes).forEach(function(t){e.temperature>=e.strain.terpenes[t].bp&&(a.push(t),e.strain.terpenes[t].effects.forEach(function(e){l.push(e)}))});var r=m(t),s=m(n),o=m(a),c=m(l);return 0===t.length&&(r="nothing",s="nothing"),0===a.length&&(o="nothing",c="nothing"),i.a.createElement("div",null,i.a.createElement("h2",null," At ",e.temperature,"\xb0F, "),i.a.createElement("label",null,"You will release ",r," while feeling ",s),i.a.createElement("p",null),i.a.createElement("label",null,"You'll get terpenes ",o," while feeling ",c))},f=n(15),d=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).onSliderChange=function(e){n.setState({value:e})},n.state={min:120,max:500,step:1,value:130,strain:{name:"Charlotte's Web",cannabinoids:{CBN:{name:"Cannabineil",bp:130,effects:["hungry","less nauseated","uplifted"]},CBC:{name:"Cannabichromene",bp:140,effects:["less stressed","giggly"]}},terpenes:{Limonene:{name:"Limonene",bp:150,effects:["like","so","totally stoned man"]},"a-Pienene":{name:"Alpha Pienene",bp:160,effects:["pretty","oh so pretty","that the city should give me it's key!"]}}}},n}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(f.a,{value:this.state.value,min:this.state.min,max:this.state.max,step:this.state.step,onChange:this.onSliderChange}),i.a.createElement("p",null),i.a.createElement("p",null,i.a.createElement("label",null,"Strain: ",this.state.strain.name)," "),i.a.createElement(p,{temperature:this.state.value,strain:this.state.strain}))}}]),t}(i.a.Component);var b=function(){return i.a.createElement("div",{className:"App"},i.a.createElement("h1",{class:"display-2"},"Better Temp Tool"),i.a.createElement("p",null),i.a.createElement("h1",{class:"display-4"},"A prototype tool by Neil to help medical cannabis patients optimize their vaporizer use."),i.a.createElement("p",null),i.a.createElement(d,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[16,1,2]]]);
//# sourceMappingURL=main.08350d7d.chunk.js.map