"use strict";
// Separate file is necessary to avoid cyclic imports
exports.__esModule = true;
var _NUMBER = require("./js-numbers.js");
var $PRowBrand = "row";
exports.$PRowBrand = $PRowBrand;
var $PTableBrand = "$table";
exports.$PTableBrand = $PTableBrand;
var $PTupleBrand = "tuple";
exports.$PTupleBrand = $PTupleBrand;
var $PRefBrand = "ref";
exports.$PRefBrand = $PRefBrand;
function PTuple(values) {
    values["$brand"] = $PTupleBrand;
    return values;
}
exports.PTuple = PTuple;
function isRow(val) {
    return (typeof val === "object") && ("$brand" in val) && (val["$brand"] === $PRowBrand);
}
exports.isRow = isRow;
function isTable(val) {
    return (typeof val === "object") && ("$brand" in val) && (val["$brand"] === $PTableBrand);
}
exports.isTable = isTable;
function isFunction(obj) {
    return (typeof obj === "function") && !(isMethod(obj));
}
exports.isFunction = isFunction;
function isMethod(obj) {
    return typeof obj === "function" && "$brand" in obj && obj["$brand"] === "METHOD";
}
exports.isMethod = isMethod;
// TODO(alex): Will nothing always be value 'undefined'?
function isNothing(obj) { return obj === undefined; }
exports.isNothing = isNothing;
;
exports.isNumber = _NUMBER["isPyretNumber"];
exports.isRoughNumber = _NUMBER["isRoughnum"];
function isBoolean(val) {
    return typeof val === "boolean";
}
exports.isBoolean = isBoolean;
function isString(val) {
    return typeof val === "string";
}
exports.isString = isString;
function isDataVariant(val) {
    return (typeof val === "object") && ("$brand" in val) && !(isPTuple(val)) && !(isTable(val)) && !(isRow(val));
}
exports.isDataVariant = isDataVariant;
function isRawObject(val) {
    return (typeof val === "object") && !("$brand" in val);
}
exports.isRawObject = isRawObject;
function isPTuple(val) {
    return (Array.isArray(val)) && ("$brand" in val) && (val["$brand"] === $PTupleBrand);
}
exports.isPTuple = isPTuple;
function isArray(val) {
    return (Array.isArray(val)) && !("$brand" in val);
}
exports.isArray = isArray;
function isPRef(val) {
    return (typeof val === "object") && ("$brand" in val) && (val["$brand"] === $PRefBrand);
}
exports.isPRef = isPRef;
