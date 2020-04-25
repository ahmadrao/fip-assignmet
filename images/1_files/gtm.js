
// Copyright 2012 Google Inc. All rights reserved.
(function(w,g){w[g]=w[g]||{};w[g].e=function(s){return eval(s);};})(window,'google_tag_manager');(function(){

var data = {
"resource": {
  "version":"10",
  
  "macros":[{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"allowCookies"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"cookieconsent_status"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"cookieAccepted"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"1664-cookiepolicy"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"cookieconsent_dismissed"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"pwag"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=!1;\"true\"==",["escape",["macro",0],8,16],"?a=!0:\"true\"==",["escape",["macro",1],8,16],"?a=!0:\"dismiss\"==",["escape",["macro",1],8,16],"?a=!0:\"true\"==",["escape",["macro",2],8,16],"?a=!0:\"dismiss\"==",["escape",["macro",3],8,16],"?a=!0:\"yes\"==",["escape",["macro",4],8,16],"?a=!0:\"true\"==",["escape",["macro",5],8,16],"\u0026\u0026(a=!0);return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=new Date,c=-a.getTimezoneOffset(),d=0\u003C=c?\"+\":\"-\",b=function(a){a=Math.abs(Math.floor(a));return(10\u003Ea?\"0\":\"\")+a};return a.getFullYear()+\"-\"+b(a.getMonth()+1)+\"-\"+b(a.getDate())+\"T\"+b(a.getHours())+\":\"+b(a.getMinutes())+\":\"+b(a.getSeconds())+\".\"+b(a.getMilliseconds())+d+b(c\/60)+\":\"+b(c%60)})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=(new Date).getTime();\"undefined\"!==typeof performance\u0026\u0026\"function\"===typeof performance.now\u0026\u0026(a+=performance.now());return\"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx\".replace(\/[xy]\/g,function(c){var b=(a+16*Math.random())%16|0;a=Math.floor(a\/16);return(\"x\"===c?b:b\u00263|8).toString(16)})})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var d=3,b=5,m=7,k=[{name:\"EMAIL\",regex:\/.{4}@.{4}\/g}],l=\"_ga_originalSendHitTask\";return function(a){window[l]=window[l]||a.get(\"sendHitTask\");\"number\"===typeof d\u0026\u0026a.set(\"dimension\"+d,a.get(\"clientId\"));\"number\"===typeof b\u0026\u0026a.set(\"dimension\"+b,a.get(\"hitType\"));a.set(\"sendHitTask\",function(a){var d=a,b=window[l],n=!0;try{if(\"undefined\"!==typeof k\u0026\u0026k.length){for(var e=a.get(\"hitPayload\").split(\"\\x26\"),f=0;f\u003Ce.length;f++){var g=e[f].split(\"\\x3d\");try{var h=decodeURIComponent(decodeURIComponent(g[1]))}catch(p){h=\ndecodeURIComponent(g[1])}k.forEach(function(a){h=h.replace(a.regex,\"[REDACTED \"+a.name+\"]\")});g[1]=encodeURIComponent(h);e[f]=g.join(\"\\x3d\")}a.set(\"hitPayload\",e.join(\"\\x26\"),!0)}if(\"number\"===typeof m){var c=a.get(\"hitPayload\");c+=\"\\x26cd\"+m+\"\\x3d\";c+=c.length+c.length.toString().length;a.set(\"hitPayload\",c,!0)}n\u0026\u0026b(a)}catch(p){b(d)}})}})();"]
    },{
      "function":"__e"
    },{
      "function":"__j",
      "vtp_name":"document.referrer"
    },{
      "function":"__cid"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"event"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"event.category"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"event.action"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"event.label"
    },{
      "function":"__v",
      "vtp_name":"gtm.elementClasses",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":["macro",17],
      "vtp_name":"event.info1"
    },{
      "function":"__v",
      "vtp_name":"gtm.element",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":["macro",19],
      "vtp_name":"event.info2"
    },{
      "function":"__v",
      "vtp_name":"gtm.elementId",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":["macro",21],
      "vtp_name":"event.info3"
    },{
      "function":"__aev",
      "vtp_varType":"TEXT"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":["macro",23],
      "vtp_name":"event.info4"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"event.nonInteraction"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"page.brand"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"page.category1"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"page.category2"
    },{
      "function":"__u",
      "vtp_component":"URL",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",29],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":false,
      "vtp_ignoreCase":true,
      "vtp_defaultValue":"Other",
      "vtp_map":["list",["map","key","(carlsbergbulgaria\\.bg)","value","Bulgaria"],["map","key","(carlsbergcroatia\\.hr)","value","Croatia"],["map","key","(carlsbergdanmark\\.dk\\\/)","value","Denmark"],["map","key","(carlsbergdeutschland\\.de)","value","Germany"],["map","key","(carlsberggroup\\.com)","value","Global"],["map","key","(carlsberghongkong\\.com\\.hk\\\/en\\\/)","value","Hong Kong"],["map","key","(carlsberghungary\\.hu\\\/hu\\\/)","value","Hungary"],["map","key","(carlsbergindia\\.com\\\/)","value","India"],["map","key","(carlsbergitalia\\.it\\\/)","value","Italy"],["map","key","(carlsbergkazakhstan\\.kz\\\/ru\\\/)","value","Kazakhstan"],["map","key","(carlsbergmalaysia\\.com\\.my\\\/)","value","Malaysia"],["map","key","(carlsbergmyanmar\\.com\\.mm\\\/en\\\/)","value","Myanmar"],["map","key","(carlsbergpolska\\.pl)","value","Poland"],["map","key","(carlsbergsingapore\\.com)","value","Singapore"],["map","key","(carlsbergsrbija\\.rs\\\/)","value","Serbia"],["map","key","(carlsbergsverige\\.se)","value","Sweden"],["map","key","(carlsberguk\\.co\\.uk)","value","United Kingdom"],["map","key","(carlsbergukraine\\.com\\\/)","value","Switzerland"],["map","key","(carlsbergvietnam\\.vn)","value","Vietnam"],["map","key","(chongqingbeer\\.com)","value","China"],["map","key","(feldschloesschen\\.ch)","value","Russia"],["map","key","(eng\\.baltika\\.ru)","value","Russia"],["map","key","(gorkhabrewery\\.com)","value","Nepal"],["map","key","(feldschloesschen\\.ch)","value","France"],["map","key","(ringnes\\.no\\\/)","value","Norway"],["map","key","(saku\\.ee)","value","Estonia"],["map","key","(sinebrychoff\\.fi)","value","Finland"],["map","key","(svyturys\\.eu)","value","Lithuania"],["map","key","(aldaris\\.lv)","value","Latvia"],["map","key","(alivaria\\.by\\\/)","value","Belarus"],["map","key","(carlsbergazerbaijan\\.az\\\/az\\\/)","value","Azerbaijan"],["map","key","(carlsbergbosnia\\.ba\\\/)","value","Switzerland"],["map","key","(beerlao\\.la)","value","Laos"]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"page.environment"
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",29],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":false,
      "vtp_ignoreCase":true,
      "vtp_defaultValue":"Other",
      "vtp_map":["list",["map","key","(carlsbergbulgaria\\.bg)","value","Bulgarian"],["map","key","(carlsbergcroatia\\.hr)","value","Croatian"],["map","key","(carlsbergdanmark\\.dk\\\/)","value","Danish"],["map","key","(carlsbergdeutschland\\.de)","value","German"],["map","key","(carlsberggroup\\.com)","value","English"],["map","key","(carlsberghongkong\\.com\\.hk\\\/en\\\/)","value","Chinese"],["map","key","(carlsberghungary\\.hu\\\/hu\\\/)","value","Hungarian"],["map","key","(carlsbergindia\\.com\\\/)","value","Indian"],["map","key","(carlsbergitalia\\.it\\\/)","value","Italian"],["map","key","(carlsbergkazakhstan\\.kz\\\/ru\\\/)","value","Russian"],["map","key","(carlsbergmalaysia\\.com\\.my\\\/)","value","Malay"],["map","key","(carlsbergmyanmar\\.com\\.mm\\\/en\\\/)","value","English"],["map","key","(carlsbergpolska\\.pl)","value","Polish"],["map","key","(carlsbergsingapore\\.com)","value","English"],["map","key","(carlsbergsrbija\\.rs\\\/)","value","Serbian"],["map","key","(carlsbergsverige\\.se)","value","Swedish"],["map","key","(carlsberguk\\.co\\.uk)","value","English"],["map","key","(carlsbergukraine\\.com\\\/)","value","English"],["map","key","(carlsbergvietnam\\.vn)","value","Vietnamese"],["map","key","(chongqingbeer\\.com)","value","Chinese"],["map","key","(feldschloesschen\\.ch)","value","Russian"],["map","key","(eng\\.baltika\\.ru)","value","English"],["map","key","(gorkhabrewery\\.com)","value","English"],["map","key","(feldschloesschen\\.ch)","value","French"],["map","key","(ringnes\\.no\\\/)","value","Norwegian"],["map","key","(saku\\.ee)","value","Estonian"],["map","key","(sinebrychoff\\.fi)","value","Finnish"],["map","key","(svyturys\\.eu)","value","Lithuanian"],["map","key","(aldaris\\.lv)","value","Latvian"],["map","key","(alivaria\\.by\\\/)","value","Belarusian"],["map","key","(carlsbergazerbaijan\\.az\\\/az\\\/)","value","Belarusian"],["map","key","(carlsbergbosnia\\.ba\\\/)","value","Belarusian"],["map","key","(beerlao\\.la)","value","English"]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"page.market"
    },{
      "function":"__u",
      "vtp_component":"PATH",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"page.region"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"page.search.keyword"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"page.search.results"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"page.template"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"page.title"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"page.type"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"user.id"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"user.loggedIn"
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",29],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":false,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","(carlsbergbulgaria\\.bg)","value","UA-81803236-17"],["map","key","(carlsbergcroatia\\.hr)","value","UA-81803236-18"],["map","key","(carlsbergdanmark\\.dk\\\/)","value","UA-81803236-2"],["map","key","(carlsbergdeutschland\\.de)","value","UA-81803236-11"],["map","key","(carlsberggroup\\.com)","value","UA-81803236-1"],["map","key","(carlsberghongkong\\.com\\.hk\\\/en\\\/)","value","UA-81803236-25"],["map","key","(carlsberghungary\\.hu\\\/hu\\\/)","value","UA-81803236-6"],["map","key","(carlsbergindia\\.com\\\/)","value","UA-81803236-26"],["map","key","(carlsbergitalia\\.it\\\/)","value","UA-81803236-13"],["map","key","(carlsbergkazakhstan\\.kz\\\/ru\\\/)","value","UA-81803236-22"],["map","key","(carlsbergmalaysia\\.com\\.my\\\/)","value","UA-81803236-32"],["map","key","(carlsbergmyanmar\\.com\\.mm\\\/en\\\/)","value","UA-81803236-30"],["map","key","(carlsbergpolska\\.pl)","value","UA-81803236-12"],["map","key","(carlsbergsingapore\\.com)","value","UA-81803236-31"],["map","key","(carlsbergsrbija\\.rs\\\/)","value","UA-81803236-15"],["map","key","(carlsbergsverige\\.se)","value","UA-81803236-7"],["map","key","(carlsberguk\\.co\\.uk)","value","UA-81803236-5"],["map","key","(carlsbergukraine\\.com\\\/)","value","UA-81803236-4"],["map","key","(carlsbergvietnam\\.vn)","value","UA-81803236-28"],["map","key","(chongqingbeer\\.com)","value","UA-81803236-24"],["map","key","(feldschloesschen\\.ch)","value","UA-81803236-35"],["map","key","(eng\\.baltika\\.ru)","value","UA-81803236-36"],["map","key","(gorkhabrewery\\.com)","value","UA-81803236-27"],["map","key","(feldschloesschen\\.ch)","value","UA-81803236-19"],["map","key","(ringnes\\.no\\\/)","value","UA-81803236-8"],["map","key","(saku\\.ee)","value","UA-81803236-33"],["map","key","(sinebrychoff\\.fi)","value","UA-81803236-3"],["map","key","(svyturys\\.eu)","value","UA-81803236-34"],["map","key","(aldaris\\.lv)","value","UA-81803236-9"],["map","key","(alivaria\\.by\\\/)","value","UA-81803236-21"],["map","key","(carlsbergazerbaijan\\.az\\\/az\\\/)","value","UA-81803236-20"],["map","key","(carlsbergbosnia\\.ba\\\/)","value","UA-81803236-16"],["map","key","(beerlao\\.la)","value","UA-81803236-29"]]
    },{
      "function":"__gas",
      "vtp_cookieDomain":"auto",
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","customTask","value",["macro",9]]],
      "vtp_useHashAutoLink":false,
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",7]],["map","index","2","dimension",["macro",8]],["map","index","6","dimension",["macro",11]],["map","index","8","dimension",["macro",12]],["map","index","9","dimension",["macro",13]],["map","index","10","dimension",["macro",14]],["map","index","11","dimension",["macro",15]],["map","index","12","dimension",["macro",16]],["map","index","13","dimension",["macro",18]],["map","index","14","dimension",["macro",20]],["map","index","15","dimension",["macro",22]],["map","index","16","dimension",["macro",24]],["map","index","17","dimension",["macro",25]],["map","index","18","dimension",["macro",26]],["map","index","19","dimension",["macro",27]],["map","index","20","dimension",["macro",28]],["map","index","21","dimension",["macro",30]],["map","index","22","dimension",["macro",31]],["map","index","23","dimension",["macro",32]],["map","index","24","dimension",["macro",33]],["map","index","25","dimension",["macro",34]],["map","index","26","dimension",["macro",35]],["map","index","27","dimension",["macro",36]],["map","index","28","dimension",["macro",37]],["map","index","29","dimension",["macro",38]],["map","index","30","dimension",["macro",39]],["map","index","31","dimension",["macro",40]],["map","index","32","dimension",["macro",41]],["map","index","33","dimension",["macro",42]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",43],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"form.id"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"section.id"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"page.filter.results"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"messages.0.text"
    },{
      "function":"__v",
      "vtp_name":"gtm.triggers",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":""
    },{
      "function":"__v",
      "vtp_name":"gtm.videoStatus",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.videoTitle",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.videoPercent",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.videoUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.videoDuration",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.videoCurrentTime",
      "vtp_dataLayerVersion":1
    },{
      "function":"__aev",
      "vtp_setDefaultValue":false,
      "vtp_varType":"URL",
      "vtp_component":"IS_OUTBOUND"
    },{
      "function":"__v",
      "vtp_name":"gtm.elementUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.scrollThreshold",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.scrollUnits",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"engagement.dwellThreshold"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"engagement.scrollThreshold"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"engagement.readingStyle"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"engagement.scrollDepthBand"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventValue"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(must not be undefined)",
      "vtp_name":"eventCategory"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventAction"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventLabel"
    },{
      "function":"__aev",
      "vtp_setDefaultValue":false,
      "vtp_stripWww":true,
      "vtp_varType":"URL",
      "vtp_component":"HOST"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"form.field[0].message"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"download.category"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"download.filename"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"download.id"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"download.type"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"event"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"form.errors"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"form.field.id"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"form.field.name"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"form.fields"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"form.message.id"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"form.message.text"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"form.message.type"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"form.type"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"navigation.category"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"navigation.id"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"navigation.subcategory"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"navigation.type"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"navigation.url"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"page.country"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"page.language"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"page.path"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"section.type"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"user.ageGateClear"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"user.cookieConsent"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"user.email"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"user.id"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"video.action"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"video.id"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"video.length"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"video.position"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"video.title"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"engagement.contentConsumed"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"engagement.contentWordCount"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"engagement.dwellTime"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"engagement. maxScrollPercent"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"engagement.trackThisPage"
    },{
      "function":"__j",
      "vtp_name":"window.google_tag_manager.dataLayer.gtmLoad"
    },{
      "function":"__u",
      "vtp_component":"HOST",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__f",
      "vtp_component":"URL"
    },{
      "function":"__e"
    },{
      "function":"__v",
      "vtp_name":"gtm.elementTarget",
      "vtp_dataLayerVersion":1
    },{
      "function":"__ctv"
    },{
      "function":"__dbg"
    },{
      "function":"__r"
    },{
      "function":"__hid"
    },{
      "function":"__v",
      "vtp_name":"gtm.videoProvider",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.videoVisible",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.scrollDirection",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.visibleRatio",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.visibleTime",
      "vtp_dataLayerVersion":1
    }],
  "tags":[{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",44],
      "vtp_eventAction":"Applied Coupon",
      "vtp_eventLabel":["macro",45],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":3
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"UX",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",44],
      "vtp_eventAction":"Closed Chat",
      "vtp_eventLabel":["macro",34],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":9
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"UX",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",44],
      "vtp_eventAction":"Closed Popup",
      "vtp_eventLabel":["macro",46],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":10
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"UX",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",44],
      "vtp_eventAction":"Filtered Results",
      "vtp_eventLabel":["macro",47],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":17
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"UX",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",44],
      "vtp_eventAction":"Opened Chat",
      "vtp_eventLabel":["macro",34],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":21
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"UX",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",44],
      "vtp_eventAction":"Saw Popup",
      "vtp_eventLabel":["macro",46],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":27
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"UX",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",44],
      "vtp_eventAction":"Shown Alert",
      "vtp_eventLabel":["macro",48],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":28
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",44],
      "vtp_eventAction":"Used Invalid Coupon",
      "vtp_eventLabel":["macro",45],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":36
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Accounts",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",44],
      "vtp_eventAction":"Logged In",
      "vtp_eventLabel":["macro",41],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":37
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Accounts",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",44],
      "vtp_eventAction":"Logged Out",
      "vtp_eventLabel":["macro",41],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":38
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"UX",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",44],
      "vtp_eventAction":["template","Video - ",["macro",50]],
      "vtp_eventLabel":["macro",51],
      "vtp_dimension":["list",["map","index","21","dimension",["macro",52]],["map","index","22","dimension",["macro",53]],["map","index","23","dimension",["macro",54]],["map","index","24","dimension",["macro",55]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":39
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"UK",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",44],
      "vtp_eventAction":"Forgot Password",
      "vtp_eventLabel":["macro",41],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":41
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"ux",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",44],
      "vtp_eventAction":"clicked internal link",
      "vtp_eventLabel":["macro",57],
      "vtp_dimension":["list",["map","index","21","dimension",["macro",17]],["map","index","22","dimension",["macro",19]],["map","index","23","dimension",["macro",21]],["map","index","24","dimension",["macro",23]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":43
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"ux",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",44],
      "vtp_eventAction":"clicked outbound link",
      "vtp_eventLabel":["macro",57],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":44
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_overrideGaSettings":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",44],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":45
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"ux",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",44],
      "vtp_eventAction":"Scroll",
      "vtp_eventLabel":["template",["macro",58]," ",["macro",59]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":46
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"ux",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",44],
      "vtp_eventAction":"clicked outbound link",
      "vtp_eventLabel":["macro",57],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":47
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Click Links",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Click",
      "vtp_eventLabel":"Click URL",
      "vtp_trackingId":"UA-81803236-4",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":50
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Click Links",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Click",
      "vtp_eventLabel":"science-battle",
      "vtp_trackingId":"UA-81803236-4",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":51
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"content engagement",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_metric":["list",["map","index","1","metric","1"]],
      "vtp_gaSettings":["macro",44],
      "vtp_eventAction":"content consumed",
      "vtp_eventLabel":["template",["macro",60]," secs | ",["macro",61],"% scrolled"],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":52
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"content engagement",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_metric":["list",["map","index","3","metric","1"]],
      "vtp_gaSettings":["macro",44],
      "vtp_eventAction":"content scrolled",
      "vtp_eventLabel":["template",["macro",61],"%"],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":53
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"content engagement",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_metric":["list",["map","index","4","metric","1"]],
      "vtp_gaSettings":["macro",44],
      "vtp_eventAction":"dwelled on content",
      "vtp_eventLabel":["template",["macro",60]," second threshold"],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":54
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_fieldsToSet":["list",["map","fieldName","transport","value","beacon"]],
      "vtp_eventCategory":"content engagement",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_metric":["list",["map","index","2","metric","1"]],
      "vtp_gaSettings":["macro",44],
      "vtp_eventAction":"reading style",
      "vtp_dimension":["list",["map","index","34","dimension",["macro",62]],["map","index","35","dimension",["macro",63]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":55
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_overrideGaSettings":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",44],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":57
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventValue":["macro",64],
      "vtp_eventCategory":["macro",65],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",44],
      "vtp_eventAction":["macro",66],
      "vtp_eventLabel":["macro",67],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":61
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"12694589_19",
      "tag_id":62
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"12694589_20",
      "tag_id":63
    },{
      "function":"__cl",
      "tag_id":64
    },{
      "function":"__cl",
      "tag_id":65
    },{
      "function":"__cl",
      "tag_id":66
    },{
      "function":"__sdl",
      "vtp_verticalThresholdUnits":"PERCENT",
      "vtp_verticalThresholdsPercent":"25,50,75,100",
      "vtp_verticalThresholdOn":true,
      "vtp_triggerStartOption":"CONTAINER_LOAD",
      "vtp_horizontalThresholdOn":false,
      "vtp_uniqueTriggerId":"12694589_25",
      "vtp_enableTriggerStartOption":true,
      "tag_id":67
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"12694589_26",
      "tag_id":68
    },{
      "function":"__ytl",
      "vtp_progressThresholdsPercent":"10,25,50,75,90",
      "vtp_captureComplete":true,
      "vtp_captureStart":true,
      "vtp_fixMissingApi":true,
      "vtp_triggerStartOption":"WINDOW_LOAD",
      "vtp_radioButtonGroup1":"PERCENTAGE",
      "vtp_capturePause":true,
      "vtp_captureProgress":true,
      "vtp_uniqueTriggerId":"12694589_27",
      "vtp_enableTriggerStartOption":true,
      "tag_id":69
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"12694589_30",
      "tag_id":70
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"12694589_31",
      "tag_id":71
    },{
      "function":"__cl",
      "tag_id":72
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E!function(a){function A(b,a){function c(){g=new Date;h=null;k=b.apply(e,d)}var e,d,k,h=null,g=0;return function(){var w=new Date;g||(g=w);var f=a-(w-g);return e=this,d=arguments,0\u003E=f?(clearTimeout(h),h=null,g=w,k=b.apply(e,d)):h||(h=setTimeout(c,f)),k}}function f(b,a,c){b.addEventListener?b.addEventListener(a,c,!1):b.attachEvent?b.attachEvent(\"on\"+a,c):b[\"on\"+a]=c}function r(){clearTimeout(n);p=!0;clearInterval(l)}function B(){(document.hidden||document.webkitHidden)\u0026\u0026r()}function C(){0\u003C(m+=1)\u0026\u00260==\nm%x\u0026\u0026y(m)}function q(){t||(u||(new Date,u=!0,l=setInterval(C,1E3)),p\u0026\u0026(p=!1,clearInterval(l),l=setInterval(C,1E3)),clearTimeout(n),n=setTimeout(r,1E3*D+100))}function v(a,e,c){return null==a?c:0===e.length?a:v(a[e[0]],e.slice(1),c)}var y,x,D,z,E,F,u,p,t,m,l,n,G=(t=p=u=!1,m=0,new Date,n=l=null,y=function(a){z\u0026\u0026z({event:\"engagementPing\",eventCategory:\"Content Engagement\",eventAction:\"Time Spent\",eventLabel:a,eventValue:x,eventNonInteraction:E})},{init:function(b){b=b||{};x=parseInt(b.reportInterval,\n10)||5;D=parseInt(b.idleTimeout,10)||30;z=b.pingCallback||null;F=b.gaGlobal||\"ga\";a[F];\"undefined\"!=typeof _gaq\u0026\u0026_gaq.push;\"undefined\"!=typeof dataLayer\u0026\u0026dataLayer.push;\"gaTracker\"in b\u0026\u0026\"string\"==typeof b.gaTracker\u0026\u0026b.gaTracker;\"function\"==typeof b.eventHandler\u0026\u0026(y=b.eventHandler);\"function\"==typeof b.userTimingHandler\u0026\u0026b.userTimingHandler;E=!(\"nonInteraction\"in b)||!1!==b.nonInteraction\u0026\u0026\"false\"!==b.nonInteraction;f(document,\"keydown\",q);f(document,\"click\",q);f(a,\"mousemove\",A(q,500));f(a,\"scroll\",\nA(q,500));f(document,\"visibilitychange\",B);f(document,\"webkitvisibilitychange\",B)},trigger:q,setIdle:r,on:function(){t=!1},off:function(){r();t=!0},reset:function(){new Date;m=0;p=u=!1;clearInterval(l);clearTimeout(n)},getTime:function(){return m}});a.ceService=new function(b){function e(){return Math.round(((a.pageYOffset||document.body.scrollTop||document.documentElement.scrollTop||0)+(a.innerHeight||document.documentElement.clientHeight||document.body.clientHeight))\/Math.max(document.body.scrollHeight,\ndocument.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)*100)}this.riveted=G;this.clock=0;this.datalayerName=null;this.didScroll=!1;this.keyPercentageIndex=this.depth=0;this.googleTagManager=this.gtm=this.ga=this.dtm=void 0;this.cssSelector=\"body\";this.contentConsumedTracked=this.contentScrolledTracked=this.contentDwelledTracked=!1;this.init=function(c){c=c||{};this.datalayerName=c.datalayerName||\n\"dataLayer\";this.scrollCheckFrequency=parseInt(c.scrollCheckFrequency,10)||200;this.wordsPerMinute=parseInt(c.wordsPerMinute,10)||400;this.rivetedReportInterval=parseInt(c.reportInterval,10)||1;this.rivetedIdleTimeout=parseInt(c.rivetedIdleTimeout,10)||15;this.contentScrollCutoff=parseInt(c.contentScrollCutoff,10)||80;this.defaultSecondsToRead=parseInt(c.defaultSecondsToRead,10)||60;this.includeAllPages=c.includeAllPages||!1;this.debug=c.debug||!1;this.cssSelector=c.selector||\"body\";this.firstRun=\n!0;void 0!==a._satellite\u0026\u0026\"function\"==typeof a._satellite.track\u0026\u0026(this.dtm=!0);void 0!==a.ga\u0026\u0026\"function\"==typeof a.ga\u0026\u0026(this.ga=!0);void 0!==a[this.datalayerName]\u0026\u0026\"function\"==typeof a[this.datalayerName].push\u0026\u0026(this.googleTagManager=!0);this.riveted.init({reportInterval:this.rivetedReportInterval,idleTimeout:this.rivetedIdleTimeout,pingCallback:this.pingCallback.bind(this)});this.depth=e();a.addEventListener(\"scroll\",this.onScroll.bind(this));this.throttleScroll();a.onbeforeunload=this.beforeUnload.bind(this)};\nthis.log=function(a){this.debug\u0026\u0026console.log(a)};this.getDepth=function(){return this.depth};this.onScroll=function(){this.didScroll=!0};this.throttleScroll=function(){if(this.didScroll){var a=e();a\u003Ethis.depth\u0026\u0026(this.depth=a);this.didScroll=!1}setTimeout(this.throttleScroll.bind(this),this.scrollCheckFrequency)};this.pingCallback=function(a){this.clock=a.eventLabel;this.doChecks(!1)};this.beforeUnload=function(){this.doChecks(!0)};this.doChecks=function(b){var c=void 0!==v(a[this.datalayerName],[\"page\",\n\"contentWordCount\"]),d=0;this.dtm?d=v(a[this.datalayerName],[\"page\",\"contentWordCount\"],0):this.googleTagManager\u0026\u0026(d=v(a[this.datalayerName][0],[\"page\",\"contentWordCount\"],0));0===d\u0026\u0026(d=function(a){a=document.querySelectorAll(a);for(var b=0,c=0;c\u003Ca.length;c++)try{b+=a[c].textContent.split(\/\\s\/).reduce(function(a,b){return b.length\u0026\u0026a.push(b),a},[]).length}catch(H){b=1}return b}(this.cssSelector));var k=Math.round(d\/(this.wordsPerMinute\/60));0!==k\u0026\u0026void 0!==k\u0026\u0026!isNaN(k)||(k=this.defaultSecondsToRead,\nd=0);var h=this.depth\u003E=this.contentScrollCutoff,g=this.clock\u003E=k,e=g\u0026\u0026h,f=g\u0026\u0026h?\"fan\":g?\"procrastinator\":h?\"skimmer\":\"bouncer\";d={dwellTime:this.clock,maxScrollPercent:this.depth,readingStyle:f,dwellThreshold:k,scrollThreshold:this.contentScrollCutoff,contentConsumed:e?1:0,trackThisPage:this.includeAllPages||c,contentWordCount:d};h\u0026\u0026!this.contentScrolledTracked\u0026\u0026(this.contentScrolledTracked=!0,this.dtm\u0026\u0026(a[this.datalayerName].engagement=d,a._satellite.track(\"contentScrolled\")),this.googleTagManager\u0026\u0026\na[this.datalayerName].push({event:\"contentScrolled\",engagement:d}));g\u0026\u0026!this.contentDwelledTracked\u0026\u0026(this.includeAllPages||c)\u0026\u0026(this.contentDwelledTracked=!0,this.dtm\u0026\u0026(a[this.datalayerName].engagement=d,a._satellite.track(\"contentDwelled\")),this.googleTagManager\u0026\u0026a[this.datalayerName].push({event:\"contentDwelled\",engagement:d}));e\u0026\u0026!this.contentConsumedTracked\u0026\u0026(this.includeAllPages||c)\u0026\u0026(this.contentConsumedTracked=!0,this.dtm\u0026\u0026(a[this.datalayerName].engagement=d,a._satellite.track(\"contentConsumed\")),\nthis.googleTagManager\u0026\u0026a[this.datalayerName].push({event:\"contentConsumed\",engagement:d}));b\u0026\u0026(this.log(\"Seconds to read: \"+k+\". User spent \"+this.clock+\" seconds on the page.\"),this.log(\"Max scroll depth: \"+this.depth+\"%\"),this.log(\"Scrolled: \"+h+\", Dwelled: \"+g+\", Consumed: \"+e),this.log(\"Reading style: \"+f),this.dtm\u0026\u0026(a[this.datalayerName].engagement=d,a._satellite.track(\"readingStyle\")),this.googleTagManager\u0026\u0026a[this.datalayerName].push({event:\"readingStyle\",engagement:d}))}}}(window);\nceService.init({debug:!1,wordsPerMinute:200});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":56
    }],
  "predicates":[{
      "function":"_eq",
      "arg0":["macro",10],
      "arg1":"applyCoupon"
    },{
      "function":"_eq",
      "arg0":["macro",10],
      "arg1":"sectionClose"
    },{
      "function":"_eq",
      "arg0":["macro",10],
      "arg1":"filter"
    },{
      "function":"_eq",
      "arg0":["macro",10],
      "arg1":"sectionOpen"
    },{
      "function":"_eq",
      "arg0":["macro",10],
      "arg1":"alert"
    },{
      "function":"_eq",
      "arg0":["macro",10],
      "arg1":"login"
    },{
      "function":"_eq",
      "arg0":["macro",10],
      "arg1":"logout"
    },{
      "function":"_eq",
      "arg0":["macro",10],
      "arg1":"gtm.video"
    },{
      "function":"_re",
      "arg0":["macro",49],
      "arg1":"(^$|((^|,)12694589_27($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",10],
      "arg1":"navigation"
    },{
      "function":"_eq",
      "arg0":["macro",56],
      "arg1":"false"
    },{
      "function":"_eq",
      "arg0":["macro",6],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",10],
      "arg1":"gtm.linkClick"
    },{
      "function":"_re",
      "arg0":["macro",49],
      "arg1":"(^$|((^|,)12694589_19($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",57],
      "arg1":"facebook|twitter|linkedIn|instagram|snapchat|vk",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",49],
      "arg1":"(^$|((^|,)12694589_26($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",56],
      "arg1":"true"
    },{
      "function":"_re",
      "arg0":["macro",49],
      "arg1":"(^$|((^|,)12694589_20($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",21],
      "arg1":"acceptcookieconsent|cookie-bt"
    },{
      "function":"_eq",
      "arg0":["macro",10],
      "arg1":"gtm.click"
    },{
      "function":"_eq",
      "arg0":["macro",10],
      "arg1":"gtm.js"
    },{
      "function":"_css",
      "arg0":["macro",19],
      "arg1":".c27-cookie-overlay \u003E .js-close-button"
    },{
      "function":"_css",
      "arg0":["macro",19],
      "arg1":".cookie-content"
    },{
      "function":"_css",
      "arg0":["macro",19],
      "arg1":".cc_btn_accept_all"
    },{
      "function":"_cn",
      "arg0":["macro",29],
      "arg1":"carlsbergazerbaijan"
    },{
      "function":"_eq",
      "arg0":["macro",10],
      "arg1":"gtm.scrollDepth"
    },{
      "function":"_re",
      "arg0":["macro",49],
      "arg1":"(^$|((^|,)12694589_25($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",57],
      "arg1":"sciencebatlle.pro"
    },{
      "function":"_cn",
      "arg0":["macro",29],
      "arg1":"https:\/\/carlsbergukraine.com\/science-battle\/"
    },{
      "function":"_re",
      "arg0":["macro",49],
      "arg1":"(^$|((^|,)12694589_30($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",57],
      "arg1":"\/media\/32997\/"
    },{
      "function":"_cn",
      "arg0":["macro",57],
      "arg1":".pdf"
    },{
      "function":"_re",
      "arg0":["macro",49],
      "arg1":"(^$|((^|,)12694589_31($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",10],
      "arg1":"contentConsumed"
    },{
      "function":"_eq",
      "arg0":["macro",10],
      "arg1":"contentScrolled"
    },{
      "function":"_eq",
      "arg0":["macro",10],
      "arg1":"pageUnload"
    },{
      "function":"_eq",
      "arg0":["macro",10],
      "arg1":"readingStyle"
    },{
      "function":"_eq",
      "arg0":["macro",10],
      "arg1":"sendGeneric"
    },{
      "function":"_eq",
      "arg0":["macro",10],
      "arg1":"gtm.load"
    }],
  "rules":[
    [["if",0],["add",0,7]],
    [["if",1],["add",1,2]],
    [["if",2],["add",3]],
    [["if",3],["add",4,5]],
    [["if",4],["add",6]],
    [["if",5],["add",8]],
    [["if",6],["add",9]],
    [["if",7,8],["add",10]],
    [["if",9],["add",11]],
    [["if",10,11,12,13],["add",12]],
    [["if",11,12,16,17],["add",13]],
    [["if",18,19],["add",14]],
    [["if",11,20],["add",14]],
    [["if",19,21],["add",14]],
    [["if",19,22],["add",14]],
    [["if",19,23],["add",14]],
    [["if",11,25,26],["add",15]],
    [["if",11,12,14,15],["add",16],["block",12,13]],
    [["if",12,27,28,29],["add",17]],
    [["if",12,28,30,31,32],["add",18]],
    [["if",33],["add",19]],
    [["if",34],["add",20]],
    [["if",35],["add",21]],
    [["if",36],["add",22]],
    [["if",20,24],["add",23],["block",14]],
    [["if",37],["add",24]],
    [["if",20],["add",25,26,27,28,29,30,31,33,34,35,36]],
    [["if",38],["add",32]]]
},
"runtime":[]




};
/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var ba,ca="function"==typeof Object.create?Object.create:function(a){var b=function(){};b.prototype=a;return new b},ea;if("function"==typeof Object.setPrototypeOf)ea=Object.setPrototypeOf;else{var fa;a:{var ha={Gf:!0},ia={};try{ia.__proto__=ha;fa=ia.Gf;break a}catch(a){}fa=!1}ea=fa?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var ja=ea,ka=this||self,la=/^[\w+/_-]+[=]{0,2}$/,ma=null;var oa=function(){},pa=function(a){return"function"==typeof a},g=function(a){return"string"==typeof a},qa=function(a){return"number"==typeof a&&!isNaN(a)},ra=function(a){return"[object Array]"==Object.prototype.toString.call(Object(a))},n=function(a,b){if(Array.prototype.indexOf){var c=a.indexOf(b);return"number"==typeof c?c:-1}for(var d=0;d<a.length;d++)if(a[d]===b)return d;return-1},sa=function(a,b){if(a&&ra(a))for(var c=0;c<a.length;c++)if(a[c]&&b(a[c]))return a[c]},wa=function(a,b){if(!qa(a)||
!qa(b)||a>b)a=0,b=2147483647;return Math.floor(Math.random()*(b-a+1)+a)},ya=function(a,b){for(var c=new xa,d=0;d<a.length;d++)c.set(a[d],!0);for(var e=0;e<b.length;e++)if(c.get(b[e]))return!0;return!1},za=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])},Aa=function(a){return Math.round(Number(a))||0},Ba=function(a){return"false"==String(a).toLowerCase()?!1:!!a},Ca=function(a){var b=[];if(ra(a))for(var c=0;c<a.length;c++)b.push(String(a[c]));return b},Da=function(a){return a?
a.replace(/^\s+|\s+$/g,""):""},Fa=function(){return(new Date).getTime()},xa=function(){this.prefix="gtm.";this.values={}};xa.prototype.set=function(a,b){this.values[this.prefix+a]=b};xa.prototype.get=function(a){return this.values[this.prefix+a]};
var Ga=function(a,b,c){return a&&a.hasOwnProperty(b)?a[b]:c},Ha=function(a){var b=!1;return function(){if(!b)try{a()}catch(c){}b=!0}},Ia=function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])},Ja=function(a){for(var b in a)if(a.hasOwnProperty(b))return!0;return!1},Ka=function(a,b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]),c.push.apply(c,b[a[d]]||[]);return c},La=function(a,b){for(var c={},d=c,e=a.split("."),f=0;f<e.length-1;f++)d=d[e[f]]={};d[e[e.length-1]]=b;return c},Ma=function(a){var b=
[];za(a,function(c,d){10>c.length&&d&&b.push(c)});return b.join(",")};/*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
var Na=/\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,Oa=function(a){if(null==a)return String(a);var b=Na.exec(Object.prototype.toString.call(Object(a)));return b?b[1].toLowerCase():"object"},Pa=function(a,b){return Object.prototype.hasOwnProperty.call(Object(a),b)},Qa=function(a){if(!a||"object"!=Oa(a)||a.nodeType||a==a.window)return!1;try{if(a.constructor&&!Pa(a,"constructor")&&!Pa(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}for(var b in a);return void 0===
b||Pa(a,b)},C=function(a,b){var c=b||("array"==Oa(a)?[]:{}),d;for(d in a)if(Pa(a,d)){var e=a[d];"array"==Oa(e)?("array"!=Oa(c[d])&&(c[d]=[]),c[d]=C(e,c[d])):Qa(e)?(Qa(c[d])||(c[d]={}),c[d]=C(e,c[d])):c[d]=e}return c};
var Ra=[],Sa={"\x00":"&#0;",'"':"&quot;","&":"&amp;","'":"&#39;","<":"&lt;",">":"&gt;","\t":"&#9;","\n":"&#10;","\x0B":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;","-":"&#45;","/":"&#47;","=":"&#61;","`":"&#96;","\u0085":"&#133;","\u00a0":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"},Ta=function(a){return Sa[a]},Ua=/[\x00\x22\x26\x27\x3c\x3e]/g;var Ya=/[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g,Za={"\x00":"\\x00","\b":"\\x08","\t":"\\t","\n":"\\n","\x0B":"\\x0b",
"\f":"\\f","\r":"\\r",'"':"\\x22","&":"\\x26","'":"\\x27","/":"\\/","<":"\\x3c","=":"\\x3d",">":"\\x3e","\\":"\\\\","\u0085":"\\x85","\u2028":"\\u2028","\u2029":"\\u2029",$:"\\x24","(":"\\x28",")":"\\x29","*":"\\x2a","+":"\\x2b",",":"\\x2c","-":"\\x2d",".":"\\x2e",":":"\\x3a","?":"\\x3f","[":"\\x5b","]":"\\x5d","^":"\\x5e","{":"\\x7b","|":"\\x7c","}":"\\x7d"},$a=function(a){return Za[a]};
Ra[8]=function(a){if(null==a)return" null ";switch(typeof a){case "boolean":case "number":return" "+a+" ";default:return"'"+String(String(a)).replace(Ya,$a)+"'"}};var kb=/[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,lb={"\x00":"%00","\u0001":"%01","\u0002":"%02","\u0003":"%03","\u0004":"%04","\u0005":"%05","\u0006":"%06","\u0007":"%07","\b":"%08","\t":"%09","\n":"%0A","\x0B":"%0B","\f":"%0C","\r":"%0D","\u000e":"%0E","\u000f":"%0F","\u0010":"%10",
"\u0011":"%11","\u0012":"%12","\u0013":"%13","\u0014":"%14","\u0015":"%15","\u0016":"%16","\u0017":"%17","\u0018":"%18","\u0019":"%19","\u001a":"%1A","\u001b":"%1B","\u001c":"%1C","\u001d":"%1D","\u001e":"%1E","\u001f":"%1F"," ":"%20",'"':"%22","'":"%27","(":"%28",")":"%29","<":"%3C",">":"%3E","\\":"%5C","{":"%7B","}":"%7D","\u007f":"%7F","\u0085":"%C2%85","\u00a0":"%C2%A0","\u2028":"%E2%80%A8","\u2029":"%E2%80%A9","\uff01":"%EF%BC%81","\uff03":"%EF%BC%83","\uff04":"%EF%BC%84","\uff06":"%EF%BC%86",
"\uff07":"%EF%BC%87","\uff08":"%EF%BC%88","\uff09":"%EF%BC%89","\uff0a":"%EF%BC%8A","\uff0b":"%EF%BC%8B","\uff0c":"%EF%BC%8C","\uff0f":"%EF%BC%8F","\uff1a":"%EF%BC%9A","\uff1b":"%EF%BC%9B","\uff1d":"%EF%BC%9D","\uff1f":"%EF%BC%9F","\uff20":"%EF%BC%A0","\uff3b":"%EF%BC%BB","\uff3d":"%EF%BC%BD"},mb=function(a){return lb[a]};Ra[16]=function(a){return a};var pb;
var qb=[],rb=[],sb=[],tb=[],ub=[],vb={},wb,xb,yb,zb=function(a,b){var c={};c["function"]="__"+a;for(var d in b)b.hasOwnProperty(d)&&(c["vtp_"+d]=b[d]);return c},Bb=function(a,b){var c=a["function"];if(!c)throw Error("Error: No function name given for function call.");var d=vb[c],e={},f;for(f in a)a.hasOwnProperty(f)&&0===f.indexOf("vtp_")&&(e[void 0!==d?f:f.substr(4)]=a[f]);return void 0!==d?d(e):pb(c,e,b)},Db=function(a,b,c){c=c||[];var d={},e;for(e in a)a.hasOwnProperty(e)&&(d[e]=Cb(a[e],b,c));
return d},Eb=function(a){var b=a["function"];if(!b)throw"Error: No function name given for function call.";var c=vb[b];return c?c.priorityOverride||0:0},Cb=function(a,b,c){if(ra(a)){var d;switch(a[0]){case "function_id":return a[1];case "list":d=[];for(var e=1;e<a.length;e++)d.push(Cb(a[e],b,c));return d;case "macro":var f=a[1];if(c[f])return;var h=qb[f];if(!h||b.Uc(h))return;c[f]=!0;try{var k=Db(h,b,c);k.vtp_gtmEventId=b.id;d=Bb(k,b);yb&&(d=yb.eg(d,k))}catch(x){b.Ce&&b.Ce(x,Number(f)),d=!1}c[f]=
!1;return d;case "map":d={};for(var l=1;l<a.length;l+=2)d[Cb(a[l],b,c)]=Cb(a[l+1],b,c);return d;case "template":d=[];for(var m=!1,q=1;q<a.length;q++){var r=Cb(a[q],b,c);xb&&(m=m||r===xb.Gb);d.push(r)}return xb&&m?xb.hg(d):d.join("");case "escape":d=Cb(a[1],b,c);if(xb&&ra(a[1])&&"macro"===a[1][0]&&xb.Hg(a))return xb.Zg(d);d=String(d);for(var u=2;u<a.length;u++)Ra[a[u]]&&(d=Ra[a[u]](d));return d;case "tag":var p=a[1];if(!tb[p])throw Error("Unable to resolve tag reference "+p+".");return d={oe:a[2],
index:p};case "zb":var t={arg0:a[2],arg1:a[3],ignore_case:a[5]};t["function"]=a[1];var v=Fb(t,b,c),w=!!a[4];return w||2!==v?w!==(1===v):null;default:throw Error("Attempting to expand unknown Value type: "+a[0]+".");}}return a},Fb=function(a,b,c){try{return wb(Db(a,b,c))}catch(d){JSON.stringify(a)}return 2};var Gb=function(){var a=function(b){return{toString:function(){return b}}};return{xd:a("convert_case_to"),yd:a("convert_false_to"),zd:a("convert_null_to"),Ad:a("convert_true_to"),Bd:a("convert_undefined_to"),Gh:a("debug_mode_metadata"),va:a("function"),ef:a("instance_name"),kf:a("live_only"),nf:a("malware_disabled"),pf:a("metadata"),Hh:a("original_vendor_template_id"),tf:a("once_per_event"),Id:a("once_per_load"),Qd:a("setup_tags"),Sd:a("tag_id"),Td:a("teardown_tags")}}();var Hb=null,Kb=function(a){function b(r){for(var u=0;u<r.length;u++)d[r[u]]=!0}var c=[],d=[];Hb=Ib(a);for(var e=0;e<rb.length;e++){var f=rb[e],h=Jb(f);if(h){for(var k=f.add||[],l=0;l<k.length;l++)c[k[l]]=!0;b(f.block||[])}else null===h&&b(f.block||[])}for(var m=[],q=0;q<tb.length;q++)c[q]&&!d[q]&&(m[q]=!0);return m},Jb=function(a){for(var b=a["if"]||[],c=0;c<b.length;c++){var d=Hb(b[c]);if(0===d)return!1;if(2===d)return null}for(var e=a.unless||[],f=0;f<e.length;f++){var h=Hb(e[f]);if(2===h)return null;
if(1===h)return!1}return!0},Ib=function(a){var b=[];return function(c){void 0===b[c]&&(b[c]=Fb(sb[c],a));return b[c]}};/*
 Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */
