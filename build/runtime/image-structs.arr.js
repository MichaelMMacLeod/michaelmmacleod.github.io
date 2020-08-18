var _runtime = require("./runtime.js");
var _global = require("./global.arr.js");
var _nothing = undefined;
var $underscore_import3 = require("./global.arr.js");
_runtime["addModule"]("builtin://global",$underscore_import3);
var C4 = require("./color.arr.js");
_runtime["addModule"]("builtin://color",C4);
var nothing1 = _runtime["getModuleValue"]("builtin://global","nothing");
var $answer2 = _global["trace-value"](["builtin://image-structs",7,17,80,7,17,80],nothing1);
return module["exports"] = {"$answer":$answer2,
"$checks":_runtime["$checkResults"](),
"$traces":_runtime["$getTraces"](),
"$locations":[]};
