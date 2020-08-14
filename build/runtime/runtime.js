"use strict";
exports.__esModule = true;
// TODO(alex): `import type` syntax is causing a parsing error
// import type { NumericErrorCallbacks } from "equality";
/*
 * 'export named-js-value' desugars into 'exports.name = js-value'
 *
 * https://stackoverflow.com/questions/16383795/difference-between-module-exports-and-exports-in-the-commonjs-module-system
 *
 */
var _NUMBER = require("./js-numbers.js");
var _EQUALITY = require('./equality.js');
var _PRIMITIVES = require("./primitives.js");
function _spy(spyObject) {
    var message = spyObject.message();
    var spyLoc = spyObject.loc;
    if (message != null) {
        console.log("Spying \"" + message + "\" (at " + spyLoc + ")");
    }
    else {
        console.log("Spying (at " + spyLoc + ")");
    }
    var exprs = spyObject.exprs;
    for (var i = 0; i < exprs.length; i++) {
        var key = exprs[i].key;
        var loc = exprs[i].loc;
        var value = exprs[i].expr();
        console.log("    " + key + ": " + value + " (at " + loc + ")");
    }
}
var _globalCheckContext = [];
var _globalCheckResults = [];
function getCheckResults() {
    return _globalCheckResults.slice();
}
function checkResults() {
    var errorCount = 0;
    _globalCheckResults.forEach(function (result) {
        if (!result.success) {
            errorCount += 1;
        }
    });
    if (errorCount === 0) {
        console.log("All tests pass");
    }
    else {
        console.log("Some tests failed");
    }
    _globalCheckResults.forEach(function (result) {
        if (result.success) {
            console.log("[PASS] Found <" + result.lhs + ">. Expected <" + result.rhs + "> ([" + result.path + "], at " + result.loc + ")");
        }
        else {
            console.log("[FAIL] Found <" + result.lhs + ">. Expected <" + result.rhs + "> ([" + result.path + "], at " + result.loc + ")");
        }
    });
    return getCheckResults();
}
function eagerCheckTest(lhs, rhs, test, loc) {
    var lhs_expr_eval = {
        value: undefined,
        exception: false,
        exception_val: undefined
    };
    var rhs_expr_eval = {
        value: undefined,
        exception: false,
        exception_val: undefined
    };
    try {
        lhs_expr_eval.value = lhs();
    }
    catch (e) {
        lhs_expr_eval.exception = true;
        lhs_expr_eval.exception_val = e;
    }
    try {
        rhs_expr_eval.value = rhs();
    }
    catch (e) {
        rhs_expr_eval.exception = true;
        rhs_expr_eval.exception_val = e;
    }
    try {
        var result = test(lhs_expr_eval, rhs_expr_eval);
        _globalCheckResults.push({
            success: result.success,
            path: _globalCheckContext.join(),
            loc: loc,
            lhs: result.lhs,
            rhs: result.rhs,
            exception: undefined
        });
    }
    catch (e) {
        _globalCheckResults.push({
            success: false,
            path: _globalCheckContext.join(),
            loc: loc,
            lhs: lhs_expr_eval,
            rhs: rhs_expr_eval,
            exception: e
        });
    }
}
function eagerCheckBlockRunner(name, checkBlock) {
    _globalCheckContext.push(name);
    try {
        checkBlock();
    }
    catch (e) {
        throw e;
    }
    finally {
        _globalCheckContext.pop();
    }
}
var _globalTraceValues = [];
// ********* Other Functions *********
function traceValue(loc, value) {
    // NOTE(alex): stubbed out until we decide what to actually do with it
    _globalTraceValues.push({ srcloc: loc, value: value });
    return value;
}
exports.traceValue = traceValue;
function getTraces() { return _globalTraceValues; }
// Allow '+' for string concat.
// Otherwise, defer to the number library.
function customAdd(lhs, rhs, errbacks) {
    if (typeof (lhs) === "string" && typeof (rhs) === "string") {
        return lhs + rhs;
    }
    else {
        return _NUMBER["add"](lhs, rhs, errbacks);
    }
}
// MUTATES an object to rebind any methods to it
function _rebind(toRebind) {
    if (typeof toRebind === "object") {
        Object.keys(toRebind).forEach(function (key) {
            if (key === "$brand" || key === "$tag") {
                return;
            }
            var value = toRebind[key];
            if (_PRIMITIVES.isMethod(value)) {
                toRebind[key] = value["$binder"](toRebind);
            }
        });
    }
    return toRebind;
}
function pauseStack(callback) {
    // @ts-ignore
    return $STOPIFY.pauseK(function (kontinue) {
        return callback({
            resume: function (val) { return kontinue({ type: "normal", value: val }); },
            error: function (err) { return kontinue({ type: "error", error: err }); }
        });
    });
}
exports.pauseStack = pauseStack;
var allModules = {};
function addModule(uri, vals) {
    allModules[uri] = { values: vals };
}
function getModuleValue(uri, k) {
    return allModules[uri].values[k];
}
module.exports["addModule"] = addModule;
module.exports["getModuleValue"] = getModuleValue;
// Hack needed b/c of interactions with the 'export' keyword
// Pyret instantiates singleton data varaints by taking a reference to the value
// TODO(alex): Should Pyret perform a function call to create a singleton data variant
module.exports["Equal"] = _EQUALITY.Equal;
module.exports["NotEqual"] = _EQUALITY.NotEqual;
module.exports["Uknown"] = _EQUALITY.Unknown;
// Hack needed to match generate Pyret-code
module.exports["is-Equal"] = _EQUALITY.isEqual;
module.exports["is-NotEqual"] = _EQUALITY.isNotEqual;
module.exports["is-Unknown"] = _EQUALITY.isUnknown;
module.exports["equal-now"] = _EQUALITY.equalNow;
module.exports["equal-now3"] = _EQUALITY.equalNow3;
module.exports["equal-always"] = _EQUALITY.equalAlways;
module.exports["equal-always3"] = _EQUALITY.equalAlways3;
module.exports["identical"] = _EQUALITY.identical;
module.exports["identical3"] = _EQUALITY.identical3;
// Expected runtime functions
module.exports["trace-value"] = traceValue;
module.exports["$getTraces"] = getTraces;
module.exports["$spy"] = _spy;
module.exports["$rebind"] = _rebind;
module.exports["$checkTest"] = eagerCheckTest;
module.exports["$checkBlock"] = eagerCheckBlockRunner;
module.exports["$checkResults"] = checkResults;
module.exports["$getCheckResults"] = getCheckResults;
module.exports["$makeRational"] = _NUMBER["makeRational"];
module.exports["$makeRoughnum"] = _NUMBER["makeRoughnum"];
module.exports["$errCallbacks"] = _EQUALITY.NumberErrbacks;
module.exports["_add"] = customAdd;
module.exports["_subtract"] = _NUMBER["subtract"];
module.exports["_multiply"] = _NUMBER["multiply"];
module.exports["_divide"] = _NUMBER["divide"];
module.exports["_lessThan"] = _NUMBER["lessThan"];
module.exports["_greaterThan"] = _NUMBER["greaterThan"];
module.exports["_lessThanOrEqual"] = _NUMBER["lessThanOrEqual"];
module.exports["_greaterThanOrEqual"] = _NUMBER["greaterThanOrEqual"];
module.exports["_makeNumberFromString"] = _NUMBER['fromString'];
module.exports["PTuple"] = _PRIMITIVES["PTuple"];