var D=window,E=document,fc=navigator,gc=E.currentScript&&E.currentScript.src,hc=function(a,b){var c=D[a];D[a]=void 0===c?b:c;return D[a]},ic=function(a,b){b&&(a.addEventListener?a.onload=b:a.onreadystatechange=function(){a.readyState in{loaded:1,complete:1}&&(a.onreadystatechange=null,b())})},jc=function(a,b,c){var d=E.createElement("script");d.type="text/javascript";d.async=!0;d.src=a;ic(d,b);c&&(d.onerror=c);var e;if(null===ma)b:{var f=ka.document,h=f.querySelector&&f.querySelector("script[nonce]");
if(h){var k=h.nonce||h.getAttribute("nonce");if(k&&la.test(k)){ma=k;break b}}ma=""}e=ma;e&&d.setAttribute("nonce",e);var l=E.getElementsByTagName("script")[0]||E.body||E.head;l.parentNode.insertBefore(d,l);return d},kc=function(){if(gc){var a=gc.toLowerCase();if(0===a.indexOf("https://"))return 2;if(0===a.indexOf("http://"))return 3}return 1},lc=function(a,b){var c=E.createElement("iframe");c.height="0";c.width="0";c.style.display="none";c.style.visibility="hidden";var d=E.body&&E.body.lastChild||
E.body||E.head;d.parentNode.insertBefore(c,d);ic(c,b);void 0!==a&&(c.src=a);return c},mc=function(a,b,c){var d=new Image(1,1);d.onload=function(){d.onload=null;b&&b()};d.onerror=function(){d.onerror=null;c&&c()};d.src=a;return d},nc=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent&&a.attachEvent("on"+b,c)},oc=function(a,b,c){a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent&&a.detachEvent("on"+b,c)},H=function(a){D.setTimeout(a,0)},pc=function(a,b){return a&&
b&&a.attributes&&a.attributes[b]?a.attributes[b].value:null},qc=function(a){var b=a.innerText||a.textContent||"";b&&" "!=b&&(b=b.replace(/^[\s\xa0]+|[\s\xa0]+$/g,""));b&&(b=b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g," "));return b},rc=function(a){var b=E.createElement("div");b.innerHTML="A<div>"+a+"</div>";b=b.lastChild;for(var c=[];b.firstChild;)c.push(b.removeChild(b.firstChild));return c},sc=function(a,b,c){c=c||100;for(var d={},e=0;e<b.length;e++)d[b[e]]=!0;for(var f=a,h=0;f&&h<=c;h++){if(d[String(f.tagName).toLowerCase()])return f;
f=f.parentElement}return null},tc=function(a){fc.sendBeacon&&fc.sendBeacon(a)||mc(a)},uc=function(a,b){var c=a[b];c&&"string"===typeof c.animVal&&(c=c.animVal);return c};var wc=function(a){return vc?E.querySelectorAll(a):null},xc=function(a,b){if(!vc)return null;if(Element.prototype.closest)try{return a.closest(b)}catch(e){return null}var c=Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector,d=a;if(!E.documentElement.contains(d))return null;do{try{if(c.call(d,b))return d}catch(e){break}d=d.parentElement||d.parentNode}while(null!==d&&1===d.nodeType);
return null},yc=!1;if(E.querySelectorAll)try{var zc=E.querySelectorAll(":root");zc&&1==zc.length&&zc[0]==E.documentElement&&(yc=!0)}catch(a){}var vc=yc;var Pc={},Qc=null,Rc=Math.random();Pc.w="GTM-PNVF6F7";Pc.Kb="4f0";var Sc={__cl:!0,__ecl:!0,__ehl:!0,__evl:!0,__fal:!0,__fil:!0,__fsl:!0,__hl:!0,__jel:!0,__lcl:!0,__sdl:!0,__tl:!0,__ytl:!0,__paused:!0,__tg:!0},Tc="www.googletagmanager.com/gtm.js";var Uc=Tc,Vc=null,Wc=null,Xc=null,Yc="//www.googletagmanager.com/a?id="+Pc.w+"&cv=10",Zc={},$c={},ad=function(){var a=Qc.sequence||0;Qc.sequence=a+1;return a};var bd={},I=function(a,b){bd[a]=bd[a]||[];bd[a][b]=!0},cd=function(a){for(var b=[],c=bd[a]||[],d=0;d<c.length;d++)c[d]&&(b[Math.floor(d/6)]^=1<<d%6);for(var e=0;e<b.length;e++)b[e]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[e]||0);return b.join("")};
var dd=function(){return"&tc="+tb.filter(function(a){return a}).length},gd=function(){ed||(ed=D.setTimeout(fd,500))},fd=function(){ed&&(D.clearTimeout(ed),ed=void 0);void 0===id||jd[id]&&!kd&&!ld||(md[id]||nd.Jg()||0>=od--?(I("GTM",1),md[id]=!0):(nd.hh(),mc(pd()),jd[id]=!0,qd=rd=ld=kd=""))},pd=function(){var a=id;if(void 0===a)return"";var b=cd("GTM"),c=cd("TAGGING");return[sd,jd[a]?"":"&es=1",td[a],b?"&u="+b:"",c?"&ut="+c:"",dd(),kd,ld,rd,qd,"&z=0"].join("")},ud=function(){return[Yc,"&v=3&t=t","&pid="+
wa(),"&rv="+Pc.Kb].join("")},vd="0.005000">Math.random(),sd=ud(),wd=function(){sd=ud()},jd={},kd="",ld="",qd="",rd="",id=void 0,td={},md={},ed=void 0,nd=function(a,b){var c=0,d=0;return{Jg:function(){if(c<a)return!1;Fa()-d>=b&&(c=0);return c>=a},hh:function(){Fa()-d>=b&&(c=0);c++;d=Fa()}}}(2,1E3),od=1E3,xd=function(a,b){if(vd&&!md[a]&&id!==a){fd();id=a;qd=kd="";var c;c=0===b.indexOf("gtm.")?encodeURIComponent(b):"*";td[a]="&e="+c+"&eid="+a;gd()}},yd=function(a,b,c){if(vd&&!md[a]&&
b){a!==id&&(fd(),id=a);var d,e=String(b[Gb.va]||"").replace(/_/g,"");0===e.indexOf("cvt")&&(e="cvt");d=e;var f=c+d;kd=kd?kd+"."+f:"&tr="+f;var h=b["function"];if(!h)throw Error("Error: No function name given for function call.");var k=(vb[h]?"1":"2")+d;qd=qd?qd+"."+k:"&ti="+k;gd();2022<=pd().length&&fd()}},zd=function(a,b,c){if(vd&&!md[a]){a!==id&&(fd(),id=a);var d=c+b;ld=ld?ld+
"."+d:"&epr="+d;gd();2022<=pd().length&&fd()}};var Ad={},Bd=new xa,Cd={},Dd={},Gd={name:"dataLayer",set:function(a,b){C(La(a,b),Cd);Ed()},get:function(a){return Fd(a,2)},reset:function(){Bd=new xa;Cd={};Ed()}},Fd=function(a,b){if(2!=b){var c=Bd.get(a);if(vd){var d=Hd(a);c!==d&&I("GTM",5)}return c}return Hd(a)},Hd=function(a){var b=a.split("."),c=!1,d=void 0;return c?d:Id(b)},Id=function(a){for(var b=Cd,c=0;c<a.length;c++){if(null===b)return!1;if(void 0===b)break;b=b[a[c]]}return b};
var Jd=function(a,b){Dd.hasOwnProperty(a)||(Bd.set(a,b),C(La(a,b),Cd),Ed())},Ed=function(a){za(Dd,function(b,c){Bd.set(b,c);C(La(b,void 0),Cd);C(La(b,c),Cd);a&&delete Dd[b]})},Kd=function(a,b,c){Ad[a]=Ad[a]||{};var d=1!==c?Hd(b):Bd.get(b);"array"===Oa(d)||"object"===Oa(d)?Ad[a][b]=C(d):Ad[a][b]=d},Ld=function(a,b){if(Ad[a])return Ad[a][b]},Md=function(a,b){Ad[a]&&delete Ad[a][b]};var J={ra:"_ee",Jh:"_uci",yc:"event_callback",Fb:"event_timeout",D:"gtag.config",aa:"allow_ad_personalization_signals",zc:"restricted_data_processing",Za:"allow_google_signals",ba:"cookie_expires",Eb:"cookie_update",$a:"session_duration",ja:"user_properties"};J.ye=[J.aa,J.Za,J.Eb];J.Be=[J.ba,J.Fb,J.$a];var Pd=/[A-Z]+/,Qd=/\s/,Rd=function(a){if(g(a)&&(a=Da(a),!Qd.test(a))){var b=a.indexOf("-");if(!(0>b)){var c=a.substring(0,b);if(Pd.test(c)){for(var d=a.substring(b+1).split("/"),e=0;e<d.length;e++)if(!d[e])return;return{id:a,prefix:c,containerId:c+"-"+d[0],s:d}}}}},Td=function(a){for(var b={},c=0;c<a.length;++c){var d=Rd(a[c]);d&&(b[d.id]=d)}Sd(b);var e=[];za(b,function(f,h){e.push(h)});return e};
function Sd(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];"AW"===d.prefix&&d.s[1]&&b.push(d.containerId)}for(var e=0;e<b.length;++e)delete a[b[e]]};var Ud=function(){var a=!1;return a};var Q=function(a,b,c,d){return(2===Vd()||d||"http:"!=D.location.protocol?a:b)+c},Vd=function(){var a=kc(),b;if(1===a)a:{var c=Uc;c=c.toLowerCase();for(var d="https://"+c,e="http://"+c,f=1,h=E.getElementsByTagName("script"),k=0;k<h.length&&100>k;k++){var l=h[k].src;if(l){l=l.toLowerCase();if(0===l.indexOf(e)){b=3;break a}1===f&&0===l.indexOf(d)&&(f=2)}}b=f}else b=a;return b};var ie=new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),je={cl:["ecl"],customPixels:["nonGooglePixels"],ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],customScripts:["html","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],nonGooglePixels:[],nonGoogleScripts:["nonGooglePixels"],nonGoogleIframes:["nonGooglePixels"]},ke={cl:["ecl"],customPixels:["customScripts","html"],
ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts"],customScripts:["html"],nonGooglePixels:["customPixels","customScripts","html","nonGoogleScripts","nonGoogleIframes"],nonGoogleScripts:["customScripts","html"],nonGoogleIframes:["customScripts","html","nonGoogleScripts"]},le="google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");
var ne=function(a){var b=Fd("gtm.whitelist");b&&I("GTM",9);var c=b&&Ka(Ca(b),je),d=Fd("gtm.blacklist");d||(d=Fd("tagTypeBlacklist"))&&I("GTM",3);d?
I("GTM",8):d=[];me()&&(d=Ca(d),d.push("nonGooglePixels","nonGoogleScripts","sandboxedScripts"));0<=n(Ca(d),"google")&&I("GTM",2);var e=d&&Ka(Ca(d),ke),f={};return function(h){var k=h&&h[Gb.va];if(!k||"string"!=typeof k)return!0;k=k.replace(/^_*/,"");if(void 0!==f[k])return f[k];var l=$c[k]||[],m=a(k,l);if(b){var q;if(q=m)a:{if(0>n(c,k))if(l&&0<l.length)for(var r=0;r<
l.length;r++){if(0>n(c,l[r])){I("GTM",11);q=!1;break a}}else{q=!1;break a}q=!0}m=q}var u=!1;if(d){var p=0<=n(e,k);if(p)u=p;else{var t=ya(e,l||[]);t&&I("GTM",10);u=t}}var v=!m||u;v||!(0<=n(l,"sandboxedScripts"))||c&&-1!==n(c,"sandboxedScripts")||(v=ya(e,le));return f[k]=v}},me=function(){return ie.test(D.location&&D.location.hostname)};var oe={eg:function(a,b){b[Gb.xd]&&"string"===typeof a&&(a=1==b[Gb.xd]?a.toLowerCase():a.toUpperCase());b.hasOwnProperty(Gb.zd)&&null===a&&(a=b[Gb.zd]);b.hasOwnProperty(Gb.Bd)&&void 0===a&&(a=b[Gb.Bd]);b.hasOwnProperty(Gb.Ad)&&!0===a&&(a=b[Gb.Ad]);b.hasOwnProperty(Gb.yd)&&!1===a&&(a=b[Gb.yd]);return a}};var pe={active:!0,isWhitelisted:function(){return!0}},qe=function(a){var b=Qc.zones;!b&&a&&(b=Qc.zones=a());return b};var re=function(){};var se=!1,te=0,ue=[];function ve(a){if(!se){var b=E.createEventObject,c="complete"==E.readyState,d="interactive"==E.readyState;if(!a||"readystatechange"!=a.type||c||!b&&d){se=!0;for(var e=0;e<ue.length;e++)H(ue[e])}ue.push=function(){for(var f=0;f<arguments.length;f++)H(arguments[f]);return 0}}}function we(){if(!se&&140>te){te++;try{E.documentElement.doScroll("left"),ve()}catch(a){D.setTimeout(we,50)}}}var xe=function(a){se?a():ue.push(a)};var ye={},ze={},Ae=function(a,b,c,d){if(!ze[a]||Sc[b]||"__zone"===b)return-1;var e={};Qa(d)&&(e=C(d,e));e.id=c;e.status="timeout";return ze[a].tags.push(e)-1},Be=function(a,b,c,d){if(ze[a]){var e=ze[a].tags[b];e&&(e.status=c,e.executionTime=d)}};function Ce(a){for(var b=ye[a]||[],c=0;c<b.length;c++)b[c]();ye[a]={push:function(d){d(Pc.w,ze[a])}}}
var Fe=function(a,b,c){ze[a]={tags:[]};pa(b)&&De(a,b);c&&D.setTimeout(function(){return Ce(a)},Number(c));return Ee(a)},De=function(a,b){ye[a]=ye[a]||[];ye[a].push(Ha(function(){return H(function(){b(Pc.w,ze[a])})}))};function Ee(a){var b=0,c=0,d=!1;return{add:function(){c++;return Ha(function(){b++;d&&b>=c&&Ce(a)})},Rf:function(){d=!0;b>=c&&Ce(a)}}};var Ge=function(){function a(d){return!qa(d)||0>d?0:d}if(!Qc._li&&D.performance&&D.performance.timing){var b=D.performance.timing.navigationStart,c=qa(Gd.get("gtm.start"))?Gd.get("gtm.start"):0;Qc._li={cst:a(c-b),cbt:a(Wc-b)}}};var Ke={},Le=function(){return D.GoogleAnalyticsObject&&D[D.GoogleAnalyticsObject]},Me=!1;
var Ne=function(a){D.GoogleAnalyticsObject||(D.GoogleAnalyticsObject=a||"ga");var b=D.GoogleAnalyticsObject;if(D[b])D.hasOwnProperty(b)||I("GTM",12);else{var c=function(){c.q=c.q||[];c.q.push(arguments)};c.l=Number(new Date);D[b]=c}Ge();return D[b]},Oe=function(a,b,c,d){b=String(b).replace(/\s+/g,"").split(",");var e=Le();e(a+"require","linker");e(a+"linker:autoLink",b,c,d)};
var Qe=function(a){},Pe=function(){return D.GoogleAnalyticsObject||"ga"};var Se=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;var Te=/:[0-9]+$/,Ue=function(a,b,c){for(var d=a.split("&"),e=0;e<d.length;e++){var f=d[e].split("=");if(decodeURIComponent(f[0]).replace(/\+/g," ")===b){var h=f.slice(1).join("=");return c?h:decodeURIComponent(h).replace(/\+/g," ")}}},Xe=function(a,b,c,d,e){b&&(b=String(b).toLowerCase());if("protocol"===b||"port"===b)a.protocol=Ve(a.protocol)||Ve(D.location.protocol);"port"===b?a.port=String(Number(a.hostname?a.port:D.location.port)||("http"==a.protocol?80:"https"==a.protocol?443:"")):"host"===b&&
(a.hostname=(a.hostname||D.location.hostname).replace(Te,"").toLowerCase());var f=b,h,k=Ve(a.protocol);f&&(f=String(f).toLowerCase());switch(f){case "url_no_fragment":h=We(a);break;case "protocol":h=k;break;case "host":h=a.hostname.replace(Te,"").toLowerCase();if(c){var l=/^www\d*\./.exec(h);l&&l[0]&&(h=h.substr(l[0].length))}break;case "port":h=String(Number(a.port)||("http"==k?80:"https"==k?443:""));break;case "path":a.pathname||a.hostname||I("TAGGING",1);h="/"==a.pathname.substr(0,1)?a.pathname:
"/"+a.pathname;var m=h.split("/");0<=n(d||[],m[m.length-1])&&(m[m.length-1]="");h=m.join("/");break;case "query":h=a.search.replace("?","");e&&(h=Ue(h,e,void 0));break;case "extension":var q=a.pathname.split(".");h=1<q.length?q[q.length-1]:"";h=h.split("/")[0];break;case "fragment":h=a.hash.replace("#","");break;default:h=a&&a.href}return h},Ve=function(a){return a?a.replace(":","").toLowerCase():""},We=function(a){var b="";if(a&&a.href){var c=a.href.indexOf("#");b=0>c?a.href:a.href.substr(0,c)}return b},
Ye=function(a){var b=E.createElement("a");a&&(b.href=a);var c=b.pathname;"/"!==c[0]&&(a||I("TAGGING",1),c="/"+c);var d=b.hostname.replace(Te,"");return{href:b.href,protocol:b.protocol,host:b.host,hostname:d,pathname:c,search:b.search,hash:b.hash,port:b.port}};function cf(a,b,c,d){var e=tb[a],f=df(a,b,c,d);if(!f)return null;var h=Cb(e[Gb.Qd],c,[]);if(h&&h.length){var k=h[0];f=cf(k.index,{C:f,B:1===k.oe?b.terminate:f,terminate:b.terminate},c,d)}return f}
function df(a,b,c,d){function e(){if(f[Gb.nf])k();else{var w=Db(f,c,[]),x=Ae(c.id,String(f[Gb.va]),Number(f[Gb.Sd]),w[Gb.pf]),y=!1;w.vtp_gtmOnSuccess=function(){if(!y){y=!0;var A=Fa()-z;yd(c.id,tb[a],"5");Be(c.id,x,"success",A);h()}};w.vtp_gtmOnFailure=function(){if(!y){y=!0;var A=Fa()-z;yd(c.id,tb[a],"6");Be(c.id,x,"failure",A);k()}};w.vtp_gtmTagId=f.tag_id;
w.vtp_gtmEventId=c.id;yd(c.id,f,"1");var B=function(){var A=Fa()-z;yd(c.id,f,"7");Be(c.id,x,"exception",A);y||(y=!0,k())};var z=Fa();try{Bb(w,c)}catch(A){B(A)}}}var f=tb[a],h=b.C,k=b.B,l=b.terminate;if(c.Uc(f))return null;var m=Cb(f[Gb.Td],c,[]);if(m&&m.length){var q=m[0],r=cf(q.index,{C:h,B:k,terminate:l},c,d);if(!r)return null;h=r;k=2===q.oe?l:r}if(f[Gb.Id]||f[Gb.tf]){var u=f[Gb.Id]?ub:c.qh,p=h,t=k;if(!u[a]){e=Ha(e);var v=ef(a,u,e);h=v.C;k=v.B}return function(){u[a](p,t)}}return e}
function ef(a,b,c){var d=[],e=[];b[a]=ff(d,e,c);return{C:function(){b[a]=gf;for(var f=0;f<d.length;f++)d[f]()},B:function(){b[a]=hf;for(var f=0;f<e.length;f++)e[f]()}}}function ff(a,b,c){return function(d,e){a.push(d);b.push(e);c()}}function gf(a){a()}function hf(a,b){b()};var lf=function(a,b){for(var c=[],d=0;d<tb.length;d++)if(a.ub[d]){var e=tb[d];var f=b.add();try{var h=cf(d,{C:f,B:f,terminate:f},a,d);h?c.push({Se:d,Me:Eb(e),pg:h}):(jf(d,a),f())}catch(l){f()}}b.Rf();c.sort(kf);for(var k=0;k<c.length;k++)c[k].pg();return 0<c.length};function kf(a,b){var c,d=b.Me,e=a.Me;c=d>e?1:d<e?-1:0;var f;if(0!==c)f=c;else{var h=a.Se,k=b.Se;f=h>k?1:h<k?-1:0}return f}
function jf(a,b){if(!vd)return;var c=function(d){var e=b.Uc(tb[d])?"3":"4",f=Cb(tb[d][Gb.Qd],b,[]);f&&f.length&&c(f[0].index);yd(b.id,tb[d],e);var h=Cb(tb[d][Gb.Td],b,[]);h&&h.length&&c(h[0].index)};c(a);}
var mf=!1,nf=function(a,b,c,d,e){if("gtm.js"==b){if(mf)return!1;mf=!0}xd(a,b);var f=Fe(a,d,e);Kd(a,"event",1);Kd(a,"ecommerce",1);Kd(a,"gtm");var h={id:a,name:b,Uc:ne(c),ub:[],qh:[],Ce:function(){I("GTM",6)}};h.ub=Kb(h);var k=lf(h,f);"gtm.js"!==b&&"gtm.sync"!==b||Qe(Pc.w);if(!k)return k;for(var l=0;l<h.ub.length;l++)if(h.ub[l]){var m=tb[l];if(m&&!Sc[String(m[Gb.va])])return!0}return!1};var of=[];function pf(){var a=hc("google_tag_data",{});a.ics||(a.ics={entries:{},set:qf,update:rf,addListener:sf,notifyListeners:tf,active:!1});return a.ics}function qf(a,b,c,d,e){var f=pf();f.active=!0;if(void 0!=b){var h=f.entries,k=h[a]||{},l=k.region,m=c&&g(c)?c.toUpperCase():void 0;d=d.toUpperCase();e=e.toUpperCase();m!==e&&(m===d?l===e:m||l)||(h[a]={region:m,initial:"granted"===b,update:k.update})}}
function rf(a,b){var c=pf();c.active=!0;if(void 0!=b){var d=uf(a),e=c.entries;e[a]=e[a]||{};e[a].update="granted"===b;if(uf(a)!==d)for(var f=0;f<of.length;++f){var h=of[f];ra(h.ie)&&-1!==h.ie.indexOf(a)&&(h.Le=!0)}}}function sf(a,b){of.push({ie:a,rg:b})}function tf(){for(var a=0;a<of.length;++a){var b=of[a];if(b.Le){b.Le=!1;try{b.rg.call()}catch(c){}}}}
var uf=function(a){var b=pf().entries[a]||{};return void 0!==b.update?b.update:void 0!==b.initial?b.initial:void 0},vf=function(){return pf().active},wf=function(a,b){pf().addListener(a,b)},xf=function(a,b){if(!1===uf(b)){var c=!1;wf([b],function(){!c&&uf(b)&&(a(),c=!0)})}};var yf=[J.o,J.J],zf=function(a){for(var b=a.region,c=ra(b)?b:[b],d=0;d<c.length;++d)for(var e=0;e<yf.length;e++){var f=yf[e],h=a[yf[e]],k=c[d];pf().set(f,h,k,"PK","PK-PB")}},Af=function(a){for(var b=0;b<yf.length;b++){var c=yf[b],d=a[yf[b]];pf().update(c,d)}pf().notifyListeners()},Bf=function(a){var b=uf(a);return void 0!=b?b:!0},Cf=function(){for(var a=[],b=0;b<yf.length;b++){var c=uf(yf[b]);a[b]=!0===c?"1":!1===c?"0":"-"}return"G1"+a.join("")};var Ef=/^https?:\/\/www\.googletagmanager\.com/;function Ff(){var a;return a}function Hf(a,b){}
function Gf(a){0!==a.indexOf("http://")&&0!==a.indexOf("https://")&&(a="https://"+a);"/"===a[a.length-1]&&(a=a.substring(0,a.length-1));return a}function If(){var a=!1;return a};var Jf=function(){this.eventModel={};this.targetConfig={};this.containerConfig={};this.h={};this.globalConfig={};this.C=function(){};this.B=function(){};this.he=void 0},Kf=function(a){var b=new Jf;b.eventModel=a;return b},Lf=function(a,b){a.targetConfig=b;return a},Mf=function(a,b){a.containerConfig=b;return a},Nf=function(a,b){a.h=b;return a},Of=function(a,b){a.globalConfig=b;return a},Pf=function(a,b){a.C=b;return a},Qf=function(a,b){a.B=b;return a};
Jf.prototype.getWithConfig=function(a){if(void 0!==this.eventModel[a])return this.eventModel[a];if(void 0!==this.targetConfig[a])return this.targetConfig[a];if(void 0!==this.containerConfig[a])return this.containerConfig[a];if(void 0!==this.h[a])return this.h[a];if(void 0!==this.globalConfig[a])return this.globalConfig[a]};
var Rf=function(a){function b(e){za(e,function(f){c[f]=null})}var c={};b(a.eventModel);b(a.targetConfig);b(a.containerConfig);b(a.globalConfig);var d=[];za(c,function(e){d.push(e)});return d};function Sf(a,b,c){for(var d=[],e=b.split(";"),f=0;f<e.length;f++){var h=e[f].split("="),k=h[0].replace(/^\s*|\s*$/g,"");if(k&&k==a){var l=h.slice(1).join("=").replace(/^\s*|\s*$/g,"");l&&c&&(l=decodeURIComponent(l));d.push(l)}}return d};var Tf={},Uf=function(a){return void 0==Tf[a]?!1:Tf[a]};var Wf=function(a,b,c,d){return Vf(d)?Sf(a,String(b||document.cookie),c):[]},Zf=function(a,b,c,d,e){if(Vf(e)){var f=Xf(a,d,e);if(1===f.length)return f[0].id;if(0!==f.length){f=Yf(f,function(h){return h.Sb},b);if(1===f.length)return f[0].id;f=Yf(f,function(h){return h.vb},c);return f[0]?f[0].id:void 0}}};function $f(a,b,c,d){var e=document.cookie;document.cookie=a;var f=document.cookie;return e!=f||void 0!=c&&0<=Wf(b,f,!1,d).indexOf(c)}
var dg=function(a,b,c){function d(p,t,v){if(null==v)return delete h[t],p;h[t]=v;return p+"; "+t+"="+v}function e(p,t){if(null==t)return delete h[t],p;h[t]=!0;return p+"; "+t}if(!Vf(c.Ca))return!1;var f;void 0==b?f=a+"=deleted; expires="+(new Date(0)).toUTCString():(c.encode&&(b=encodeURIComponent(b)),b=ag(b),f=a+"="+b);var h={};f=d(f,"path",c.path);var k;c.expires instanceof Date?k=c.expires.toUTCString():null!=c.expires&&(k=""+c.expires);f=d(f,"expires",k);f=d(f,"max-age",c.Th);f=d(f,"samesite",
c.Zh);c.$h&&(f=e(f,"secure"));f=e(f,c.flags);var l=c.domain;if("auto"===l){for(var m=bg(),q=0;q<m.length;++q){var r="none"!==m[q]?m[q]:void 0,u=d(f,"domain",r);if(!cg(r,c.path)&&$f(u,a,b,c.Ca))return!0}return!1}l&&"none"!==l&&(f=d(f,"domain",l));return cg(l,c.path)?!1:$f(f,a,b,c.Ca)},eg=function(a,b,c){null==c.path&&(c.path="/");c.domain||(c.domain="auto");return dg(a,b,c)};
function Yf(a,b,c){for(var d=[],e=[],f,h=0;h<a.length;h++){var k=a[h],l=b(k);l===c?d.push(k):void 0===f||l<f?(e=[k],f=l):l===f&&e.push(k)}return 0<d.length?d:e}function Xf(a,b,c){for(var d=[],e=Wf(a,void 0,void 0,c),f=0;f<e.length;f++){var h=e[f].split("."),k=h.shift();if(!b||-1!==b.indexOf(k)){var l=h.shift();l&&(l=l.split("-"),d.push({id:h.join("."),Sb:1*l[0]||1,vb:1*l[1]||1}))}}return d}
var ag=function(a){a&&1200<a.length&&(a=a.substring(0,1200));return a},fg=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,gg=/(^|\.)doubleclick\.net$/i,cg=function(a,b){return gg.test(document.location.hostname)||"/"===b&&fg.test(a)},bg=function(){var a=[],b=document.location.hostname.split(".");if(4===b.length){var c=b[b.length-1];if(parseInt(c,10).toString()===c)return["none"]}for(var d=b.length-2;0<=d;d--)a.push(b.slice(d).join("."));var e=document.location.hostname;gg.test(e)||fg.test(e)||a.push("none");
return a},Vf=function(a){if(!Uf("gtag_cs_api")||!a||!vf())return!0;var b=uf(a);return null==b?!0:!!b};var hg=function(){for(var a=fc.userAgent+(E.cookie||"")+(E.referrer||""),b=a.length,c=D.history.length;0<c;)a+=c--^b++;var d=1,e,f,h;if(a)for(d=0,f=a.length-1;0<=f;f--)h=a.charCodeAt(f),d=(d<<6&268435455)+h+(h<<14),e=d&266338304,d=0!=e?d^e>>21:d;return[Math.round(2147483647*Math.random())^d&2147483647,Math.round(Fa()/1E3)].join(".")},kg=function(a,b,c,d,e){var f=ig(b);return Zf(a,f,jg(c),d,e)},lg=function(a,b,c,d){var e=""+ig(c),f=jg(d);1<f&&(e+="-"+f);return[b,e,a].join(".")},ig=function(a){if(!a)return 1;
a=0===a.indexOf(".")?a.substr(1):a;return a.split(".").length},jg=function(a){if(!a||"/"===a)return 1;"/"!==a[0]&&(a="/"+a);"/"!==a[a.length-1]&&(a+="/");return a.split("/").length-1};function mg(a,b,c){var d,e=a.tb;null==e&&(e=7776E3);0!==e&&(d=new Date((b||Fa())+1E3*e));return{path:a.path,domain:a.domain,flags:a.flags,encode:!!c,expires:d}};function ng(){for(var a=pg,b={},c=0;c<a.length;++c)b[a[c]]=c;return b}function qg(){var a="ABCDEFGHIJKLMNOPQRSTUVWXYZ";a+=a.toLowerCase()+"0123456789-_";return a+"."}var pg,rg;function sg(a){pg=pg||qg();rg=rg||ng();for(var b=[],c=0;c<a.length;c+=3){var d=c+1<a.length,e=c+2<a.length,f=a.charCodeAt(c),h=d?a.charCodeAt(c+1):0,k=e?a.charCodeAt(c+2):0,l=f>>2,m=(f&3)<<4|h>>4,q=(h&15)<<2|k>>6,r=k&63;e||(r=64,d||(q=64));b.push(pg[l],pg[m],pg[q],pg[r])}return b.join("")}
function tg(a){function b(l){for(;d<a.length;){var m=a.charAt(d++),q=rg[m];if(null!=q)return q;if(!/^[\s\xa0]*$/.test(m))throw Error("Unknown base64 encoding at char: "+m);}return l}pg=pg||qg();rg=rg||ng();for(var c="",d=0;;){var e=b(-1),f=b(0),h=b(64),k=b(64);if(64===k&&-1===e)return c;c+=String.fromCharCode(e<<2|f>>4);64!=h&&(c+=String.fromCharCode(f<<4&240|h>>2),64!=k&&(c+=String.fromCharCode(h<<6&192|k)))}};var ug;var yg=function(){var a=vg,b=wg,c=xg(),d=function(h){a(h.target||h.srcElement||{})},e=function(h){b(h.target||h.srcElement||{})};if(!c.init){nc(E,"mousedown",d);nc(E,"keyup",d);nc(E,"submit",e);var f=HTMLFormElement.prototype.submit;HTMLFormElement.prototype.submit=function(){b(this);f.call(this)};c.init=!0}},zg=function(a,b,c,d,e){var f={callback:a,domains:b,fragment:2===c,placement:c,forms:d,sameHost:e};xg().decorators.push(f)},Ag=function(a,b,c){for(var d=xg().decorators,e={},f=0;f<d.length;++f){var h=
d[f],k;if(k=!c||h.forms)a:{var l=h.domains,m=a;if(l&&(h.sameHost||m!==E.location.hostname))for(var q=0;q<l.length;q++)if(l[q]instanceof RegExp){if(l[q].test(m)){k=!0;break a}}else if(0<=m.indexOf(l[q])){k=!0;break a}k=!1}if(k){var r=h.placement;void 0==r&&(r=h.fragment?2:1);r===b&&Ia(e,h.callback())}}return e},xg=function(){var a=hc("google_tag_data",{}),b=a.gl;b&&b.decorators||(b={decorators:[]},a.gl=b);return b};var Bg=/(.*?)\*(.*?)\*(.*)/,Cg=/^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,Dg=/^(?:www\.|m\.|amp\.)+/,Eg=/([^?#]+)(\?[^#]*)?(#.*)?/;function Fg(a){return new RegExp("(.*?)(^|&)"+a+"=([^&]*)&?(.*)")}
var Hg=function(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];void 0!==d&&d===d&&null!==d&&"[object Object]"!==d.toString()&&(b.push(c),b.push(sg(String(d))))}var e=b.join("*");return["1",Gg(e),e].join("*")},Gg=function(a,b){var c=[window.navigator.userAgent,(new Date).getTimezoneOffset(),window.navigator.userLanguage||window.navigator.language,Math.floor((new Date).getTime()/60/1E3)-(void 0===b?0:b),a].join("*"),d;if(!(d=ug)){for(var e=Array(256),f=0;256>f;f++){for(var h=f,k=0;8>k;k++)h=
h&1?h>>>1^3988292384:h>>>1;e[f]=h}d=e}ug=d;for(var l=4294967295,m=0;m<c.length;m++)l=l>>>8^ug[(l^c.charCodeAt(m))&255];return((l^-1)>>>0).toString(36)},Jg=function(){return function(a){var b=Ye(D.location.href),c=b.search.replace("?",""),d=Ue(c,"_gl",!0)||"";a.query=Ig(d)||{};var e=Xe(b,"fragment").match(Fg("_gl"));a.fragment=Ig(e&&e[3]||"")||{}}},Kg=function(){var a=Jg(),b=xg();b.data||(b.data={query:{},fragment:{}},a(b.data));var c={},d=b.data;d&&(Ia(c,d.query),Ia(c,d.fragment));return c},Ig=function(a){var b;
b=void 0===b?3:b;try{if(a){var c;a:{for(var d=a,e=0;3>e;++e){var f=Bg.exec(d);if(f){c=f;break a}d=decodeURIComponent(d)}c=void 0}var h=c;if(h&&"1"===h[1]){var k=h[3],l;a:{for(var m=h[2],q=0;q<b;++q)if(m===Gg(k,q)){l=!0;break a}l=!1}if(l){for(var r={},u=k?k.split("*"):[],p=0;p<u.length;p+=2)r[u[p]]=tg(u[p+1]);return r}}}}catch(t){}};
function Lg(a,b,c,d){function e(q){var r=q,u=Fg(a).exec(r),p=r;if(u){var t=u[2],v=u[4];p=u[1];v&&(p=p+t+v)}q=p;var w=q.charAt(q.length-1);q&&"&"!==w&&(q+="&");return q+m}d=void 0===d?!1:d;var f=Eg.exec(c);if(!f)return"";var h=f[1],k=f[2]||"",l=f[3]||"",m=a+"="+b;d?l="#"+e(l.substring(1)):k="?"+e(k.substring(1));return""+h+k+l}
function Mg(a,b){var c="FORM"===(a.tagName||"").toUpperCase(),d=Ag(b,1,c),e=Ag(b,2,c),f=Ag(b,3,c);if(Ja(d)){var h=Hg(d);c?Ng("_gl",h,a):Og("_gl",h,a,!1)}if(!c&&Ja(e)){var k=Hg(e);Og("_gl",k,a,!0)}for(var l in f)if(f.hasOwnProperty(l))a:{var m=l,q=f[l],r=a;if(r.tagName){if("a"===r.tagName.toLowerCase()){Og(m,q,r,void 0);break a}if("form"===r.tagName.toLowerCase()){Ng(m,q,r);break a}}"string"==typeof r&&Lg(m,q,r,void 0)}}
function Og(a,b,c,d){if(c.href){var e=Lg(a,b,c.href,void 0===d?!1:d);Se.test(e)&&(c.href=e)}}
function Ng(a,b,c){if(c&&c.action){var d=(c.method||"").toLowerCase();if("get"===d){for(var e=c.childNodes||[],f=!1,h=0;h<e.length;h++){var k=e[h];if(k.name===a){k.setAttribute("value",b);f=!0;break}}if(!f){var l=E.createElement("input");l.setAttribute("type","hidden");l.setAttribute("name",a);l.setAttribute("value",b);c.appendChild(l)}}else if("post"===d){var m=Lg(a,b,c.action);Se.test(m)&&(c.action=m)}}}
var vg=function(a){try{var b;a:{for(var c=a,d=100;c&&0<d;){if(c.href&&c.nodeName.match(/^a(?:rea)?$/i)){b=c;break a}c=c.parentNode;d--}b=null}var e=b;if(e){var f=e.protocol;"http:"!==f&&"https:"!==f||Mg(e,e.hostname)}}catch(h){}},wg=function(a){try{if(a.action){var b=Xe(Ye(a.action),"host");Mg(a,b)}}catch(c){}},Pg=function(a,b,c,d){yg();zg(a,b,"fragment"===c?2:1,!!d,!1)},Qg=function(a){yg();zg(a,[D.location.hostname],3,!0,!0)},Rg=function(){var a=E.location.hostname,b=Cg.exec(E.referrer);if(!b)return!1;
var c=b[2],d=b[1],e="";if(c){var f=c.split("/"),h=f[1];e="s"===h?decodeURIComponent(f[2]):decodeURIComponent(h)}else if(d){if(0===d.indexOf("xn--"))return!1;e=d.replace(/-/g,".").replace(/\.\./g,"-")}var k=a.replace(Dg,""),l=e.replace(Dg,""),m;if(!(m=k===l)){var q="."+l;m=k.substring(k.length-q.length,k.length)===q}return m},Sg=function(a,b){return!1===a?!1:a||b||Rg()};var Tg=/^\w+$/,Ug=/^[\w-]+$/,Vg=/^~?[\w-]+$/,Wg={aw:"_aw",dc:"_dc",gf:"_gf",ha:"_ha",gp:"_gp"},Xg=function(){if(!Uf("gtag_cs_api")||!vf())return!0;var a=uf("ad_storage");return null==a?!0:!!a},Yg=function(a){Xg()?a():xf(a,"ad_storage")};function Zg(a){return a&&"string"==typeof a&&a.match(Tg)?a:"_gcl"}
var ah=function(){var a=Ye(D.location.href),b=Xe(a,"query",!1,void 0,"gclid"),c=Xe(a,"query",!1,void 0,"gclsrc"),d=Xe(a,"query",!1,void 0,"dclid");if(!b||!c){var e=a.hash.replace("#","");b=b||Ue(e,"gclid",void 0);c=c||Ue(e,"gclsrc",void 0)}return $g(b,c,d)},$g=function(a,b,c){var d={},e=function(f,h){d[h]||(d[h]=[]);d[h].push(f)};d.gclid=a;d.gclsrc=b;d.dclid=c;if(void 0!==a&&a.match(Ug))switch(b){case void 0:e(a,"aw");break;case "aw.ds":e(a,"aw");e(a,"dc");break;case "ds":e(a,"dc");break;case "3p.ds":Uf("gtm_3pds")&&
e(a,"dc");break;case "gf":e(a,"gf");break;case "ha":e(a,"ha");break;case "gp":e(a,"gp")}c&&e(c,"dc");return d},ch=function(a){var b=ah();Yg(function(){return bh(b,a)})};
function bh(a,b,c){function d(m,q){var r=dh(m,e);r&&(eg(r,q,f),h=!0)}b=b||{};var e=Zg(b.prefix);c=c||Fa();var f=mg(b,c,!0);f.Ca="ad_storage";var h=!1,k=Math.round(c/1E3),l=function(m){return["GCL",k,m].join(".")};a.aw&&(!0===b.di?d("aw",l("~"+a.aw[0])):d("aw",l(a.aw[0])));a.dc&&d("dc",l(a.dc[0]));a.gf&&d("gf",l(a.gf[0]));a.ha&&d("ha",l(a.ha[0]));a.gp&&d("gp",l(a.gp[0]));return h}
var fh=function(a,b){var c=Kg();Yg(function(){for(var d=Zg(b.prefix),e=0;e<a.length;++e){var f=a[e];if(void 0!==Wg[f]){var h=dh(f,d),k=c[h];if(k){var l=Math.min(eh(k),Fa()),m;b:{for(var q=l,r=Wf(h,E.cookie,void 0,"ad_storage"),u=0;u<r.length;++u)if(eh(r[u])>q){m=!0;break b}m=!1}if(!m){var p=mg(b,l,!0);p.Ca="ad_storage";eg(h,k,p)}}}}bh($g(c.gclid,c.gclsrc),b)})},dh=function(a,b){var c=Wg[a];if(void 0!==c)return b+c},eh=function(a){var b=a.split(".");return 3!==b.length||"GCL"!==b[0]?0:1E3*(Number(b[1])||
0)};function gh(a){var b=a.split(".");if(3==b.length&&"GCL"==b[0]&&b[1])return b[2]}
var hh=function(a,b,c,d,e){if(ra(b)){var f=Zg(e),h=function(){for(var k={},l=0;l<a.length;++l){var m=dh(a[l],f);if(m){var q=Wf(m,E.cookie,void 0,"ad_storage");q.length&&(k[m]=q.sort()[q.length-1])}}return k};Yg(function(){Pg(h,b,c,d)})}},ih=function(a){return a.filter(function(b){return Vg.test(b)})},jh=function(a,b){for(var c=Zg(b.prefix),d={},e=0;e<a.length;e++)Wg[a[e]]&&(d[a[e]]=Wg[a[e]]);Yg(function(){za(d,function(f,h){var k=Wf(c+h,E.cookie,void 0,"ad_storage");if(k.length){var l=k[0],m=eh(l),
q={};q[f]=[gh(l)];bh(q,b,m)}})})},kh=function(){var a=["","aw.ds"],b=ah(),c=b.gclid,d=b.gclsrc||"";c&&-1!==a.indexOf(d)&&Qg(function(){var e={gclid:c};d&&(e.gclsrc=d);return e})},lh=function(){var a;if(Xg()){for(var b=[],c=E.cookie.split(";"),d=/^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/,e=0;e<c.length;e++){var f=c[e].match(d);f&&b.push({md:f[1],value:f[2]})}var h={};if(b&&b.length)for(var k=0;k<b.length;k++){var l=b[k].value.split(".");"1"==l[0]&&3==l.length&&l[1]&&(h[b[k].md]||(h[b[k].md]=[]),h[b[k].md].push({timestamp:l[1],
ug:l[2]}))}a=h}else a={};return a};function mh(){var a=!1;return a}
function nh(a){function b(l){var m;Qc.reported_gclid||(Qc.reported_gclid={});m=Qc.reported_gclid;var q=d+(l?"gcu":"gcs");if(!m[q]){m[q]=!0;var r=[],u=function(v,w){w&&r.push(v+"="+encodeURIComponent(w))},p=d;u("gclid",p);u("gclsrc",e);var t="https://www.google.com/pagead/landing?"+r.join("&");tc(t)}}var c=ah(),d=c.gclid||"",e=c.gclsrc,
f=!a&&(!d||e&&"aw.ds"!==e?!1:!0),h=mh();if(f||h){var k=""+hg();b();}};var oh;if(3===Pc.Kb.length)oh="g";else{var ph="G";oh=ph}
var qh={"":"n",UA:"u",AW:"a",DC:"d",G:"e",GF:"f",HA:"h",GTM:oh,OPT:"o"},rh=function(a){var b=Pc.w.split("-"),c=b[0].toUpperCase(),d=qh[c]||"i",e=a&&"GTM"===c?b[1]:"OPT"===c?b[1]:"",f;if(3===Pc.Kb.length){var h=void 0;f="2"+(h||"w")}else f=
"";return f+d+Pc.Kb+e};var Bh=["1"],Ch={},Gh=function(a){var b=Dh(a.prefix);Ch[b]||Eh(b,a.path,a.domain)||(Fh(b,hg(),a),Eh(b,a.path,a.domain))};function Fh(a,b,c){var d=lg(b,"1",c.domain,c.path),e=mg(c);e.Ca="ad_storage";eg(a,d,e)}function Eh(a,b,c){var d=kg(a,b,c,Bh,"ad_storage");d&&(Ch[a]=d);return d}function Dh(a){return(a||"_gcl")+"_au"};var Hh=/^\d+\.fls\.doubleclick\.net$/;function Ih(a){Bf("ad_storage")?a():xf(a,"ad_storage")}function Jh(a){var b=Ye(D.location.href),c=Xe(b,"host",!1);if(c&&c.match(Hh)){var d=Xe(b,"path").split(a+"=");if(1<d.length)return d[1].split(";")[0].split("?")[0]}}
function Kh(a,b){if("aw"==a||"dc"==a){var c=Jh("gcl"+a);if(c)return c.split(".")}var d=Zg(b);if(Bf("ad_storage")&&"_gcl"==d){var e;e=ah()[a]||[];if(0<e.length)return e}var f=dh(a,d),h;if(f){var k=[];if(E.cookie){var l=Wf(f,E.cookie,void 0,"ad_storage");if(l&&0!=l.length){for(var m=0;m<l.length;m++){var q=gh(l[m]);q&&-1===n(k,q)&&k.push(q)}h=ih(k)}else h=k}else h=k}else h=[];return h}
var Lh=function(){var a=Jh("gac");if(a)return decodeURIComponent(a);var b=lh(),c=[];za(b,function(d,e){for(var f=[],h=0;h<e.length;h++)f.push(e[h].ug);f=ih(f);f.length&&c.push(d+":"+f.join(","))});return c.join(";")},Mh=function(a,b){var c=ah().dc||[];Ih(function(){Gh(b);var d=Ch[Dh(b.prefix)],e=!1;if(d&&0<c.length){var f=Qc.joined_au=Qc.joined_au||{},h=b.prefix||"_gcl";if(!f[h])for(var k=0;k<c.length;k++){var l="https://adservice.google.com/ddm/regclk";l=l+"?gclid="+c[k]+"&auiddc="+d;tc(l);e=f[h]=!0}}null==a&&
(a=e);if(a&&d){var m=Dh(b.prefix),q=Ch[m];q&&Fh(m,q,b)}})};var Gi={},Hi=["G","GP"];Gi.Ue="";var Ii=Gi.Ue.split(",");function Ji(){var a=Qc;return a.gcq=a.gcq||new Ki}
var Li=function(a,b,c){Ji().register(a,b,c)},Mi=function(a,b,c,d){Ji().push("event",[b,a],c,d)},Ni=function(a,b){Ji().push("config",[a],b)},Oi={},Pi=function(a){return!0},Qi=function(){this.status=1;this.containerConfig={};this.targetConfig={};this.i={};this.m=null;this.h=!1},Ri=function(a,b,c,d,e){this.type=a;this.m=b;this.Y=c||"";
this.h=d;this.i=e},Ki=function(){this.i={};this.m={};this.h=[]},Si=function(a,b){var c=Rd(b);return a.i[c.containerId]=a.i[c.containerId]||new Qi},Ti=function(a,b){if(b){var c=Rd(b);if(c&&1===Si(a,b).status&&Pi(c.prefix)){Si(a,b).status=2;var d={};vd&&(d.timeoutId=D.setTimeout(function(){I("GTM",38);gd()},3E3));a.push("require",[d],c.containerId);Oi[c.containerId]=Fa();if(Ud()){}else{var f=encodeURIComponent(c.containerId),h=("http:"!=D.location.protocol?"https:":"http:")+"//www.googletagmanager.com";jc(h+"/gtag/js?id="+
f+"&l=dataLayer&cx=c")}}}},Ui=function(a,b,c,d){if(d.Y){var e=Si(a,d.Y),f=e.m;if(f){var h=C(c),k=C(e.targetConfig[d.Y]),l=C(e.containerConfig),m=C(e.i),q=C(a.m),r=Fd("gtm.uniqueEventId"),u=Rd(d.Y).prefix,p=Qf(Pf(Of(Nf(Mf(Lf(Kf(h),k),l),m),q),function(){zd(r,u,"2");}),function(){zd(r,u,"3");});try{zd(r,u,"1");
f(d.Y,b,d.m,p)}catch(t){zd(r,u,"4");}}}};
Ki.prototype.register=function(a,b,c){if(3!==Si(this,a).status){Si(this,a).m=b;Si(this,a).status=3;c&&(Si(this,a).i=c);var d=Rd(a),e=Oi[d.containerId];if(void 0!==e){var f=Qc[d.containerId].bootstrap,h=d.prefix.toUpperCase();Qc[d.containerId]._spx&&(h=h.toLowerCase());var k=Fd("gtm.uniqueEventId"),l=h,m=Fa()-f;if(vd&&!md[k]){k!==id&&(fd(),id=k);var q=l+"."+Math.floor(f-e)+"."+Math.floor(m);rd=rd?rd+","+q:"&cl="+q}delete Oi[d.containerId]}this.flush()}};
Ki.prototype.push=function(a,b,c,d){var e=Math.floor(Fa()/1E3);Ti(this,c);this.h.push(new Ri(a,e,c,b,d));d||this.flush()};
Ki.prototype.flush=function(a){for(var b=this;this.h.length;){var c=this.h[0];if(c.i)c.i=!1,this.h.push(c);else switch(c.type){case "require":if(3!==Si(this,c.Y).status&&!a)return;vd&&D.clearTimeout(c.h[0].timeoutId);break;case "set":za(c.h[0],function(l,m){C(La(l,m),b.m)});break;case "config":var d=c.h[0],e=!!d[J.bc];delete d[J.bc];var f=Si(this,c.Y),h=Rd(c.Y),k=h.containerId===h.id;e||(k?f.containerConfig={}:f.targetConfig[c.Y]={});f.h&&e||Ui(this,J.D,d,c);f.h=!0;delete d[J.ra];k?C(d,f.containerConfig):
C(d,f.targetConfig[c.Y]);break;case "event":Ui(this,c.h[1],c.h[0],c)}this.h.shift()}};var Vi=["GP","G"],Wi="G".split(/,/);Wi.push("GF");Wi.push("HA");var Xi=!1;Xi=!0;var Yi=null,Zi={},$i={},aj;function bj(a,b){var c={event:a};b&&(c.eventModel=C(b),b[J.yc]&&(c.eventCallback=b[J.yc]),b[J.Fb]&&(c.eventTimeout=b[J.Fb]));return c}
var hj={config:function(a){},event:function(a){var b=a[1];if(g(b)&&!(3<a.length)){var c;if(2<a.length){if(!Qa(a[2])&&void 0!=a[2])return;c=a[2]}var d=bj(b,c);return d}},js:function(a){if(2==a.length&&a[1].getTime)return{event:"gtm.js","gtm.start":a[1].getTime()}},policy:function(){},set:function(a){var b;2==a.length&&Qa(a[1])?b=C(a[1]):3==a.length&&
g(a[1])&&(b={},Qa(a[2])||ra(a[2])?b[a[1]]=C(a[2]):b[a[1]]=a[2]);if(b){b._clear=!0;return b}}};var ij={policy:!0};var jj=function(a,b){var c=a.hide;if(c&&void 0!==c[b]&&c.end){c[b]=!1;var d=!0,e;for(e in c)if(c.hasOwnProperty(e)&&!0===c[e]){d=!1;break}d&&(c.end(),c.end=null)}},lj=function(a){var b=kj(),c=b&&b.hide;c&&c.end&&(c[a]=!0)};var mj=!1,nj=[];function oj(){if(!mj){mj=!0;for(var a=0;a<nj.length;a++)H(nj[a])}}var pj=function(a){mj?H(a):nj.push(a)};var Hj=function(a){if(Gj(a))return a;this.h=a};Hj.prototype.yg=function(){return this.h};var Gj=function(a){return!a||"object"!==Oa(a)||Qa(a)?!1:"getUntrustedUpdateValue"in a};Hj.prototype.getUntrustedUpdateValue=Hj.prototype.yg;var Ij=[],Jj=!1,Kj=function(a){return D["dataLayer"].push(a)},Lj=function(a){var b=Qc["dataLayer"],c=b?b.subscribers:1,d=0;return function(){++d===c&&a()}};
function Mj(a){var b=a._clear;za(a,function(f,h){"_clear"!==f&&(b&&Jd(f,void 0),Jd(f,h))});Vc||(Vc=a["gtm.start"]);var c=a.event;if(!c)return!1;var d=a["gtm.uniqueEventId"];d||(d=ad(),a["gtm.uniqueEventId"]=d,Jd("gtm.uniqueEventId",d));Xc=c;var e=Nj(a);Xc=null;switch(c){case "gtm.init":I("GTM",19),e&&I("GTM",20)}return e}
function Nj(a){var b=a.event,c=a["gtm.uniqueEventId"],d,e=Qc.zones;d=e?e.checkState(Pc.w,c):pe;return d.active?nf(c,b,d.isWhitelisted,a.eventCallback,a.eventTimeout)?!0:!1:!1}
function Oj(){for(var a=!1;!Jj&&0<Ij.length;){Jj=!0;delete Cd.eventModel;Ed();var b=Ij.shift();if(null!=b){var c=Gj(b);if(c){var d=b;b=Gj(d)?d.getUntrustedUpdateValue():void 0;for(var e=["gtm.whitelist","gtm.blacklist","tagTypeBlacklist"],f=0;f<e.length;f++){var h=e[f],k=Fd(h,1);if(ra(k)||Qa(k))k=C(k);Dd[h]=k}}try{if(pa(b))try{b.call(Gd)}catch(v){}else if(ra(b)){var l=b;if(g(l[0])){var m=
l[0].split("."),q=m.pop(),r=l.slice(1),u=Fd(m.join("."),2);if(void 0!==u&&null!==u)try{u[q].apply(u,r)}catch(v){}}}else{var p=b;if(p&&("[object Arguments]"==Object.prototype.toString.call(p)||Object.prototype.hasOwnProperty.call(p,"callee"))){a:{if(b.length&&g(b[0])){var t=hj[b[0]];if(t&&(!c||!ij[b[0]])){b=t(b);break a}}b=void 0}if(!b){Jj=!1;continue}}a=Mj(b)||a}}finally{c&&Ed(!0)}}Jj=!1}
return!a}function Pj(){var a=Oj();try{jj(D["dataLayer"],Pc.w)}catch(b){}return a}
var Rj=function(){var a=hc("dataLayer",[]),b=hc("google_tag_manager",{});b=b["dataLayer"]=b["dataLayer"]||{};xe(function(){b.gtmDom||(b.gtmDom=!0,a.push({event:"gtm.dom"}))});pj(function(){b.gtmLoad||(b.gtmLoad=!0,a.push({event:"gtm.load"}))});b.subscribers=(b.subscribers||0)+1;var c=a.push;a.push=function(){var d;if(0<Qc.SANDBOXED_JS_SEMAPHORE){d=[];for(var e=0;e<arguments.length;e++)d[e]=new Hj(arguments[e])}else d=[].slice.call(arguments,0);var f=c.apply(a,d);Ij.push.apply(Ij,d);if(300<
this.length)for(I("GTM",4);300<this.length;)this.shift();var h="boolean"!==typeof f||f;return Oj()&&h};Ij.push.apply(Ij,a.slice(0));Qj()&&H(Pj)},Qj=function(){var a=!0;return a};var Sj={};Sj.Gb=new String("undefined");
var Tj=function(a){this.h=function(b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]===Sj.Gb?b:a[d]);return c.join("")}};Tj.prototype.toString=function(){return this.h("undefined")};Tj.prototype.valueOf=Tj.prototype.toString;Sj.Cf=Tj;Sj.Gc={};Sj.hg=function(a){return new Tj(a)};var Uj={};Sj.ih=function(a,b){var c=ad();Uj[c]=[a,b];return c};Sj.je=function(a){var b=a?0:1;return function(c){var d=Uj[c];if(d&&"function"===typeof d[b])d[b]();Uj[c]=void 0}};Sj.Hg=function(a){for(var b=!1,c=!1,d=2;d<a.length;d++)b=
b||8===a[d],c=c||16===a[d];return b&&c};Sj.Zg=function(a){if(a===Sj.Gb)return a;var b=ad();Sj.Gc[b]=a;return'google_tag_manager["'+Pc.w+'"].macro('+b+")"};Sj.Rg=function(a,b,c){a instanceof Sj.Cf&&(a=a.h(Sj.ih(b,c)),b=oa);return{Sc:a,C:b}};var Vj=function(a,b,c){function d(f,h){var k=f[h];return k}var e={event:b,"gtm.element":a,"gtm.elementClasses":d(a,"className"),"gtm.elementId":a["for"]||pc(a,"id")||"","gtm.elementTarget":a.formTarget||d(a,"target")||""};c&&(e["gtm.triggers"]=c.join(","));e["gtm.elementUrl"]=(a.attributes&&a.attributes.formaction?a.formAction:"")||a.action||d(a,"href")||a.src||a.code||a.codebase||
"";return e},Wj=function(a){Qc.hasOwnProperty("autoEventsSettings")||(Qc.autoEventsSettings={});var b=Qc.autoEventsSettings;b.hasOwnProperty(a)||(b[a]={});return b[a]},Xj=function(a,b,c){Wj(a)[b]=c},Yj=function(a,b,c,d){var e=Wj(a),f=Ga(e,b,d);e[b]=c(f)},Zj=function(a,b,c){var d=Wj(a);return Ga(d,b,c)};var ak=["input","select","textarea"],bk=["button","hidden","image","reset","submit"],ck=function(a){var b=a.tagName.toLowerCase();return!sa(ak,function(c){return c===b})||"input"===b&&sa(bk,function(c){return c===a.type.toLowerCase()})?!1:!0},dk=function(a){return a.form?a.form.tagName?a.form:E.getElementById(a.form):sc(a,["form"],100)},ek=function(a,b,c){if(!a.elements)return 0;for(var d=b.getAttribute(c),e=0,f=1;e<a.elements.length;e++){var h=a.elements[e];if(ck(h)){if(h.getAttribute(c)===d)return f;
f++}}return 0};var fk=!!D.MutationObserver,gk=void 0,hk=function(a){if(!gk){var b=function(){var c=E.body;if(c)if(fk)(new MutationObserver(function(){for(var e=0;e<gk.length;e++)H(gk[e])})).observe(c,{childList:!0,subtree:!0});else{var d=!1;nc(c,"DOMNodeInserted",function(){d||(d=!0,H(function(){d=!1;for(var e=0;e<gk.length;e++)H(gk[e])}))})}};gk=[];E.body?b():H(b)}gk.push(a)};
var sk=function(){var a=E.body,b=E.documentElement||a&&a.parentElement,c,d;if(E.compatMode&&"BackCompat"!==E.compatMode)c=b?b.clientHeight:0,d=b?b.clientWidth:0;else{var e=function(f,h){return f&&h?Math.min(f,h):Math.max(f,h)};I("GTM",7);c=e(b?b.clientHeight:0,a?a.clientHeight:0);d=e(b?b.clientWidth:0,a?a.clientWidth:0)}return{width:d,height:c}},tk=function(a){var b=sk(),c=b.height,d=b.width,e=a.getBoundingClientRect(),f=e.bottom-e.top,h=e.right-e.left;return f&&h?(1-Math.min((Math.max(0-e.left,0)+
Math.max(e.right-d,0))/h,1))*(1-Math.min((Math.max(0-e.top,0)+Math.max(e.bottom-c,0))/f,1)):0},uk=function(a){if(E.hidden)return!0;var b=a.getBoundingClientRect();if(b.top==b.bottom||b.left==b.right||!D.getComputedStyle)return!0;var c=D.getComputedStyle(a,null);if("hidden"===c.visibility)return!0;for(var d=a,e=c;d;){if("none"===e.display)return!0;var f=e.opacity,h=e.filter;if(h){var k=h.indexOf("opacity(");0<=k&&(h=h.substring(k+8,h.indexOf(")",k)),"%"==h.charAt(h.length-1)&&(h=h.substring(0,h.length-
1)),f=Math.min(h,f))}if(void 0!==f&&0>=f)return!0;(d=d.parentElement)&&(e=D.getComputedStyle(d,null))}return!1};
var Bk=function(a,b,c){function d(){var h=a();f+=e?(Fa()-e)*h.playbackRate/1E3:0;e=Fa()}var e=0,f=0;return{Tb:function(h,k,l){var m=a(),q=m.ke,r=void 0!==l?Math.round(l):void 0!==k?Math.round(m.ke*k):Math.round(m.ig),u=void 0!==k?Math.round(100*k):0>=q?0:Math.round(r/q*100),p=E.hidden?!1:.5<=tk(c);d();var t=Vj(c,"gtm.video",[b]);t["gtm.videoProvider"]="youtube";t["gtm.videoStatus"]=h;t["gtm.videoUrl"]=m.url;t["gtm.videoTitle"]=m.title;t["gtm.videoDuration"]=Math.round(q);t["gtm.videoCurrentTime"]=
Math.round(r);t["gtm.videoElapsedTime"]=Math.round(f);t["gtm.videoPercent"]=u;t["gtm.videoVisible"]=p;Kj(t)},kh:function(){e=Fa()},Hc:function(){d()}}};var Ck=D.clearTimeout,Dk=D.setTimeout,T=function(a,b,c){if(Ud()){b&&H(b)}else return jc(a,b,c)},Ek=function(){return D.location.href},Fk=function(a){return Xe(Ye(a),"fragment")},Gk=function(a){return We(Ye(a))},U=function(a,b){return Fd(a,b||2)},Hk=function(a,b,c){var d;b?(a.eventCallback=b,c&&(a.eventTimeout=c),d=Kj(a)):d=Kj(a);return d},Ik=function(a,b){D[a]=b},V=function(a,b,c){b&&(void 0===D[a]||c&&!D[a])&&(D[a]=
b);return D[a]},Jk=function(a,b,c){return Wf(a,b,void 0===c?!0:!!c)},Kk=function(a,b){if(Ud()){b&&H(b)}else lc(a,b)},Lk=function(a){return!!Zj(a,"init",!1)},Mk=function(a){Xj(a,"init",!0)},Nk=function(a,b){var c=(void 0===b?0:b)?"www.googletagmanager.com/gtag/js":Uc;c+="?id="+encodeURIComponent(a)+"&l=dataLayer";T(Q("https://","http://",c))},Ok=function(a,b){var c=a[b];return c};
var Pk=Sj.Rg;var ll=new xa;function ml(a,b){function c(h){var k=Ye(h),l=Xe(k,"protocol"),m=Xe(k,"host",!0),q=Xe(k,"port"),r=Xe(k,"path").toLowerCase().replace(/\/$/,"");if(void 0===l||"http"==l&&"80"==q||"https"==l&&"443"==q)l="web",q="default";return[l,m,q,r]}for(var d=c(String(a)),e=c(String(b)),f=0;f<d.length;f++)if(d[f]!==e[f])return!1;return!0}
function nl(a){return ol(a)?1:0}
function ol(a){var b=a.arg0,c=a.arg1;if(a.any_of&&ra(c)){for(var d=0;d<c.length;d++)if(nl({"function":a["function"],arg0:b,arg1:c[d]}))return!0;return!1}switch(a["function"]){case "_cn":return 0<=String(b).indexOf(String(c));case "_css":var e;a:{if(b){var f=["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"];try{for(var h=0;h<f.length;h++)if(b[f[h]]){e=b[f[h]](c);break a}}catch(v){}}e=!1}return e;case "_ew":var k,l;k=String(b);l=String(c);var m=k.length-
l.length;return 0<=m&&k.indexOf(l,m)==m;case "_eq":return String(b)==String(c);case "_ge":return Number(b)>=Number(c);case "_gt":return Number(b)>Number(c);case "_lc":var q;q=String(b).split(",");return 0<=n(q,String(c));case "_le":return Number(b)<=Number(c);case "_lt":return Number(b)<Number(c);case "_re":var r;var u=a.ignore_case?"i":void 0;try{var p=String(c)+u,t=ll.get(p);t||(t=new RegExp(c,u),ll.set(p,t));r=t.test(b)}catch(v){r=!1}return r;case "_sw":return 0==String(b).indexOf(String(c));case "_um":return ml(b,
c)}return!1};var pl=function(a,b){var c=function(){};c.prototype=a.prototype;var d=new c;a.apply(d,Array.prototype.slice.call(arguments,1));return d};var ql={},rl=encodeURI,W=encodeURIComponent,sl=mc;var tl=function(a,b){if(!a)return!1;var c=Xe(Ye(a),"host");if(!c)return!1;for(var d=0;b&&d<b.length;d++){var e=b[d]&&b[d].toLowerCase();if(e){var f=c.length-e.length;0<f&&"."!=e.charAt(0)&&(f--,e="."+e);if(0<=f&&c.indexOf(e,f)==f)return!0}}return!1};
var ul=function(a,b,c){for(var d={},e=!1,f=0;a&&f<a.length;f++)a[f]&&a[f].hasOwnProperty(b)&&a[f].hasOwnProperty(c)&&(d[a[f][b]]=a[f][c],e=!0);return e?d:null};ql.Ig=function(){var a=!1;return a};var Hm=function(){var a=D.gaGlobal=D.gaGlobal||{};a.hid=a.hid||wa();return a.hid};var Sm=window,Tm=document,Um=function(a){var b=Sm._gaUserPrefs;if(b&&b.ioo&&b.ioo()||a&&!0===Sm["ga-disable-"+a])return!0;try{var c=Sm.external;if(c&&c._gaUserPrefs&&"oo"==c._gaUserPrefs)return!0}catch(f){}for(var d=Sf("AMP_TOKEN",String(Tm.cookie),!0),e=0;e<d.length;e++)if("$OPT_OUT"==d[e])return!0;return Tm.getElementById("__gaOptOutExtension")?!0:!1};
var Xm=function(a){za(a,function(c){"_"===c.charAt(0)&&delete a[c]});var b=a[J.ja]||{};za(b,function(c){"_"===c.charAt(0)&&delete b[c]})};var an=function(a,b,c){Mi(b,c,a)},bn=function(a,b,c){Mi(b,c,a,!0)},dn=function(a,b){};
function cn(a,b){}var Z={a:{}};
Z.a.ctv=["google"],function(){(function(a){Z.__ctv=a;Z.__ctv.b="ctv";Z.__ctv.g=!0;Z.__ctv.priorityOverride=0})(function(){return"10"})}();
Z.a.sdl=["google"],function(){function a(){return!!(Object.keys(l("horiz.pix")).length||Object.keys(l("horiz.pct")).length||Object.keys(l("vert.pix")).length||Object.keys(l("vert.pct")).length)}function b(y){for(var B=[],z=y.split(","),A=0;A<z.length;A++){var F=Number(z[A]);if(isNaN(F))return[];q.test(z[A])||B.push(F)}return B}function c(){var y=0,B=0;return function(){var z=sk(),A=z.height;y=Math.max(v.scrollLeft+z.width,y);B=Math.max(v.scrollTop+A,B);return{kg:y,lg:B}}}function d(){p=V("self");
t=p.document;v=t.scrollingElement||t.body&&t.body.parentNode;x=c()}function e(y,B,z,A){var F=l(B),G={},L;for(L in F){G.Ga=L;if(F.hasOwnProperty(G.Ga)){var R=Number(G.Ga);y<R||(Hk({event:"gtm.scrollDepth","gtm.scrollThreshold":R,"gtm.scrollUnits":z.toLowerCase(),"gtm.scrollDirection":A,"gtm.triggers":F[G.Ga].join(",")}),Yj("sdl",B,function(Y){return function(aa){delete aa[Y.Ga];return aa}}(G),{}))}G={Ga:G.Ga}}}function f(){var y=x(),B=y.kg,z=y.lg,A=B/v.scrollWidth*100,F=z/v.scrollHeight*100;e(B,"horiz.pix",
r.Ib,u.Dd);e(A,"horiz.pct",r.Hb,u.Dd);e(z,"vert.pix",r.Ib,u.Xd);e(F,"vert.pct",r.Hb,u.Xd);Xj("sdl","pending",!1)}function h(){var y=250,B=!1;t.scrollingElement&&t.documentElement&&p.addEventListener&&(y=50,B=!0);var z=0,A=!1,F=function(){A?z=Dk(F,y):(z=0,f(),Lk("sdl")&&!a()&&(oc(p,"scroll",G),oc(p,"resize",G),Xj("sdl","init",!1)));A=!1},G=function(){B&&x();z?A=!0:(z=Dk(F,y),Xj("sdl","pending",!0))};return G}function k(y,B,z){if(B){var A=b(String(y));Yj("sdl",z,function(F){for(var G=0;G<A.length;G++){var L=
String(A[G]);F.hasOwnProperty(L)||(F[L]=[]);F[L].push(B)}return F},{})}}function l(y){return Zj("sdl",y,{})}function m(y){H(y.vtp_gtmOnSuccess);var B=y.vtp_uniqueTriggerId,z=y.vtp_horizontalThresholdsPixels,A=y.vtp_horizontalThresholdsPercent,F=y.vtp_verticalThresholdUnits,G=y.vtp_verticalThresholdsPixels,L=y.vtp_verticalThresholdsPercent;switch(y.vtp_horizontalThresholdUnits){case r.Ib:k(z,B,"horiz.pix");break;case r.Hb:k(A,B,"horiz.pct")}switch(F){case r.Ib:k(G,B,"vert.pix");break;case r.Hb:k(L,
B,"vert.pct")}Lk("sdl")?Zj("sdl","pending")||(w||(d(),w=!0),H(function(){return f()})):(d(),w=!0,v&&(Mk("sdl"),Xj("sdl","pending",!0),H(function(){f();if(a()){var R=h();nc(p,"scroll",R);nc(p,"resize",R)}else Xj("sdl","init",!1)})))}var q=/^\s*$/,r={Hb:"PERCENT",Ib:"PIXELS"},u={Xd:"vertical",Dd:"horizontal"},p,t,v,w=!1,x;(function(y){Z.__sdl=y;Z.__sdl.b="sdl";Z.__sdl.g=!0;Z.__sdl.priorityOverride=0})(function(y){y.vtp_triggerStartOption?m(y):pj(function(){m(y)})})}();

