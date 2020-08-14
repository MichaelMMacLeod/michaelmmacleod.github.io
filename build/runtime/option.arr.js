var _runtime = require("./runtime.js");
var _nothing = undefined;
var $some25 = {"names":["value"]};
var $none26 = {"names":false};
var $constructorTMP30 = {"$brand":$none26,
"$tag":1};
function $binderand$then21(self15) {
var $inner22 = function innerand$then(f18) {
var cases16 = self15;
var $ans17 = undefined;
switch(cases16.$tag) {
case 0: var value19 = cases16["value"];
$ans17 = some4(f18(value19));
break;
case 1: $ans17 = none2;
break;
default: $ans17 = _runtime["throwNoCasesMatched"](["builtin://option",23,4,443,26,7,529],cases16);
}
return $ans17;
};
$inner22["$brand"] = "METHOD";
$inner22["$binder"] = $binderand$then21;
return $inner22;
};
$constructorTMP30["and-then"] = $binderand$then21($constructorTMP30);
function $binderor$else13(self7) {
var $inner14 = function inneror$else(v11) {
var cases8 = self7;
var $ans9 = undefined;
switch(cases8.$tag) {
case 0: var value10 = cases8["value"];
$ans9 = value10;
break;
case 1: $ans9 = v11;
break;
default: $ans9 = _runtime["throwNoCasesMatched"](["builtin://option",16,4,287,19,7,361],cases8);
}
return $ans9;
};
$inner14["$brand"] = "METHOD";
$inner14["$binder"] = $binderor$else13;
return $inner14;
};
$constructorTMP30["or-else"] = $binderor$else13($constructorTMP30);
function $binderor$else13(self7) {
var $inner14 = function inneror$else(v11) {
var cases8 = self7;
var $ans9 = undefined;
switch(cases8.$tag) {
case 0: var value10 = cases8["value"];
$ans9 = value10;
break;
case 1: $ans9 = v11;
break;
default: $ans9 = _runtime["throwNoCasesMatched"](["builtin://option",16,4,287,19,7,361],cases8);
}
return $ans9;
};
$inner14["$brand"] = "METHOD";
$inner14["$binder"] = $binderor$else13;
return $inner14;
};
function $binderand$then21(self15) {
var $inner22 = function innerand$then(f18) {
var cases16 = self15;
var $ans17 = undefined;
switch(cases16.$tag) {
case 0: var value19 = cases16["value"];
$ans17 = some4(f18(value19));
break;
case 1: $ans17 = none2;
break;
default: $ans17 = _runtime["throwNoCasesMatched"](["builtin://option",23,4,443,26,7,529],cases16);
}
return $ans17;
};
$inner22["$brand"] = "METHOD";
$inner22["$binder"] = $binderand$then21;
return $inner22;
};
var Option1 = {"some":function some(value27) {
var $constructorTMP28 = {"$brand":$some25,
"$tag":0,
"value":value27};
function $binderand$then21(self15) {
var $inner22 = function innerand$then(f18) {
var cases16 = self15;
var $ans17 = undefined;
switch(cases16.$tag) {
case 0: var value19 = cases16["value"];
$ans17 = some4(f18(value19));
break;
case 1: $ans17 = none2;
break;
default: $ans17 = _runtime["throwNoCasesMatched"](["builtin://option",23,4,443,26,7,529],cases16);
}
return $ans17;
};
$inner22["$brand"] = "METHOD";
$inner22["$binder"] = $binderand$then21;
return $inner22;
};
$constructorTMP28["and-then"] = $binderand$then21($constructorTMP28);
function $binderor$else13(self7) {
var $inner14 = function inneror$else(v11) {
var cases8 = self7;
var $ans9 = undefined;
switch(cases8.$tag) {
case 0: var value10 = cases8["value"];
$ans9 = value10;
break;
case 1: $ans9 = v11;
break;
default: $ans9 = _runtime["throwNoCasesMatched"](["builtin://option",16,4,287,19,7,361],cases8);
}
return $ans9;
};
$inner14["$brand"] = "METHOD";
$inner14["$binder"] = $binderor$else13;
return $inner14;
};
$constructorTMP28["or-else"] = $binderor$else13($constructorTMP28);
return $constructorTMP28;
},
"none":$constructorTMP30,
"is-some":function some(val) {
return val.$brand === $some25;
},
"is-none":function none(val) {
return val.$brand === $none26;
}};
var is$Option6 = Option1["Option"];
var is$some5 = Option1["is-some"];
var some4 = Option1["some"];
var is$none3 = Option1["is-none"];
var none2 = Option1["none"];
var $answer32 = _runtime["trace-value"](["dummy location"],_nothing);
return module["exports"] = {"is-none":is$none3,
"none":none2,
"is-Option":is$Option6,
"is-some":is$some5,
"some":some4,
"$answer":$answer32,
"$checks":_runtime["$checkResults"](),
"$traces":_runtime["$getTraces"](),
"$locations":[{"name":"is-none",
"srcloc":["builtin://option",13,2,218,13,8,224]},
{"name":"none",
"srcloc":["builtin://option",13,2,218,13,8,224]},
{"name":"is-Option",
"srcloc":["builtin://option",11,0,179,35,3,702]},
{"name":"is-some",
"srcloc":["builtin://option",12,2,197,12,20,215]},
{"name":"some",
"srcloc":["builtin://option",12,2,197,12,20,215]}]};
