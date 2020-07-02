"use strict";
exports.__esModule = true;
/*
 * 'export named-js-value' desugars into 'exports.name = js-value'
 *
 * https://stackoverflow.com/questions/16383795/difference-between-module-exports-and-exports-in-the-commonjs-module-system
 *
 */
var _NUMBER = require("./js-numbers.js");
var _OPTION = require('./option.arr.js');
var $EqualBrand = { "names": false };
var $NotEqualBrand = { "names": ["reason", "value1", "value2"] };
var $UnknownBrand = { "names": ["reason", "value1", "value2"] };
var $EqualTag = 0;
var $NotEqualTag = 1;
var $UnknownTag = 2;
var $PTupleBrand = "tuple";
var $PRefBrand = "ref";
function PTuple(values) {
    values["$brand"] = $PTupleBrand;
    return values;
}
exports.PTuple = PTuple;
function Equal() {
    return {
        "$brand": $EqualBrand,
        "$tag": $EqualTag
    };
}
function NotEqual(reason, value1, value2) {
    return {
        "$brand": $NotEqualBrand,
        "$tag": $NotEqualTag,
        "reason": reason,
        "value1": value1,
        "value2": value2
    };
}
exports.NotEqual = NotEqual;
function Unknown(reason, value1, value2) {
    return {
        "$brand": $UnknownBrand,
        "$tag": $UnknownTag,
        "reason": reason,
        "value1": value1,
        "value2": value2
    };
}
exports.Unknown = Unknown;
function isEqual(val) {
    return val.$brand === $EqualBrand;
}
exports.isEqual = isEqual;
function isNotEqual(val) {
    return val.$brand === $NotEqualBrand;
}
exports.isNotEqual = isNotEqual;
function isUnknown(val) {
    return val.$brand === $UnknownBrand;
}
exports.isUnknown = isUnknown;
// ********* Helpers *********
function equalityResultToBool(ans) {
    if (isEqual(ans)) {
        return true;
    }
    else if (isNotEqual(ans)) {
        return false;
    }
    else if (isUnknown(ans)) {
        var unknownVariant = ans;
        throw {
            reason: unknownVariant.reason,
            value1: unknownVariant.value1,
            value2: unknownVariant.value2
        };
    }
}
function isFunction(obj) {
    return (typeof obj === "function") && !(isMethod(obj));
}
function isMethod(obj) {
    return typeof obj === "function" && "$brand" in obj && obj["$brand"] === "METHOD";
}
// TODO(alex): Will nothing always be value 'undefined'?
function isNothing(obj) { return obj === undefined; }
;
var isNumber = _NUMBER["isPyretNumber"];
var isRoughNumber = _NUMBER["isRoughnum"];
var numericEquals = _NUMBER["equals"];
function isBoolean(val) {
    return typeof val === "boolean";
}
function isString(val) {
    return typeof val === "string";
}
function isDataVariant(val) {
    return (typeof val === "object") && ("$brand" in val) && !(isPTuple(val));
}
function isRawObject(val) {
    return (typeof val === "object") && !("$brand" in val);
}
function isPTuple(val) {
    return (Array.isArray(val)) && ("$brand" in val) && (val["$brand"] === $PTupleBrand);
}
function isArray(val) {
    return (Array.isArray(val)) && !("$brand" in val);
}
function isPRef(val) {
    return (typeof val === "object") && ("$brand" in val) && (val["$brand"] === $PRefBrand);
}
var NumberErrbacks = {
    throwDivByZero: function (msg) { throw msg; },
    throwToleranceError: function (msg) { throw msg; },
    throwRelToleranceError: function (msg) { throw msg; },
    throwGeneralError: function (msg) { throw msg; },
    throwDomainError: function (msg) { throw msg; },
    throwSqrtNegative: function (msg) { throw msg; },
    throwLogNonPositive: function (msg) { throw msg; },
    throwIncomparableValues: function (msg) { throw msg; },
    throwInternalError: function (msg) { throw msg; }
};
// ********* Equality Functions *********
function identical3(v1, v2) {
    if (isFunction(v1) && isFunction(v2)) {
        return Unknown("Function", v1, v2);
    }
    else if (isMethod(v1) && isMethod(v2)) {
        return Unknown("Method", v1, v2);
    }
    else if (isRoughNumber(v1) && isRoughNumber(v2)) {
        return Unknown('Roughnums', v1, v2);
    }
    else if (v1 === v2) {
        return Equal();
    }
    else {
        return NotEqual("", v1, v2);
    }
}
exports.identical3 = identical3;
function identical(v1, v2) {
    var ans = identical3(v1, v2);
    return equalityResultToBool(ans);
}
exports.identical = identical;
/*
 * Structural equality. Stops at mutable data (refs) and only checks that
 * mutable data are identical.
 *
 * Data variants and raw (unbranded) objects are NEVER equal.
 *
 */
