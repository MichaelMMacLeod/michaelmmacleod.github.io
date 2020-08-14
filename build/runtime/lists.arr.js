var _runtime = require("./runtime.js");
var _global = require("./global.arr.js");
var _nothing = undefined;
var G109 = require("./global.arr.js");
_runtime["addModule"]("builtin://global",G109);
var O888 = require("./option.arr.js");
_runtime["addModule"]("builtin://option",O888);
var E889 = require("./either.arr.js");
_runtime["addModule"]("builtin://either",E889);
var equality523 = require("./equality.arr.js");
_runtime["addModule"]("builtin://equality",equality523);
var RA179 = require("./raw-array.arr.js");
_runtime["addModule"]("builtin://raw-array",RA179);
var raise4 = _runtime["getModuleValue"]("builtin://global","raise");
var tostring5 = _runtime["getModuleValue"]("builtin://global","num-to-string");
var none38 = _runtime["getModuleValue"]("builtin://option","none");
var some44 = _runtime["getModuleValue"]("builtin://option","some");
var nothing52 = _runtime["getModuleValue"]("builtin://global","nothing");
var identical3532 = _runtime["getModuleValue"]("builtin://global","identical3");
var equal$always3552 = _runtime["getModuleValue"]("builtin://global","equal-always3");
var num$max806 = _runtime["getModuleValue"]("builtin://global","num-max");
var num$ceiling807 = _runtime["getModuleValue"]("builtin://global","num-ceiling");
var $empty376 = {"names":false};
var $link377 = {"names":["first","rest"]};
var $constructorTMP393 = {"$brand":$empty376,
"$tag":0};
function $binder_plus306(self303) {
var $inner307 = function inner_plus(other304) {
return self303["append"](other304);
};
$inner307["$brand"] = "METHOD";
$inner307["$binder"] = $binder_plus306;
return $inner307;
};
$constructorTMP393["_plus"] = $binder_plus306($constructorTMP393);
function $binderall238(self231) {
var $inner239 = function innerall(f234) {
var cases232 = self231;
var $ans233 = undefined;
switch(cases232.$tag) {
case 0: $ans233 = true;
break;
case 1: var first235 = cases232["first"];
var rest236 = cases232["rest"];
$ans233 = f234(first235) && rest236["all"](f234);
break;
default: $ans233 = _global["throwNoCasesMatched"](["builtin://lists",143,4,5362,146,7,5463],cases232);
}
return $ans233;
};
$inner239["$brand"] = "METHOD";
$inner239["$binder"] = $binderall238;
return $inner239;
};
$constructorTMP393["all"] = $binderall238($constructorTMP393);
function $binderany247(self240) {
var $inner248 = function innerany(f243) {
var cases241 = self240;
var $ans242 = undefined;
switch(cases241.$tag) {
case 0: $ans242 = false;
break;
case 1: var first244 = cases241["first"];
var rest245 = cases241["rest"];
$ans242 = f243(first244) || rest245["any"](f243);
break;
default: $ans242 = _global["throwNoCasesMatched"](["builtin://lists",151,4,5616,155,7,5725],cases241);
}
return $ans242;
};
$inner248["$brand"] = "METHOD";
$inner248["$binder"] = $binderany247;
return $inner248;
};
$constructorTMP393["any"] = $binderany247($constructorTMP393);
function $binderappend256(self249) {
var $inner257 = function innerappend(other252) {
var cases250 = self249;
var $ans251 = undefined;
switch(cases250.$tag) {
case 0: $ans251 = other252;
break;
case 1: var first253 = cases250["first"];
var rest254 = cases250["rest"];
$ans251 = link9(first253,rest254["append"](other252));
break;
default: $ans251 = _global["throwNoCasesMatched"](["builtin://lists",160,4,5878,164,7,5995],cases250);
}
return $ans251;
};
$inner257["$brand"] = "METHOD";
$inner257["$binder"] = $binderappend256;
return $inner257;
};
$constructorTMP393["append"] = $binderappend256($constructorTMP393);
function $binderdrop345(self343) {
var $inner346 = function innerdrop(n342) {
return split$at124(n342,self343)["suffix"];
};
$inner346["$brand"] = "METHOD";
$inner346["$binder"] = $binderdrop345;
return $inner346;
};
$constructorTMP393["drop"] = $binderdrop345($constructorTMP393);
function $bindereach321(self319) {
var $inner322 = function innereach(f318) {
return each93(f318,self319);
};
$inner322["$brand"] = "METHOD";
$inner322["$binder"] = $bindereach321;
return $inner322;
};
$constructorTMP393["each"] = $bindereach321($constructorTMP393);
function $binderfilter316(self314) {
var $inner317 = function innerfilter(f313) {
return filter131(f313,self314);
};
$inner317["$brand"] = "METHOD";
$inner317["$binder"] = $binderfilter316;
return $inner317;
};
$constructorTMP393["filter"] = $binderfilter316($constructorTMP393);
function $binderfind381(self378) {
var $inner382 = function innerfind(f379) {
return none38;
};
$inner382["$brand"] = "METHOD";
$inner382["$binder"] = $binderfind381;
return $inner382;
};
$constructorTMP393["find"] = $binderfind381($constructorTMP393);
function $binderfoldl229(self221) {
var $inner230 = function innerfoldl(f226,base224) {
var cases222 = self221;
var $ans223 = undefined;
switch(cases222.$tag) {
case 0: $ans223 = base224;
break;
case 1: var first227 = cases222["first"];
var rest225 = cases222["rest"];
$ans223 = rest225["foldl"](f226,f226(first227,base224));
break;
default: $ans223 = _global["throwNoCasesMatched"](["builtin://lists",135,4,5101,138,7,5207],cases222);
}
return $ans223;
};
$inner230["$brand"] = "METHOD";
$inner230["$binder"] = $binderfoldl229;
return $inner230;
};
$constructorTMP393["foldl"] = $binderfoldl229($constructorTMP393);
function $binderfoldr219(self211) {
var $inner220 = function innerfoldr(f215,base214) {
var cases212 = self211;
var $ans213 = undefined;
switch(cases212.$tag) {
case 0: $ans213 = base214;
break;
case 1: var first216 = cases212["first"];
var rest217 = cases212["rest"];
$ans213 = f215(first216,rest217["foldr"](f215,base214));
break;
default: $ans213 = _global["throwNoCasesMatched"](["builtin://lists",126,4,4774,129,7,4880],cases212);
}
return $ans213;
};
$inner220["$brand"] = "METHOD";
$inner220["$binder"] = $binderfoldr219;
return $inner220;
};
$constructorTMP393["foldr"] = $binderfoldr219($constructorTMP393);
function $binderget350(self347) {
var $inner351 = function innerget(n348) {
return get34(self347,n348);
};
$inner351["$brand"] = "METHOD";
$inner351["$binder"] = $binderget350;
return $inner351;
};
$constructorTMP393["get"] = $binderget350($constructorTMP393);
function $binderhead264(self258) {
var $inner265 = function innerhead() {
var cases259 = self258;
var $ans260 = undefined;
switch(cases259.$tag) {
case 0: $ans260 = raise4("head: empty list");
break;
case 1: var head261 = cases259["first"];
var $underscore262 = cases259["rest"];
$ans260 = head261;
break;
default: $ans260 = _global["throwNoCasesMatched"](["builtin://lists",168,4,6034,171,7,6132],cases259);
}
return $ans260;
};
$inner265["$brand"] = "METHOD";
$inner265["$binder"] = $binderhead264;
return $inner265;
};
$constructorTMP393["head"] = $binderhead264($constructorTMP393);
function $binderjoin$str366(self363) {
var $inner367 = function innerjoin$str(sep364) {
return join$str165(self363,sep364);
};
$inner367["$brand"] = "METHOD";
$inner367["$binder"] = $binderjoin$str366;
return $inner367;
};
$constructorTMP393["join-str"] = $binderjoin$str366($constructorTMP393);
function $binderjoin$str$last372(self368) {
var $inner373 = function innerjoin$str$last(sep369,last$sep370) {
return join$str$last155(self368,sep369,last$sep370);
};
$inner373["$brand"] = "METHOD";
$inner373["$binder"] = $binderjoin$str$last372;
return $inner373;
};
$constructorTMP393["join-str-last"] = $binderjoin$str$last372($constructorTMP393);
function $binderlast281(self274) {
var $inner282 = function innerlast() {
var cases275 = self274;
var $ans276 = undefined;
switch(cases275.$tag) {
case 0: $ans276 = raise4("last: took last of empty list");
break;
case 1: var first279 = cases275["first"];
var rest278 = cases275["rest"];
var $ans277 = undefined;
if(is$empty192(rest278)) {
$ans277 = self274["first"]} else {
$ans277 = rest278["last"]()}
$ans276 = $ans277;
break;
default: $ans276 = _global["throwNoCasesMatched"](["builtin://lists",183,4,6404,194,7,6620],cases275);
}
return $ans276;
};
$inner282["$brand"] = "METHOD";
$inner282["$binder"] = $binderlast281;
return $inner282;
};
$constructorTMP393["last"] = $binderlast281($constructorTMP393);
function $binderlength200(self194) {
var $inner201 = function innerlength() {
var cases195 = self194;
var $ans196 = undefined;
switch(cases195.$tag) {
case 0: $ans196 = (0);
break;
case 1: var first198 = cases195["first"];
var rest197 = cases195["rest"];
$ans196 = _runtime["_add"]((1),rest197["length"](),_runtime["_errCallbacks"]);
break;
default: $ans196 = _global["throwNoCasesMatched"](["builtin://lists",109,4,4210,112,7,4301],cases195);
}
return $ans196;
};
$inner201["$brand"] = "METHOD";
$inner201["$binder"] = $binderlength200;
return $inner201;
};
$constructorTMP393["length"] = $binderlength200($constructorTMP393);
function $bindermap311(self309) {
var $inner312 = function innermap(f308) {
return map84(f308,self309);
};
$inner312["$brand"] = "METHOD";
$inner312["$binder"] = $bindermap311;
return $inner312;
};
$constructorTMP393["map"] = $bindermap311($constructorTMP393);
function $bindermember209(self202) {
var $inner210 = function innermember(elt205) {
var cases203 = self202;
var $ans204 = undefined;
switch(cases203.$tag) {
case 0: $ans204 = false;
break;
case 1: var first206 = cases203["first"];
var rest207 = cases203["rest"];
$ans204 = _runtime["equal-always"](elt205,first206) || rest207["member"](elt205);
break;
default: $ans204 = _global["throwNoCasesMatched"](["builtin://lists",117,4,4439,120,7,4552],cases203);
}
return $ans204;
};
$inner210["$brand"] = "METHOD";
$inner210["$binder"] = $bindermember209;
return $inner210;
};
$constructorTMP393["member"] = $bindermember209($constructorTMP393);
function $binderpartition387(self384) {
var $inner388 = function innerpartition(f385) {
var $temporary383 = {"is-true":empty46,
"is-false":empty46};
return $temporary383;
};
$inner388["$brand"] = "METHOD";
$inner388["$binder"] = $binderpartition387;
return $inner388;
};
$constructorTMP393["partition"] = $binderpartition387($constructorTMP393);
function $binderpush330(self328) {
var $inner331 = function innerpush(elt327) {
return link9(elt327,self328);
};
$inner331["$brand"] = "METHOD";
$inner331["$binder"] = $binderpush330;
return $inner331;
};
$constructorTMP393["push"] = $binderpush330($constructorTMP393);
function $binderremove361(self358) {
var $inner362 = function innerremove(e359) {
return remove137(self358,e359);
};
$inner362["$brand"] = "METHOD";
$inner362["$binder"] = $binderremove361;
return $inner362;
};
$constructorTMP393["remove"] = $binderremove361($constructorTMP393);
function $binderreverse325(self323) {
var $inner326 = function innerreverse() {
return reverse98(self323);
};
$inner326["$brand"] = "METHOD";
$inner326["$binder"] = $binderreverse325;
return $inner326;
};
$constructorTMP393["reverse"] = $binderreverse325($constructorTMP393);
function $binderset356(self352) {
var $inner357 = function innerset(n353,e354) {
return function$set21(self352,n353,e354);
};
$inner357["$brand"] = "METHOD";
$inner357["$binder"] = $binderset356;
return $inner357;
};
$constructorTMP393["set"] = $binderset356($constructorTMP393);
function $bindersort391(self389) {
var $inner392 = function innersort() {
return self389;
};
$inner392["$brand"] = "METHOD";
$inner392["$binder"] = $bindersort391;
return $inner392;
};
$constructorTMP393["sort"] = $bindersort391($constructorTMP393);
function $bindersort$by301(self283) {
var $inner302 = function innersort$by(cmp295,eq294) {
var cases284 = self283;
var $ans285 = undefined;
switch(cases284.$tag) {
case 0: $ans285 = self283;
break;
case 1: var first289 = cases284["first"];
var $underscore299 = cases284["rest"];
var pivot290 = first289;
var are$lt288 = empty46;
var are$eq287 = empty46;
var are$gt286 = empty46;
self283["each"](function (e293) {
var $ans291 = undefined;
if(cmp295(e293,pivot290)) {
$ans291 = are$lt288 = link9(e293,are$lt288)} else {
var $ans292 = undefined;
if(eq294(e293,pivot290)) {
$ans292 = are$eq287 = link9(e293,are$eq287)} else {
$ans292 = are$gt286 = link9(e293,are$gt286)}
$ans291 = $ans292}
return $ans291;
});
var less298 = are$lt288["sort-by"](cmp295,eq294);
var equal297 = are$eq287;
var greater296 = are$gt286["sort-by"](cmp295,eq294);
$ans285 = less298["append"](equal297["append"](greater296));
break;
default: $ans285 = _global["throwNoCasesMatched"](["builtin://lists",201,4,6982,233,7,8214],cases284);
}
return $ans285;
};
$inner302["$brand"] = "METHOD";
$inner302["$binder"] = $bindersort$by301;
return $inner302;
};
$constructorTMP393["sort-by"] = $bindersort$by301($constructorTMP393);
function $bindersplit$at335(self333) {
var $inner336 = function innersplit$at(n332) {
return split$at124(n332,self333);
};
$inner336["$brand"] = "METHOD";
$inner336["$binder"] = $bindersplit$at335;
return $inner336;
};
$constructorTMP393["split-at"] = $bindersplit$at335($constructorTMP393);
function $bindertail272(self266) {
var $inner273 = function innertail() {
var cases267 = self266;
var $ans268 = undefined;
switch(cases267.$tag) {
case 0: $ans268 = raise4("tail: empty list");
break;
case 1: var $underscore270 = cases267["first"];
var tail269 = cases267["rest"];
$ans268 = tail269;
break;
default: $ans268 = _global["throwNoCasesMatched"](["builtin://lists",175,4,6177,178,7,6275],cases267);
}
return $ans268;
};
$inner273["$brand"] = "METHOD";
$inner273["$binder"] = $bindertail272;
return $inner273;
};
$constructorTMP393["tail"] = $bindertail272($constructorTMP393);
function $bindertake340(self338) {
var $inner341 = function innertake(n337) {
return split$at124(n337,self338)["prefix"];
};
$inner341["$brand"] = "METHOD";
$inner341["$binder"] = $bindertake340;
return $inner341;
};
$constructorTMP393["take"] = $bindertake340($constructorTMP393);
function $binderlength200(self194) {
var $inner201 = function innerlength() {
var cases195 = self194;
var $ans196 = undefined;
switch(cases195.$tag) {
case 0: $ans196 = (0);
break;
case 1: var first198 = cases195["first"];
var rest197 = cases195["rest"];
$ans196 = _runtime["_add"]((1),rest197["length"](),_runtime["_errCallbacks"]);
break;
default: $ans196 = _global["throwNoCasesMatched"](["builtin://lists",109,4,4210,112,7,4301],cases195);
}
return $ans196;
};
$inner201["$brand"] = "METHOD";
$inner201["$binder"] = $binderlength200;
return $inner201;
};
function $bindermember209(self202) {
var $inner210 = function innermember(elt205) {
var cases203 = self202;
var $ans204 = undefined;
switch(cases203.$tag) {
case 0: $ans204 = false;
break;
case 1: var first206 = cases203["first"];
var rest207 = cases203["rest"];
$ans204 = _runtime["equal-always"](elt205,first206) || rest207["member"](elt205);
break;
default: $ans204 = _global["throwNoCasesMatched"](["builtin://lists",117,4,4439,120,7,4552],cases203);
}
return $ans204;
};
$inner210["$brand"] = "METHOD";
$inner210["$binder"] = $bindermember209;
return $inner210;
};
function $binderfoldr219(self211) {
var $inner220 = function innerfoldr(f215,base214) {
var cases212 = self211;
var $ans213 = undefined;
switch(cases212.$tag) {
case 0: $ans213 = base214;
break;
case 1: var first216 = cases212["first"];
var rest217 = cases212["rest"];
$ans213 = f215(first216,rest217["foldr"](f215,base214));
break;
default: $ans213 = _global["throwNoCasesMatched"](["builtin://lists",126,4,4774,129,7,4880],cases212);
}
return $ans213;
};
$inner220["$brand"] = "METHOD";
$inner220["$binder"] = $binderfoldr219;
return $inner220;
};
function $binderfoldl229(self221) {
var $inner230 = function innerfoldl(f226,base224) {
var cases222 = self221;
var $ans223 = undefined;
switch(cases222.$tag) {
case 0: $ans223 = base224;
break;
case 1: var first227 = cases222["first"];
var rest225 = cases222["rest"];
$ans223 = rest225["foldl"](f226,f226(first227,base224));
break;
default: $ans223 = _global["throwNoCasesMatched"](["builtin://lists",135,4,5101,138,7,5207],cases222);
}
return $ans223;
};
$inner230["$brand"] = "METHOD";
$inner230["$binder"] = $binderfoldl229;
return $inner230;
};
function $binderall238(self231) {
var $inner239 = function innerall(f234) {
var cases232 = self231;
var $ans233 = undefined;
switch(cases232.$tag) {
case 0: $ans233 = true;
break;
case 1: var first235 = cases232["first"];
var rest236 = cases232["rest"];
$ans233 = f234(first235) && rest236["all"](f234);
break;
default: $ans233 = _global["throwNoCasesMatched"](["builtin://lists",143,4,5362,146,7,5463],cases232);
}
return $ans233;
};
$inner239["$brand"] = "METHOD";
$inner239["$binder"] = $binderall238;
return $inner239;
};
function $binderany247(self240) {
var $inner248 = function innerany(f243) {
var cases241 = self240;
var $ans242 = undefined;
switch(cases241.$tag) {
case 0: $ans242 = false;
break;
case 1: var first244 = cases241["first"];
var rest245 = cases241["rest"];
$ans242 = f243(first244) || rest245["any"](f243);
break;
default: $ans242 = _global["throwNoCasesMatched"](["builtin://lists",151,4,5616,155,7,5725],cases241);
}
return $ans242;
};
$inner248["$brand"] = "METHOD";
$inner248["$binder"] = $binderany247;
return $inner248;
};
function $binderappend256(self249) {
var $inner257 = function innerappend(other252) {
var cases250 = self249;
var $ans251 = undefined;
switch(cases250.$tag) {
case 0: $ans251 = other252;
break;
case 1: var first253 = cases250["first"];
var rest254 = cases250["rest"];
$ans251 = link9(first253,rest254["append"](other252));
break;
default: $ans251 = _global["throwNoCasesMatched"](["builtin://lists",160,4,5878,164,7,5995],cases250);
}
return $ans251;
};
$inner257["$brand"] = "METHOD";
$inner257["$binder"] = $binderappend256;
return $inner257;
};
function $binderhead264(self258) {
var $inner265 = function innerhead() {
var cases259 = self258;
var $ans260 = undefined;
switch(cases259.$tag) {
case 0: $ans260 = raise4("head: empty list");
break;
case 1: var head261 = cases259["first"];
var $underscore262 = cases259["rest"];
$ans260 = head261;
break;
default: $ans260 = _global["throwNoCasesMatched"](["builtin://lists",168,4,6034,171,7,6132],cases259);
}
return $ans260;
};
$inner265["$brand"] = "METHOD";
$inner265["$binder"] = $binderhead264;
return $inner265;
};
function $bindertail272(self266) {
var $inner273 = function innertail() {
var cases267 = self266;
var $ans268 = undefined;
switch(cases267.$tag) {
case 0: $ans268 = raise4("tail: empty list");
break;
case 1: var $underscore270 = cases267["first"];
var tail269 = cases267["rest"];
$ans268 = tail269;
break;
default: $ans268 = _global["throwNoCasesMatched"](["builtin://lists",175,4,6177,178,7,6275],cases267);
}
return $ans268;
};
$inner273["$brand"] = "METHOD";
$inner273["$binder"] = $bindertail272;
return $inner273;
};
function $binderlast281(self274) {
var $inner282 = function innerlast() {
var cases275 = self274;
var $ans276 = undefined;
switch(cases275.$tag) {
case 0: $ans276 = raise4("last: took last of empty list");
break;
case 1: var first279 = cases275["first"];
var rest278 = cases275["rest"];
var $ans277 = undefined;
if(is$empty192(rest278)) {
$ans277 = self274["first"]} else {
$ans277 = rest278["last"]()}
$ans276 = $ans277;
break;
default: $ans276 = _global["throwNoCasesMatched"](["builtin://lists",183,4,6404,194,7,6620],cases275);
}
return $ans276;
};
$inner282["$brand"] = "METHOD";
$inner282["$binder"] = $binderlast281;
return $inner282;
};
function $bindersort$by301(self283) {
var $inner302 = function innersort$by(cmp295,eq294) {
var cases284 = self283;
var $ans285 = undefined;
switch(cases284.$tag) {
case 0: $ans285 = self283;
break;
case 1: var first289 = cases284["first"];
var $underscore299 = cases284["rest"];
var pivot290 = first289;
var are$lt288 = empty46;
var are$eq287 = empty46;
var are$gt286 = empty46;
self283["each"](function (e293) {
var $ans291 = undefined;
if(cmp295(e293,pivot290)) {
$ans291 = are$lt288 = link9(e293,are$lt288)} else {
var $ans292 = undefined;
if(eq294(e293,pivot290)) {
$ans292 = are$eq287 = link9(e293,are$eq287)} else {
$ans292 = are$gt286 = link9(e293,are$gt286)}
$ans291 = $ans292}
return $ans291;
});
var less298 = are$lt288["sort-by"](cmp295,eq294);
var equal297 = are$eq287;
var greater296 = are$gt286["sort-by"](cmp295,eq294);
$ans285 = less298["append"](equal297["append"](greater296));
break;
default: $ans285 = _global["throwNoCasesMatched"](["builtin://lists",201,4,6982,233,7,8214],cases284);
}
return $ans285;
};
$inner302["$brand"] = "METHOD";
$inner302["$binder"] = $bindersort$by301;
return $inner302;
};
function $binder_plus306(self303) {
var $inner307 = function inner_plus(other304) {
return self303["append"](other304);
};
$inner307["$brand"] = "METHOD";
$inner307["$binder"] = $binder_plus306;
return $inner307;
};
function $bindermap311(self309) {
var $inner312 = function innermap(f308) {
return map84(f308,self309);
};
$inner312["$brand"] = "METHOD";
$inner312["$binder"] = $bindermap311;
return $inner312;
};
function $binderfilter316(self314) {
var $inner317 = function innerfilter(f313) {
return filter131(f313,self314);
};
$inner317["$brand"] = "METHOD";
$inner317["$binder"] = $binderfilter316;
return $inner317;
};
function $bindereach321(self319) {
var $inner322 = function innereach(f318) {
return each93(f318,self319);
};
$inner322["$brand"] = "METHOD";
$inner322["$binder"] = $bindereach321;
return $inner322;
};
function $binderreverse325(self323) {
var $inner326 = function innerreverse() {
return reverse98(self323);
};
$inner326["$brand"] = "METHOD";
$inner326["$binder"] = $binderreverse325;
return $inner326;
};
function $binderpush330(self328) {
var $inner331 = function innerpush(elt327) {
return link9(elt327,self328);
};
$inner331["$brand"] = "METHOD";
$inner331["$binder"] = $binderpush330;
return $inner331;
};
function $bindersplit$at335(self333) {
var $inner336 = function innersplit$at(n332) {
return split$at124(n332,self333);
};
$inner336["$brand"] = "METHOD";
$inner336["$binder"] = $bindersplit$at335;
return $inner336;
};
function $bindertake340(self338) {
var $inner341 = function innertake(n337) {
return split$at124(n337,self338)["prefix"];
};
$inner341["$brand"] = "METHOD";
$inner341["$binder"] = $bindertake340;
return $inner341;
};
function $binderdrop345(self343) {
var $inner346 = function innerdrop(n342) {
return split$at124(n342,self343)["suffix"];
};
$inner346["$brand"] = "METHOD";
$inner346["$binder"] = $binderdrop345;
return $inner346;
};
function $binderget350(self347) {
var $inner351 = function innerget(n348) {
return get34(self347,n348);
};
$inner351["$brand"] = "METHOD";
$inner351["$binder"] = $binderget350;
return $inner351;
};
function $binderset356(self352) {
var $inner357 = function innerset(n353,e354) {
return function$set21(self352,n353,e354);
};
$inner357["$brand"] = "METHOD";
$inner357["$binder"] = $binderset356;
return $inner357;
};
function $binderremove361(self358) {
var $inner362 = function innerremove(e359) {
return remove137(self358,e359);
};
$inner362["$brand"] = "METHOD";
$inner362["$binder"] = $binderremove361;
return $inner362;
};
function $binderjoin$str366(self363) {
var $inner367 = function innerjoin$str(sep364) {
return join$str165(self363,sep364);
};
$inner367["$brand"] = "METHOD";
$inner367["$binder"] = $binderjoin$str366;
return $inner367;
};
function $binderjoin$str$last372(self368) {
var $inner373 = function innerjoin$str$last(sep369,last$sep370) {
return join$str$last155(self368,sep369,last$sep370);
};
$inner373["$brand"] = "METHOD";
$inner373["$binder"] = $binderjoin$str$last372;
return $inner373;
};
var List190 = {"empty":$constructorTMP393,
"link":function link(first405,rest406) {
var $constructorTMP407 = {"$brand":$link377,
"$tag":1,
"first":first405,
"rest":rest406};
function $binder_plus306(self303) {
var $inner307 = function inner_plus(other304) {
return self303["append"](other304);
};
$inner307["$brand"] = "METHOD";
$inner307["$binder"] = $binder_plus306;
return $inner307;
};
$constructorTMP407["_plus"] = $binder_plus306($constructorTMP407);
function $binderall238(self231) {
var $inner239 = function innerall(f234) {
var cases232 = self231;
var $ans233 = undefined;
switch(cases232.$tag) {
case 0: $ans233 = true;
break;
case 1: var first235 = cases232["first"];
var rest236 = cases232["rest"];
$ans233 = f234(first235) && rest236["all"](f234);
break;
default: $ans233 = _global["throwNoCasesMatched"](["builtin://lists",143,4,5362,146,7,5463],cases232);
}
return $ans233;
};
$inner239["$brand"] = "METHOD";
$inner239["$binder"] = $binderall238;
return $inner239;
};
$constructorTMP407["all"] = $binderall238($constructorTMP407);
function $binderany247(self240) {
var $inner248 = function innerany(f243) {
var cases241 = self240;
var $ans242 = undefined;
switch(cases241.$tag) {
case 0: $ans242 = false;
break;
case 1: var first244 = cases241["first"];
var rest245 = cases241["rest"];
$ans242 = f243(first244) || rest245["any"](f243);
break;
default: $ans242 = _global["throwNoCasesMatched"](["builtin://lists",151,4,5616,155,7,5725],cases241);
}
return $ans242;
};
$inner248["$brand"] = "METHOD";
$inner248["$binder"] = $binderany247;
return $inner248;
};
$constructorTMP407["any"] = $binderany247($constructorTMP407);
function $binderappend256(self249) {
var $inner257 = function innerappend(other252) {
var cases250 = self249;
var $ans251 = undefined;
switch(cases250.$tag) {
case 0: $ans251 = other252;
break;
case 1: var first253 = cases250["first"];
var rest254 = cases250["rest"];
$ans251 = link9(first253,rest254["append"](other252));
break;
default: $ans251 = _global["throwNoCasesMatched"](["builtin://lists",160,4,5878,164,7,5995],cases250);
}
return $ans251;
};
$inner257["$brand"] = "METHOD";
$inner257["$binder"] = $binderappend256;
return $inner257;
};
$constructorTMP407["append"] = $binderappend256($constructorTMP407);
function $binderdrop345(self343) {
var $inner346 = function innerdrop(n342) {
return split$at124(n342,self343)["suffix"];
};
$inner346["$brand"] = "METHOD";
$inner346["$binder"] = $binderdrop345;
return $inner346;
};
$constructorTMP407["drop"] = $binderdrop345($constructorTMP407);
function $bindereach321(self319) {
var $inner322 = function innereach(f318) {
return each93(f318,self319);
};
$inner322["$brand"] = "METHOD";
$inner322["$binder"] = $bindereach321;
return $inner322;
};
$constructorTMP407["each"] = $bindereach321($constructorTMP407);
function $binderfilter316(self314) {
var $inner317 = function innerfilter(f313) {
return filter131(f313,self314);
};
$inner317["$brand"] = "METHOD";
$inner317["$binder"] = $binderfilter316;
return $inner317;
};
$constructorTMP407["filter"] = $binderfilter316($constructorTMP407);
function $binderfind400(self399) {
var $inner401 = function innerfind(f398) {
return find40(f398,self399);
};
$inner401["$brand"] = "METHOD";
$inner401["$binder"] = $binderfind400;
return $inner401;
};
$constructorTMP407["find"] = $binderfind400($constructorTMP407);
function $binderfoldl229(self221) {
var $inner230 = function innerfoldl(f226,base224) {
var cases222 = self221;
var $ans223 = undefined;
switch(cases222.$tag) {
case 0: $ans223 = base224;
break;
case 1: var first227 = cases222["first"];
var rest225 = cases222["rest"];
$ans223 = rest225["foldl"](f226,f226(first227,base224));
break;
default: $ans223 = _global["throwNoCasesMatched"](["builtin://lists",135,4,5101,138,7,5207],cases222);
}
return $ans223;
};
$inner230["$brand"] = "METHOD";
$inner230["$binder"] = $binderfoldl229;
return $inner230;
};
$constructorTMP407["foldl"] = $binderfoldl229($constructorTMP407);
function $binderfoldr219(self211) {
var $inner220 = function innerfoldr(f215,base214) {
var cases212 = self211;
var $ans213 = undefined;
switch(cases212.$tag) {
case 0: $ans213 = base214;
break;
case 1: var first216 = cases212["first"];
var rest217 = cases212["rest"];
$ans213 = f215(first216,rest217["foldr"](f215,base214));
break;
default: $ans213 = _global["throwNoCasesMatched"](["builtin://lists",126,4,4774,129,7,4880],cases212);
}
return $ans213;
};
$inner220["$brand"] = "METHOD";
$inner220["$binder"] = $binderfoldr219;
return $inner220;
};
$constructorTMP407["foldr"] = $binderfoldr219($constructorTMP407);
function $binderget350(self347) {
var $inner351 = function innerget(n348) {
return get34(self347,n348);
};
$inner351["$brand"] = "METHOD";
$inner351["$binder"] = $binderget350;
return $inner351;
};
$constructorTMP407["get"] = $binderget350($constructorTMP407);
function $binderhead264(self258) {
var $inner265 = function innerhead() {
var cases259 = self258;
var $ans260 = undefined;
switch(cases259.$tag) {
case 0: $ans260 = raise4("head: empty list");
break;
case 1: var head261 = cases259["first"];
var $underscore262 = cases259["rest"];
$ans260 = head261;
break;
default: $ans260 = _global["throwNoCasesMatched"](["builtin://lists",168,4,6034,171,7,6132],cases259);
}
return $ans260;
};
$inner265["$brand"] = "METHOD";
$inner265["$binder"] = $binderhead264;
return $inner265;
};
$constructorTMP407["head"] = $binderhead264($constructorTMP407);
function $binderjoin$str366(self363) {
var $inner367 = function innerjoin$str(sep364) {
return join$str165(self363,sep364);
};
$inner367["$brand"] = "METHOD";
$inner367["$binder"] = $binderjoin$str366;
return $inner367;
};
$constructorTMP407["join-str"] = $binderjoin$str366($constructorTMP407);
function $binderjoin$str$last372(self368) {
var $inner373 = function innerjoin$str$last(sep369,last$sep370) {
return join$str$last155(self368,sep369,last$sep370);
};
$inner373["$brand"] = "METHOD";
$inner373["$binder"] = $binderjoin$str$last372;
return $inner373;
};
$constructorTMP407["join-str-last"] = $binderjoin$str$last372($constructorTMP407);
function $binderlast281(self274) {
var $inner282 = function innerlast() {
var cases275 = self274;
var $ans276 = undefined;
switch(cases275.$tag) {
case 0: $ans276 = raise4("last: took last of empty list");
break;
case 1: var first279 = cases275["first"];
var rest278 = cases275["rest"];
var $ans277 = undefined;
if(is$empty192(rest278)) {
$ans277 = self274["first"]} else {
$ans277 = rest278["last"]()}
$ans276 = $ans277;
break;
default: $ans276 = _global["throwNoCasesMatched"](["builtin://lists",183,4,6404,194,7,6620],cases275);
}
return $ans276;
};
$inner282["$brand"] = "METHOD";
$inner282["$binder"] = $binderlast281;
return $inner282;
};
$constructorTMP407["last"] = $binderlast281($constructorTMP407);
function $binderlength200(self194) {
var $inner201 = function innerlength() {
var cases195 = self194;
var $ans196 = undefined;
switch(cases195.$tag) {
case 0: $ans196 = (0);
break;
case 1: var first198 = cases195["first"];
var rest197 = cases195["rest"];
$ans196 = _runtime["_add"]((1),rest197["length"](),_runtime["_errCallbacks"]);
break;
default: $ans196 = _global["throwNoCasesMatched"](["builtin://lists",109,4,4210,112,7,4301],cases195);
}
return $ans196;
};
$inner201["$brand"] = "METHOD";
$inner201["$binder"] = $binderlength200;
return $inner201;
};
$constructorTMP407["length"] = $binderlength200($constructorTMP407);
function $bindermap311(self309) {
var $inner312 = function innermap(f308) {
return map84(f308,self309);
};
$inner312["$brand"] = "METHOD";
$inner312["$binder"] = $bindermap311;
return $inner312;
};
$constructorTMP407["map"] = $bindermap311($constructorTMP407);
function $bindermember209(self202) {
var $inner210 = function innermember(elt205) {
var cases203 = self202;
var $ans204 = undefined;
switch(cases203.$tag) {
case 0: $ans204 = false;
break;
case 1: var first206 = cases203["first"];
var rest207 = cases203["rest"];
$ans204 = _runtime["equal-always"](elt205,first206) || rest207["member"](elt205);
break;
default: $ans204 = _global["throwNoCasesMatched"](["builtin://lists",117,4,4439,120,7,4552],cases203);
}
return $ans204;
};
$inner210["$brand"] = "METHOD";
$inner210["$binder"] = $bindermember209;
return $inner210;
};
$constructorTMP407["member"] = $bindermember209($constructorTMP407);
function $binderpartition396(self395) {
var $inner397 = function innerpartition(f394) {
return partition63(f394,self395);
};
$inner397["$brand"] = "METHOD";
$inner397["$binder"] = $binderpartition396;
return $inner397;
};
$constructorTMP407["partition"] = $binderpartition396($constructorTMP407);
function $binderpush330(self328) {
var $inner331 = function innerpush(elt327) {
return link9(elt327,self328);
};
$inner331["$brand"] = "METHOD";
$inner331["$binder"] = $binderpush330;
return $inner331;
};
$constructorTMP407["push"] = $binderpush330($constructorTMP407);
function $binderremove361(self358) {
var $inner362 = function innerremove(e359) {
return remove137(self358,e359);
};
$inner362["$brand"] = "METHOD";
$inner362["$binder"] = $binderremove361;
return $inner362;
};
$constructorTMP407["remove"] = $binderremove361($constructorTMP407);
function $binderreverse325(self323) {
var $inner326 = function innerreverse() {
return reverse98(self323);
};
$inner326["$brand"] = "METHOD";
$inner326["$binder"] = $binderreverse325;
return $inner326;
};
$constructorTMP407["reverse"] = $binderreverse325($constructorTMP407);
function $binderset356(self352) {
var $inner357 = function innerset(n353,e354) {
return function$set21(self352,n353,e354);
};
$inner357["$brand"] = "METHOD";
$inner357["$binder"] = $binderset356;
return $inner357;
};
$constructorTMP407["set"] = $binderset356($constructorTMP407);
function $bindersort403(self402) {
var $inner404 = function innersort() {
return raise4("TODO: fix typechecker / ordering to implement sort()");
};
$inner404["$brand"] = "METHOD";
$inner404["$binder"] = $bindersort403;
return $inner404;
};
$constructorTMP407["sort"] = $bindersort403($constructorTMP407);
function $bindersort$by301(self283) {
var $inner302 = function innersort$by(cmp295,eq294) {
var cases284 = self283;
var $ans285 = undefined;
switch(cases284.$tag) {
case 0: $ans285 = self283;
break;
case 1: var first289 = cases284["first"];
var $underscore299 = cases284["rest"];
var pivot290 = first289;
var are$lt288 = empty46;
var are$eq287 = empty46;
var are$gt286 = empty46;
self283["each"](function (e293) {
var $ans291 = undefined;
if(cmp295(e293,pivot290)) {
$ans291 = are$lt288 = link9(e293,are$lt288)} else {
var $ans292 = undefined;
if(eq294(e293,pivot290)) {
$ans292 = are$eq287 = link9(e293,are$eq287)} else {
$ans292 = are$gt286 = link9(e293,are$gt286)}
$ans291 = $ans292}
return $ans291;
});
var less298 = are$lt288["sort-by"](cmp295,eq294);
var equal297 = are$eq287;
var greater296 = are$gt286["sort-by"](cmp295,eq294);
$ans285 = less298["append"](equal297["append"](greater296));
break;
default: $ans285 = _global["throwNoCasesMatched"](["builtin://lists",201,4,6982,233,7,8214],cases284);
}
return $ans285;
};
$inner302["$brand"] = "METHOD";
$inner302["$binder"] = $bindersort$by301;
return $inner302;
};
$constructorTMP407["sort-by"] = $bindersort$by301($constructorTMP407);
function $bindersplit$at335(self333) {
var $inner336 = function innersplit$at(n332) {
return split$at124(n332,self333);
};
$inner336["$brand"] = "METHOD";
$inner336["$binder"] = $bindersplit$at335;
return $inner336;
};
$constructorTMP407["split-at"] = $bindersplit$at335($constructorTMP407);
function $bindertail272(self266) {
var $inner273 = function innertail() {
var cases267 = self266;
var $ans268 = undefined;
switch(cases267.$tag) {
case 0: $ans268 = raise4("tail: empty list");
break;
case 1: var $underscore270 = cases267["first"];
var tail269 = cases267["rest"];
$ans268 = tail269;
break;
default: $ans268 = _global["throwNoCasesMatched"](["builtin://lists",175,4,6177,178,7,6275],cases267);
}
return $ans268;
};
$inner273["$brand"] = "METHOD";
$inner273["$binder"] = $bindertail272;
return $inner273;
};
$constructorTMP407["tail"] = $bindertail272($constructorTMP407);
function $bindertake340(self338) {
var $inner341 = function innertake(n337) {
return split$at124(n337,self338)["prefix"];
};
$inner341["$brand"] = "METHOD";
$inner341["$binder"] = $bindertake340;
return $inner341;
};
$constructorTMP407["take"] = $bindertake340($constructorTMP407);
return $constructorTMP407;
},
"is-empty":function empty(val) {
return val.$brand === $empty376;
},
"is-link":function link(val) {
return val.$brand === $link377;
}};
var is$List193 = List190["List"];
var is$empty192 = List190["is-empty"];
var empty46 = List190["empty"];
var is$link191 = List190["is-link"];
var link9 = List190["link"];
var to$raw$array189 = function to$raw$array(lst185) {
return lst185["foldl"](function (elem187,acc186) {
return RA179["raw-array-push"](acc186,elem187);
},RA179["raw-array"]["make"]([]));
};
var raw$array$to$list184 = function raw$array$to$list(array182) {
return RA179["raw-array-foldr"](function (acc181,current180) {
return link9(current180,acc181);
},empty46,array182);
};
var foldl$complicated152 = function foldl$complicated(is$first177,flist166,f172,x173,l174,base176) {
var cases167 = flist166;
var $ans168 = undefined;
switch(cases167.$tag) {
case 1: var head175 = cases167["first"];
var tail171 = cases167["rest"];
var $ans169 = undefined;
if(is$first177) {
$ans169 = foldl$complicated152(false,tail171,f172,x173,l174,f172(head175,base176))} else {
var $ans170 = undefined;
if(_runtime["equal-always"](tail171,empty46)) {
$ans170 = foldl$complicated152(false,tail171,f172,x173,l174,l174(head175,base176))} else {
$ans170 = foldl$complicated152(false,tail171,f172,x173,l174,x173(head175,base176))}
$ans169 = $ans170}
$ans168 = $ans169;
break;
case 0: $ans168 = base176;
break;
default: $ans168 = _global["throwNoCasesMatched"](["builtin://lists",318,2,11455,328,5,11784],cases167);
}
return $ans168;
};
var join$str165 = function join$str(l163,sep157) {
var f162 = function (elem161,acc160) {
return _runtime["_add"](acc160,G109["js-to-string"](elem161),_runtime["_errCallbacks"]);
};
var x159 = function (elem158,acc156) {
return _runtime["_add"](_runtime["_add"](acc156,sep157,_runtime["_errCallbacks"]),G109["js-to-string"](elem158),_runtime["_errCallbacks"]);
};
return foldl$complicated152(true,l163,f162,x159,x159,"");
};
var join$str$last155 = function join$str$last(jlist153,sep146,last$sep142) {
var f151 = function (elem150,acc149) {
return _runtime["_add"](acc149,G109["js-to-string"](elem150),_runtime["_errCallbacks"]);
};
var x148 = function (elem147,acc145) {
return _runtime["_add"](_runtime["_add"](acc145,sep146,_runtime["_errCallbacks"]),G109["js-to-string"](elem147),_runtime["_errCallbacks"]);
};
var l144 = function (elem143,acc141) {
return _runtime["_add"](_runtime["_add"](acc141,last$sep142,_runtime["_errCallbacks"]),G109["js-to-string"](elem143),_runtime["_errCallbacks"]);
};
return foldl$complicated152(true,jlist153,f151,x148,l144,"");
};
var remove137 = function remove(lst132,elt138) {
var cases133 = lst132;
var $ans134 = undefined;
switch(cases133.$tag) {
case 0: $ans134 = empty46;
break;
case 1: var first136 = cases133["first"];
var rest139 = cases133["rest"];
var $ans135 = undefined;
if(_runtime["equal-always"](elt138,lst132["first"])) {
$ans135 = remove137(rest139,elt138)} else {
$ans135 = link9(first136,remove137(lst132["rest"],elt138))}
$ans134 = $ans135;
break;
default: $ans134 = _global["throwNoCasesMatched"](["builtin://lists",376,2,13574,384,5,13762],cases133);
}
return $ans134;
};
var filter131 = function filter(f128,lst125) {
return lst125["foldr"](function (e129,acc127) {
var $ans126 = undefined;
if(f128(e129)) {
$ans126 = link9(e129,acc127)} else {
$ans126 = acc127}
return $ans126;
},empty46);
};
var split$at124 = function split$at(n108,lst121) {
var $ans107 = undefined;
if(_runtime["_lessThan"](n108,(0),_runtime["_errCallbacks"]) || G109["not"](G109["num-is-integer"](n108))) {
raise4("Invalid index");
$ans107 = nothing52} else {
$ans107 = nothing52}
$ans107;
var prefix111 = empty46;
var suffix110 = empty46;
var help116 = function help(ind117,l113) {
var $ans112 = undefined;
if(_runtime["equal-always"](ind117,(0))) {
$ans112 = suffix110 = l113} else {
var cases114 = l113;
var $ans115 = undefined;
switch(cases114.$tag) {
case 0: $ans115 = raise4("Index too large");
break;
case 1: var fst119 = cases114["first"];
var rst118 = cases114["rest"];
help116(_runtime["_subtract"](ind117,(1),_runtime["_errCallbacks"]),rst118);
$ans115 = prefix111 = function (arg_120) {
return link9(arg_120,prefix111);
}(fst119);
break;
default: $ans115 = _global["throwNoCasesMatched"](["builtin://lists",413,6,14579,418,9,14752],cases114);
}
$ans112 = $ans115}
return $ans112;
};
help116(n108,lst121);
var $temporary122 = {"prefix":prefix111,
"suffix":suffix110};
return $temporary122;
};
var fold87 = function fold(f102,base103,lst99) {
var cases100 = lst99;
var $ans101 = undefined;
switch(cases100.$tag) {
case 1: var fst104 = cases100["first"];
var rst105 = cases100["rest"];
$ans101 = fold87(f102,f102(base103,fst104),rst105);
break;
case 0: $ans101 = base103;
break;
default: $ans101 = _global["throwNoCasesMatched"](["builtin://lists",430,2,15188,435,5,15293],cases100);
}
return $ans101;
};
var reverse98 = function reverse(lst96) {
return fold87(function (acc95,elt94) {
return link9(elt94,acc95);
},empty46,lst96);
};
var each93 = function each(f88,lst91) {
fold87(function ($underscore90,elt89) {
return f88(elt89);
},nothing52,lst91);
return nothing52;
};
var map84 = function map(f82,lst79) {
var cases80 = lst79;
var $ans81 = undefined;
switch(cases80.$tag) {
case 1: var fst83 = cases80["first"];
var rst85 = cases80["rest"];
$ans81 = link9(f82(fst83),map84(f82,rst85));
break;
case 0: $ans81 = empty46;
break;
default: $ans81 = _global["throwNoCasesMatched"](["builtin://lists",456,2,16136,459,5,16229],cases80);
}
return $ans81;
};
var slice78 = function slice(lst76,inclusive$lower71,exclusive$upper72) {
var help73 = function help(acc67,inner$lst64,index70) {
var cases65 = inner$lst64;
var $ans66 = undefined;
switch(cases65.$tag) {
case 0: $ans66 = acc67;
break;
case 1: var first75 = cases65["first"];
var rest74 = cases65["rest"];
var $ans68 = undefined;
if(_runtime["_greaterThanOrEqual"](index70,inclusive$lower71,_runtime["_errCallbacks"]) && _runtime["_lessThan"](index70,exclusive$upper72,_runtime["_errCallbacks"])) {
$ans68 = link9(inner$lst64["first"],help73(acc67,rest74,_runtime["_add"](index70,(1),_runtime["_errCallbacks"])))} else {
var $ans69 = undefined;
if(_runtime["_lessThan"](index70,inclusive$lower71,_runtime["_errCallbacks"]) && _runtime["_lessThan"](index70,exclusive$upper72,_runtime["_errCallbacks"])) {
$ans69 = help73(acc67,rest74,_runtime["_add"](index70,(1),_runtime["_errCallbacks"]))} else {
$ans69 = acc67}
$ans68 = $ans69}
$ans66 = $ans68;
break;
default: $ans66 = _global["throwNoCasesMatched"](["builtin://lists",464,4,16418,475,7,16794],cases65);
}
return $ans66;
};
return help73(empty46,lst76,(0));
};
var partition63 = function partition(f57,lst60) {
var is$true48 = empty46;
var is$false47 = empty46;
var help53 = function help(inner$lst49) {
var cases50 = inner$lst49;
var $ans51 = undefined;
switch(cases50.$tag) {
case 0: $ans51 = nothing52;
break;
case 1: var first59 = cases50["first"];
var rest54 = cases50["rest"];
help53(rest54);
var $ans55 = undefined;
if(f57(inner$lst49["first"])) {
$ans55 = is$true48 = function (arg_58) {
return link9(arg_58,is$true48);
}(inner$lst49["first"])} else {
$ans55 = is$false47 = function (arg_56) {
return link9(arg_56,is$false47);
}(inner$lst49["first"])}
$ans55;
$ans51 = nothing52;
break;
default: $ans51 = _global["throwNoCasesMatched"](["builtin://lists",485,4,17124,496,7,17431],cases50);
}
return $ans51;
};
help53(lst60);
var $temporary61 = {"is-true":is$true48,
"is-false":is$false47};
return $temporary61;
};
var find40 = function find(f41,lst35) {
var cases36 = lst35;
var $ans37 = undefined;
switch(cases36.$tag) {
case 0: $ans37 = none38;
break;
case 1: var first43 = cases36["first"];
var rest42 = cases36["rest"];
var $ans39 = undefined;
if(f41(first43)) {
$ans39 = some44(first43)} else {
$ans39 = find40(f41,rest42)}
$ans37 = $ans39;
break;
default: $ans37 = _global["throwNoCasesMatched"](["builtin://lists",506,2,17690,514,5,17842],cases36);
}
return $ans37;
};
var get34 = function get(lst32,n25) {
var help27 = function help(l22,cur29) {
var cases23 = l22;
var $ans24 = undefined;
switch(cases23.$tag) {
case 0: $ans24 = raise4(_runtime["_add"]("get: n too large ",tostring5(n25),_runtime["_errCallbacks"]));
break;
case 1: var first30 = cases23["first"];
var rest28 = cases23["rest"];
var $ans26 = undefined;
if(_runtime["equal-always"](cur29,(0))) {
$ans26 = first30} else {
$ans26 = help27(rest28,_runtime["_subtract"](cur29,(1),_runtime["_errCallbacks"]))}
$ans24 = $ans26;
break;
default: $ans24 = _global["throwNoCasesMatched"](["builtin://lists",520,4,18031,528,7,18223],cases23);
}
return $ans24;
};
var $ans31 = undefined;
if(_runtime["_lessThan"](n25,(0),_runtime["_errCallbacks"])) {
$ans31 = raise4(_runtime["_add"]("get: invalid argument: ",tostring5(n25),_runtime["_errCallbacks"]))} else {
$ans31 = help27(lst32,n25)}
return $ans31;
};
var function$set21 = function function$set(lst19,n6,v15) {
var help11 = function help(l1,cur13) {
var cases2 = l1;
var $ans3 = undefined;
switch(cases2.$tag) {
case 0: $ans3 = raise4(_runtime["_add"]("set: n too large ",tostring5(n6),_runtime["_errCallbacks"]));
break;
case 1: var first8 = cases2["first"];
var rest12 = cases2["rest"];
var $ans7 = undefined;
if(_runtime["equal-always"](cur13,(0))) {
$ans7 = function (arg_16) {
return link9(arg_16,rest12);
}(v15)} else {
$ans7 = function (arg_10) {
return link9(arg_10,help11(rest12,_runtime["_subtract"](cur13,(1),_runtime["_errCallbacks"])));
}(first8)}
$ans3 = $ans7;
break;
default: $ans3 = _global["throwNoCasesMatched"](["builtin://lists",539,4,18603,547,7,18834],cases2);
}
return $ans3;
};
var $ans18 = undefined;
if(_runtime["_lessThan"](n6,(0),_runtime["_errCallbacks"])) {
$ans18 = raise4(_runtime["_add"]("set: invalid argument: ",tostring5(n6),_runtime["_errCallbacks"]))} else {
$ans18 = help11(lst19,n6)}
return $ans18;
};
var $temporary410 = {"make":raw$array$to$list184,
"make0":function () {
return empty46;
},
"make1":function (a411) {
return link9(a411,empty46);
},
"make2":function (a412,b413) {
return link9(a412,link9(b413,empty46));
},
"make3":function (a414,b415,c416) {
return link9(a414,link9(b415,link9(c416,empty46)));
},
"make4":function (a417,b418,c419,d420) {
return link9(a417,link9(b418,link9(c419,link9(d420,empty46))));
},
"make5":function (a421,b422,c423,d424,e425) {
return link9(a421,link9(b422,link9(c423,link9(d424,link9(e425,empty46)))));
}};
var list426 = $temporary410;
var length883 = function length(lst881) {
var help878 = function help(l874,cur877) {
var cases875 = l874;
var $ans876 = undefined;
switch(cases875.$tag) {
case 0: $ans876 = cur877;
break;
case 1: var $underscore880 = cases875["first"];
var r879 = cases875["rest"];
$ans876 = help878(r879,_runtime["_add"](cur877,(1),_runtime["_errCallbacks"]));
break;
default: $ans876 = _global["throwNoCasesMatched"](["builtin://lists",571,4,19694,574,7,19777],cases875);
}
return $ans876;
};
return help878(lst881,(0));
};
var same$length868 = function same$length(lst1860,lst2863) {
var cases861 = lst1860;
var $ans862 = undefined;
switch(cases861.$tag) {
case 0: var cases864 = lst2863;
var $ans865 = undefined;
switch(cases864.$tag) {
case 0: $ans865 = true;
break;
default: $ans865 = false;
}
$ans862 = $ans865;
break;
case 1: var $underscore872 = cases861["first"];
var rest1869 = cases861["rest"];
var cases866 = lst2863;
var $ans867 = undefined;
switch(cases866.$tag) {
case 0: $ans867 = false;
break;
case 1: var $underscore871 = cases866["first"];
var rest2870 = cases866["rest"];
$ans867 = same$length868(rest1869,rest2870);
break;
default: $ans867 = _global["throwNoCasesMatched"](["builtin://lists",588,6,20146,591,9,20252],cases866);
}
$ans862 = $ans867;
break;
default: $ans862 = _global["throwNoCasesMatched"](["builtin://lists",581,2,20001,592,5,20258],cases861);
}
return $ans862;
};
var longer$than856 = function longer$than(lst852,len855) {
var cases853 = lst852;
var $ans854 = undefined;
switch(cases853.$tag) {
case 0: $ans854 = _runtime["_lessThan"](len855,(0),_runtime["_errCallbacks"]);
break;
case 1: var $underscore858 = cases853["first"];
var rest857 = cases853["rest"];
$ans854 = _runtime["_lessThan"](len855,(1),_runtime["_errCallbacks"]) || longer$than856(rest857,_runtime["_subtract"](len855,(1),_runtime["_errCallbacks"]));
break;
default: $ans854 = _global["throwNoCasesMatched"](["builtin://lists",601,2,20644,604,5,20752],cases853);
}
return $ans854;
};
var shorter$than848 = function shorter$than(lst844,len847) {
var cases845 = lst844;
var $ans846 = undefined;
switch(cases845.$tag) {
case 0: $ans846 = _runtime["_greaterThan"](len847,(0),_runtime["_errCallbacks"]);
break;
case 1: var $underscore850 = cases845["first"];
var rest849 = cases845["rest"];
$ans846 = _runtime["_greaterThan"](len847,(1),_runtime["_errCallbacks"]) && shorter$than848(rest849,_runtime["_subtract"](len847,(1),_runtime["_errCallbacks"]));
break;
default: $ans846 = _global["throwNoCasesMatched"](["builtin://lists",613,2,21088,616,5,21198],cases845);
}
return $ans846;
};
var push843 = function push(l841,elt840) {
return link9(elt840,l841);
};
var last839 = function last(lst830) {
var helper834 = function helper(l837) {
var cases831 = lst830;
var $ans832 = undefined;
switch(cases831.$tag) {
case 0: $ans832 = raise4("last: took last of empty list");
break;
case 1: var first836 = cases831["first"];
var rest835 = cases831["rest"];
var $ans833 = undefined;
if(is$empty192(rest835)) {
$ans833 = first836} else {
$ans833 = helper834(rest835)}
$ans832 = $ans833;
break;
default: $ans832 = _global["throwNoCasesMatched"](["builtin://lists",630,4,21561,638,7,21762],cases831);
}
return $ans832;
};
return helper834(lst830);
};
var sort$by829 = function sort$by(lst825,cmp826,eq827) {
return lst825["sort-by"](cmp826,eq827);
};
var sort824 = function sort(lst822) {
return lst822["sort"]();
};
var range821 = function range(start818,stop819) {
var $ans816 = undefined;
if(_runtime["_greaterThan"](start818,stop819,_runtime["_errCallbacks"])) {
$ans816 = raise4(_runtime["_add"](_runtime["_add"](_runtime["_add"](_runtime["_add"]("range: start greater than stop: (",tostring5(start818),_runtime["_errCallbacks"]),", ",_runtime["_errCallbacks"]),tostring5(stop819),_runtime["_errCallbacks"]),")",_runtime["_errCallbacks"]))} else {
$ans816 = raw$array$to$list184(RA179["raw-array-build"](function (i817) {
return _runtime["_add"](i817,start818,_runtime["_errCallbacks"]);
},_runtime["_subtract"](stop819,start818,_runtime["_errCallbacks"])))}
return $ans816;
};
var range$by815 = function range$by(start809,stop808,delta810) {
var $ans805 = undefined;
if(_runtime["equal-always"](delta810,(0))) {
var $ans813 = undefined;
if(_runtime["equal-always"](start809,stop808)) {
$ans813 = empty46} else {
$ans813 = raise4("range-by: an interval of 0 would produce an infinite list")}
$ans805 = $ans813} else {
var len811 = num$max806(num$ceiling807(_runtime["_divide"](_runtime["_subtract"](stop808,start809,_runtime["_errCallbacks"]),delta810,_runtime["_errCallbacks"])),(0));
$ans805 = raw$array$to$list184(RA179["raw-array-build"](function (i812) {
return _runtime["_add"](start809,_runtime["_multiply"](i812,delta810,_runtime["_errCallbacks"]),_runtime["_errCallbacks"]);
},len811))}
return $ans805;
};
var repeat804 = function repeat(n802,e801) {
var $ans800 = undefined;
if(_runtime["_lessThan"](n802,(0),_runtime["_errCallbacks"])) {
$ans800 = raise4("repeat: can't have a negative argument'")} else {
$ans800 = raw$array$to$list184(RA179["raw-array-of"](e801,n802))}
return $ans800;
};
var append797 = function append(front792,back795) {
var cases793 = front792;
var $ans794 = undefined;
switch(cases793.$tag) {
case 0: $ans794 = back795;
break;
case 1: var f796 = cases793["first"];
var r798 = cases793["rest"];
$ans794 = link9(f796,append797(r798,back795));
break;
default: $ans794 = _global["throwNoCasesMatched"](["builtin://lists",691,2,23362,694,5,23451],cases793);
}
return $ans794;
};
var take791 = function take(n788,lst789) {
return split$at124(n788,lst789)["prefix"];
};
var drop787 = function drop(n784,lst785) {
return split$at124(n784,lst785)["suffix"];
};
var any781 = function any(f779,lst776) {
var cases777 = lst776;
var $ans778 = undefined;
switch(cases777.$tag) {
case 0: $ans778 = false;
break;
case 1: var first780 = cases777["first"];
var rest782 = cases777["rest"];
$ans778 = f779(first780) || any781(f779,rest782);
break;
default: $ans778 = _global["throwNoCasesMatched"](["builtin://lists",709,2,23909,712,5,24004],cases777);
}
return $ans778;
};
var all773 = function all(f771,lst768) {
var cases769 = lst768;
var $ans770 = undefined;
switch(cases769.$tag) {
case 0: $ans770 = true;
break;
case 1: var first772 = cases769["first"];
var rest774 = cases769["rest"];
$ans770 = f771(first772) && all773(f771,rest774);
break;
default: $ans770 = _global["throwNoCasesMatched"](["builtin://lists",717,2,24139,720,5,24234],cases769);
}
return $ans770;
};
var all2767 = function all2(f760,lst1764,lst2765) {
var help763 = function help(l1761,l2762) {
var $ans759 = undefined;
if(is$empty192(l1761) || is$empty192(l2762)) {
$ans759 = true} else {
$ans759 = f760(l1761["head"](),l2762["head"]()) && help763(l1761["tail"](),l2762["tail"]())}
return $ans759;
};
return help763(lst1764,lst2765);
};
var map2757 = function map2(f753,l1754,l2755) {
var $ans752 = undefined;
if(is$empty192(l1754) || is$empty192(l2755)) {
$ans752 = empty46} else {
$ans752 = function (arg_756) {
return link9(arg_756,map2757(f753,l1754["tail"](),l2755["tail"]()));
}(f753(l1754["head"](),l2755["head"]()))}
return $ans752;
};
var map3750 = function map3(f745,l1746,l2747,l3748) {
var $ans744 = undefined;
if(is$empty192(l1746) || is$empty192(l2747) || is$empty192(l3748)) {
$ans744 = empty46} else {
$ans744 = function (arg_749) {
return link9(arg_749,map3750(f745,l1746["tail"](),l2747["tail"](),l3748["tail"]()));
}(f745(l1746["head"](),l2747["head"](),l3748["head"]()))}
return $ans744;
};
var map4742 = function map4(f736,l1737,l2738,l3739,l4740) {
var $ans735 = undefined;
if(is$empty192(l1737) || is$empty192(l2738) || is$empty192(l3739) || is$empty192(l4740)) {
$ans735 = empty46} else {
$ans735 = function (arg_741) {
return link9(arg_741,map4742(f736,l1737["tail"](),l2738["tail"](),l3739["tail"](),l4740["tail"]()));
}(f736(l1737["head"](),l2738["head"](),l3739["head"](),l4740["head"]()))}
return $ans735;
};
var map_n733 = function map_n(f729,n730,lst731) {
var $ans728 = undefined;
if(is$empty192(lst731)) {
$ans728 = empty46} else {
$ans728 = function (arg_732) {
return link9(arg_732,map_n733(f729,_runtime["_add"](n730,(1),_runtime["_errCallbacks"]),lst731["tail"]()));
}(f729(n730,lst731["head"]()))}
return $ans728;
};
var map2_n726 = function map2_n(f721,n722,l1723,l2724) {
var $ans720 = undefined;
if(is$empty192(l1723) || is$empty192(l2724)) {
$ans720 = empty46} else {
$ans720 = function (arg_725) {
return link9(arg_725,map2_n726(f721,_runtime["_add"](n722,(1),_runtime["_errCallbacks"]),l1723["tail"](),l2724["tail"]()));
}(f721(n722,l1723["head"](),l2724["head"]()))}
return $ans720;
};
var map3_n718 = function map3_n(f712,n713,l1714,l2715,l3716) {
var $ans711 = undefined;
if(is$empty192(l1714) || is$empty192(l2715) || is$empty192(l3716)) {
$ans711 = empty46} else {
$ans711 = function (arg_717) {
return link9(arg_717,map3_n718(f712,_runtime["_add"](n713,(1),_runtime["_errCallbacks"]),l1714["tail"](),l2715["tail"](),l3716["tail"]()));
}(f712(n713,l1714["head"](),l2715["head"](),l3716["head"]()))}
return $ans711;
};
var map4_n709 = function map4_n(f702,n703,l1704,l2705,l3706,l4707) {
var $ans701 = undefined;
if(is$empty192(l1704) || is$empty192(l2705) || is$empty192(l3706) || is$empty192(l4707)) {
$ans701 = empty46} else {
$ans701 = function (arg_708) {
return link9(arg_708,map4_n709(f702,_runtime["_add"](n703,(1),_runtime["_errCallbacks"]),l1704["tail"](),l2705["tail"](),l3706["tail"](),l4707["tail"]()));
}(f702(n703,l1704["head"](),l2705["head"](),l3706["head"](),l4707["head"]()))}
return $ans701;
};
var each2700 = function each2(f693,lst1697,lst2698) {
var help696 = function help(l1694,l2695) {
var $ans692 = undefined;
if(is$empty192(l1694) || is$empty192(l2695)) {
$ans692 = nothing52} else {
f693(l1694["head"](),l2695["head"]());
$ans692 = help696(l1694["tail"](),l2695["tail"]())}
return $ans692;
};
return help696(lst1697,lst2698);
};
var each3691 = function each3(f682,lst1687,lst2688,lst3689) {
var help686 = function help(l1683,l2684,l3685) {
var $ans681 = undefined;
if(is$empty192(l1683) || is$empty192(l2684) || is$empty192(l3685)) {
$ans681 = nothing52} else {
f682(l1683["head"](),l2684["head"](),l3685["head"]());
$ans681 = help686(l1683["tail"](),l2684["tail"](),l3685["tail"]())}
return $ans681;
};
return help686(lst1687,lst2688,lst3689);
};
var each4680 = function each4(f669,lst1675,lst2676,lst3677,lst4678) {
var help674 = function help(l1670,l2671,l3672,l4673) {
var $ans668 = undefined;
if(is$empty192(l1670) || is$empty192(l2671) || is$empty192(l3672) || is$empty192(l4673)) {
$ans668 = nothing52} else {
f669(l1670["head"](),l2671["head"](),l3672["head"](),l4673["head"]());
$ans668 = help674(l1670["tail"](),l2671["tail"](),l3672["tail"](),l4673["tail"]())}
return $ans668;
};
return help674(lst1675,lst2676,lst3677,lst4678);
};
var each_n667 = function each_n(f660,num664,lst665) {
var help663 = function help(n661,l662) {
var $ans659 = undefined;
if(is$empty192(l662)) {
$ans659 = nothing52} else {
f660(n661,l662["head"]());
$ans659 = help663(_runtime["_add"](n661,(1),_runtime["_errCallbacks"]),l662["tail"]())}
return $ans659;
};
return help663(num664,lst665);
};
var each2_n658 = function each2_n(f649,num654,lst1655,lst2656) {
var help653 = function help(n650,l1651,l2652) {
var $ans648 = undefined;
if(is$empty192(l1651) || is$empty192(l2652)) {
$ans648 = nothing52} else {
f649(n650,l1651["head"](),l2652["head"]());
$ans648 = help653(_runtime["_add"](n650,(1),_runtime["_errCallbacks"]),l1651["tail"](),l2652["tail"]())}
return $ans648;
};
return help653(num654,lst1655,lst2656);
};
var each3_n647 = function each3_n(f636,num642,lst1643,lst2644,lst3645) {
var help641 = function help(n637,l1638,l2639,l3640) {
var $ans635 = undefined;
if(is$empty192(l1638) || is$empty192(l2639) || is$empty192(l3640)) {
$ans635 = nothing52} else {
f636(n637,l1638["head"](),l2639["head"](),l3640["head"]());
$ans635 = help641(_runtime["_add"](n637,(1),_runtime["_errCallbacks"]),l1638["tail"](),l2639["tail"](),l3640["tail"]())}
return $ans635;
};
return help641(num642,lst1643,lst2644,lst3645);
};
var each4_n634 = function each4_n(f621,num628,lst1629,lst2630,lst3631,lst4632) {
var help627 = function help(n622,l1623,l2624,l3625,l4626) {
var $ans620 = undefined;
if(is$empty192(l1623) || is$empty192(l2624) || is$empty192(l3625) || is$empty192(l4626)) {
$ans620 = nothing52} else {
f621(n622,l1623["head"](),l2624["head"](),l3625["head"](),l4626["head"]());
$ans620 = help627(_runtime["_add"](n622,(1),_runtime["_errCallbacks"]),l1623["tail"](),l2624["tail"](),l3625["tail"](),l4626["tail"]())}
return $ans620;
};
return help627(num628,lst1629,lst2630,lst3631,lst4632);
};
var fold$while615 = function fold$while(f611,base610,lst607) {
var cases608 = lst607;
var $ans609 = undefined;
switch(cases608.$tag) {
case 0: $ans609 = base610;
break;
case 1: var elt612 = cases608["first"];
var r617 = cases608["rest"];
var cases613 = f611(base610,elt612);
var $ans614 = undefined;
switch(cases613.$tag) {
case 0: var v616 = cases613["v"];
$ans614 = fold$while615(f611,v616,r617);
break;
case 1: var v618 = cases613["v"];
$ans614 = v618;
break;
default: $ans614 = _global["throwNoCasesMatched"](["builtin://lists",895,6,31200,898,9,31302],cases613);
}
$ans609 = $ans614;
break;
default: $ans609 = _global["throwNoCasesMatched"](["builtin://lists",892,2,31135,899,5,31308],cases608);
}
return $ans609;
};
var foldr603 = function foldr(f602,base604,lst605) {
var $ans601 = undefined;
if(is$empty192(lst605)) {
$ans601 = base604} else {
$ans601 = f602(foldr603(f602,base604,lst605["tail"]()),lst605["head"]())}
return $ans601;
};
var fold2595 = function fold2(f596,base597,l1598,l2599) {
var $ans594 = undefined;
if(is$empty192(l1598) || is$empty192(l2599)) {
$ans594 = base597} else {
$ans594 = fold2595(f596,f596(base597,l1598["head"](),l2599["head"]()),l1598["tail"](),l2599["tail"]())}
return $ans594;
};
var fold3587 = function fold3(f588,base589,l1590,l2591,l3592) {
var $ans586 = undefined;
if(is$empty192(l1590) || is$empty192(l2591) || is$empty192(l3592)) {
$ans586 = base589} else {
$ans586 = fold3587(f588,f588(base589,l1590["head"](),l2591["head"](),l3592["head"]()),l1590["tail"](),l2591["tail"](),l3592["tail"]())}
return $ans586;
};
var fold4578 = function fold4(f579,base580,l1581,l2582,l3583,l4584) {
var $ans577 = undefined;
if(is$empty192(l1581) || is$empty192(l2582) || is$empty192(l3583) || is$empty192(l4584)) {
$ans577 = base580} else {
$ans577 = fold4578(f579,f579(base580,l1581["head"](),l2582["head"](),l3583["head"](),l4584["head"]()),l1581["tail"](),l2582["tail"](),l3583["tail"](),l4584["tail"]())}
return $ans577;
};
var fold_n514 = function fold_n(f570,num573,base574,lst575) {
var help568 = function help(n569,acc571,partial$list572) {
var $ans567 = undefined;
if(is$empty192(partial$list572)) {
$ans567 = acc571} else {
$ans567 = help568(_runtime["_add"](n569,(1),_runtime["_errCallbacks"]),f570(n569,acc571,partial$list572["head"]()),partial$list572["tail"]())}
return $ans567;
};
return help568(num573,base574,lst575);
};
var member$with529 = function member$with(lst556,elt559,eq560) {
var cases557 = lst556;
var $ans558 = undefined;
switch(cases557.$tag) {
case 0: $ans558 = equality523["NotEqual"]("list",elt559,lst556);
break;
case 1: var first561 = cases557["first"];
var rest565 = cases557["rest"];
var first$elt$equal562 = eq560(first561,elt559);
var cases563 = first$elt$equal562;
var $ans564 = undefined;
switch(cases563.$tag) {
case 0: $ans564 = equality523["Equal"];
break;
default: $ans564 = equality523["equal-or"](first$elt$equal562,member$with529(rest565,elt559,eq560));
}
$ans558 = $ans564;
break;
default: $ans558 = _global["throwNoCasesMatched"](["builtin://lists",963,2,33997,971,5,34306],cases557);
}
return $ans558;
};
var member3479 = function member3(lst550,elt551) {
return member$with529(lst550,elt551,function (l553,r554) {
return equal$always3552(l553,r554);
});
};
var member549 = function member(lst546,elt547) {
return equality523["to-boolean"](member3479(lst546,elt547));
};
var member$now3536 = function member$now3(lst541,elt542) {
return member$with529(lst541,elt542,function (l543,r544) {
return equality523["equal-now3"](l543,r544);
});
};
var member$now540 = function member$now(lst537,elt538) {
return equality523["to-boolean"](member$now3536(lst537,elt538));
};
var member$identical3524 = function member$identical3(lst530,elt531) {
return member$with529(lst530,elt531,function (l533,r534) {
return identical3532(l533,r534);
});
};
var member$identical528 = function member$identical(lst525,elt526) {
return equality523["to-boolean"](member$identical3524(lst525,elt526));
};
var shuffle522 = function shuffle(lst519) {
var $ans513 = undefined;
if(is$empty192(lst519)) {
$ans513 = empty46} else {
var elts520 = fold_n514(function (i517,arr516,e518) {
var ix515 = raise4("TODO(alex): Implement random generator somewhere");
RA179["raw-array-set"](arr516,i517,RA179["raw-array-get"](arr516,ix515));
RA179["raw-array-set"](arr516,ix515,e518);
return arr516;
},(1),RA179["raw-array-of"](lst519["head"](),lst519["length"]()),lst519["tail"]());
$ans513 = raw$array$to$list184(elts520)}
return $ans513;
};
var filter$map509 = function filter$map(f505,lst502) {
var cases503 = lst502;
var $ans504 = undefined;
switch(cases503.$tag) {
case 0: $ans504 = empty46;
break;
case 1: var first506 = cases503["first"];
var rest510 = cases503["rest"];
var cases507 = f505(first506);
var $ans508 = undefined;
switch(cases507.$tag) {
case 1: $ans508 = filter$map509(f505,rest510);
break;
case 0: var v511 = cases507["value"];
$ans508 = link9(v511,filter$map509(f505,rest510));
break;
default: $ans508 = _global["throwNoCasesMatched"](["builtin://lists",1017,6,35680,1020,9,35801],cases507);
}
$ans504 = $ans508;
break;
default: $ans504 = _global["throwNoCasesMatched"](["builtin://lists",1014,2,35609,1021,5,35807],cases503);
}
return $ans504;
};
var filter$values498 = function filter$values(lst492) {
var cases493 = lst492;
var $ans494 = undefined;
switch(cases493.$tag) {
case 0: $ans494 = empty46;
break;
case 1: var first495 = cases493["first"];
var rest499 = cases493["rest"];
var cases496 = first495;
var $ans497 = undefined;
switch(cases496.$tag) {
case 1: $ans497 = filter$values498(rest499);
break;
case 0: var v500 = cases496["value"];
$ans497 = link9(v500,filter$values498(rest499));
break;
default: $ans497 = _global["throwNoCasesMatched"](["builtin://lists",1028,6,35943,1031,9,36061],cases496);
}
$ans494 = $ans497;
break;
default: $ans494 = _global["throwNoCasesMatched"](["builtin://lists",1025,2,35872,1032,5,36067],cases493);
}
return $ans494;
};
var distinct484 = function distinct(l476) {
var cases477 = l476;
var $ans478 = undefined;
switch(cases477.$tag) {
case 0: $ans478 = empty46;
break;
case 1: var first481 = cases477["first"];
var rest480 = cases477["rest"];
var cases482 = member3479(rest480,first481);
var $ans483 = undefined;
switch(cases482.$tag) {
case 1: var $underscore485 = cases482["reason"];
var $underscore486 = cases482["value1"];
var $underscore487 = cases482["value2"];
$ans483 = link9(first481,distinct484(rest480));
break;
case 2: var $underscore488 = cases482["reason"];
var $underscore489 = cases482["value1"];
var $underscore490 = cases482["value2"];
$ans483 = link9(first481,distinct484(rest480));
break;
case 0: $ans483 = distinct484(rest480);
break;
default: $ans483 = _global["throwNoCasesMatched"](["builtin://lists",1040,6,36295,1044,9,36499],cases482);
}
$ans478 = $ans483;
break;
default: $ans478 = _global["throwNoCasesMatched"](["builtin://lists",1037,2,36225,1045,5,36505],cases477);
}
return $ans478;
};
var take$while475 = function take$while(pred469,lst473) {
var tail464 = empty46;
var help471 = function help(l465) {
var cases466 = l465;
var $ans467 = undefined;
switch(cases466.$tag) {
case 0: $ans467 = empty46;
break;
case 1: var first470 = cases466["first"];
var rest472 = cases466["rest"];
var $ans468 = undefined;
if(pred469(first470)) {
$ans468 = link9(first470,help471(rest472))} else {
tail464 = l465;
$ans468 = empty46}
$ans467 = $ans468;
break;
default: $ans467 = _global["throwNoCasesMatched"](["builtin://lists",1052,4,36733,1061,7,36933],cases466);
}
return $ans467;
};
return _runtime["PTuple"]([help471(lst473),tail464]);
};
var max463 = function max(lst449) {
var cases450 = lst449;
var $ans451 = undefined;
switch(cases450.$tag) {
case 0: $ans451 = raise4("list max: empty list");
break;
case 1: var first453 = cases450["first"];
var rest452 = cases450["rest"];
$ans451 = _runtime["PTuple"]([first453,rest452]);
break;
default: $ans451 = _global["throwNoCasesMatched"](["builtin://lists",1077,26,37703,1080,5,37813],cases450);
}
var tup446 = $ans451;
var max$v448 = tup446[0];
var lst447 = tup446[1];
var helper459 = function helper(inner454,inner$max457) {
var cases455 = inner454;
var $ans456 = undefined;
switch(cases455.$tag) {
case 0: $ans456 = inner$max457;
break;
case 1: var first461 = cases455["first"];
var rest460 = cases455["rest"];
var $ans458 = undefined;
if(_runtime["_greaterThan"](first461,inner$max457,_runtime["_errCallbacks"])) {
$ans458 = helper459(rest460,first461)} else {
$ans458 = helper459(rest460,inner$max457)}
$ans456 = $ans458;
break;
default: $ans456 = _global["throwNoCasesMatched"](["builtin://lists",1083,4,37887,1091,7,38089],cases455);
}
return $ans456;
};
return helper459(lst447,max$v448);
};
var min445 = function min(lst430) {
var cases431 = lst430;
var $ans432 = undefined;
switch(cases431.$tag) {
case 0: $ans432 = raise4("list max: empty list");
break;
case 1: var first434 = cases431["first"];
var rest433 = cases431["rest"];
$ans432 = _runtime["PTuple"]([first434,rest433]);
break;
default: $ans432 = _global["throwNoCasesMatched"](["builtin://lists",1098,26,38189,1101,5,38299],cases431);
}
var tup427 = $ans432;
var min$v429 = tup427[0];
var lst428 = tup427[1];
var helper440 = function helper(inner435,inner$min438) {
var cases436 = inner435;
var $ans437 = undefined;
switch(cases436.$tag) {
case 0: $ans437 = inner$min438;
break;
case 1: var first442 = cases436["first"];
var rest441 = cases436["rest"];
var $ans439 = undefined;
if(_runtime["_lessThan"](first442,inner$min438,_runtime["_errCallbacks"])) {
$ans439 = helper440(rest441,first442)} else {
$ans439 = helper440(rest441,inner$min438)}
$ans437 = $ans439;
break;
default: $ans437 = _global["throwNoCasesMatched"](["builtin://lists",1104,4,38373,1112,7,38575],cases436);
}
return $ans437;
};
return helper440(lst428,min$v429);
};
var member$always3886 = member3479;
var member$always885 = member549;
var foldl884 = fold87;
var $answer887 = _global["trace-value"](["dummy location"],nothing52);
return module["exports"] = {"sort":sort824,
"list":list426,
"is-link":is$link191,
"range":range821,
"distinct":distinct484,
"map":map84,
"repeat":repeat804,
"link":link9,
"append":append797,
"push":push843,
"member":member549,
"shuffle":shuffle522,
"find":find40,
"member3":member3479,
"member-with":member$with529,
"filter":filter131,
"map4":map4742,
"map3":map3750,
"filter-values":filter$values498,
"raw-array-to-list":raw$array$to$list184,
"get":get34,
"last":last839,
"map2":map2757,
"join-str-last":join$str$last155,
"each4":each4680,
"fold4":fold4578,
"each3":each3691,
"min":min445,
"slice":slice78,
"fold3":fold3587,
"member-always3":member$always3886,
"member-identical3":member$identical3524,
"all2":all2767,
"each2":each2700,
"foldr":foldr603,
"fold2":fold2595,
"fold_n":fold_n514,
"member-now3":member$now3536,
"each_n":each_n667,
"drop":drop787,
"join-str":join$str165,
"same-length":same$length868,
"empty":empty46,
"function-set":function$set21,
"any":any781,
"take-while":take$while475,
"map_n":map_n733,
"foldl":foldl884,
"is-empty":is$empty192,
"partition":partition63,
"foldl-complicated":foldl$complicated152,
"range-by":range$by815,
"filter-map":filter$map509,
"take":take791,
"map4_n":map4_n709,
"split-at":split$at124,
"sort-by":sort$by829,
"length":length883,
"map3_n":map3_n718,
"shorter-than":shorter$than848,
"fold-while":fold$while615,
"longer-than":longer$than856,
"map2_n":map2_n726,
"max":max463,
"remove":remove137,
"member-now":member$now540,
"to-raw-array":to$raw$array189,
"reverse":reverse98,
"each4_n":each4_n634,
"member-identical":member$identical528,
"member-always":member$always885,
"is-List":is$List193,
"each":each93,
"each3_n":each3_n647,
"all":all773,
"fold":fold87,
"each2_n":each2_n658,
"$answer":$answer887,
"$checks":_runtime["$checkResults"](),
"$traces":_runtime["$getTraces"](),
"$locations":[{"name":"sort",
"srcloc":["builtin://lists",648,0,21911,650,3,21967]},
{"name":"list",
"srcloc":["builtin://lists",558,0,19016,566,1,19530]},
{"name":"is-link",
"srcloc":["builtin://lists",80,2,2742,100,8,3791]},
{"name":"range",
"srcloc":["builtin://lists",652,0,21969,661,3,22345]},
{"name":"distinct",
"srcloc":["builtin://lists",1035,0,36073,1046,3,36509]},
{"name":"map",
"srcloc":["builtin://lists",454,0,16007,460,3,16233]},
{"name":"repeat",
"srcloc":["builtin://lists",683,0,23088,688,3,23297]},
{"name":"link",
"srcloc":["builtin://lists",80,2,2742,100,8,3791]},
{"name":"append",
"srcloc":["builtin://lists",690,0,23299,695,3,23455]},
{"name":"push",
"srcloc":["builtin://lists",623,0,21334,625,3,21400]},
{"name":"member",
"srcloc":["builtin://lists",978,0,34447,980,3,34543]},
{"name":"shuffle",
"srcloc":["builtin://lists",998,0,35055,1011,3,35533]},
{"name":"find",
"srcloc":["builtin://lists",502,0,17498,515,3,17846]},
{"name":"member3",
"srcloc":["builtin://lists",974,0,34312,976,3,34445]},
{"name":"member-with",
"srcloc":["builtin://lists",961,0,33898,972,3,34310]},
{"name":"filter",
"srcloc":["builtin://lists",389,0,13912,401,3,14162]},
{"name":"map4",
"srcloc":["builtin://lists",752,0,25295,759,3,25723]},
{"name":"map3",
"srcloc":["builtin://lists",743,0,24938,750,3,25293]},
{"name":"filter-values",
"srcloc":["builtin://lists",1024,0,35813,1033,3,36071]},
{"name":"raw-array-to-list",
"srcloc":["builtin://lists",305,0,11016,307,3,11156]},
{"name":"get",
"srcloc":["builtin://lists",517,0,17848,533,3,18319]},
{"name":"last",
"srcloc":["builtin://lists",627,0,21402,642,3,21787]},
{"name":"map2",
"srcloc":["builtin://lists",734,0,24642,741,3,24936]},
{"name":"join-str-last",
"srcloc":["builtin://lists",350,0,12482,372,3,13427]},
{"name":"each4",
"srcloc":["builtin://lists",823,0,28182,834,3,28771]},
{"name":"fold4",
"srcloc":["builtin://lists",932,0,32528,940,3,33063]},
{"name":"each3",
"srcloc":["builtin://lists",810,0,27676,821,3,28180]},
{"name":"min",
"srcloc":["builtin://lists",1097,0,38123,1116,3,38607]},
{"name":"slice",
"srcloc":["builtin://lists",462,0,16235,478,3,16826]},
{"name":"fold3",
"srcloc":["builtin://lists",922,0,32049,930,3,32526]},
{"name":"member-always3",
"srcloc":["builtin://lists",1118,0,38609,1118,24,38633]},
{"name":"member-identical3",
"srcloc":["builtin://lists",990,0,34795,992,3,34935]},
{"name":"all2",
"srcloc":["builtin://lists",723,0,24240,732,3,24640]},
{"name":"each2",
"srcloc":["builtin://lists",797,0,27258,808,3,27674]},
{"name":"foldr",
"srcloc":["builtin://lists",902,0,31314,910,3,31626]},
{"name":"fold2",
"srcloc":["builtin://lists",912,0,31628,920,3,32047]},
{"name":"fold_n",
"srcloc":["builtin://lists",942,0,33065,953,3,33562]},
{"name":"member-now3",
"srcloc":["builtin://lists",982,0,34545,984,3,34687]},
{"name":"each_n",
"srcloc":["builtin://lists",836,0,28773,847,3,29103]},
{"name":"drop",
"srcloc":["builtin://lists",702,0,23615,705,3,23779]},
{"name":"join-str",
"srcloc":["builtin://lists",331,0,11790,348,3,12480]},
{"name":"same-length",
"srcloc":["builtin://lists",579,0,19804,597,3,20441]},
{"name":"empty",
"srcloc":["builtin://lists",61,2,1886,79,8,2739]},
{"name":"function-set",
"srcloc":["builtin://lists",535,0,18321,553,3,18931]},
{"name":"any",
"srcloc":["builtin://lists",707,0,23781,713,3,24008]},
{"name":"take-while",
"srcloc":["builtin://lists",1048,0,36511,1074,3,37635]},
{"name":"map_n",
"srcloc":["builtin://lists",761,0,25725,768,3,25993]},
{"name":"foldl",
"srcloc":["builtin://lists",1120,0,38657,1120,12,38669]},
{"name":"is-empty",
"srcloc":["builtin://lists",61,2,1886,79,8,2739]},
{"name":"partition",
"srcloc":["builtin://lists",480,0,16828,500,3,17496]},
{"name":"foldl-complicated",
"srcloc":["builtin://lists",311,0,11302,329,3,11788]},
{"name":"range-by",
"srcloc":["builtin://lists",663,0,22347,681,3,23086]},
{"name":"filter-map",
"srcloc":["builtin://lists",1013,0,35535,1022,3,35811]},
{"name":"take",
"srcloc":["builtin://lists",697,0,23457,700,3,23613]},
{"name":"map4_n",
"srcloc":["builtin://lists",788,0,26764,795,3,27256]},
{"name":"split-at",
"srcloc":["builtin://lists",403,0,14164,423,3,14822]},
{"name":"sort-by",
"srcloc":["builtin://lists",644,0,21789,646,3,21909]},
{"name":"length",
"srcloc":["builtin://lists",568,0,19532,577,3,19802]},
{"name":"map3_n",
"srcloc":["builtin://lists",779,0,26343,786,3,26762]},
{"name":"shorter-than",
"srcloc":["builtin://lists",611,0,20885,621,3,21332]},
{"name":"fold-while",
"srcloc":["builtin://lists",888,0,30785,900,3,31312]},
{"name":"longer-than",
"srcloc":["builtin://lists",599,0,20443,609,3,20883]},
{"name":"map2_n",
"srcloc":["builtin://lists",770,0,25995,777,3,26341]},
{"name":"max",
"srcloc":["builtin://lists",1076,0,37637,1095,3,38121]},
{"name":"remove",
"srcloc":["builtin://lists",374,0,13429,385,3,13766]},
{"name":"member-now",
"srcloc":["builtin://lists",986,0,34689,988,3,34793]},
{"name":"to-raw-array",
"srcloc":["builtin://lists",301,0,10879,303,3,11014]},
{"name":"reverse",
"srcloc":["builtin://lists",438,0,15299,444,3,15674]},
{"name":"each4_n",
"srcloc":["builtin://lists",875,0,30127,886,3,30783]},
{"name":"member-identical",
"srcloc":["builtin://lists",994,0,34937,996,3,35053]},
{"name":"member-always",
"srcloc":["builtin://lists",1119,0,38634,1119,22,38656]},
{"name":"is-List",
"srcloc":["builtin://lists",60,0,1870,299,3,10877]},
{"name":"each",
"srcloc":["builtin://lists",446,0,15676,450,3,15861]},
{"name":"each3_n",
"srcloc":["builtin://lists",862,0,29567,873,3,30125]},
{"name":"all",
"srcloc":["builtin://lists",715,0,24010,721,3,24238]},
{"name":"fold",
"srcloc":["builtin://lists",427,0,14968,436,3,15297]},
{"name":"each2_n",
"srcloc":["builtin://lists",849,0,29105,860,3,29565]}]};
