window.TApi=(function(b){var d={};var f=null,e={data:[],getById:function(j){var g,i=e.data.length;for(var h=0;h<i;++h){if(e.data[h].langId==j){g=e.data[h];break}}return g}};function a(g){if(!g){g="auto"}f=g;if(f=="auto"){f=(navigator.language||navigator.userLanguage).toLowerCase();if(f=="zh-tw"){f="zh-hk"}else{if(f.substr(0,2)=="en"){f="en"}}}switch(f){case"zh-cn":f="zh_CN";break;case"zh-hk":f="zh_HK";break;case"en":f="en";break}window.localStorage.setItem("lang",g=="auto"?g:f)}function c(){var g=new Date().getTime();Ext.Ajax.request({url:"resources/localize/"+f+".json",async:false,success:function(h){var j=Ext.decode(h.responseText);for(var i=0;i<j.length;i++){j[i].langId=j[i].langId.toLowerCase()}e.data=j}});console.info("load language using time: "+(new Date().getTime()-g))}d.getLang=function(){return f};d.getLangType=function(){return window.localStorage.getItem("lang")};d.getLangValue=function(k,j){if(e.data.length==0){c()}var g=e.getById(k.toLowerCase());if(g){var i=g.value,h;if(j){for(h in j){if(j.hasOwnProperty(h)){i=i.replace("["+h+"]",j[h])}}}return i}return k};d.changeLang=function(g){e.data=[];a(g);c()};a(d.getLangType());window.Localize=b.Localize=d;return b})(window.TApi||{});