function equalAlways3(e1, e2) {
    if (isEqual(identical3(e1, e2))) {
        // Identical so must always be equal
        return Equal();
    }
    var worklist = [[e1, e2]];
    while (worklist.length > 0) {
        var curr = worklist.pop();
        var v1 = curr[0];
        var v2 = curr[1];
        if (isEqual(identical3(v1, v2))) {
            // Identical so must always be equal
            continue;
        }
        if (isNumber(v1) && isNumber(v2)) {
            if (isRoughNumber(v1) || isRoughNumber(v2)) {
                return Unknown("Rough Number equal-always", v1, v2);
            }
            else if (numericEquals(v1, v2, NumberErrbacks)) {
                continue;
            }
            else {
                return NotEqual("Numers", v1, v2);
            }
        }
        else if (isBoolean(v1) && isBoolean(v2)) {
            if (v1 !== v2) {
                return NotEqual("Booleans", v1, v2);
            }
            continue;
        }
        else if (isString(v1) && isString(v2)) {
            if (v1 !== v2) {
                return NotEqual("Strings", v1, v2);
            }
            continue;
        }
        else if (isFunction(v1) && isFunction(v2)) {
            // Cannot compare functions for equality
            return Unknown("Functions", v1, v2);
        }
        else if (isMethod(v1) && isMethod(v2)) {
            return Unknown("Methods", v1, v2);
        }
        else if (isPTuple(v1) && isPTuple(v2)) {
            if (v1.length !== v2.length) {
                return NotEqual("PTuple Length", v1, v2);
            }
            for (var i = 0; i < v1.length; i++) {
                worklist.push([v1[i], v2[i]]);
            }
            continue;
        }
        else if (isArray(v1) && isArray(v2)) {
            if (v1.length !== v2.length) {
                return NotEqual("Array Length", v1, v2);
            }
            for (var i = 0; i < v1.length; i++) {
                worklist.push([v1[i], v2[i]]);
            }
            continue;
        }
        else if (isNothing(v1) && isNothing(v2)) {
            // Equality is defined for 'nothing'
            // 'nothing' is always equal to 'nothing'
            continue;
        }
        else if (isPRef(v1) && isPRef(v2)) {
            // In equal-always, non-identical refs are not equal
            if (v1.ref !== v2.ref) {
                return NotEqual("PRef'd Objects", v1, v2);
            }
            continue;
        }
        else if (isDataVariant(v1) && isDataVariant(v2)) {
            if (v1.$brand && v1.$brand === v2.$brand) {
                if ("_equals" in v1) {
                    // TODO(alex): Recursive callback
                    var ans = v1["_equals"](v2, undefined);
                    if (!isEqual(ans)) {
                        return ans;
                    }
                    else {
                        continue;
                    }
                }
                var fields1 = v1.$brand.names;
                var fields2 = v2.$brand.names;
                if (fields1.length !== fields2.length) {
                    // Not the same brand
                    return NotEqual("Object Brands", v1, v2);
                }
                for (var i = 0; i < fields1.length; i += 1) {
                    if (fields1[i] != fields2[i]) {
                        // Not the same brand
                        return NotEqual("Field Brands", fields1[i], fields2[i]);
                    }
                    worklist.push([v1[fields1[i]], v2[fields2[i]]]);
                }
                continue;
            }
            else {
                return NotEqual("Variant Brands", v1, v2);
            }
        }
        else if (isRawObject(v1) && isRawObject(v2)) {
            var keys1 = Object.keys(v1);
            var keys2 = Object.keys(v2);
            if (keys1.length !== keys2.length) {
                return NotEqual("Raw Object Field Count", v1, v2);
            }
            // Check for matching keys and push field to worklist
            for (var i = 0; i < keys1.length; i++) {
                var key2Index = keys2.indexOf(keys1[i]);
                if (key2Index === -1) {
                    // Key in v1 not found in v2
                    return NotEqual("Raw Object Missing Field '" + keys1[i] + "'", v1, v2);
                }
                else {
                    // Push common field to worklist
                    worklist.push([v1[keys1[i]], v2[keys2[key2Index]]]);
                }
            }
            continue;
        }
        else {
            return NotEqual("", e1, e2);
        }
    }
    return Equal();
}
exports.equalAlways3 = equalAlways3;
function equalAlways(v1, v2) {
    var ans = equalAlways3(v1, v2);
    return equalityResultToBool(ans);
}
exports.equalAlways = equalAlways;
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
            if (isMethod(value)) {
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
function stringToNumber(s) {
    var result = _NUMBER['fromString'](s);
    if (result === false) {
        return _OPTION['none'];
    }
    else {
        return _OPTION['some'](result);
    }
}
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
module.exports["Equal"] = Equal();
// Hack needed to match generate Pyret-code
module.exports["is-Equal"] = isEqual;
module.exports["is-NotEqual"] = isNotEqual;
module.exports["is-Unknown"] = isUnknown;
// Expected runtime functions
module.exports["$getTraces"] = getTraces;
module.exports["$spy"] = _spy;
module.exports["$rebind"] = _rebind;
module.exports["$checkTest"] = eagerCheckTest;
module.exports["$checkBlock"] = eagerCheckBlockRunner;
module.exports["$checkResults"] = checkResults;
module.exports["$getCheckResults"] = getCheckResults;
module.exports["$makeRational"] = _NUMBER["makeRational"];
module.exports["$makeRoughnum"] = _NUMBER["makeRoughnum"];
module.exports["$errCallbacks"] = NumberErrbacks;
module.exports["_add"] = customAdd;
module.exports["_subtract"] = _NUMBER["subtract"];
module.exports["_multiply"] = _NUMBER["multiply"];
module.exports["_divide"] = _NUMBER["divide"];
module.exports["_lessThan"] = _NUMBER["lessThan"];
module.exports["_greaterThan"] = _NUMBER["greaterThan"];
module.exports["_lessThanOrEqual"] = _NUMBER["lessThanOrEqual"];
module.exports["_greaterThanOrEqual"] = _NUMBER["greaterThanOrEqual"];
module.exports["_makeNumberFromString"] = _NUMBER['fromString'];
module.exports["string-to-number"] = stringToNumber;