Z.a.jsm=["customScripts"],function(){(function(a){Z.__jsm=a;Z.__jsm.b="jsm";Z.__jsm.g=!0;Z.__jsm.priorityOverride=0})(function(a){if(void 0!==a.vtp_javascript){var b=a.vtp_javascript;try{var c=V("google_tag_manager");return c&&c.e&&c.e(b)}catch(d){}}})}();

Z.a.e=["google"],function(){(function(a){Z.__e=a;Z.__e.b="e";Z.__e.g=!0;Z.__e.priorityOverride=0})(function(a){return String(Ld(a.vtp_gtmEventId,"event"))})}();
Z.a.f=["google"],function(){(function(a){Z.__f=a;Z.__f.b="f";Z.__f.g=!0;Z.__f.priorityOverride=0})(function(a){var b=U("gtm.referrer",1)||E.referrer;return b?a.vtp_component&&"URL"!=a.vtp_component?Xe(Ye(String(b)),a.vtp_component,a.vtp_stripWww,a.vtp_defaultPages,a.vtp_queryKey):Gk(String(b)):String(b)})}();
Z.a.cl=["google"],function(){function a(b){var c=b.target;if(c){var d=Vj(c,"gtm.click");Hk(d)}}(function(b){Z.__cl=b;Z.__cl.b="cl";Z.__cl.g=!0;Z.__cl.priorityOverride=0})(function(b){if(!Lk("cl")){var c=V("document");nc(c,"click",a,!0);Mk("cl")}H(b.vtp_gtmOnSuccess)})}();
Z.a.j=["google"],function(){(function(a){Z.__j=a;Z.__j.b="j";Z.__j.g=!0;Z.__j.priorityOverride=0})(function(a){for(var b=String(a.vtp_name).split("."),c=V(b.shift()),d=0;d<b.length;d++)c=c&&c[b[d]];return c})}();Z.a.k=["google"],function(){(function(a){Z.__k=a;Z.__k.b="k";Z.__k.g=!0;Z.__k.priorityOverride=0})(function(a){return Jk(a.vtp_name,U("gtm.cookie",1),!!a.vtp_decodeCookie)[0]})}();
Z.a.r=["google"],function(){(function(a){Z.__r=a;Z.__r.b="r";Z.__r.g=!0;Z.__r.priorityOverride=0})(function(a){return wa(a.vtp_min,a.vtp_max)})}();
Z.a.u=["google"],function(){var a=function(b){return{toString:function(){return b}}};(function(b){Z.__u=b;Z.__u.b="u";Z.__u.g=!0;Z.__u.priorityOverride=0})(function(b){var c;b.vtp_customUrlSource?c=b.vtp_customUrlSource:c=U("gtm.url",1);c=c||Ek();var d=b[a("vtp_component")];if(!d||"URL"==d)return Gk(String(c));var e=Ye(String(c)),f;if("QUERY"===d)a:{var h=b[a("vtp_multiQueryKeys").toString()],k=b[a("vtp_queryKey").toString()]||"",l=b[a("vtp_ignoreEmptyQueryParam").toString()],m;h?ra(k)?m=k:m=String(k).replace(/\s+/g,
"").split(","):m=[String(k)];for(var q=0;q<m.length;q++){var r=Xe(e,"QUERY",void 0,void 0,m[q]);if(void 0!=r&&(!l||""!==r)){f=r;break a}}f=void 0}else f=Xe(e,d,"HOST"==d?b[a("vtp_stripWww")]:void 0,"PATH"==d?b[a("vtp_defaultPages")]:void 0,void 0);return f})}();
Z.a.v=["google"],function(){(function(a){Z.__v=a;Z.__v.b="v";Z.__v.g=!0;Z.__v.priorityOverride=0})(function(a){var b=a.vtp_name;if(!b||!b.replace)return!1;var c=U(b.replace(/\\\./g,"."),a.vtp_dataLayerVersion||1);return void 0!==c?c:a.vtp_defaultValue})}();
Z.a.ua=["google"],function(){var a,b={},c=function(d){var e={},f={},h={},k={},l={},m=void 0;if(d.vtp_gaSettings){var q=d.vtp_gaSettings;C(ul(q.vtp_fieldsToSet,"fieldName","value"),f);C(ul(q.vtp_contentGroup,"index","group"),h);C(ul(q.vtp_dimension,"index","dimension"),k);C(ul(q.vtp_metric,"index","metric"),l);d.vtp_gaSettings=null;q.vtp_fieldsToSet=void 0;q.vtp_contentGroup=void 0;q.vtp_dimension=void 0;q.vtp_metric=void 0;var r=C(q);d=C(d,r)}C(ul(d.vtp_fieldsToSet,"fieldName","value"),f);C(ul(d.vtp_contentGroup,
"index","group"),h);C(ul(d.vtp_dimension,"index","dimension"),k);C(ul(d.vtp_metric,"index","metric"),l);var u=Ne(d.vtp_functionName);if(pa(u)){var p="",t="";d.vtp_setTrackerName&&"string"==typeof d.vtp_trackerName?""!==d.vtp_trackerName&&(t=d.vtp_trackerName,p=t+"."):(t="gtm"+ad(),p=t+".");var v={name:!0,clientId:!0,sampleRate:!0,
siteSpeedSampleRate:!0,alwaysSendReferrer:!0,allowAnchor:!0,allowLinker:!0,cookieName:!0,cookieDomain:!0,cookieExpires:!0,cookiePath:!0,cookieUpdate:!0,cookieFlags:!0,legacyCookieDomain:!0,legacyHistoryImport:!0,storage:!0,useAmpClientId:!0,storeGac:!0},w={allowAnchor:!0,allowLinker:!0,alwaysSendReferrer:!0,anonymizeIp:!0,cookieUpdate:!0,exFatal:!0,forceSSL:!0,javaEnabled:!0,legacyHistoryImport:!0,nonInteraction:!0,useAmpClientId:!0,useBeacon:!0,storeGac:!0,allowAdFeatures:!0,allowAdPersonalizationSignals:!0},
x=function(O){var K=[].slice.call(arguments,0);K[0]=p+K[0];u.apply(window,K)},y=function(O,K){return void 0===K?K:O(K)},B=function(O,K){if(K)for(var ua in K)K.hasOwnProperty(ua)&&x("set",O+ua,K[ua])},z=function(){},A=function(O,K,ua){var Ob=0;if(O)for(var Ea in O)if(O.hasOwnProperty(Ea)&&(ua&&v[Ea]||!ua&&void 0===v[Ea])){var bb=w[Ea]?Ba(O[Ea]):O[Ea];
"anonymizeIp"!=Ea||bb||(bb=void 0);K[Ea]=bb;Ob++}return Ob},F={name:t};A(f,F,!0);u("create",d.vtp_trackingId||e.trackingId,F);x("set","&gtm",rh(!0));
d.vtp_enableRecaptcha&&x("require","recaptcha","recaptcha.js");(function(O,K){void 0!==d[K]&&x("set",O,d[K])})("nonInteraction","vtp_nonInteraction");B("contentGroup",h);B("dimension",k);B("metric",l);var G={};A(f,G,!1)&&x("set",G);var L;d.vtp_enableLinkId&&x("require","linkid","linkid.js");x("set","hitCallback",function(){var O=
f&&f.hitCallback;pa(O)&&O();d.vtp_gtmOnSuccess()});if("TRACK_EVENT"==d.vtp_trackType){d.vtp_enableEcommerce&&(x("require","ec","ec.js"),z());var R={hitType:"event",eventCategory:String(d.vtp_eventCategory||e.category),eventAction:String(d.vtp_eventAction||e.action),eventLabel:y(String,d.vtp_eventLabel||e.label),eventValue:y(Aa,d.vtp_eventValue||e.value)};A(L,R,!1);x("send",R);}else if("TRACK_SOCIAL"==
d.vtp_trackType){}else if("TRACK_TRANSACTION"==d.vtp_trackType){}else if("TRACK_TIMING"==d.vtp_trackType){}else if("DECORATE_LINK"==d.vtp_trackType){}else if("DECORATE_FORM"==d.vtp_trackType){}else if("TRACK_DATA"==d.vtp_trackType){}else{d.vtp_enableEcommerce&&(x("require","ec","ec.js"),z());if(d.vtp_doubleClick||"DISPLAY_FEATURES"==d.vtp_advertisingFeaturesType){var ta="_dc_gtm_"+String(d.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");x("require",
"displayfeatures",void 0,{cookieName:ta})}if("DISPLAY_FEATURES_WITH_REMARKETING_LISTS"==d.vtp_advertisingFeaturesType){var na="_dc_gtm_"+String(d.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");x("require","adfeatures",{cookieName:na})}L?x("send","pageview",L):x("send","pageview");}if(!a){var va=
d.vtp_useDebugVersion?"u/analytics_debug.js":"analytics.js";d.vtp_useInternalVersion&&!d.vtp_useDebugVersion&&(va="internal/"+va);a=!0;var db=Q("https:","http:","//www.google-analytics.com/"+va,f&&f.forceSSL);T(db,function(){var O=Le();O&&O.loaded||d.vtp_gtmOnFailure();},d.vtp_gtmOnFailure)}}else H(d.vtp_gtmOnFailure)};Z.__ua=c;Z.__ua.b="ua";Z.__ua.g=!0;Z.__ua.priorityOverride=0}();



Z.a.ytl=["google"],function(){function a(){var w=Math.round(1E9*Math.random())+"";return E.getElementById(w)?a():w}function b(w,x){if(!w)return!1;for(var y=0;y<u.length;y++)if(0<=w.indexOf("//"+u[y]+"/"+x))return!0;return!1}function c(w){var x=-1!==w.indexOf("?")?"&":"?";if(-1<w.indexOf("origin="))return w+x+"enablejsapi=1";if(!t){var y=V("document");t=y.location.protocol+"//"+y.location.hostname;y.location.port&&(t+=":"+y.location.port)}return w+x+"enablejsapi=1&origin="+encodeURIComponent(t)}function d(w,
x){var y=w.getAttribute("src");if(b(y,"embed/")){if(0<y.indexOf("enablejsapi=1"))return!0;if(x)return w.setAttribute("src",c(y)),!0}return!1}function e(w,x){if(!w.getAttribute("data-gtm-yt-inspected-"+x.nd)&&(w.setAttribute("data-gtm-yt-inspected-"+x.nd,"true"),d(w,x.se))){w.id||(w.id=a());var y=V("YT"),B=y.get(w.id);B||(B=new y.Player(w.id));var z=h(B,x),A={},F;for(F in z)A.Xa=F,z.hasOwnProperty(A.Xa)&&B.addEventListener(A.Xa,function(G){return function(L){return z[G.Xa](L.data)}}(A)),A={Xa:A.Xa}}}
function f(w){H(function(){function x(){for(var B=y.getElementsByTagName("iframe"),z=B.length,A=0;A<z;A++)e(B[A],w)}var y=V("document");x();hk(x)})}function h(w,x){var y,B;function z(){X=Bk(function(){return{url:P,title:S,ke:N,ig:w.getCurrentTime(),playbackRate:ta}},x.nd,w.getIframe());N=0;S=P="";ta=1;return A}function A(O){switch(O){case p.PLAYING:N=Math.round(w.getDuration());P=w.getVideoUrl();if(w.getVideoData){var K=w.getVideoData();S=K?K.title:""}ta=w.getPlaybackRate();x.cg?X.Tb("start"):X.Hc();
M=m(x.ah,x.$g,w.getDuration());return F(O);default:return A}}function F(){na=w.getCurrentTime();va=(new Date).getTime();X.kh();da();return G}function G(O){var K;switch(O){case p.ENDED:return R(O);case p.PAUSED:K="pause";case p.BUFFERING:var ua=w.getCurrentTime()-na;K=1<Math.abs(((new Date).getTime()-va)/1E3*ta-ua)?"seek":K||"buffering";w.getCurrentTime()&&(x.bg?X.Tb(K):X.Hc());aa();return L;case p.UNSTARTED:return z(O);default:return G}}function L(O){switch(O){case p.ENDED:return R(O);case p.PLAYING:return F(O);
case p.UNSTARTED:return z(O);default:return L}}function R(){for(;B;){var O=y;Ck(B);O()}x.ag&&X.Tb("complete",1);return z(p.UNSTARTED)}function Y(){}function aa(){B&&(Ck(B),B=0,y=Y)}function da(){if(M.length&&0!==ta){var O=-1,K;do{K=M[0];if(K.Da>w.getDuration())return;O=(K.Da-w.getCurrentTime())/ta;if(0>O&&(M.shift(),0===M.length))return}while(0>O);y=function(){B=0;y=Y;0<M.length&&M[0].Da===K.Da&&(M.shift(),X.Tb("progress",K.Ke,K.Pe));da()};B=Dk(y,1E3*O)}}var X,M=[],N,P,S,ta,na,va,db=z(p.UNSTARTED);
B=0;y=Y;return{onStateChange:function(O){db=db(O)},onPlaybackRateChange:function(O){na=w.getCurrentTime();va=(new Date).getTime();X.Hc();ta=O;aa();da()}}}function k(w){for(var x=w.split(","),y=x.length,B=[],z=0;z<y;z++){var A=parseInt(x[z],10);isNaN(A)||100<A||0>A||B.push(A/100)}B.sort(function(F,G){return F-G});return B}function l(w){for(var x=w.split(","),y=x.length,B=[],z=0;z<y;z++){var A=parseInt(x[z],10);isNaN(A)||0>A||B.push(A)}B.sort(function(F,G){return F-G});return B}function m(w,x,y){var B=
w.map(function(F){return{Da:F,Pe:F,Ke:void 0}});if(!x.length)return B;var z=x.map(function(F){return{Da:F*y,Pe:void 0,Ke:F}});if(!B.length)return z;var A=B.concat(z);A.sort(function(F,G){return F.Da-G.Da});return A}function q(w){w.vtp_triggerStartOption?r(w):xe(function(){r(w)})}function r(w){var x=!!w.vtp_captureStart,y=!!w.vtp_captureComplete,B=!!w.vtp_capturePause,z=k(w.vtp_progressThresholdsPercent+""),A=l(w.vtp_progressThresholdsTimeInSeconds+""),F=!!w.vtp_fixMissingApi;if(x||y||B||z.length||
A.length){var G={cg:x,ag:y,bg:B,$g:z,ah:A,se:F,nd:void 0===w.vtp_uniqueTriggerId?"":w.vtp_uniqueTriggerId},L=V("YT"),R=function(){f(G)};H(w.vtp_gtmOnSuccess);if(L)L.ready&&L.ready(R);else{var Y=V("onYouTubeIframeAPIReady");Ik("onYouTubeIframeAPIReady",function(){Y&&Y();R()});H(function(){for(var aa=V("document"),da=aa.getElementsByTagName("script"),X=da.length,M=0;M<X;M++){var N=da[M].getAttribute("src");if(b(N,"iframe_api")||b(N,"player_api"))return}for(var P=aa.getElementsByTagName("iframe"),S=
P.length,ta=0;ta<S;ta++)if(!v&&d(P[ta],G.se)){T("https://www.youtube.com/iframe_api");v=!0;break}})}}else H(w.vtp_gtmOnSuccess)}var u=["www.youtube.com","www.youtube-nocookie.com"],p={UNSTARTED:-1,ENDED:0,PLAYING:1,PAUSED:2,BUFFERING:3,CUED:5},t,v=!1;Z.__ytl=q;Z.__ytl.b="ytl";Z.__ytl.g=!0;Z.__ytl.priorityOverride=0}();
Z.a.cid=["google"],function(){(function(a){Z.__cid=a;Z.__cid.b="cid";Z.__cid.g=!0;Z.__cid.priorityOverride=0})(function(){return Pc.w})}();


Z.a.aev=["google"],function(){function a(p,t){var v=Ld(p,"gtm");if(v)return v[t]}function b(p,t,v,w){w||(w="element");var x=p+"."+t,y;if(q.hasOwnProperty(x))y=q[x];else{var B=a(p,w);if(B&&(y=v(B),q[x]=y,r.push(x),35<r.length)){var z=r.shift();delete q[z]}}return y}function c(p,t,v){var w=a(p,u[t]);return void 0!==w?w:v}function d(p,t){if(!p)return!1;var v=e(Ek());ra(t)||(t=String(t||"").replace(/\s+/g,"").split(","));for(var w=[v],x=0;x<t.length;x++)if(t[x]instanceof RegExp){if(t[x].test(p))return!1}else{var y=
t[x];if(0!=y.length){if(0<=e(p).indexOf(y))return!1;w.push(e(y))}}return!tl(p,w)}function e(p){m.test(p)||(p="http://"+p);return Xe(Ye(p),"HOST",!0)}function f(p,t,v){switch(p){case "SUBMIT_TEXT":return b(t,"FORM."+p,h,"formSubmitElement")||v;case "LENGTH":var w=b(t,"FORM."+p,k);return void 0===w?v:w;case "INTERACTED_FIELD_ID":return l(t,"id",v);case "INTERACTED_FIELD_NAME":return l(t,"name",v);case "INTERACTED_FIELD_TYPE":return l(t,"type",v);case "INTERACTED_FIELD_POSITION":var x=a(t,"interactedFormFieldPosition");
return void 0===x?v:x;case "INTERACT_SEQUENCE_NUMBER":var y=a(t,"interactSequenceNumber");return void 0===y?v:y;default:return v}}function h(p){switch(p.tagName.toLowerCase()){case "input":return pc(p,"value");case "button":return qc(p);default:return null}}function k(p){if("form"===p.tagName.toLowerCase()&&p.elements){for(var t=0,v=0;v<p.elements.length;v++)ck(p.elements[v])&&t++;return t}}function l(p,t,v){var w=a(p,"interactedFormField");return w&&pc(w,t)||v}var m=/^https?:\/\//i,q={},r=[],u={ATTRIBUTE:"elementAttribute",
CLASSES:"elementClasses",ELEMENT:"element",ID:"elementId",HISTORY_CHANGE_SOURCE:"historyChangeSource",HISTORY_NEW_STATE:"newHistoryState",HISTORY_NEW_URL_FRAGMENT:"newUrlFragment",HISTORY_OLD_STATE:"oldHistoryState",HISTORY_OLD_URL_FRAGMENT:"oldUrlFragment",TARGET:"elementTarget"};(function(p){Z.__aev=p;Z.__aev.b="aev";Z.__aev.g=!0;Z.__aev.priorityOverride=0})(function(p){var t=p.vtp_gtmEventId,v=p.vtp_defaultValue,w=p.vtp_varType;switch(w){case "TAG_NAME":var x=a(t,"element");return x&&x.tagName||
v;case "TEXT":return b(t,w,qc)||v;case "URL":var y;a:{var B=String(a(t,"elementUrl")||v||""),z=Ye(B),A=String(p.vtp_component||"URL");switch(A){case "URL":y=B;break a;case "IS_OUTBOUND":y=d(B,p.vtp_affiliatedDomains);break a;default:y=Xe(z,A,p.vtp_stripWww,p.vtp_defaultPages,p.vtp_queryKey)}}return y;case "ATTRIBUTE":var F;if(void 0===p.vtp_attribute)F=c(t,w,v);else{var G=p.vtp_attribute,L=a(t,"element");F=L&&pc(L,G)||v||""}return F;case "MD":var R=p.vtp_mdValue,Y=b(t,"MD",ok);return R&&Y?rk(Y,R)||
v:Y||v;case "FORM":return f(String(p.vtp_component||"SUBMIT_TEXT"),t,v);default:return c(t,w,v)}})}();
Z.a.gas=["google"],function(){function a(b,c,d){b.vtp_fieldsToSet=b.vtp_fieldsToSet||[];var e=b[c];void 0!==e&&(b.vtp_fieldsToSet.push({fieldName:d,value:e}),delete b[c])}(function(b){Z.__gas=b;Z.__gas.b="gas";Z.__gas.g=!0;Z.__gas.priorityOverride=0})(function(b){var c=C(b),d=c;d[Gb.va]=null;d[Gb.ef]=null;c=d;a(c,"vtp_cookieDomain","cookieDomain");return c})}();

Z.a.remm=["google"],function(){(function(a){Z.__remm=a;Z.__remm.b="remm";Z.__remm.g=!0;Z.__remm.priorityOverride=0})(function(a){for(var b=a.vtp_input,c=a.vtp_map||[],d=a.vtp_fullMatch,e=a.vtp_ignoreCase?"gi":"g",f=0;f<c.length;f++){var h=c[f].key||"";d&&(h="^"+h+"$");var k=new RegExp(h,e);if(k.test(b)){var l=c[f].value;a.vtp_replaceAfterMatch&&(l=String(b).replace(k,l));return l}}return a.vtp_defaultValue})}();




Z.a.hid=["google"],function(){(function(a){Z.__hid=a;Z.__hid.b="hid";Z.__hid.g=!0;Z.__hid.priorityOverride=0})(function(){return Sj.Gb})}();
Z.a.html=["customScripts"],function(){function a(d,e,f,h){return function(){try{if(0<e.length){var k=e.shift(),l=a(d,e,f,h);if("SCRIPT"==String(k.nodeName).toUpperCase()&&"text/gtmscript"==k.type){var m=E.createElement("script");m.async=!1;m.type="text/javascript";m.id=k.id;m.text=k.text||k.textContent||k.innerHTML||"";k.charset&&(m.charset=k.charset);var q=k.getAttribute("data-gtmsrc");q&&(m.src=q,ic(m,l));d.insertBefore(m,null);q||l()}else if(k.innerHTML&&0<=k.innerHTML.toLowerCase().indexOf("<script")){for(var r=
[];k.firstChild;)r.push(k.removeChild(k.firstChild));d.insertBefore(k,null);a(k,r,l,h)()}else d.insertBefore(k,null),l()}else f()}catch(u){H(h)}}}var c=function(d){if(E.body){var e=
d.vtp_gtmOnFailure,f=Pk(d.vtp_html,d.vtp_gtmOnSuccess,e),h=f.Sc,k=f.C;if(d.vtp_useIframe){}else d.vtp_supportDocumentWrite?b(h,k,e):a(E.body,rc(h),k,e)()}else Dk(function(){c(d)},
200)};Z.__html=c;Z.__html.b="html";Z.__html.g=!0;Z.__html.priorityOverride=0}();

Z.a.dbg=["google"],function(){(function(a){Z.__dbg=a;Z.__dbg.b="dbg";Z.__dbg.g=!0;Z.__dbg.priorityOverride=0})(function(){return!1})}();




Z.a.lcl=[],function(){function a(){var c=V("document"),d=0,e=function(f){var h=f.target;if(h&&3!==f.which&&!(f.Gg||f.timeStamp&&f.timeStamp===d)){d=f.timeStamp;h=sc(h,["a","area"],100);if(!h)return f.returnValue;var k=f.defaultPrevented||!1===f.returnValue,l=Zj("lcl",k?"nv.mwt":"mwt",0),m;m=k?Zj("lcl","nv.ids",[]):Zj("lcl","ids",[]);if(m.length){var q=Vj(h,"gtm.linkClick",m);if(b(f,h,c)&&!k&&l&&h.href){var r=String(Ok(h,"rel")||""),u=!!sa(r.split(" "),function(v){return"noreferrer"===v.toLowerCase()});
u&&I("GTM",36);var p=V((Ok(h,"target")||"_self").substring(1)),t=!0;if(Hk(q,Lj(function(){var v;if(v=t&&p){var w;a:if(u){var x;try{x=new MouseEvent(f.type)}catch(y){if(!c.createEvent){w=!1;break a}x=c.createEvent("MouseEvents");x.initEvent(f.type,!0,!0)}x.Gg=!0;f.target.dispatchEvent(x);w=!0}else w=!1;v=!w}v&&(p.location.href=Ok(h,"href"))}),l))t=!1;else return f.preventDefault&&f.preventDefault(),f.returnValue=!1}else Hk(q,function(){},l||2E3);return!0}}};nc(c,"click",e,!1);nc(c,"auxclick",e,!1)}
function b(c,d,e){if(2===c.which||c.ctrlKey||c.shiftKey||c.altKey||c.metaKey)return!1;var f=Ok(d,"href"),h=f.indexOf("#"),k=Ok(d,"target");if(k&&"_self"!==k&&"_parent"!==k&&"_top"!==k||0===h)return!1;if(0<h){var l=Gk(f),m=Gk(e.location);return l!==m}return!0}(function(c){Z.__lcl=c;Z.__lcl.b="lcl";Z.__lcl.g=!0;Z.__lcl.priorityOverride=0})(function(c){var d=void 0===c.vtp_waitForTags?!0:c.vtp_waitForTags,e=void 0===c.vtp_checkValidation?!0:c.vtp_checkValidation,f=Number(c.vtp_waitForTagsTimeout);if(!f||
0>=f)f=2E3;var h=c.vtp_uniqueTriggerId||"0";if(d){var k=function(m){return Math.max(f,m)};Yj("lcl","mwt",k,0);e||Yj("lcl","nv.mwt",k,0)}var l=function(m){m.push(h);return m};Yj("lcl","ids",l,[]);e||Yj("lcl","nv.ids",l,[]);Lk("lcl")||(a(),Mk("lcl"));H(c.vtp_gtmOnSuccess)})}();


var en={};en.macro=function(a){if(Sj.Gc.hasOwnProperty(a))return Sj.Gc[a]},en.onHtmlSuccess=Sj.je(!0),en.onHtmlFailure=Sj.je(!1);en.dataLayer=Gd;en.callback=function(a){Zc.hasOwnProperty(a)&&pa(Zc[a])&&Zc[a]();delete Zc[a]};function fn(){Qc[Pc.w]=en;Ia($c,Z.a);xb=xb||Sj;yb=oe}
function gn(){Tf.gtm_3pds=!0;Qc=D.google_tag_manager=D.google_tag_manager||{};if(Qc[Pc.w]){var a=Qc.zones;a&&a.unregisterChild(Pc.w)}else{for(var b=data.resource||{},c=b.macros||
[],d=0;d<c.length;d++)qb.push(c[d]);for(var e=b.tags||[],f=0;f<e.length;f++)tb.push(e[f]);for(var h=b.predicates||[],k=0;k<h.length;k++)sb.push(h[k]);for(var l=b.rules||[],m=0;m<l.length;m++){for(var q=l[m],r={},u=0;u<q.length;u++)r[q[u][0]]=Array.prototype.slice.call(q[u],1);rb.push(r)}vb=Z;wb=nl;fn();Rj();se=!1;te=0;if("interactive"==E.readyState&&!E.createEventObject||"complete"==E.readyState)ve();else{nc(E,"DOMContentLoaded",ve);nc(E,"readystatechange",ve);if(E.createEventObject&&E.documentElement.doScroll){var p=
!0;try{p=!D.frameElement}catch(x){}p&&we()}nc(D,"load",ve)}mj=!1;"complete"===E.readyState?oj():nc(D,"load",oj);a:{if(!vd)break a;D.setInterval(wd,864E5);}Wc=(new Date).getTime();}}
gn();

})()
