var _runtime = require("./runtime.js");
var _global = require("./global.arr.js");
var _nothing = undefined;
var G41 = require("./global.arr.js");
_runtime["addModule"]("builtin://global",G41);
var RA1 = require("./raw-array.arr.js");
_runtime["addModule"]("builtin://raw-array",RA1);
var CL64 = require("./chart-lib.arr.js");
_runtime["addModule"]("builtin://chart-lib",CL64);
var IM151 = require("./image.arr.js");
_runtime["addModule"]("builtin://image",IM151);
var L6 = require("./lists.arr.js");
_runtime["addModule"]("builtin://lists",L6);
var O48 = require("./option.arr.js");
_runtime["addModule"]("builtin://option",O48);
var nothing75 = _runtime["getModuleValue"]("builtin://global","nothing");
var posn5 = function (x2,y3) {
return RA1["raw-array"]["make"]([x2,y3]);
};
var map221 = function map2(xs18,ys19) {
return L6["map2"](function (x16,y17) {
return RA1["raw-array"]["make"]([x16,y17]);
},xs18,ys19);
};
var raw$array$from$list15 = function raw$array$from$list(l13) {
return L6["to-raw-array"](l13);
};
var to$table212 = function to$table2(xs9,ys10) {
return L6["to-raw-array"](L6["map2"](function (x7,y8) {
return RA1["raw-array"]["make"]([x7,y8]);
},xs9,ys10));
};
var $temporary22 = {"x-min":(0),
"x-max":(0),
"y-min":(0),
"y-max":(0),
"is-valid":false};
var default$bounding$box23 = $temporary22;
var compute$min29 = function compute$min(ps36) {
return RA1["raw-array-min"](ps36);
};
var compute$max30 = function compute$max(ps34) {
return RA1["raw-array-max"](ps34);
};
var get$bounding$box33 = function get$bounding$box(ps25) {
var $ans24 = undefined;
if(_runtime["equal-always"](L6["length"](ps25),(0))) {
var $shallow$copy31 = Object["assign"]({},default$bounding$box23);
$shallow$copy31["is-valid"] = false;
_runtime["$rebind"]($shallow$copy31);
$ans24 = $shallow$copy31} else {
var x$arr27 = L6["get"](ps25,(0));
var y$arr26 = L6["get"](ps25,(1));
var $shallow$copy28 = Object["assign"]({},default$bounding$box23);
$shallow$copy28["x-min"] = compute$min29(x$arr27);
$shallow$copy28["x-max"] = compute$max30(x$arr27);
$shallow$copy28["y-min"] = compute$min29(y$arr26);
$shallow$copy28["y-max"] = compute$max30(y$arr26);
$shallow$copy28["is-valid"] = true;
_runtime["$rebind"]($shallow$copy28);
$ans24 = $shallow$copy28}
return $ans24;
};
var $temporary38 = {};
var default$bar$chart$series39 = $temporary38;
function $binder44(self42) {
var $inner45 = function inner() {
return G41["raise"]("unimplemented");
};
$inner45["$brand"] = "METHOD";
$inner45["$binder"] = $binder44;
return $inner45;
};
var $temporary40 = {"title":"",
"width":(800),
"height":(600)};
$temporary40["render"] = $binder44($temporary40);
var default$chart$window$object46 = $temporary40;
var $shallow$copy47 = Object["assign"]({},default$chart$window$object46);
$shallow$copy47["x-axis"] = "";
$shallow$copy47["y-axis"] = "";
$shallow$copy47["y-min"] = O48["none"];
$shallow$copy47["y-max"] = O48["none"];
_runtime["$rebind"]($shallow$copy47);
var default$bar$chart$window$object49 = $shallow$copy47;
var $bar$chart$series146 = {"names":["obj"]};
var DataSeries142 = {"bar-chart-series":function bar$chart$series(obj147) {
var $constructorTMP148 = {"$brand":$bar$chart$series146,
"$tag":0,
"obj":obj147};
$constructorTMP148["constr"] = function () {
return bar$chart$series76;
};
$constructorTMP148["is-single"] = true;
return $constructorTMP148;
},
"is-bar-chart-series":function bar$chart$series(val) {
return val.$brand === $bar$chart$series146;
}};
var is$DataSeries144 = DataSeries142["DataSeries"];
var is$bar$chart$series143 = DataSeries142["is-bar-chart-series"];
var bar$chart$series76 = DataSeries142["bar-chart-series"];
var check$chart$window83 = function check$chart$window(p140) {
var $ans139 = undefined;
if(_runtime["_lessequal"](p140["width"],(0),_runtime["_errCallbacks"]) || _runtime["_lessequal"](p140["height"],(0),_runtime["_errCallbacks"])) {
$ans139 = G41["raise"]("render: width and height must be positive")} else {
$ans139 = G41["nothing"]}
return $ans139;
};
var $bar$chart$window115 = {"names":["obj"]};
function $binderdisplay88(self84) {
var $inner89 = function innerdisplay() {
var $underscore85 = check$chart$window83(self84["obj"]);
var $shallow$copy86 = Object["assign"]({},self84["obj"]);
$shallow$copy86["interact"] = true;
_runtime["$rebind"]($shallow$copy86);
return $shallow$copy86["render"]();
};
$inner89["$brand"] = "METHOD";
$inner89["$binder"] = $binderdisplay88;
return $inner89;
};
function $binderget$image94(self90) {
var $inner95 = function innerget$image() {
var $underscore91 = check$chart$window83(self90["obj"]);
var $shallow$copy92 = Object["assign"]({},self90["obj"]);
$shallow$copy92["interact"] = false;
_runtime["$rebind"]($shallow$copy92);
return $shallow$copy92["render"]();
};
$inner95["$brand"] = "METHOD";
$inner95["$binder"] = $binderget$image94;
return $inner95;
};
function $bindertitle100(self96) {
var $inner101 = function innertitle(title98) {
var $shallow$copy97 = Object["assign"]({},self96["obj"]);
$shallow$copy97["title"] = title98;
_runtime["$rebind"]($shallow$copy97);
return self96["constr"]()($shallow$copy97);
};
$inner101["$brand"] = "METHOD";
$inner101["$binder"] = $bindertitle100;
return $inner101;
};
function $binderwidth106(self102) {
var $inner107 = function innerwidth(width104) {
var $shallow$copy103 = Object["assign"]({},self102["obj"]);
$shallow$copy103["width"] = width104;
_runtime["$rebind"]($shallow$copy103);
return self102["constr"]()($shallow$copy103);
};
$inner107["$brand"] = "METHOD";
$inner107["$binder"] = $binderwidth106;
return $inner107;
};
function $binderheight112(self108) {
var $inner113 = function innerheight(height110) {
var $shallow$copy109 = Object["assign"]({},self108["obj"]);
$shallow$copy109["height"] = height110;
_runtime["$rebind"]($shallow$copy109);
return self108["constr"]()($shallow$copy109);
};
$inner113["$brand"] = "METHOD";
$inner113["$binder"] = $binderheight112;
return $inner113;
};
var ChartWindow80 = {"bar-chart-window":function bar$chart$window(obj136) {
var $constructorTMP137 = {"$brand":$bar$chart$window115,
"$tag":0,
"obj":obj136};
$constructorTMP137["constr"] = function () {
return bar$chart$window53;
};
function $binderdisplay88(self84) {
var $inner89 = function innerdisplay() {
var $underscore85 = check$chart$window83(self84["obj"]);
var $shallow$copy86 = Object["assign"]({},self84["obj"]);
$shallow$copy86["interact"] = true;
_runtime["$rebind"]($shallow$copy86);
return $shallow$copy86["render"]();
};
$inner89["$brand"] = "METHOD";
$inner89["$binder"] = $binderdisplay88;
return $inner89;
};
$constructorTMP137["display"] = $binderdisplay88($constructorTMP137);
function $binderget$image94(self90) {
var $inner95 = function innerget$image() {
var $underscore91 = check$chart$window83(self90["obj"]);
var $shallow$copy92 = Object["assign"]({},self90["obj"]);
$shallow$copy92["interact"] = false;
_runtime["$rebind"]($shallow$copy92);
return $shallow$copy92["render"]();
};
$inner95["$brand"] = "METHOD";
$inner95["$binder"] = $binderget$image94;
return $inner95;
};
$constructorTMP137["get-image"] = $binderget$image94($constructorTMP137);
function $binderheight112(self108) {
var $inner113 = function innerheight(height110) {
var $shallow$copy109 = Object["assign"]({},self108["obj"]);
$shallow$copy109["height"] = height110;
_runtime["$rebind"]($shallow$copy109);
return self108["constr"]()($shallow$copy109);
};
$inner113["$brand"] = "METHOD";
$inner113["$binder"] = $binderheight112;
return $inner113;
};
$constructorTMP137["height"] = $binderheight112($constructorTMP137);
function $bindertitle100(self96) {
var $inner101 = function innertitle(title98) {
var $shallow$copy97 = Object["assign"]({},self96["obj"]);
$shallow$copy97["title"] = title98;
_runtime["$rebind"]($shallow$copy97);
return self96["constr"]()($shallow$copy97);
};
$inner101["$brand"] = "METHOD";
$inner101["$binder"] = $bindertitle100;
return $inner101;
};
$constructorTMP137["title"] = $bindertitle100($constructorTMP137);
function $binderwidth106(self102) {
var $inner107 = function innerwidth(width104) {
var $shallow$copy103 = Object["assign"]({},self102["obj"]);
$shallow$copy103["width"] = width104;
_runtime["$rebind"]($shallow$copy103);
return self102["constr"]()($shallow$copy103);
};
$inner107["$brand"] = "METHOD";
$inner107["$binder"] = $binderwidth106;
return $inner107;
};
$constructorTMP137["width"] = $binderwidth106($constructorTMP137);
function $binder119(self116) {
var $inner120 = function inner(x$axis118) {
var $shallow$copy117 = Object["assign"]({},self116["obj"]);
$shallow$copy117["x-axis"] = x$axis118;
_runtime["$rebind"]($shallow$copy117);
return self116["constr"]()($shallow$copy117);
};
$inner120["$brand"] = "METHOD";
$inner120["$binder"] = $binder119;
return $inner120;
};
$constructorTMP137["x-axis"] = $binder119($constructorTMP137);
function $binder124(self121) {
var $inner125 = function inner(y$axis123) {
var $shallow$copy122 = Object["assign"]({},self121["obj"]);
$shallow$copy122["y-axis"] = y$axis123;
_runtime["$rebind"]($shallow$copy122);
return self121["constr"]()($shallow$copy122);
};
$inner125["$brand"] = "METHOD";
$inner125["$binder"] = $binder124;
return $inner125;
};
$constructorTMP137["y-axis"] = $binder124($constructorTMP137);
function $binder134(self131) {
var $inner135 = function inner(y$max133) {
var $shallow$copy132 = Object["assign"]({},self131["obj"]);
$shallow$copy132["y-max"] = O48["some"](y$max133);
_runtime["$rebind"]($shallow$copy132);
return self131["constr"]()($shallow$copy132);
};
$inner135["$brand"] = "METHOD";
$inner135["$binder"] = $binder134;
return $inner135;
};
$constructorTMP137["y-max"] = $binder134($constructorTMP137);
function $binder129(self126) {
var $inner130 = function inner(y$min128) {
var $shallow$copy127 = Object["assign"]({},self126["obj"]);
$shallow$copy127["y-min"] = O48["some"](y$min128);
_runtime["$rebind"]($shallow$copy127);
return self126["constr"]()($shallow$copy127);
};
$inner130["$brand"] = "METHOD";
$inner130["$binder"] = $binder129;
return $inner130;
};
$constructorTMP137["y-min"] = $binder129($constructorTMP137);
return $constructorTMP137;
},
"is-bar-chart-window":function bar$chart$window(val) {
return val.$brand === $bar$chart$window115;
}};
var is$ChartWindow82 = ChartWindow80["ChartWindow"];
var is$bar$chart$window81 = ChartWindow80["is-bar-chart-window"];
var bar$chart$window53 = ChartWindow80["bar-chart-window"];
var bar$chart$from$list79 = function bar$chart$from$list(labels72,values70) {
var label$length73 = L6["length"](labels72);
var value$length71 = L6["length"](values70);
var $ans74 = undefined;
if(!(_runtime["equal-always"](label$length73,value$length71))) {
G41["raise"]("bar-chart: labels and values should have the same length");
$ans74 = nothing75} else {
$ans74 = nothing75}
$ans74;
var $shallow$copy77 = Object["assign"]({},default$bar$chart$series39);
$shallow$copy77["tab"] = to$table212(labels72,values70);
$shallow$copy77["legends"] = RA1["raw-array"]["make"]([""]);
$shallow$copy77["has-legend"] = false;
_runtime["$rebind"]($shallow$copy77);
return bar$chart$series76($shallow$copy77);
};
var render$chart69 = function render$chart(s50) {
var cases51 = s50;
var $ans52 = undefined;
switch(cases51.$tag) {
case 0: var obj65 = cases51["obj"];
var $shallow$copy54 = Object["assign"]({},default$bar$chart$window$object49);
function $binder66(self55) {
var $inner67 = function inner() {
var cases56 = self55["y-min"];
var $ans57 = undefined;
switch(cases56.$tag) {
case 0: var y$min61 = cases56["value"];
var cases58 = self55["y-max"];
var $ans59 = undefined;
switch(cases58.$tag) {
case 0: var y$max62 = cases58["value"];
var $ans60 = undefined;
if(_runtime["_greaterequal"](y$min61,y$max62,_runtime["_errCallbacks"])) {
$ans60 = G41["raise"]("render: y-min must be strictly less than y-max")} else {
$ans60 = G41["nothing"]}
$ans59 = $ans60;
break;
default: $ans59 = G41["nothing"];
}
$ans57 = $ans59;
break;
default: $ans57 = G41["nothing"];
}
var $underscore63 = $ans57;
return CL64["bar-chart"](obj65["tab"]);
};
$inner67["$brand"] = "METHOD";
$inner67["$binder"] = $binder66;
return $inner67;
};
$shallow$copy54["render"] = $binder66($shallow$copy54);
_runtime["$rebind"]($shallow$copy54);
$ans52 = bar$chart$window53($shallow$copy54);
break;
default: $ans52 = _global["throwNoCasesMatched"](["builtin://chart",217,2,6038,237,5,6719],cases51);
}
return $ans52;
};
var $answer150 = _global["trace-value"](["dummy location"],nothing75);
return module["exports"] = {"compute-min":compute$min29,
"is-bar-chart-window":is$bar$chart$window81,
"posn":posn5,
"get-bounding-box":get$bounding$box33,
"bar-chart-window":bar$chart$window53,
"bar-chart-from-list":bar$chart$from$list79,
"map2":map221,
"to-table2":to$table212,
"compute-max":compute$max30,
"default-bounding-box":default$bounding$box23,
"default-bar-chart-series":default$bar$chart$series39,
"is-ChartWindow":is$ChartWindow82,
"raw-array-from-list":raw$array$from$list15,
"default-bar-chart-window-object":default$bar$chart$window$object49,
"render-chart":render$chart69,
"is-DataSeries":is$DataSeries144,
"check-chart-window":check$chart$window83,
"is-bar-chart-series":is$bar$chart$series143,
"default-chart-window-object":default$chart$window$object46,
"bar-chart-series":bar$chart$series76,
"$answer":$answer150,
"$checks":_runtime["$checkResults"](),
"$traces":_runtime["$getTraces"](),
"$locations":[{"name":"compute-min",
"srcloc":["builtin://chart",70,0,1816,72,3,1893]},
{"name":"is-bar-chart-window",
"srcloc":["builtin://chart",160,2,3918,165,93,4375]},
{"name":"posn",
"srcloc":["builtin://chart",29,0,783,29,57,840]},
{"name":"get-bounding-box",
"srcloc":["builtin://chart",78,0,1974,92,3,2352]},
{"name":"bar-chart-window",
"srcloc":["builtin://chart",160,2,3918,165,93,4375]},
{"name":"bar-chart-from-list",
"srcloc":["builtin://chart",191,0,5133,209,3,5793]},
{"name":"map2",
"srcloc":["builtin://chart",31,0,842,33,3,942]},
{"name":"to-table2",
"srcloc":["builtin://chart",39,0,1029,41,3,1165]},
{"name":"compute-max",
"srcloc":["builtin://chart",74,0,1895,76,3,1972]},
{"name":"default-bounding-box",
"srcloc":["builtin://chart",62,0,1706,68,1,1814]},
{"name":"default-bar-chart-series",
"srcloc":["builtin://chart",104,0,2639,104,29,2668]},
{"name":"is-ChartWindow",
"srcloc":["builtin://chart",159,0,3898,185,3,4956]},
{"name":"raw-array-from-list",
"srcloc":["builtin://chart",35,0,944,37,3,1027]},
{"name":"default-bar-chart-window-object",
"srcloc":["builtin://chart",133,0,3167,138,1,3318]},
{"name":"render-chart",
"srcloc":["builtin://chart",215,0,5966,240,3,6782]},
{"name":"is-DataSeries",
"srcloc":["builtin://chart",144,0,3502,149,3,3707]},
{"name":"check-chart-window",
"srcloc":["builtin://chart",151,0,3709,157,3,3896]},
{"name":"is-bar-chart-series",
"srcloc":["builtin://chart",145,2,3521,147,35,3625]},
{"name":"default-chart-window-object",
"srcloc":["builtin://chart",115,0,2798,120,1,2948]},
{"name":"bar-chart-series",
"srcloc":["builtin://chart",145,2,3521,147,35,3625]}]};
