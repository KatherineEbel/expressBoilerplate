webpackJsonp([0],[,,function(e,t,n){"use strict";(function(e){var t=n(4);(0,t.getUsers)().then(function(n){var r="";n.forEach(function(e){r+='<tr>\n      <td><a href="#" data-id="'+e.id+'" class="deleteUser">Delete</a></td>\n      <td>'+e.id+"</td>\n      <td>"+e.firstName+"</td>\n      <td>"+e.lastName+"</td>\n      <td>"+e.email+"</td>\n      </tr>"}),e.document.getElementById("users").innerHTML=r;var o=e.document.getElementsByClassName("deleteUser");Array.from(o,function(e){e.onclick=function(e){var n=e.target;e.preventDefault(),(0,t.deleteUser)(n.attributes["data-id"].value);var r=n.parentNode.parentNode;r.parentNode.removeChild(r)}})})}).call(t,n(3))},function(e,t){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.deleteUser=t.getUsers=void 0,n(0);var r=n(5),o=(0,r.getBaseUrl)(),u=function(){return s("users")},c=function(e){return a("users/"+e)},s=function(e){return fetch(o+e).then(i,d)},a=function(e){var t=new Request(o+e,{method:"DELETE"});return fetch(t).then(i,d)},i=function(e){return e.json()},d=function(e){return console.log(e)};t.getUsers=u,t.deleteUser=c},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){return o("useMockApi")?"http://localhost:3001/":"/"},o=function(e,t){t||(t=window.location.href),e=e.replace(/[[]]/g,"\\$&");var n=new RegExp("[?&]"+e+"(=([^&#]*)|&|#|$)"),r=n.exec(t);return r?r[2]?decodeURIComponent(r[2].replace(/\+/g,"")):"":null};t.getBaseUrl=r}],[2]);