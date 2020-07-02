var _runtime = require("./runtime.js");
var _global = require("./global.arr.js");
var _nothing = undefined;
var G1 = require("./global.arr.js");
_runtime["addModule"]("builtin://global",G1);
var O7 = require("./option.arr.js");
_runtime["addModule"]("builtin://option",O7);
var nothing186 = G1.nothing;
var nothing186 = _runtime["getModuleValue"]("builtin://global","nothing");
var none9 = O7["none"];
var some8 = O7["some"];
var num$to$string6 = G1["num-to-str"];
var string$to$number5 = G1["string-to-number"];
var raise4 = G1["raise"];
var torepr3 = G1["js-to-string"];
var string$tolower2 = G1["string-to-lower"];
var $c$empty27 = {"names":false};
var $c$str28 = {"names":["s"]};
var $c$num29 = {"names":["n"]};
var $c$bool30 = {"names":["b"]};
var $c$custom31 = {"names":["datum"]};
var $constructorTMP32 = {"$brand":$c$empty27,
"$tag":0};
var CellContent10 = {"c-empty":$constructorTMP32,
"c-str":function c$str(s33) {
var $constructorTMP34 = {"$brand":$c$str28,
"$tag":1,
"s":s33};
return $constructorTMP34;
},
"c-num":function c$num(n36) {
var $constructorTMP37 = {"$brand":$c$num29,
"$tag":2,
"n":n36};
return $constructorTMP37;
},
"c-bool":function c$bool(b39) {
var $constructorTMP40 = {"$brand":$c$bool30,
"$tag":3,
"b":b39};
return $constructorTMP40;
},
"c-custom":function c$custom(datum42) {
var $constructorTMP43 = {"$brand":$c$custom31,
"$tag":4,
"datum":datum42};
return $constructorTMP43;
},
"is-c-empty":function c$empty(val) {
return val.$brand === $c$empty27;
},
"is-c-str":function c$str(val) {
return val.$brand === $c$str28;
},
"is-c-num":function c$num(val) {
return val.$brand === $c$num29;
},
"is-c-bool":function c$bool(val) {
return val.$brand === $c$bool30;
},
"is-c-custom":function c$custom(val) {
return val.$brand === $c$custom31;
}};
var is$CellContent21 = CellContent10["CellContent"];
var is$c$empty20 = CellContent10["is-c-empty"];
var c$empty19 = CellContent10["c-empty"];
var is$c$str18 = CellContent10["is-c-str"];
var c$str17 = CellContent10["c-str"];
var is$c$num16 = CellContent10["is-c-num"];
var c$num15 = CellContent10["c-num"];
var is$c$bool14 = CellContent10["is-c-bool"];
var c$bool13 = CellContent10["c-bool"];
var is$c$custom12 = CellContent10["is-c-custom"];
var c$custom11 = CellContent10["c-custom"];
var $sanitize$col51 = {"names":["col","sanitizer"]};
var DataSourceLoaderOption46 = {"sanitize-col":function sanitize$col(col52,sanitizer53) {
var $constructorTMP54 = {"$brand":$sanitize$col51,
"$tag":0,
"col":col52,
"sanitizer":sanitizer53};
return $constructorTMP54;
},
"is-sanitize-col":function sanitize$col(val) {
return val.$brand === $sanitize$col51;
}};
var is$DataSourceLoaderOption49 = DataSourceLoaderOption46["DataSourceLoaderOption"];
var is$sanitize$col48 = DataSourceLoaderOption46["is-sanitize-col"];
var sanitize$col47 = DataSourceLoaderOption46["sanitize-col"];
var option$sanitizer185 = function option$sanitizer(val$sanitizer180) {
return function (x177,col181,row182) {
var cases178 = x177;
var $ans179 = undefined;
switch(cases178.$tag) {
case 0: $ans179 = none9;
break;
default: $ans179 = some8(val$sanitizer180(x177,col181,row182));
}
return $ans179;
};
};
var string$sanitizer176 = function string$sanitizer(x166,col173,row174) {
var cases167 = x166;
var $ans168 = undefined;
switch(cases167.$tag) {
case 0: $ans168 = "";
break;
case 1: var s169 = cases167["s"];
$ans168 = s169;
break;
case 2: var n170 = cases167["n"];
$ans168 = num$to$string6(n170);
break;
case 3: var b171 = cases167["b"];
$ans168 = torepr3(b171);
break;
case 4: var datum172 = cases167["datum"];
$ans168 = torepr3(datum172);
break;
default: $ans168 = _global["throwNoCasesMatched"](["file:///home/michael/projects/pyret-lang/src/runtime-arr/data-source.arr",52,2,1373,58,5,1543],cases167);
}
return $ans168;
};
var num$sanitizer165 = function num$sanitizer(x153,col150,row151) {
var loc152 = _runtime["_add"](_runtime["_add"](_runtime["_add"]("column ",num$to$string6(col150),_runtime["_errCallbacks"]),", row ",_runtime["_errCallbacks"]),num$to$string6(row151),_runtime["_errCallbacks"]);
var cases154 = x153;
var $ans155 = undefined;
switch(cases154.$tag) {
case 1: var s156 = cases154["s"];
var cases157 = string$to$number5(s156);
var $ans158 = undefined;
switch(cases157.$tag) {
case 1: $ans158 = raise4(_runtime["_add"](_runtime["_add"](_runtime["_add"](_runtime["_add"]("Cannot sanitize the string \"",s156,_runtime["_errCallbacks"]),"\" at ",_runtime["_errCallbacks"]),loc152,_runtime["_errCallbacks"])," as a number",_runtime["_errCallbacks"]));
break;
case 0: var n159 = cases157["elt"];
$ans158 = n159;
break;
default: $ans158 = _global["throwNoCasesMatched"](["file:///home/michael/projects/pyret-lang/src/runtime-arr/data-source.arr",65,6,1751,69,9,1925],cases157);
}
$ans155 = $ans158;
break;
case 2: var n160 = cases154["n"];
$ans155 = n160;
break;
case 3: var b162 = cases154["b"];
var $ans161 = undefined;
if(b162) {
$ans161 = (1)} else {
$ans161 = (0)}
$ans155 = $ans161;
break;
case 4: var datum163 = cases154["datum"];
$ans155 = raise4(_runtime["_add"](_runtime["_add"](_runtime["_add"](_runtime["_add"]("Cannot sanitize the datum ",torepr3(datum163),_runtime["_errCallbacks"])," at ",_runtime["_errCallbacks"]),loc152,_runtime["_errCallbacks"])," as a number",_runtime["_errCallbacks"]));
break;
case 0: $ans155 = raise4(_runtime["_add"](_runtime["_add"]("Cannot sanitize the empty cell at ",loc152,_runtime["_errCallbacks"])," as a number",_runtime["_errCallbacks"]));
break;
default: $ans155 = _global["throwNoCasesMatched"](["file:///home/michael/projects/pyret-lang/src/runtime-arr/data-source.arr",63,2,1705,76,5,2203],cases154);
}
return $ans155;
};
var bool$sanitizer149 = function bool$sanitizer(x137,col134,row135) {
var loc136 = _runtime["_add"](_runtime["_add"](_runtime["_add"]("column ",num$to$string6(col134),_runtime["_errCallbacks"]),", row ",_runtime["_errCallbacks"]),num$to$string6(row135),_runtime["_errCallbacks"]);
var cases138 = x137;
var $ans139 = undefined;
switch(cases138.$tag) {
case 3: var b140 = cases138["b"];
$ans139 = b140;
break;
case 2: var n143 = cases138["n"];
var $ans141 = undefined;
if(_global["equal-always"](n143,(0))) {
$ans141 = false} else {
var $ans142 = undefined;
if(_global["equal-always"](n143,(1))) {
$ans142 = true} else {
$ans142 = raise4(_runtime["_add"](_runtime["_add"](_runtime["_add"](_runtime["_add"]("Cannot sanitize the number ",num$to$string6(n143),_runtime["_errCallbacks"])," at ",_runtime["_errCallbacks"]),loc136,_runtime["_errCallbacks"])," as a boolean",_runtime["_errCallbacks"]))}
$ans141 = $ans142}
$ans139 = $ans141;
break;
case 1: var s146 = cases138["s"];
var $ans144 = undefined;
if(_global["equal-always"](string$tolower2(s146),"true")) {
$ans144 = true} else {
var $ans145 = undefined;
if(_global["equal-always"](string$tolower2(s146),"false")) {
$ans145 = false} else {
$ans145 = raise4(_runtime["_add"](_runtime["_add"](_runtime["_add"](_runtime["_add"]("Cannot sanitize the string \"",s146,_runtime["_errCallbacks"]),"\" at ",_runtime["_errCallbacks"]),loc136,_runtime["_errCallbacks"])," as a boolean",_runtime["_errCallbacks"]))}
$ans144 = $ans145}
$ans139 = $ans144;
break;
case 4: var datum147 = cases138["datum"];
$ans139 = raise4(_runtime["_add"](_runtime["_add"](_runtime["_add"](_runtime["_add"]("Cannot sanitize the datum ",torepr3(datum147),_runtime["_errCallbacks"])," at ",_runtime["_errCallbacks"]),loc136,_runtime["_errCallbacks"])," as a boolean",_runtime["_errCallbacks"]));
break;
case 0: $ans139 = raise4(_runtime["_add"](_runtime["_add"]("Cannot sanitize the empty cell at ",loc136,_runtime["_errCallbacks"])," as a boolean",_runtime["_errCallbacks"]));
break;
default: $ans139 = _global["throwNoCasesMatched"](["file:///home/michael/projects/pyret-lang/src/runtime-arr/data-source.arr",81,2,2367,101,5,3100],cases138);
}
return $ans139;
};
var strict$num$sanitizer133 = function strict$num$sanitizer(x122,col119,row120) {
var loc121 = _runtime["_add"](_runtime["_add"](_runtime["_add"]("column ",num$to$string6(col119),_runtime["_errCallbacks"]),", row ",_runtime["_errCallbacks"]),num$to$string6(row120),_runtime["_errCallbacks"]);
var cases123 = x122;
var $ans124 = undefined;
switch(cases123.$tag) {
case 1: var s125 = cases123["s"];
var cases126 = string$to$number5(s125);
var $ans127 = undefined;
switch(cases126.$tag) {
case 1: $ans127 = raise4(_runtime["_add"](_runtime["_add"](_runtime["_add"](_runtime["_add"]("Cannot sanitize the string \"",s125,_runtime["_errCallbacks"]),"\" at ",_runtime["_errCallbacks"]),loc121,_runtime["_errCallbacks"])," as a number",_runtime["_errCallbacks"]));
break;
case 0: var n128 = cases126["elt"];
$ans127 = n128;
break;
default: $ans127 = _global["throwNoCasesMatched"](["file:///home/michael/projects/pyret-lang/src/runtime-arr/data-source.arr",108,6,3315,112,9,3489],cases126);
}
$ans124 = $ans127;
break;
case 2: var n129 = cases123["n"];
$ans124 = n129;
break;
case 3: var b130 = cases123["b"];
$ans124 = raise4(_runtime["_add"](_runtime["_add"](_runtime["_add"](_runtime["_add"]("Cannot sanitize the boolean ",torepr3(b130),_runtime["_errCallbacks"])," at ",_runtime["_errCallbacks"]),loc121,_runtime["_errCallbacks"])," as a number in strict mode.",_runtime["_errCallbacks"]));
break;
case 4: var datum131 = cases123["datum"];
$ans124 = raise4(_runtime["_add"](_runtime["_add"](_runtime["_add"](_runtime["_add"]("Cannot sanitize the datum ",torepr3(datum131),_runtime["_errCallbacks"])," at ",_runtime["_errCallbacks"]),loc121,_runtime["_errCallbacks"])," as a number",_runtime["_errCallbacks"]));
break;
case 0: $ans124 = raise4(_runtime["_add"](_runtime["_add"]("Cannot sanitize the empty cell at ",loc121,_runtime["_errCallbacks"])," as a number",_runtime["_errCallbacks"]));
break;
default: $ans124 = _global["throwNoCasesMatched"](["file:///home/michael/projects/pyret-lang/src/runtime-arr/data-source.arr",106,2,3269,120,5,3855],cases123);
}
return $ans124;
};
var strings$only118 = function strings$only(x106,col103,row104) {
var loc105 = _runtime["_add"](_runtime["_add"](_runtime["_add"]("column ",num$to$string6(col103),_runtime["_errCallbacks"]),", row ",_runtime["_errCallbacks"]),num$to$string6(row104),_runtime["_errCallbacks"]);
var cases107 = x106;
var $ans108 = undefined;
switch(cases107.$tag) {
case 1: var s109 = cases107["s"];
$ans108 = s109;
break;
default: var cases110 = x106;
var $ans111 = undefined;
switch(cases110.$tag) {
case 2: var n112 = cases110["n"];
$ans111 = _runtime["_add"]("the number ",num$to$string6(n112),_runtime["_errCallbacks"]);
break;
case 3: var b113 = cases110["b"];
$ans111 = _runtime["_add"]("the boolean ",torepr3(b113),_runtime["_errCallbacks"]);
break;
case 4: var datum114 = cases110["datum"];
$ans111 = _runtime["_add"]("the datum ",torepr3(datum114),_runtime["_errCallbacks"]);
break;
case 0: $ans111 = "the empty cell";
break;
case 1: var s115 = cases110["s"];
$ans111 = raise4("unreachable");
break;
default: $ans111 = _global["throwNoCasesMatched"](["file:///home/michael/projects/pyret-lang/src/runtime-arr/data-source.arr",128,15,4087,134,9,4362],cases110);
}
var as$str116 = $ans111;
$ans108 = raise4(_runtime["_add"](_runtime["_add"](_runtime["_add"](_runtime["_add"]("Cannot sanitize ",as$str116,_runtime["_errCallbacks"])," at ",_runtime["_errCallbacks"]),loc105,_runtime["_errCallbacks"])," as a string",_runtime["_errCallbacks"]));
}
return $ans108;
};
var numbers$only102 = function numbers$only(x90,col87,row88) {
var loc89 = _runtime["_add"](_runtime["_add"](_runtime["_add"]("column ",num$to$string6(col87),_runtime["_errCallbacks"]),", row ",_runtime["_errCallbacks"]),num$to$string6(row88),_runtime["_errCallbacks"]);
var cases91 = x90;
var $ans92 = undefined;
switch(cases91.$tag) {
case 2: var n93 = cases91["n"];
$ans92 = n93;
break;
default: var cases94 = x90;
var $ans95 = undefined;
switch(cases94.$tag) {
case 1: var s96 = cases94["s"];
$ans95 = _runtime["_add"]("the string ",torepr3(s96),_runtime["_errCallbacks"]);
break;
case 3: var b97 = cases94["b"];
$ans95 = _runtime["_add"]("the boolean ",torepr3(b97),_runtime["_errCallbacks"]);
break;
case 4: var datum98 = cases94["datum"];
$ans95 = _runtime["_add"]("the datum ",torepr3(datum98),_runtime["_errCallbacks"]);
break;
case 0: $ans95 = "an empty cell";
break;
case 2: var n99 = cases94["n"];
$ans95 = raise4("unreachable");
break;
default: $ans95 = _global["throwNoCasesMatched"](["file:///home/michael/projects/pyret-lang/src/runtime-arr/data-source.arr",145,15,4683,151,9,4950],cases94);
}
var as$str100 = $ans95;
$ans92 = raise4(_runtime["_add"](_runtime["_add"](_runtime["_add"](_runtime["_add"]("Cannot sanitize ",as$str100,_runtime["_errCallbacks"])," at ",_runtime["_errCallbacks"]),loc89,_runtime["_errCallbacks"])," as a number",_runtime["_errCallbacks"]));
}
return $ans92;
};
var booleans$only86 = function booleans$only(x74,col71,row72) {
var loc73 = _runtime["_add"](_runtime["_add"](_runtime["_add"]("column ",num$to$string6(col71),_runtime["_errCallbacks"]),", row ",_runtime["_errCallbacks"]),num$to$string6(row72),_runtime["_errCallbacks"]);
var cases75 = x74;
var $ans76 = undefined;
switch(cases75.$tag) {
case 3: var b77 = cases75["b"];
$ans76 = b77;
break;
default: var cases78 = x74;
var $ans79 = undefined;
switch(cases78.$tag) {
case 2: var n80 = cases78["n"];
$ans79 = _runtime["_add"]("the number ",num$to$string6(n80),_runtime["_errCallbacks"]);
break;
case 1: var s81 = cases78["s"];
$ans79 = _runtime["_add"]("the string ",torepr3(s81),_runtime["_errCallbacks"]);
break;
case 4: var datum82 = cases78["datum"];
$ans79 = _runtime["_add"]("the datum ",torepr3(datum82),_runtime["_errCallbacks"]);
break;
case 0: $ans79 = "an empty cell";
break;
case 3: var b83 = cases78["b"];
$ans79 = raise4("unreachable");
break;
default: $ans79 = _global["throwNoCasesMatched"](["file:///home/michael/projects/pyret-lang/src/runtime-arr/data-source.arr",162,15,5274,168,9,5547],cases78);
}
var as$str84 = $ans79;
$ans76 = raise4(_runtime["_add"](_runtime["_add"](_runtime["_add"](_runtime["_add"]("Cannot sanitize ",as$str84,_runtime["_errCallbacks"])," at ",_runtime["_errCallbacks"]),loc73,_runtime["_errCallbacks"])," as a boolean",_runtime["_errCallbacks"]));
}
return $ans76;
};
var empty$only70 = function empty$only(x59,col56,row57) {
var loc58 = _runtime["_add"](_runtime["_add"](_runtime["_add"]("column ",num$to$string6(col56),_runtime["_errCallbacks"]),", row ",_runtime["_errCallbacks"]),num$to$string6(row57),_runtime["_errCallbacks"]);
var cases60 = x59;
var $ans61 = undefined;
switch(cases60.$tag) {
case 0: $ans61 = none9;
break;
default: var cases62 = x59;
var $ans63 = undefined;
switch(cases62.$tag) {
case 2: var n64 = cases62["n"];
$ans63 = _runtime["_add"]("number ",num$to$string6(n64),_runtime["_errCallbacks"]);
break;
case 1: var s65 = cases62["s"];
$ans63 = _runtime["_add"]("string ",torepr3(s65),_runtime["_errCallbacks"]);
break;
case 3: var b66 = cases62["b"];
$ans63 = _runtime["_add"]("boolean ",torepr3(b66),_runtime["_errCallbacks"]);
break;
case 4: var datum67 = cases62["datum"];
$ans63 = _runtime["_add"]("datum ",torepr3(datum67),_runtime["_errCallbacks"]);
break;
case 0: $ans63 = raise4("unreachable");
break;
default: $ans63 = _global["throwNoCasesMatched"](["file:///home/michael/projects/pyret-lang/src/runtime-arr/data-source.arr",179,15,5872,185,9,6140],cases62);
}
var as$str68 = $ans63;
$ans61 = raise4(_runtime["_add"](_runtime["_add"](_runtime["_add"](_runtime["_add"]("Cannot sanitize the ",as$str68,_runtime["_errCallbacks"])," at ",_runtime["_errCallbacks"]),loc58,_runtime["_errCallbacks"])," as an empty cell",_runtime["_errCallbacks"]));
}
return $ans61;
};
var $answer187 = _global["trace-value"](["dummy location"],nothing186);
return module["exports"] = {"is-sanitize-col":is$sanitize$col48,
"string-to-number":string$to$number5,
"strict-num-sanitizer":strict$num$sanitizer133,
"is-c-custom":is$c$custom12,
"c-num":c$num15,
"num-to-string":num$to$string6,
"sanitize-col":sanitize$col47,
"c-custom":c$custom11,
"is-c-num":is$c$num16,
"none":none9,
"strings-only":strings$only118,
"is-c-bool":is$c$bool14,
"c-bool":c$bool13,
"some":some8,
"is-CellContent":is$CellContent21,
"option-sanitizer":option$sanitizer185,
"is-DataSourceLoaderOption":is$DataSourceLoaderOption49,
"torepr":torepr3,
"numbers-only":numbers$only102,
"booleans-only":booleans$only86,
"string-sanitizer":string$sanitizer176,
"raise":raise4,
"empty-only":empty$only70,
"string-tolower":string$tolower2,
"c-str":c$str17,
"bool-sanitizer":bool$sanitizer149,
"is-c-str":is$c$str18,
"c-empty":c$empty19,
"num-sanitizer":num$sanitizer165,
"is-c-empty":is$c$empty20,
"$answer":$answer187,
"$checks":_runtime["$checkResults"](),
"$traces":_runtime["$getTraces"](),
"$locations":[{"name":"is-sanitize-col",
"srcloc":["file:///home/michael/projects/pyret-lang/src/runtime-arr/data-source.arr",35,2,768,35,64,830]},
{"name":"string-to-number",
"srcloc":["file:///home/michael/projects/pyret-lang/src/runtime-arr/data-source.arr",12,0,188,12,37,225]},
{"name":"strict-num-sanitizer",
"srcloc":["file:///home/michael/projects/pyret-lang/src/runtime-arr/data-source.arr",104,0,3106,121,3,3859]},
{"name":"is-c-custom",
"srcloc":["file:///home/michael/projects/pyret-lang/src/runtime-arr/data-source.arr",22,2,408,22,24,430]},
{"name":"c-num",
"srcloc":["file:///home/michael/projects/pyret-lang/src/runtime-arr/data-source.arr",20,2,360,20,22,380]},
{"name":"num-to-string",
"srcloc":["file:///home/michael/projects/pyret-lang/src/runtime-arr/data-source.arr",11,0,159,11,28,187]},
{"name":"sanitize-col",
"srcloc":["file:///home/michael/projects/pyret-lang/src/runtime-arr/data-source.arr",35,2,768,35,64,830]},
{"name":"c-custom",
"srcloc":["file:///home/michael/projects/pyret-lang/src/runtime-arr/data-source.arr",22,2,408,22,24,430]},
{"name":"is-c-num",
"srcloc":["file:///home/michael/projects/pyret-lang/src/runtime-arr/data-source.arr",20,2,360,20,22,380]},
{"name":"none",
"srcloc":["file:///home/michael/projects/pyret-lang/src/runtime-arr/data-source.arr",9,0,131,9,13,144]},
{"name":"strings-only",
"srcloc":["file:///home/michael/projects/pyret-lang/src/runtime-arr/data-source.arr",123,0,3861,138,3,4455]},
{"name":"is-c-bool",
"srcloc":["file:///home/michael/projects/pyret-lang/src/runtime-arr/data-source.arr",21,2,383,21,24,405]},
{"name":"c-bool",
"srcloc":["file:///home/michael/projects/pyret-lang/src/runtime-arr/data-source.arr",21,2,383,21,24,405]},
{"name":"some",
"srcloc":["file:///home/michael/projects/pyret-lang/src/runtime-arr/data-source.arr",10,0,145,10,13,158]},
{"name":"is-CellContent",
"srcloc":["file:///home/michael/projects/pyret-lang/src/runtime-arr/data-source.arr",17,0,302,23,3,434]},
{"name":"option-sanitizer",
"srcloc":["file:///home/michael/projects/pyret-lang/src/runtime-arr/data-source.arr",42,0,970,49,3,1283]},
{"name":"is-DataSourceLoaderOption",
"srcloc":["file:///home/michael/projects/pyret-lang/src/runtime-arr/data-source.arr",34,0,732,36,3,834]},
{"name":"torepr",
"srcloc":["file:///home/michael/projects/pyret-lang/src/runtime-arr/data-source.arr",14,0,242,14,23,265]},
{"name":"numbers-only",
"srcloc":["file:///home/michael/projects/pyret-lang/src/runtime-arr/data-source.arr",140,0,4457,155,3,5043]},
{"name":"booleans-only",
"srcloc":["file:///home/michael/projects/pyret-lang/src/runtime-arr/data-source.arr",157,0,5045,172,3,5641]},
{"name":"string-sanitizer",
"srcloc":["file:///home/michael/projects/pyret-lang/src/runtime-arr/data-source.arr",51,0,1285,59,3,1547]},
{"name":"raise",
"srcloc":["file:///home/michael/projects/pyret-lang/src/runtime-arr/data-source.arr",13,0,226,13,15,241]},
{"name":"empty-only",
"srcloc":["file:///home/michael/projects/pyret-lang/src/runtime-arr/data-source.arr",174,0,5643,189,3,6242]},
{"name":"string-tolower",
"srcloc":["file:///home/michael/projects/pyret-lang/src/runtime-arr/data-source.arr",15,0,266,15,34,300]},
{"name":"c-str",
"srcloc":["file:///home/michael/projects/pyret-lang/src/runtime-arr/data-source.arr",19,2,337,19,22,357]},
{"name":"bool-sanitizer",
"srcloc":["file:///home/michael/projects/pyret-lang/src/runtime-arr/data-source.arr",79,0,2209,102,3,3104]},
{"name":"is-c-str",
"srcloc":["file:///home/michael/projects/pyret-lang/src/runtime-arr/data-source.arr",19,2,337,19,22,357]},
{"name":"c-empty",
"srcloc":["file:///home/michael/projects/pyret-lang/src/runtime-arr/data-source.arr",18,2,325,18,11,334]},
{"name":"num-sanitizer",
"srcloc":["file:///home/michael/projects/pyret-lang/src/runtime-arr/data-source.arr",61,0,1549,77,3,2207]},
{"name":"is-c-empty",
"srcloc":["file:///home/michael/projects/pyret-lang/src/runtime-arr/data-source.arr",18,2,325,18,11,334]}]};
