"use strict";
exports.__esModule = true;
var _NUMBER = require("./js-numbers.js");
var PRIMTIVES = require("./primitives.js");
var $EqualBrand = { "names": false };
var $NotEqualBrand = { "names": ["reason", "value1", "value2"] };
var $UnknownBrand = { "names": ["reason", "value1", "value2"] };
var $EqualTag = 0;
var $NotEqualTag = 1;
var $UnknownTag = 2;
function Equal() {
    return {
        "$brand": $EqualBrand,
        "$tag": $EqualTag
    };
}
exports.Equal = Equal;
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
var numericEquals = _NUMBER["equals"];
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
exports.NumberErrbacks = {
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
    if (PRIMTIVES.isFunction(v1) && PRIMTIVES.isFunction(v2)) {
        return Unknown("Function", v1, v2);
    }
    else if (PRIMTIVES.isMethod(v1) && PRIMTIVES.isMethod(v2)) {
        return Unknown("Method", v1, v2);
    }
    else if (PRIMTIVES.isRoughNumber(v1) && PRIMTIVES.isRoughNumber(v2)) {
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
function equalNow(v1, v2) {
    var ans = equalNow3(v1, v2);
    return equalityResultToBool(ans);
}
exports.equalNow = equalNow;
function equalNow3(v1, v2) {
    throw "Implement equalNow3";
}
exports.equalNow3 = equalNow3;
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
        if (PRIMTIVES.isNumber(v1) && PRIMTIVES.isNumber(v2)) {
            if (PRIMTIVES.isRoughNumber(v1) || PRIMTIVES.isRoughNumber(v2)) {
                return Unknown("Rough Number equal-always", v1, v2);
            }
            else if (numericEquals(v1, v2, exports.NumberErrbacks)) {
                continue;
            }
            else {
                return NotEqual("Numers", v1, v2);
            }
        }
        else if (PRIMTIVES.isBoolean(v1) && PRIMTIVES.isBoolean(v2)) {
            if (v1 !== v2) {
                return NotEqual("Booleans", v1, v2);
            }
            continue;
        }
        else if (PRIMTIVES.isString(v1) && PRIMTIVES.isString(v2)) {
            if (v1 !== v2) {
                return NotEqual("Strings", v1, v2);
            }
            continue;
        }
        else if (PRIMTIVES.isFunction(v1) && PRIMTIVES.isFunction(v2)) {
            // Cannot compare functions for equality
            return Unknown("Functions", v1, v2);
        }
        else if (PRIMTIVES.isMethod(v1) && PRIMTIVES.isMethod(v2)) {
            return Unknown("Methods", v1, v2);
        }
        else if (PRIMTIVES.isPTuple(v1) && PRIMTIVES.isPTuple(v2)) {
            if (v1.length !== v2.length) {
                return NotEqual("PTuple Length", v1, v2);
            }
            for (var i = 0; i < v1.length; i++) {
                worklist.push([v1[i], v2[i]]);
            }
            continue;
        }
        else if (PRIMTIVES.isArray(v1) && PRIMTIVES.isArray(v2)) {
            if (v1.length !== v2.length) {
                return NotEqual("Array Length", v1, v2);
            }
            for (var i = 0; i < v1.length; i++) {
                worklist.push([v1[i], v2[i]]);
            }
            continue;
        }
        else if (PRIMTIVES.isNothing(v1) && PRIMTIVES.isNothing(v2)) {
            // Equality is defined for 'nothing'
            // 'nothing' is always equal to 'nothing'
            continue;
        }
        else if (PRIMTIVES.isPRef(v1) && PRIMTIVES.isPRef(v2)) {
            // In equal-always, non-identical refs are not equal
            if (v1.ref !== v2.ref) {
                return NotEqual("PRef'd Objects", v1, v2);
            }
            continue;
        }
        else if (PRIMTIVES.isTable(v1) && PRIMTIVES.isTable(v2)) {
            var v1_headers = v1._headers;
            var v2_headers = v2._headers;
            if (v1_headers.length !== v2_headers.length) {
                return NotEqual("Row Header Length (" + v1_headers.length + ", " + v2_headers.length + ")", v1, v2);
            }
            if (v1._rows.length !== v2._rows.length) {
                return NotEqual("Row Length (" + v1._rows.length + ", " + v2._rows.length + ")", v1, v2);
            }
            // Check table headers
            for (var h = 0; h < v1_headers.length; h++) {
                if (v1_headers[h] !== v2_headers[h]) {
                    return NotEqual("Row headers (index " + h + ")", v1, v2);
                }
            }
            // Check row elements
            for (var row = 0; row < v1._rows.length; row++) {
                var v1_row = v1._rows[row];
                var v2_row = v2._rows[row];
                for (var i_1 = 0; i_1 < v1_row.length; i_1++) {
                    worklist.push([v1_row[i_1], v2_row[i_1]]);
                }
            }
            continue;
        }
        else if (PRIMTIVES.isRow(v1) && PRIMTIVES.isRow(v2)) {
            var v1_headers = v1._headers;
            var v2_headers = v2._headers;
            if (v1_headers.length !== v2_headers.length) {
                return NotEqual("Row Header Length (" + v1_headers.length + ", " + v2_headers.length + ")", v1, v2);
            }
            // TODO(alex): is this check necessary?
            if (v1._elements.length !== v2._elements.length) {
                return NotEqual("Row Elements Length (" + v1._elements.length + ", " + v1._elements.length + ")", v1, v2);
            }
            for (var i_2 = 0; i_2 < v1_headers.length; i_2++) {
                if (v1_headers[i_2] !== v2_headers[i_2]) {
                    return NotEqual("Row headers (index " + i_2 + ")", v1, v2);
                }
            }
            for (var i_3 = 0; i_3 < v1._elements.length; i_3++) {
                worklist.push([v1[i_3], v2[i_3]]);
            }
            continue;
        }
        else if (PRIMTIVES.isDataVariant(v1) && PRIMTIVES.isDataVariant(v2)) {
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
        else if (PRIMTIVES.isRawObject(v1) && PRIMTIVES.isRawObject(v2)) {
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
//fun equal-and(er1 :: EqualityResult, er2 :: EqualityResult):
//  ask:
//    | is-NotEqual(er1) then: er1
//    | is-NotEqual(er2) then: er2
//    | is-Unknown(er1) then: er1 #: i.e., the first Unknown
//    | otherwise: er2 # Equal or Equal/Equal or Unknown
//  end
//end
function equal_and(er1, er2) {
    if (isNotEqual(er1)) {
        return er1;
    }
    else if (isNotEqual(er2)) {
        return er2;
    }
    else if (isUnknown(er1)) {
        return er1;
    }
    else {
        return er2;
    }
}
exports.equal_and = equal_and;
//fun equal-or(er1 :: EqualityResult, er2 :: EqualityResult):
//  ask:
//    | is-Equal(er1) then: er1
//    | is-Equal(er2) then: er2
//    | is-Unknown(er1) then: er1 # i.e., the first Unknown
//    | otherwise: er2 # NotEqual or NotEqual/NotEqual or Unknown
//  end
//end
function equal_or(er1, er2) {
    if (isEqual(er1)) {
        return er1;
    }
    else if (isEqual(er2)) {
        return er2;
    }
    else if (isUnknown(er1)) {
        return er1;
    }
    else {
        return er2;
    }
}
exports.equal_or = equal_or;
//fun to-boolean(er :: EqualityResult):
//  cases(EqualityResult) er:
//    | Unknown(r, v1, v2) => raise(error.equality-failure(r, v1, v2))
//    | Equal => true
//    | NotEqual(_,_,_) => false
//  end
//end
function to_boolean(er) {
    if (isUnknown(er)) {
        // TODO(alex): Fill this in with the generic `raise` function
        //   CANNOT IMPORT "global.arr.js" OR "runtime.ts" directly b/c the circular depenency
        //   will mess with loading...
        throw "Unable to convert Unknown (EqualityResult) to boolean";
    }
    else {
        return isEqual(er);
    }
}
exports.to_boolean = to_boolean;
function withinRel(tolerance) {
    throw "Implement withinRel";
}
exports.withinRel = withinRel;
function withinAbs(tolerance) {
    throw "Implement withinAbs";
}
exports.withinAbs = withinAbs;
function withinRelNow(tolerance) {
    throw "Implement withinRelNow";
}
exports.withinRelNow = withinRelNow;
function withinAbsNow(tolerance) {
    throw "Implement withinAbsNow";
}
exports.withinAbsNow = withinAbsNow;
