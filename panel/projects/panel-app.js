!function(e){"use strict";var n=e.module("panel",["common"]);n.config(["$provide",function(e){e.decorator("page",["$delegate",function(e){var n=e;return n}])}])}(angular),angular.module("panel").config(["configProvider",function(e){e.defaults({debug:{enabled:!1},page:{baseUrl:"/",title:"We Love SVG"}})}]),angular.module("panel").config(["localeProvider",function(e){e.locale("en"),e.dictionary({Hello:"Hello","%s cat":{one:"%s cat",other:"%s %n cats"}})}]),document.addEventListener("DOMContentLoaded",function(){angular.bootstrap(document.getElementsByTagName("html")[0],["panel"])});