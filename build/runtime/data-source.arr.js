var _runtime = require("./runtime.js");
var _global = require("./global.arr.js");
var _nothing = undefined;
var G186 = require("./global.arr.js");
_runtime["addModule"]("builtin://global",G186);
var O187 = require("./option.arr.js");
_runtime["addModule"]("builtin://option",O187);
var S188 = require("./string.arr.js");
_runtime["addModule"]("builtin://string",S188);
var num$to$string47 = _runtime["getModuleValue"]("builtin://global","num-to-str");
var none54 = _runtime["getModuleValue"]("builtin://option","none");
var torepr58 = _runtime["getModuleValue"]("builtin://global","js-to-string");
var raise62 = _runtime["getModuleValue"]("builtin://global","raise");
var string$to$number120 = _runtime["getModuleValue"]("builtin://string","string-to-number");
var string$tolower143 = _runtime["getModuleValue"]("builtin://global","string-to-lower");
var some177 = _runtime["getModuleValue"]("builtin://option","some");
var nothing184 = _runtime["getModuleValue"]("builtin://global","nothing");
var $c$empty18 = {"names":false};
var $c$str19 = {"names":["s"]};
var $c$num20 = {"names":["n"]};
var $c$bool21 = {"names":["b"]};
var $c$custom22 = {"names":["datum"]};
var $constructorTMP23 = {"$brand":$c$empty18,
"$tag":0};
var CellContent1 = {"c-empty":$constructorTMP23,
"c-str":function c$str(s24) {
var $constructorTMP25 = {"$brand":$c$str19,
"$tag":1,
"s":s24};
return $constructorTMP25;
},
"c-num":function c$num(n27) {
var $constructorTMP28 = {"$brand":$c$num20,
"$tag":2,
"n":n27};
return $constructorTMP28;
},
"c-bool":function c$bool(b30) {
var $constructorTMP31 = {"$brand":$c$bool21,
"$tag":3,
"b":b30};
return $constructorTMP31;
},
"c-custom":function c$custom(datum33) {
var $constructorTMP34 = {"$brand":$c$custom22,
"$tag":4,
"datum":datum33};
return $constructorTMP34;
},
"is-c-empty":function c$empty(val) {
return val.$brand === $c$empty18;
},
"is-c-str":function c$str(val) {
return val.$brand === $c$str19;
},
"is-c-num":function c$num(val) {
return val.$brand === $c$num20;
},
"is-c-bool":function c$bool(val) {
return val.$brand === $c$bool21;
},
"is-c-custom":function c$custom(val) {
return val.$brand === $c$custom22;
}};
var is$CellContent12 = CellContent1["CellContent"];
var is$c$empty11 = CellContent1["is-c-empty"];
var c$empty10 = CellContent1["c-empty"];
var is$c$str9 = CellContent1["is-c-str"];
var c$str8 = CellContent1["c-str"];
var is$c$num7 = CellContent1["is-c-num"];
var c$num6 = CellContent1["c-num"];
var is$c$bool5 = CellContent1["is-c-bool"];
var c$bool4 = CellContent1["c-bool"];
var is$c$custom3 = CellContent1["is-c-custom"];
var c$custom2 = CellContent1["c-custom"];
var $sanitize$col42 = {"names":["col","sanitizer"]};
var DataSourceLoaderOption37 = {"sanitize-col":function sanitize$col(col43,sanitizer44) {
var $constructorTMP45 = {"$brand":$sanitize$col42,
"$tag":0,
"col":col43,
"sanitizer":sanitizer44};
return $constructorTMP45;
},
"is-sanitize-col":function sanitize$col(val) {
return val.$brand === $sanitize$col42;
}};
var is$DataSourceLoaderOption40 = DataSourceLoaderOption37["DataSourceLoaderOption"];
var is$sanitize$col39 = DataSourceLoaderOption37["is-sanitize-col"];
var sanitize$col38 = DataSourceLoaderOption37["sanitize-col"];
var option$sanitizer183 = function option$sanitizer(val$sanitizer178) {
return function (x174,col179,row180) {
var cases175 = x174;
var $ans176 = undefined;
switch(cases175.$tag) {
case 0: $ans176 = none54;
break;
default: $ans176 = some177(val$sanitizer178(x174,col179,row180));
}
return $ans176;
};
};
var string$sanitizer173 = function string$sanitizer(x163,col170,row171) {
var cases164 = x163;
var $ans165 = undefined;
switch(cases164.$tag) {
case 0: $ans165 = "";
break;
case 1: var s166 = cases164["s"];
$ans165 = s166;
break;
case 2: var n167 = cases164["n"];
$ans165 = num$to$string47(n167);
break;
case 3: var b168 = cases164["b"];
$ans165 = torepr58(b168);
break;
case 4: var datum169 = cases164["datum"];
$ans165 = torepr58(datum169);
break;
default: $ans165 = _global["throwNoCasesMatched"](["builtin://data-source",60,2,1402,66,5,1572],cases164);
}
return $ans165;
};
var num$sanitizer162 = function num$sanitizer(x150,col147,row148) {
var loc149 = _runtime["_add"](_runtime["_add"](_runtime["_add"]("column ",num$to$string47(col147),_runtime["_errCallbacks"]),", row ",_runtime["_errCallbacks"]),num$to$string47(row148),_runtime["_errCallbacks"]);
var cases151 = x150;
var $ans152 = undefined;
switch(cases151.$tag) {
case 1: var s153 = cases151["s"];
var cases154 = string$to$number120(s153);
var $ans155 = undefined;
switch(cases154.$tag) {
case 1: $ans155 = raise62(_runtime["_add"](_runtime["_add"](_runtime["_add"](_runtime["_add"]("Cannot sanitize the string \"",s153,_runtime["_errCallbacks"]),"\" at ",_runtime["_errCallbacks"]),loc149,_runtime["_errCallbacks"])," as a number",_runtime["_errCallbacks"]));
break;
case 0: var n156 = cases154["value"];
$ans155 = n156;
break;
default: $ans155 = _global["throwNoCasesMatched"](["builtin://data-source",73,6,1780,77,9,1954],cases154);
}
$ans152 = $ans155;
break;
case 2: var n157 = cases151["n"];
$ans152 = n157;
break;
case 3: var b159 = cases151["b"];
var $ans158 = undefined;
if(b159) {
$ans158 = (1)} else {
$ans158 = (0)}
$ans152 = $ans158;
break;
case 4: var datum160 = cases151["datum"];
$ans152 = raise62(_runtime["_add"](_runtime["_add"](_runtime["_add"](_runtime["_add"]("Cannot sanitize the datum ",torepr58(datum160),_runtime["_errCallbacks"])," at ",_runtime["_errCallbacks"]),loc149,_runtime["_errCallbacks"])," as a number",_runtime["_errCallbacks"]));
break;
case 0: $ans152 = raise62(_runtime["_add"](_runtime["_add"]("Cannot sanitize the empty cell at ",loc149,_runtime["_errCallbacks"])," as a number",_runtime["_errCallbacks"]));
break;
default: $ans152 = _global["throwNoCasesMatched"](["builtin://data-source",71,2,1734,84,5,2232],cases151);
}
return $ans152;
};
var bool$sanitizer146 = function bool$sanitizer(x133,col130,row131) {
var loc132 = _runtime["_add"](_runtime["_add"](_runtime["_add"]("column ",num$to$string47(col130),_runtime["_errCallbacks"]),", row ",_runtime["_errCallbacks"]),num$to$string47(row131),_runtime["_errCallbacks"]);
var cases134 = x133;
var $ans135 = undefined;
switch(cases134.$tag) {
case 3: var b136 = cases134["b"];
$ans135 = b136;
break;
case 2: var n139 = cases134["n"];
var $ans137 = undefined;
if(_runtime["equal-always"](n139,(0))) {
$ans137 = false} else {
var $ans138 = undefined;
if(_runtime["equal-always"](n139,(1))) {
$ans138 = true} else {
$ans138 = raise62(_runtime["_add"](_runtime["_add"](_runtime["_add"](_runtime["_add"]("Cannot sanitize the number ",num$to$string47(n139),_runtime["_errCallbacks"])," at ",_runtime["_errCallbacks"]),loc132,_runtime["_errCallbacks"])," as a boolean",_runtime["_errCallbacks"]))}
$ans137 = $ans138}
$ans135 = $ans137;
break;
case 1: var s142 = cases134["s"];
var $ans140 = undefined;
if(_runtime["equal-always"](string$tolower143(s142),"true")) {
$ans140 = true} else {
var $ans141 = undefined;
if(_runtime["equal-always"](string$tolower143(s142),"false")) {
$ans141 = false} else {
$ans141 = raise62(_runtime["_add"](_runtime["_add"](_runtime["_add"](_runtime["_add"]("Cannot sanitize the string \"",s142,_runtime["_errCallbacks"]),"\" at ",_runtime["_errCallbacks"]),loc132,_runtime["_errCallbacks"])," as a boolean",_runtime["_errCallbacks"]))}
$ans140 = $ans141}
$ans135 = $ans140;
break;
case 4: var datum144 = cases134["datum"];
$ans135 = raise62(_runtime["_add"](_runtime["_add"](_runtime["_add"](_runtime["_add"]("Cannot sanitize the datum ",torepr58(datum144),_runtime["_errCallbacks"])," at ",_runtime["_errCallbacks"]),loc132,_runtime["_errCallbacks"])," as a boolean",_runtime["_errCallbacks"]));
break;
case 0: $ans135 = raise62(_runtime["_add"](_runtime["_add"]("Cannot sanitize the empty cell at ",loc132,_runtime["_errCallbacks"])," as a boolean",_runtime["_errCallbacks"]));
break;
default: $ans135 = _global["throwNoCasesMatched"](["builtin://data-source",89,2,2396,109,5,3129],cases134);
}
return $ans135;
};
var strict$num$sanitizer129 = function strict$num$sanitizer(x117,col114,row115) {
var loc116 = _runtime["_add"](_runtime["_add"](_runtime["_add"]("column ",num$to$string47(col114),_runtime["_errCallbacks"]),", row ",_runtime["_errCallbacks"]),num$to$string47(row115),_runtime["_errCallbacks"]);
var cases118 = x117;
var $ans119 = undefined;
switch(cases118.$tag) {
case 1: var s121 = cases118["s"];
var cases122 = string$to$number120(s121);
var $ans123 = undefined;
switch(cases122.$tag) {
case 1: $ans123 = raise62(_runtime["_add"](_runtime["_add"](_runtime["_add"](_runtime["_add"]("Cannot sanitize the string \"",s121,_runtime["_errCallbacks"]),"\" at ",_runtime["_errCallbacks"]),loc116,_runtime["_errCallbacks"])," as a number",_runtime["_errCallbacks"]));
break;
case 0: var n124 = cases122["value"];
$ans123 = n124;
break;
default: $ans123 = _global["throwNoCasesMatched"](["builtin://data-source",116,6,3344,120,9,3518],cases122);
}
$ans119 = $ans123;
break;
case 2: var n125 = cases118["n"];
$ans119 = n125;
break;
case 3: var b126 = cases118["b"];
$ans119 = raise62(_runtime["_add"](_runtime["_add"](_runtime["_add"](_runtime["_add"]("Cannot sanitize the boolean ",torepr58(b126),_runtime["_errCallbacks"])," at ",_runtime["_errCallbacks"]),loc116,_runtime["_errCallbacks"])," as a number in strict mode.",_runtime["_errCallbacks"]));
break;
case 4: var datum127 = cases118["datum"];
$ans119 = raise62(_runtime["_add"](_runtime["_add"](_runtime["_add"](_runtime["_add"]("Cannot sanitize the datum ",torepr58(datum127),_runtime["_errCallbacks"])," at ",_runtime["_errCallbacks"]),loc116,_runtime["_errCallbacks"])," as a number",_runtime["_errCallbacks"]));
break;
case 0: $ans119 = raise62(_runtime["_add"](_runtime["_add"]("Cannot sanitize the empty cell at ",loc116,_runtime["_errCallbacks"])," as a number",_runtime["_errCallbacks"]));
break;
default: $ans119 = _global["throwNoCasesMatched"](["builtin://data-source",114,2,3298,128,5,3884],cases118);
}
return $ans119;
};
var strings$only113 = function strings$only(x101,col98,row99) {
var loc100 = _runtime["_add"](_runtime["_add"](_runtime["_add"]("column ",num$to$string47(col98),_runtime["_errCallbacks"]),", row ",_runtime["_errCallbacks"]),num$to$string47(row99),_runtime["_errCallbacks"]);
var cases102 = x101;
var $ans103 = undefined;
switch(cases102.$tag) {
case 1: var s104 = cases102["s"];
$ans103 = s104;
break;
default: var cases105 = x101;
var $ans106 = undefined;
switch(cases105.$tag) {
case 2: var n107 = cases105["n"];
$ans106 = _runtime["_add"]("the number ",num$to$string47(n107),_runtime["_errCallbacks"]);
break;
case 3: var b108 = cases105["b"];
$ans106 = _runtime["_add"]("the boolean ",torepr58(b108),_runtime["_errCallbacks"]);
break;
case 4: var datum109 = cases105["datum"];
$ans106 = _runtime["_add"]("the datum ",torepr58(datum109),_runtime["_errCallbacks"]);
break;
case 0: $ans106 = "the empty cell";
break;
case 1: var s110 = cases105["s"];
$ans106 = raise62("unreachable");
break;
default: $ans106 = _global["throwNoCasesMatched"](["builtin://data-source",136,15,4116,142,9,4391],cases105);
}
var as$str111 = $ans106;
$ans103 = raise62(_runtime["_add"](_runtime["_add"](_runtime["_add"](_runtime["_add"]("Cannot sanitize ",as$str111,_runtime["_errCallbacks"])," at ",_runtime["_errCallbacks"]),loc100,_runtime["_errCallbacks"])," as a string",_runtime["_errCallbacks"]));
}
return $ans103;
};
var numbers$only97 = function numbers$only(x85,col82,row83) {
var loc84 = _runtime["_add"](_runtime["_add"](_runtime["_add"]("column ",num$to$string47(col82),_runtime["_errCallbacks"]),", row ",_runtime["_errCallbacks"]),num$to$string47(row83),_runtime["_errCallbacks"]);
var cases86 = x85;
var $ans87 = undefined;
switch(cases86.$tag) {
case 2: var n88 = cases86["n"];
$ans87 = n88;
break;
default: var cases89 = x85;
var $ans90 = undefined;
switch(cases89.$tag) {
case 1: var s91 = cases89["s"];
$ans90 = _runtime["_add"]("the string ",torepr58(s91),_runtime["_errCallbacks"]);
break;
case 3: var b92 = cases89["b"];
$ans90 = _runtime["_add"]("the boolean ",torepr58(b92),_runtime["_errCallbacks"]);
break;
case 4: var datum93 = cases89["datum"];
$ans90 = _runtime["_add"]("the datum ",torepr58(datum93),_runtime["_errCallbacks"]);
break;
case 0: $ans90 = "an empty cell";
break;
case 2: var n94 = cases89["n"];
$ans90 = raise62("unreachable");
break;
default: $ans90 = _global["throwNoCasesMatched"](["builtin://data-source",153,15,4712,159,9,4979],cases89);
}
var as$str95 = $ans90;
$ans87 = raise62(_runtime["_add"](_runtime["_add"](_runtime["_add"](_runtime["_add"]("Cannot sanitize ",as$str95,_runtime["_errCallbacks"])," at ",_runtime["_errCallbacks"]),loc84,_runtime["_errCallbacks"])," as a number",_runtime["_errCallbacks"]));
}
return $ans87;
};
var booleans$only81 = function booleans$only(x69,col66,row67) {
var loc68 = _runtime["_add"](_runtime["_add"](_runtime["_add"]("column ",num$to$string47(col66),_runtime["_errCallbacks"]),", row ",_runtime["_errCallbacks"]),num$to$string47(row67),_runtime["_errCallbacks"]);
var cases70 = x69;
var $ans71 = undefined;
switch(cases70.$tag) {
case 3: var b72 = cases70["b"];
$ans71 = b72;
break;
default: var cases73 = x69;
var $ans74 = undefined;
switch(cases73.$tag) {
case 2: var n75 = cases73["n"];
$ans74 = _runtime["_add"]("the number ",num$to$string47(n75),_runtime["_errCallbacks"]);
break;
case 1: var s76 = cases73["s"];
$ans74 = _runtime["_add"]("the string ",torepr58(s76),_runtime["_errCallbacks"]);
break;
case 4: var datum77 = cases73["datum"];
$ans74 = _runtime["_add"]("the datum ",torepr58(datum77),_runtime["_errCallbacks"]);
break;
case 0: $ans74 = "an empty cell";
break;
case 3: var b78 = cases73["b"];
$ans74 = raise62("unreachable");
break;
default: $ans74 = _global["throwNoCasesMatched"](["builtin://data-source",170,15,5303,176,9,5576],cases73);
}
var as$str79 = $ans74;
$ans71 = raise62(_runtime["_add"](_runtime["_add"](_runtime["_add"](_runtime["_add"]("Cannot sanitize ",as$str79,_runtime["_errCallbacks"])," at ",_runtime["_errCallbacks"]),loc68,_runtime["_errCallbacks"])," as a boolean",_runtime["_errCallbacks"]));
}
return $ans71;
};
var empty$only65 = function empty$only(x51,col48,row49) {
var loc50 = _runtime["_add"](_runtime["_add"](_runtime["_add"]("column ",num$to$string47(col48),_runtime["_errCallbacks"]),", row ",_runtime["_errCallbacks"]),num$to$string47(row49),_runtime["_errCallbacks"]);
var cases52 = x51;
var $ans53 = undefined;
switch(cases52.$tag) {
case 0: $ans53 = none54;
break;
default: var cases55 = x51;
var $ans56 = undefined;
switch(cases55.$tag) {
case 2: var n57 = cases55["n"];
$ans56 = _runtime["_add"]("number ",num$to$string47(n57),_runtime["_errCallbacks"]);
break;
case 1: var s59 = cases55["s"];
$ans56 = _runtime["_add"]("string ",torepr58(s59),_runtime["_errCallbacks"]);
break;
case 3: var b60 = cases55["b"];
$ans56 = _runtime["_add"]("boolean ",torepr58(b60),_runtime["_errCallbacks"]);
break;
case 4: var datum61 = cases55["datum"];
$ans56 = _runtime["_add"]("datum ",torepr58(datum61),_runtime["_errCallbacks"]);
break;
case 0: $ans56 = raise62("unreachable");
break;
default: $ans56 = _global["throwNoCasesMatched"](["builtin://data-source",187,15,5901,193,9,6169],cases55);
}
var as$str63 = $ans56;
$ans53 = raise62(_runtime["_add"](_runtime["_add"](_runtime["_add"](_runtime["_add"]("Cannot sanitize the ",as$str63,_runtime["_errCallbacks"])," at ",_runtime["_errCallbacks"]),loc50,_runtime["_errCallbacks"])," as an empty cell",_runtime["_errCallbacks"]));
}
return $ans53;
};
var $answer185 = _global["trace-value"](["dummy location"],nothing184);
return module["exports"] = {"is-sanitize-col":is$sanitize$col39,
"strict-num-sanitizer":strict$num$sanitizer129,
"is-c-custom":is$c$custom3,
"c-num":c$num6,
"sanitize-col":sanitize$col38,
"c-custom":c$custom2,
"is-c-num":is$c$num7,
"strings-only":strings$only113,
"is-c-bool":is$c$bool5,
"c-bool":c$bool4,
"is-CellContent":is$CellContent12,
"option-sanitizer":option$sanitizer183,
"is-DataSourceLoaderOption":is$DataSourceLoaderOption40,
"numbers-only":numbers$only97,
"booleans-only":booleans$only81,
"string-sanitizer":string$sanitizer173,
"empty-only":empty$only65,
"c-str":c$str8,
"bool-sanitizer":bool$sanitizer146,
"is-c-str":is$c$str9,
"c-empty":c$empty10,
"num-sanitizer":num$sanitizer162,
"is-c-empty":is$c$empty11,
"$answer":$answer185,
"$checks":_runtime["$checkResults"](),
"$traces":_runtime["$getTraces"](),
"$locations":[{"name":"is-sanitize-col",
"srcloc":["builtin://data-source",43,2,797,43,64,859]},
{"name":"strict-num-sanitizer",
"srcloc":["builtin://data-source",112,0,3135,129,3,3888]},
{"name":"is-c-custom",
"srcloc":["builtin://data-source",30,2,437,30,24,459]},
{"name":"c-num",
"srcloc":["builtin://data-source",28,2,389,28,22,409]},
{"name":"sanitize-col",
"srcloc":["builtin://data-source",43,2,797,43,64,859]},
{"name":"c-custom",
"srcloc":["builtin://data-source",30,2,437,30,24,459]},
{"name":"is-c-num",
"srcloc":["builtin://data-source",28,2,389,28,22,409]},
{"name":"strings-only",
"srcloc":["builtin://data-source",131,0,3890,146,3,4484]},
{"name":"is-c-bool",
"srcloc":["builtin://data-source",29,2,412,29,24,434]},
{"name":"c-bool",
"srcloc":["builtin://data-source",29,2,412,29,24,434]},
{"name":"is-CellContent",
"srcloc":["builtin://data-source",25,0,331,31,3,463]},
{"name":"option-sanitizer",
"srcloc":["builtin://data-source",50,0,999,57,3,1312]},
{"name":"is-DataSourceLoaderOption",
"srcloc":["builtin://data-source",42,0,761,44,3,863]},
{"name":"numbers-only",
"srcloc":["builtin://data-source",148,0,4486,163,3,5072]},
{"name":"booleans-only",
"srcloc":["builtin://data-source",165,0,5074,180,3,5670]},
{"name":"string-sanitizer",
"srcloc":["builtin://data-source",59,0,1314,67,3,1576]},
{"name":"empty-only",
"srcloc":["builtin://data-source",182,0,5672,197,3,6271]},
{"name":"c-str",
"srcloc":["builtin://data-source",27,2,366,27,22,386]},
{"name":"bool-sanitizer",
"srcloc":["builtin://data-source",87,0,2238,110,3,3133]},
{"name":"is-c-str",
"srcloc":["builtin://data-source",27,2,366,27,22,386]},
{"name":"c-empty",
"srcloc":["builtin://data-source",26,2,354,26,11,363]},
{"name":"num-sanitizer",
"srcloc":["builtin://data-source",69,0,1578,85,3,2236]},
{"name":"is-c-empty",
"srcloc":["builtin://data-source",26,2,354,26,11,363]}]};
