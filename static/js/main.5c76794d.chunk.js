(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{18:function(e,t,a){e.exports=a(40)},40:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(11),s=a.n(l),c=a(12),o=a(13),m=a(14),u=a(17),i=a(16),d=a(15),h=a.n(d),f=function(){return h.a.get("https://randomuser.me/api/?results=200&nat=us")};var p=function(e){var t=e.result;return r.a.createElement("div",{className:"card rounded-pill border-primary mb-2 col-lg-6 justify-content-center"},r.a.createElement("div",{className:"row no-gutters"},r.a.createElement("div",{className:""},r.a.createElement("img",{src:t.picture.large,alt:"".concat(t.name.first," ").concat(t.name.last),className:"customimage card-img rounded-circle border border-success ml-2 mt-2"})),r.a.createElement("div",{className:""},r.a.createElement("div",{className:"card-body"},r.a.createElement("h3",{className:"card-title"},"".concat(t.name.first," ").concat(t.name.last)),r.a.createElement("ul",{className:"card-text"},r.a.createElement("li",null,r.a.createElement("strong",null,"Cell: ")," ",t.cell),r.a.createElement("li",null,r.a.createElement("strong",null,"Location: ")," ","".concat(t.location.city,", ").concat(t.location.state)),r.a.createElement("li",null,r.a.createElement("strong",null,"Username: "),t.login.username))))))};var E=function(e){return console.log(e),r.a.createElement("button",{className:"btn btn-success ml-2",onClick:(e.value,e.handleFormSubmit)},e.name)};var v=function(e){return r.a.createElement("form",{className:"form mb-3"},r.a.createElement("label",{htmlFor:"search"},"Search: "),r.a.createElement("input",{onChange:e.handleInputChange,value:e.value,name:"search",type:"search",className:"form-control col-8",placeholder:"Filter Employees",id:"search"}),r.a.createElement(E,{handleFormSubmit:e.handleFormSubmit,name:e.name}))},b=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,l=new Array(n),s=0;s<n;s++)l[s]=arguments[s];return(e=t.call.apply(t,[this].concat(l))).state={search:"",results:[],filteredResults:[]},e.componentDidMount=function(){e.searchEmployees()},e.renderEmployees=function(){return e.state.filteredResults.map((function(e){return r.a.createElement(p,{key:e.cell,result:e})}))},e.searchEmployees=function(){f().then((function(t){return e.setState({results:t.data.results,filteredResults:t.data.results})})).catch((function(e){return console.error(e)}))},e.handleInputChange=function(t){var a=t.target,n=a.name,r=a.value;e.setState(Object(c.a)({},n,r))},e.handleFormSubmit=function(t){t.preventDefault(),e.setState((function(){var t=e.state.filteredResults.filter((function(t){return t.name.first.includes(e.state.search)||t.name.last.includes(e.state.search)}));return console.log(t),e.state.search?{filteredResults:t}:{filteredResults:e.state.results}})),e.renderEmployees()},e.renderSortedEmployees=function(t,a){return t.preventDefault(),e.setState({filteredResults:e.state.filteredResults.sort((function(e,t){var a=e.name.last.toUpperCase(),n=t.name.last.toUpperCase(),r=0;return a>n?r=1:a<n&&(r=-1),r}))})},e}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement(v,{handleInputChange:this.handleInputChange,value:this.state.search,handleFormSubmit:this.handleFormSubmit,name:"Search"}),r.a.createElement(E,{handleFormSubmit:this.renderSortedEmployees,name:"Sort By Last Name",value:"last"}),this.renderEmployees())}}]),a}(r.a.Component);var y=function(){return r.a.createElement("main",{className:"mainDiv"},r.a.createElement(b,null))};s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(y,null)),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.5c76794d.chunk.js.map