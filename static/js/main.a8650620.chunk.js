(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,t,a){e.exports=a(49)},25:function(e,t,a){},27:function(e,t,a){},49:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(16),o=a.n(c),i=(a(25),a(19)),l=a(18),s=a(2),u=a(3),p=a(5),d=a(4),m=a(6),h=(a(27),a(8)),v=a.n(h),f=function(e){if(e.playtimeForever<=60)return e.price;var t=e.playtimeForever/60;return Math.round(e.price/t)},E=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).handleInputSubmit=function(e,t){13==e.keyCode?a.props.saveData(t,a.state.value):a.setState({value:e.target.value})},a.definePriceHourClassName=function(e){var t=f(e);return t<=10?"darkGreen":t<=50?"green":t<=100?"yellow":t<=200?"orange":t>=200?"red":void 0},a.state={value:""},a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement("tr",null,n.a.createElement("td",{className:"gameHourPriceWrapper"},n.a.createElement("div",{className:"gameHourPrice ".concat(this.definePriceHourClassName(this.props.data))})),n.a.createElement("td",null,this.props.index+1),n.a.createElement("td",null,n.a.createElement("img",{src:this.props.data.icon})),n.a.createElement("td",null,this.props.data.name),n.a.createElement("td",{colSpan:"2",className:"gameDuration"},this.props.data.playtimeForeverReadable.replace(" days","d").replace(" hours","h").replace(" minutes","m")),n.a.createElement("td",null,n.a.createElement("input",{className:"priceInput",defaultValue:this.props.data.price,type:"number",onBlur:function(){return e.props.saveData(e.props.data.appId,e.state.value)},onKeyUp:function(t){return e.handleInputSubmit(t,e.props.data.appId,e.props.data.playtimeForever)}})))}}]),t}(r.Component),y=a(17),S=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).saveData=function(e,t){a.setState({serverStatus:"loading"}),v.a.patch("http://steamify-api.61hub.com/v1/games/".concat(e),{price:t}).then(function(e){return a.setState({serverStatus:"success"})}).catch(function(e){return a.setState({serverStatus:"error"})});var r=Object(l.a)(a.state.games),n=r.find(function(t){return t.appId==e}),c=r.findIndex(function(t){return t.appId==e}),o=Object(i.a)({},n);o.price=t,r[c]=o,a.setState({games:r})},a.handleSortClick=function(e){console.log(e),a.setState({sortedBy:e})},a.handleSortOrder=function(e){a.setState({sortOrder:e})},a.state={games:[],serverStatus:"",gamePriceStatus:"",sortedBy:"pricePerHour",sortOrder:"asc"},a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;v.a.get("http://steamify-api.61hub.com/v1/games").then(function(t){var a=t.data.map(function(e){isNaN(parseInt(e.price))?e.price=0:e.price=parseInt(e.price);var t=f(e);return e.pricePerHour=t,e});e.setState({games:a})})}},{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"overlay"},n.a.createElement("div",{className:"loadingState ".concat(this.state.serverStatus)}),n.a.createElement("div",null,"Sort by:",n.a.createElement("div",null,n.a.createElement("input",{type:"radio",name:"sort",onChange:function(){return e.handleSortClick("price")}}),"Price"),n.a.createElement("div",null,n.a.createElement("input",{type:"radio",name:"sort",onChange:function(){return e.handleSortClick("playtimeForever")}}),"Hours"),n.a.createElement("div",null,n.a.createElement("input",{type:"radio",name:"sort",onChange:function(){return e.handleSortClick("pricePerHour")}}),"Price per hour"),n.a.createElement("div",null,n.a.createElement("input",{type:"radio",name:"order",onChange:function(){return e.handleSortOrder("asc")}}),"Asc"),n.a.createElement("div",null,n.a.createElement("input",{type:"radio",name:"order",onChange:function(){return e.handleSortOrder("desc")}}),"Desc")),n.a.createElement("table",null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",{colSpan:"3"},"Game's name"),n.a.createElement("th",{colSpan:"2"},"Game play duration"),n.a.createElement("th",{colSpan:"1"},"Price"))),n.a.createElement("tbody",null,y.orderBy(this.state.games,[this.state.sortedBy,"playtimeForever"],[this.state.sortOrder]).map(function(t,a){return n.a.createElement(E,{key:t.appId,data:t,index:a,saveData:e.saveData})})))))}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[20,2,1]]]);
//# sourceMappingURL=main.a8650620.chunk.js.map