var _runtime = require("./runtime.js");
var _global = require("./global.arr.js");
var _nothing = undefined;
var G1 = require("./global.arr.js");
_runtime["addModule"]("builtin://global",G1);
var CL63 = require("./chart-lib.arr.js");
_runtime["addModule"]("builtin://chart-lib",CL63);
var IM150 = require("./image.arr.js");
_runtime["addModule"]("builtin://image",IM150);
var L6 = require("./list.arr.js");
_runtime["addModule"]("builtin://list",L6);
var O47 = require("./option.arr.js");
_runtime["addModule"]("builtin://option",O47);
var nothing74 = G1.nothing;
var nothing74 = _runtime["getModuleValue"]("builtin://global","nothing");
var posn5 = function (x2,y3) {
return G1["raw-array"]["make"]([x2,y3]);
};
var map221 = function map2(xs18,ys19) {
return L6["map2"](function (x16,y17) {
return G1["raw-array"]["make"]([x16,y17]);
},xs18,ys19);
};
var raw$array$from$list15 = function raw$array$from$list(l13) {
return L6["to-raw-array"](l13);
};
var to$table212 = function to$table2(xs9,ys10) {
return L6["to-raw-array"](L6["map2"](function (x7,y8) {
return G1["raw-array"]["make"]([x7,y8]);
},xs9,ys10));
};
var $temporary22 = {"x-min":(0),
"x-max":(0),
"y-min":(0),
"y-max":(0),
"is-valid":false};
var default$bounding$box23 = $temporary22;
var compute$min29 = function compute$min(ps36) {
return G1["raw-array-min"](ps36);
};
var compute$max30 = function compute$max(ps34) {
return G1["raw-array-max"](ps34);
};
var get$bounding$box33 = function get$bounding$box(ps25) {
var $ans24 = undefined;
if(_global["equal-always"](L6["length"](ps25),(0))) {
var $shallow$copy31 = Object["assign"]({},default$bounding$box23);
$shallow$copy31["is-valid"] = false;
_runtime["$rebind"]($shallow$copy31);
$ans24 = $shallow$copy31} else {
var x$arr27 = G1["raw-array-get"](ps25,(0));
var y$arr26 = G1["raw-array-get"](ps25,(1));
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
function $binder43(self41) {
var $inner44 = function inner() {
return G1["raise"]("unimplemented");
};
$inner44["$brand"] = "METHOD";
$inner44["$binder"] = $binder43;
return $inner44;
};
var $temporary40 = {"title":"",
"width":(800),
"height":(600)};
$temporary40["render"] = $binder43($temporary40);
var default$chart$window$object45 = $temporary40;
var $shallow$copy46 = Object["assign"]({},default$chart$window$object45);
$shallow$copy46["x-axis"] = "";
$shallow$copy46["y-axis"] = "";
$shallow$copy46["y-min"] = O47["none"];
$shallow$copy46["y-max"] = O47["none"];
_runtime["$rebind"]($shallow$copy46);
var default$bar$chart$window$object48 = $shallow$copy46;
var $bar$chart$series145 = {"names":["obj"]};
var DataSeries141 = {"bar-chart-series":function bar$chart$series(obj146) {
var $constructorTMP147 = {"$brand":$bar$chart$series145,
"$tag":0,
"obj":obj146};
$constructorTMP147["constr"] = function () {
return bar$chart$series75;
};
$constructorTMP147["is-single"] = true;
return $constructorTMP147;
},
"is-bar-chart-series":function bar$chart$series(val) {
return val.$brand === $bar$chart$series145;
}};
var is$DataSeries143 = DataSeries141["DataSeries"];
var is$bar$chart$series142 = DataSeries141["is-bar-chart-series"];
var bar$chart$series75 = DataSeries141["bar-chart-series"];
var check$chart$window82 = function check$chart$window(p139) {
var $ans138 = undefined;
if(_runtime["_lessThanOrEqual"](p139["width"],(0),_runtime["_errCallbacks"]) || _runtime["_lessThanOrEqual"](p139["height"],(0),_runtime["_errCallbacks"])) {
$ans138 = G1["raise"]("render: width and height must be positive")} else {
$ans138 = G1["nothing"]}
return $ans138;
};
var $bar$chart$window114 = {"names":["obj"]};
function $binderdisplay87(self83) {
var $inner88 = function innerdisplay() {
var $underscore84 = check$chart$window82(self83["obj"]);
var $shallow$copy85 = Object["assign"]({},self83["obj"]);
$shallow$copy85["interact"] = true;
_runtime["$rebind"]($shallow$copy85);
return $shallow$copy85["render"]();
};
$inner88["$brand"] = "METHOD";
$inner88["$binder"] = $binderdisplay87;
return $inner88;
};
function $binderget$image93(self89) {
var $inner94 = function innerget$image() {
var $underscore90 = check$chart$window82(self89["obj"]);
var $shallow$copy91 = Object["assign"]({},self89["obj"]);
$shallow$copy91["interact"] = false;
_runtime["$rebind"]($shallow$copy91);
return $shallow$copy91["render"]();
};
$inner94["$brand"] = "METHOD";
$inner94["$binder"] = $binderget$image93;
return $inner94;
};
function $bindertitle99(self95) {
var $inner100 = function innertitle(title97) {
var $shallow$copy96 = Object["assign"]({},self95["obj"]);
$shallow$copy96["title"] = title97;
_runtime["$rebind"]($shallow$copy96);
return self95["constr"]()($shallow$copy96);
};
$inner100["$brand"] = "METHOD";
$inner100["$binder"] = $bindertitle99;
return $inner100;
};
function $binderwidth105(self101) {
var $inner106 = function innerwidth(width103) {
var $shallow$copy102 = Object["assign"]({},self101["obj"]);
$shallow$copy102["width"] = width103;
_runtime["$rebind"]($shallow$copy102);
return self101["constr"]()($shallow$copy102);
};
$inner106["$brand"] = "METHOD";
$inner106["$binder"] = $binderwidth105;
return $inner106;
};
function $binderheight111(self107) {
var $inner112 = function innerheight(height109) {
var $shallow$copy108 = Object["assign"]({},self107["obj"]);
$shallow$copy108["height"] = height109;
_runtime["$rebind"]($shallow$copy108);
return self107["constr"]()($shallow$copy108);
};
$inner112["$brand"] = "METHOD";
$inner112["$binder"] = $binderheight111;
return $inner112;
};
var ChartWindow79 = {"bar-chart-window":function bar$chart$window(obj135) {
var $constructorTMP136 = {"$brand":$bar$chart$window114,
"$tag":0,
"obj":obj135};
$constructorTMP136["constr"] = function () {
return bar$chart$window52;
};
function $binderdisplay87(self83) {
var $inner88 = function innerdisplay() {
var $underscore84 = check$chart$window82(self83["obj"]);
var $shallow$copy85 = Object["assign"]({},self83["obj"]);
$shallow$copy85["interact"] = true;
_runtime["$rebind"]($shallow$copy85);
return $shallow$copy85["render"]();
};
$inner88["$brand"] = "METHOD";
$inner88["$binder"] = $binderdisplay87;
return $inner88;
};
$constructorTMP136["display"] = $binderdisplay87($constructorTMP136);
function $binderget$image93(self89) {
var $inner94 = function innerget$image() {
var $underscore90 = check$chart$window82(self89["obj"]);
var $shallow$copy91 = Object["assign"]({},self89["obj"]);
$shallow$copy91["interact"] = false;
_runtime["$rebind"]($shallow$copy91);
return $shallow$copy91["render"]();
};
$inner94["$brand"] = "METHOD";
$inner94["$binder"] = $binderget$image93;
return $inner94;
};
$constructorTMP136["get-image"] = $binderget$image93($constructorTMP136);
function $binderheight111(self107) {
var $inner112 = function innerheight(height109) {
var $shallow$copy108 = Object["assign"]({},self107["obj"]);
$shallow$copy108["height"] = height109;
_runtime["$rebind"]($shallow$copy108);
return self107["constr"]()($shallow$copy108);
};
$inner112["$brand"] = "METHOD";
$inner112["$binder"] = $binderheight111;
return $inner112;
};
$constructorTMP136["height"] = $binderheight111($constructorTMP136);
function $bindertitle99(self95) {
var $inner100 = function innertitle(title97) {
var $shallow$copy96 = Object["assign"]({},self95["obj"]);
$shallow$copy96["title"] = title97;
_runtime["$rebind"]($shallow$copy96);
return self95["constr"]()($shallow$copy96);
};
$inner100["$brand"] = "METHOD";
$inner100["$binder"] = $bindertitle99;
return $inner100;
};
$constructorTMP136["title"] = $bindertitle99($constructorTMP136);
function $binderwidth105(self101) {
var $inner106 = function innerwidth(width103) {
var $shallow$copy102 = Object["assign"]({},self101["obj"]);
$shallow$copy102["width"] = width103;
_runtime["$rebind"]($shallow$copy102);
return self101["constr"]()($shallow$copy102);
};
$inner106["$brand"] = "METHOD";
$inner106["$binder"] = $binderwidth105;
return $inner106;
};
$constructorTMP136["width"] = $binderwidth105($constructorTMP136);
function $binder118(self115) {
var $inner119 = function inner(x$axis117) {
var $shallow$copy116 = Object["assign"]({},self115["obj"]);
$shallow$copy116["x-axis"] = x$axis117;
_runtime["$rebind"]($shallow$copy116);
return self115["constr"]()($shallow$copy116);
};
$inner119["$brand"] = "METHOD";
$inner119["$binder"] = $binder118;
return $inner119;
};
$constructorTMP136["x-axis"] = $binder118($constructorTMP136);
function $binder123(self120) {
var $inner124 = function inner(y$axis122) {
var $shallow$copy121 = Object["assign"]({},self120["obj"]);
$shallow$copy121["y-axis"] = y$axis122;
_runtime["$rebind"]($shallow$copy121);
return self120["constr"]()($shallow$copy121);
};
$inner124["$brand"] = "METHOD";
$inner124["$binder"] = $binder123;
return $inner124;
};
$constructorTMP136["y-axis"] = $binder123($constructorTMP136);
function $binder133(self130) {
var $inner134 = function inner(y$max132) {
var $shallow$copy131 = Object["assign"]({},self130["obj"]);
$shallow$copy131["y-max"] = O47["some"](y$max132);
_runtime["$rebind"]($shallow$copy131);
return self130["constr"]()($shallow$copy131);
};
$inner134["$brand"] = "METHOD";
$inner134["$binder"] = $binder133;
return $inner134;
};
$constructorTMP136["y-max"] = $binder133($constructorTMP136);
function $binder128(self125) {
var $inner129 = function inner(y$min127) {
var $shallow$copy126 = Object["assign"]({},self125["obj"]);
$shallow$copy126["y-min"] = O47["some"](y$min127);
_runtime["$rebind"]($shallow$copy126);
return self125["constr"]()($shallow$copy126);
};
$inner129["$brand"] = "METHOD";
$inner129["$binder"] = $binder128;
return $inner129;
};
$constructorTMP136["y-min"] = $binder128($constructorTMP136);
return $constructorTMP136;
},
"is-bar-chart-window":function bar$chart$window(val) {
return val.$brand === $bar$chart$window114;
}};
var is$ChartWindow81 = ChartWindow79["ChartWindow"];
var is$bar$chart$window80 = ChartWindow79["is-bar-chart-window"];
var bar$chart$window52 = ChartWindow79["bar-chart-window"];
var bar$chart$from$list78 = function bar$chart$from$list(labels71,values69) {
var label$length72 = L6["length"](labels71);
var value$length70 = L6["length"](values69);
var $ans73 = undefined;
if(!(_global["equal-always"](label$length72,value$length70))) {
G1["raise"]("bar-chart: labels and values should have the same length");
$ans73 = nothing74} else {
$ans73 = nothing74}
$ans73;
var $shallow$copy76 = Object["assign"]({},default$bar$chart$series39);
$shallow$copy76["tab"] = to$table212(labels71,values69);
$shallow$copy76["legends"] = G1["raw-array"]["make"]([""]);
$shallow$copy76["has-legend"] = false;
_runtime["$rebind"]($shallow$copy76);
return bar$chart$series75($shallow$copy76);
};
var render$chart68 = function render$chart(s49) {
var cases50 = s49;
var $ans51 = undefined;
switch(cases50.$tag) {
case 0: var obj64 = cases50["obj"];
var $shallow$copy53 = Object["assign"]({},default$bar$chart$window$object48);
function $binder65(self54) {
var $inner66 = function inner() {
var cases55 = self54["y-min"];
var $ans56 = undefined;
switch(cases55.$tag) {
case 0: var y$min60 = cases55["elt"];
var cases57 = self54["y-max"];
var $ans58 = undefined;
switch(cases57.$tag) {
case 0: var y$max61 = cases57["elt"];
var $ans59 = undefined;
if(_runtime["_greaterThanOrEqual"](y$min60,y$max61,_runtime["_errCallbacks"])) {
$ans59 = G1["raise"]("render: y-min must be strictly less than y-max")} else {
$ans59 = G1["nothing"]}
$ans58 = $ans59;
break;
default: $ans58 = G1["nothing"];
}
$ans56 = $ans58;
break;
default: $ans56 = G1["nothing"];
}
var $underscore62 = $ans56;
return CL63["bar-chart"](obj64["tab"]);
};
$inner66["$brand"] = "METHOD";
$inner66["$binder"] = $binder65;
return $inner66;
};
$shallow$copy53["render"] = $binder65($shallow$copy53);
_runtime["$rebind"]($shallow$copy53);
$ans51 = bar$chart$window52($shallow$copy53);
break;
default: $ans51 = _global["throwNoCasesMatched"](["file:///home/michael/projects/pyret-lang/src/runtime-arr/chart.arr",216,2,6028,236,5,6709],cases50);
}
return $ans51;
};
var $answer149 = _global["trace-value"](["dummy location"],nothing74);
return module["exports"] = {"compute-min":compute$min29,
"is-bar-chart-window":is$bar$chart$window80,
"posn":posn5,
"get-bounding-box":get$bounding$box33,
"bar-chart-window":bar$chart$window52,
"bar-chart-from-list":bar$chart$from$list78,
"map2":map221,
"to-table2":to$table212,
"compute-max":compute$max30,
"default-bounding-box":default$bounding$box23,
"default-bar-chart-series":default$bar$chart$series39,
"is-ChartWindow":is$ChartWindow81,
"raw-array-from-list":raw$array$from$list15,
"default-bar-chart-window-object":default$bar$chart$window$object48,
"render-chart":render$chart68,
"is-DataSeries":is$DataSeries143,
"check-chart-window":check$chart$window82,
"is-bar-chart-series":is$bar$chart$series142,
"default-chart-window-object":default$chart$window$object45,
"bar-chart-series":bar$chart$series75,
"$answer":$answer149,
"$checks":_runtime["$checkResults"](),
"$traces":_runtime["$getTraces"](),
"$locations":[{"name":"compute-min",
"srcloc":["file:///home/michael/projects/pyret-lang/src/runtime-arr/chart.arr",69,0,1789,71,3,1865]},
{"name":"is-bar-chart-window",
"srcloc":["file:///home/michael/projects/pyret-lang/src/runtime-arr/chart.arr",159,2,3909,164,93,4366]},
{"name":"posn",
"srcloc":["file:///home/michael/projects/pyret-lang/src/runtime-arr/chart.arr",28,0,759,28,56,815]},
{"name":"get-bounding-box",
"srcloc":["file:///home/michael/projects/pyret-lang/src/runtime-arr/chart.arr",77,0,1945,91,3,2343]},
{"name":"bar-chart-window",
"srcloc":["file:///home/michael/projects/pyret-lang/src/runtime-arr/chart.arr",159,2,3909,164,93,4366]},
{"name":"bar-chart-from-list",
"srcloc":["file:///home/michael/projects/pyret-lang/src/runtime-arr/chart.arr",190,0,5124,208,3,5783]},
{"name":"map2",
"srcloc":["file:///home/michael/projects/pyret-lang/src/runtime-arr/chart.arr",30,0,817,32,3,916]},
{"name":"to-table2",
"srcloc":["file:///home/michael/projects/pyret-lang/src/runtime-arr/chart.arr",38,0,1003,40,3,1138]},
{"name":"compute-max",
"srcloc":["file:///home/michael/projects/pyret-lang/src/runtime-arr/chart.arr",73,0,1867,75,3,1943]},
{"name":"default-bounding-box",
"srcloc":["file:///home/michael/projects/pyret-lang/src/runtime-arr/chart.arr",61,0,1679,67,1,1787]},
{"name":"default-bar-chart-series",
"srcloc":["file:///home/michael/projects/pyret-lang/src/runtime-arr/chart.arr",103,0,2630,103,29,2659]},
{"name":"is-ChartWindow",
"srcloc":["file:///home/michael/projects/pyret-lang/src/runtime-arr/chart.arr",158,0,3889,184,3,4947]},
{"name":"raw-array-from-list",
"srcloc":["file:///home/michael/projects/pyret-lang/src/runtime-arr/chart.arr",34,0,918,36,3,1001]},
{"name":"default-bar-chart-window-object",
"srcloc":["file:///home/michael/projects/pyret-lang/src/runtime-arr/chart.arr",132,0,3158,137,1,3309]},
{"name":"render-chart",
"srcloc":["file:///home/michael/projects/pyret-lang/src/runtime-arr/chart.arr",214,0,5956,239,3,6772]},
{"name":"is-DataSeries",
"srcloc":["file:///home/michael/projects/pyret-lang/src/runtime-arr/chart.arr",143,0,3493,148,3,3698]},
{"name":"check-chart-window",
"srcloc":["file:///home/michael/projects/pyret-lang/src/runtime-arr/chart.arr",150,0,3700,156,3,3887]},
{"name":"is-bar-chart-series",
"srcloc":["file:///home/michael/projects/pyret-lang/src/runtime-arr/chart.arr",144,2,3512,146,35,3616]},
{"name":"default-chart-window-object",
"srcloc":["file:///home/michael/projects/pyret-lang/src/runtime-arr/chart.arr",114,0,2789,119,1,2939]},
{"name":"bar-chart-series",
"srcloc":["file:///home/michael/projects/pyret-lang/src/runtime-arr/chart.arr",144,2,3512,146,35,3616]}]};
