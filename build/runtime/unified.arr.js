var _runtime = require("./runtime.js");
var _global = require("./global.arr.js");
var _nothing = undefined;
var G3 = require("./global.arr.js");
_runtime["addModule"]("builtin://global",G3);
var nothing1 = G3.nothing;
var nothing1 = _runtime["getModuleValue"]("builtin://global","nothing");
var $answer2 = _global["trace-value"](["file:///home/michael/projects/pyret-lang/src/runtime-arr/unified.arr",1,19,19,1,19,19],nothing1);
return module["exports"] = {"$answer":$answer2,
"$checks":_runtime["$checkResults"](),
"$traces":_runtime["$getTraces"](),
"$locations":[]};
