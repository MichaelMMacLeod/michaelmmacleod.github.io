var _runtime = require("./runtime.js");
var _global = require("./global.arr.js");
var _nothing = undefined;
var G587 = require("./global.arr.js");
_runtime["addModule"]("builtin://global",G587);
var O888 = require("./option.arr.js");
_runtime["addModule"]("builtin://option",O888);
var E889 = require("./either.arr.js");
_runtime["addModule"]("builtin://either",E889);
var equality105 = require("./equality.arr.js");
_runtime["addModule"]("builtin://equality",equality105);
var RA94 = require("./raw-array.arr.js");
_runtime["addModule"]("builtin://raw-array",RA94);
var raise7 = _runtime["getModuleValue"]("builtin://global","raise");
var identical3114 = _runtime["getModuleValue"]("builtin://global","identical3");
var equal$always3134 = _runtime["getModuleValue"]("builtin://global","equal-always3");
var nothing210 = _runtime["getModuleValue"]("builtin://global","nothing");
var num$max390 = _runtime["getModuleValue"]("builtin://global","num-max");
var num$ceiling391 = _runtime["getModuleValue"]("builtin://global","num-ceiling");
var tostring404 = _runtime["getModuleValue"]("builtin://global","num-to-string");
var none518 = _runtime["getModuleValue"]("builtin://option","none");
var some524 = _runtime["getModuleValue"]("builtin://option","some");
var $empty850 = {"names":false};
var $link851 = {"names":["first","rest"]};
var $constructorTMP867 = {"$brand":$empty850,
"$tag":0};
function $binder_plus780(self777) {
var $inner781 = function inner_plus(other778) {
return self777["append"](other778);
};
$inner781["$brand"] = "METHOD";
$inner781["$binder"] = $binder_plus780;
return $inner781;
};
$constructorTMP867["_plus"] = $binder_plus780($constructorTMP867);
function $binderall712(self705) {
var $inner713 = function innerall(f708) {
var cases706 = self705;
var $ans707 = undefined;
switch(cases706.$tag) {
case 0: $ans707 = true;
break;
case 1: var first709 = cases706["first"];
var rest710 = cases706["rest"];
$ans707 = f708(first709) && rest710["all"](f708);
break;
default: $ans707 = _global["throwNoCasesMatched"](["builtin://lists",143,4,5362,146,7,5463],cases706);
}
return $ans707;
};
$inner713["$brand"] = "METHOD";
$inner713["$binder"] = $binderall712;
return $inner713;
};
$constructorTMP867["all"] = $binderall712($constructorTMP867);
function $binderany721(self714) {
var $inner722 = function innerany(f717) {
var cases715 = self714;
var $ans716 = undefined;
switch(cases715.$tag) {
case 0: $ans716 = false;
break;
case 1: var first718 = cases715["first"];
var rest719 = cases715["rest"];
$ans716 = f717(first718) || rest719["any"](f717);
break;
default: $ans716 = _global["throwNoCasesMatched"](["builtin://lists",151,4,5616,155,7,5725],cases715);
}
return $ans716;
};
$inner722["$brand"] = "METHOD";
$inner722["$binder"] = $binderany721;
return $inner722;
};
$constructorTMP867["any"] = $binderany721($constructorTMP867);
function $binderappend730(self723) {
var $inner731 = function innerappend(other726) {
var cases724 = self723;
var $ans725 = undefined;
switch(cases724.$tag) {
case 0: $ans725 = other726;
break;
case 1: var first727 = cases724["first"];
var rest728 = cases724["rest"];
$ans725 = link47(first727,rest728["append"](other726));
break;
default: $ans725 = _global["throwNoCasesMatched"](["builtin://lists",160,4,5878,164,7,5995],cases724);
}
return $ans725;
};
$inner731["$brand"] = "METHOD";
$inner731["$binder"] = $binderappend730;
return $inner731;
};
$constructorTMP867["append"] = $binderappend730($constructorTMP867);
function $binderdrop819(self817) {
var $inner820 = function innerdrop(n816) {
return split$at367(n816,self817)["suffix"];
};
$inner820["$brand"] = "METHOD";
$inner820["$binder"] = $binderdrop819;
return $inner820;
};
$constructorTMP867["drop"] = $binderdrop819($constructorTMP867);
function $bindereach795(self793) {
var $inner796 = function innereach(f792) {
return each571(f792,self793);
};
$inner796["$brand"] = "METHOD";
$inner796["$binder"] = $bindereach795;
return $inner796;
};
$constructorTMP867["each"] = $bindereach795($constructorTMP867);
function $binderfilter790(self788) {
var $inner791 = function innerfilter(f787) {
return filter608(f787,self788);
};
$inner791["$brand"] = "METHOD";
$inner791["$binder"] = $binderfilter790;
return $inner791;
};
$constructorTMP867["filter"] = $binderfilter790($constructorTMP867);
function $binderfind855(self852) {
var $inner856 = function innerfind(f853) {
return none518;
};
$inner856["$brand"] = "METHOD";
$inner856["$binder"] = $binderfind855;
return $inner856;
};
$constructorTMP867["find"] = $binderfind855($constructorTMP867);
function $binderfoldl703(self695) {
var $inner704 = function innerfoldl(f700,base698) {
var cases696 = self695;
var $ans697 = undefined;
switch(cases696.$tag) {
case 0: $ans697 = base698;
break;
case 1: var first701 = cases696["first"];
var rest699 = cases696["rest"];
$ans697 = rest699["foldl"](f700,f700(first701,base698));
break;
default: $ans697 = _global["throwNoCasesMatched"](["builtin://lists",135,4,5101,138,7,5207],cases696);
}
return $ans697;
};
$inner704["$brand"] = "METHOD";
$inner704["$binder"] = $binderfoldl703;
return $inner704;
};
$constructorTMP867["foldl"] = $binderfoldl703($constructorTMP867);
function $binderfoldr693(self685) {
var $inner694 = function innerfoldr(f689,base688) {
var cases686 = self685;
var $ans687 = undefined;
switch(cases686.$tag) {
case 0: $ans687 = base688;
break;
case 1: var first690 = cases686["first"];
var rest691 = cases686["rest"];
$ans687 = f689(first690,rest691["foldr"](f689,base688));
break;
default: $ans687 = _global["throwNoCasesMatched"](["builtin://lists",126,4,4774,129,7,4880],cases686);
}
return $ans687;
};
$inner694["$brand"] = "METHOD";
$inner694["$binder"] = $binderfoldr693;
return $inner694;
};
$constructorTMP867["foldr"] = $binderfoldr693($constructorTMP867);
function $binderget824(self821) {
var $inner825 = function innerget(n822) {
return get514(self821,n822);
};
$inner825["$brand"] = "METHOD";
$inner825["$binder"] = $binderget824;
return $inner825;
};
$constructorTMP867["get"] = $binderget824($constructorTMP867);
function $binderhead738(self732) {
var $inner739 = function innerhead() {
var cases733 = self732;
var $ans734 = undefined;
switch(cases733.$tag) {
case 0: $ans734 = raise7("head: empty list");
break;
case 1: var head735 = cases733["first"];
var $underscore736 = cases733["rest"];
$ans734 = head735;
break;
default: $ans734 = _global["throwNoCasesMatched"](["builtin://lists",168,4,6034,171,7,6132],cases733);
}
return $ans734;
};
$inner739["$brand"] = "METHOD";
$inner739["$binder"] = $binderhead738;
return $inner739;
};
$constructorTMP867["head"] = $binderhead738($constructorTMP867);
function $binderjoin$str840(self837) {
var $inner841 = function innerjoin$str(sep838) {
return join$str642(self837,sep838);
};
$inner841["$brand"] = "METHOD";
$inner841["$binder"] = $binderjoin$str840;
return $inner841;
};
$constructorTMP867["join-str"] = $binderjoin$str840($constructorTMP867);
function $binderjoin$str$last846(self842) {
var $inner847 = function innerjoin$str$last(sep843,last$sep844) {
return join$str$last632(self842,sep843,last$sep844);
};
$inner847["$brand"] = "METHOD";
$inner847["$binder"] = $binderjoin$str$last846;
return $inner847;
};
$constructorTMP867["join-str-last"] = $binderjoin$str$last846($constructorTMP867);
function $binderlast755(self748) {
var $inner756 = function innerlast() {
var cases749 = self748;
var $ans750 = undefined;
switch(cases749.$tag) {
case 0: $ans750 = raise7("last: took last of empty list");
break;
case 1: var first753 = cases749["first"];
var rest752 = cases749["rest"];
var $ans751 = undefined;
if(is$empty102(rest752)) {
$ans751 = self748["first"]} else {
$ans751 = rest752["last"]()}
$ans750 = $ans751;
break;
default: $ans750 = _global["throwNoCasesMatched"](["builtin://lists",183,4,6404,194,7,6620],cases749);
}
return $ans750;
};
$inner756["$brand"] = "METHOD";
$inner756["$binder"] = $binderlast755;
return $inner756;
};
$constructorTMP867["last"] = $binderlast755($constructorTMP867);
function $binderlength674(self668) {
var $inner675 = function innerlength() {
var cases669 = self668;
var $ans670 = undefined;
switch(cases669.$tag) {
case 0: $ans670 = (0);
break;
case 1: var first672 = cases669["first"];
var rest671 = cases669["rest"];
$ans670 = _runtime["_add"]((1),rest671["length"](),_runtime["_errCallbacks"]);
break;
default: $ans670 = _global["throwNoCasesMatched"](["builtin://lists",109,4,4210,112,7,4301],cases669);
}
return $ans670;
};
$inner675["$brand"] = "METHOD";
$inner675["$binder"] = $binderlength674;
return $inner675;
};
$constructorTMP867["length"] = $binderlength674($constructorTMP867);
function $bindermap785(self783) {
var $inner786 = function innermap(f782) {
return map562(f782,self783);
};
$inner786["$brand"] = "METHOD";
$inner786["$binder"] = $bindermap785;
return $inner786;
};
$constructorTMP867["map"] = $bindermap785($constructorTMP867);
function $bindermember683(self676) {
var $inner684 = function innermember(elt679) {
var cases677 = self676;
var $ans678 = undefined;
switch(cases677.$tag) {
case 0: $ans678 = false;
break;
case 1: var first680 = cases677["first"];
var rest681 = cases677["rest"];
$ans678 = _runtime["equal-always"](elt679,first680) || rest681["member"](elt679);
break;
default: $ans678 = _global["throwNoCasesMatched"](["builtin://lists",117,4,4439,120,7,4552],cases677);
}
return $ans678;
};
$inner684["$brand"] = "METHOD";
$inner684["$binder"] = $bindermember683;
return $inner684;
};
$constructorTMP867["member"] = $bindermember683($constructorTMP867);
function $binderpartition861(self858) {
var $inner862 = function innerpartition(f859) {
var $temporary857 = {"is-true":empty39,
"is-false":empty39};
return $temporary857;
};
$inner862["$brand"] = "METHOD";
$inner862["$binder"] = $binderpartition861;
return $inner862;
};
$constructorTMP867["partition"] = $binderpartition861($constructorTMP867);
function $binderpush804(self802) {
var $inner805 = function innerpush(elt801) {
return link47(elt801,self802);
};
$inner805["$brand"] = "METHOD";
$inner805["$binder"] = $binderpush804;
return $inner805;
};
$constructorTMP867["push"] = $binderpush804($constructorTMP867);
function $binderremove835(self832) {
var $inner836 = function innerremove(e833) {
return remove614(self832,e833);
};
$inner836["$brand"] = "METHOD";
$inner836["$binder"] = $binderremove835;
return $inner836;
};
$constructorTMP867["remove"] = $binderremove835($constructorTMP867);
function $binderreverse799(self797) {
var $inner800 = function innerreverse() {
return reverse576(self797);
};
$inner800["$brand"] = "METHOD";
$inner800["$binder"] = $binderreverse799;
return $inner800;
};
$constructorTMP867["reverse"] = $binderreverse799($constructorTMP867);
function $binderset830(self826) {
var $inner831 = function innerset(n827,e828) {
return function$set501(self826,n827,e828);
};
$inner831["$brand"] = "METHOD";
$inner831["$binder"] = $binderset830;
return $inner831;
};
$constructorTMP867["set"] = $binderset830($constructorTMP867);
function $bindersort865(self863) {
var $inner866 = function innersort() {
return self863;
};
$inner866["$brand"] = "METHOD";
$inner866["$binder"] = $bindersort865;
return $inner866;
};
$constructorTMP867["sort"] = $bindersort865($constructorTMP867);
function $bindersort$by775(self757) {
var $inner776 = function innersort$by(cmp769,eq768) {
var cases758 = self757;
var $ans759 = undefined;
switch(cases758.$tag) {
case 0: $ans759 = self757;
break;
case 1: var first763 = cases758["first"];
var $underscore773 = cases758["rest"];
var pivot764 = first763;
var are$lt762 = empty39;
var are$eq761 = empty39;
var are$gt760 = empty39;
self757["each"](function (e767) {
var $ans765 = undefined;
if(cmp769(e767,pivot764)) {
$ans765 = are$lt762 = link47(e767,are$lt762)} else {
var $ans766 = undefined;
if(eq768(e767,pivot764)) {
$ans766 = are$eq761 = link47(e767,are$eq761)} else {
$ans766 = are$gt760 = link47(e767,are$gt760)}
$ans765 = $ans766}
return $ans765;
});
var less772 = are$lt762["sort-by"](cmp769,eq768);
var equal771 = are$eq761;
var greater770 = are$gt760["sort-by"](cmp769,eq768);
$ans759 = less772["append"](equal771["append"](greater770));
break;
default: $ans759 = _global["throwNoCasesMatched"](["builtin://lists",201,4,6982,233,7,8214],cases758);
}
return $ans759;
};
$inner776["$brand"] = "METHOD";
$inner776["$binder"] = $bindersort$by775;
return $inner776;
};
$constructorTMP867["sort-by"] = $bindersort$by775($constructorTMP867);
function $bindersplit$at809(self807) {
var $inner810 = function innersplit$at(n806) {
return split$at367(n806,self807);
};
$inner810["$brand"] = "METHOD";
$inner810["$binder"] = $bindersplit$at809;
return $inner810;
};
$constructorTMP867["split-at"] = $bindersplit$at809($constructorTMP867);
function $bindertail746(self740) {
var $inner747 = function innertail() {
var cases741 = self740;
var $ans742 = undefined;
switch(cases741.$tag) {
case 0: $ans742 = raise7("tail: empty list");
break;
case 1: var $underscore744 = cases741["first"];
var tail743 = cases741["rest"];
$ans742 = tail743;
break;
default: $ans742 = _global["throwNoCasesMatched"](["builtin://lists",175,4,6177,178,7,6275],cases741);
}
return $ans742;
};
$inner747["$brand"] = "METHOD";
$inner747["$binder"] = $bindertail746;
return $inner747;
};
$constructorTMP867["tail"] = $bindertail746($constructorTMP867);
function $bindertake814(self812) {
var $inner815 = function innertake(n811) {
return split$at367(n811,self812)["prefix"];
};
$inner815["$brand"] = "METHOD";
$inner815["$binder"] = $bindertake814;
return $inner815;
};
$constructorTMP867["take"] = $bindertake814($constructorTMP867);
function $binderlength674(self668) {
var $inner675 = function innerlength() {
var cases669 = self668;
var $ans670 = undefined;
switch(cases669.$tag) {
case 0: $ans670 = (0);
break;
case 1: var first672 = cases669["first"];
var rest671 = cases669["rest"];
$ans670 = _runtime["_add"]((1),rest671["length"](),_runtime["_errCallbacks"]);
break;
default: $ans670 = _global["throwNoCasesMatched"](["builtin://lists",109,4,4210,112,7,4301],cases669);
}
return $ans670;
};
$inner675["$brand"] = "METHOD";
$inner675["$binder"] = $binderlength674;
return $inner675;
};
function $bindermember683(self676) {
var $inner684 = function innermember(elt679) {
var cases677 = self676;
var $ans678 = undefined;
switch(cases677.$tag) {
case 0: $ans678 = false;
break;
case 1: var first680 = cases677["first"];
var rest681 = cases677["rest"];
$ans678 = _runtime["equal-always"](elt679,first680) || rest681["member"](elt679);
break;
default: $ans678 = _global["throwNoCasesMatched"](["builtin://lists",117,4,4439,120,7,4552],cases677);
}
return $ans678;
};
$inner684["$brand"] = "METHOD";
$inner684["$binder"] = $bindermember683;
return $inner684;
};
function $binderfoldr693(self685) {
var $inner694 = function innerfoldr(f689,base688) {
var cases686 = self685;
var $ans687 = undefined;
switch(cases686.$tag) {
case 0: $ans687 = base688;
break;
case 1: var first690 = cases686["first"];
var rest691 = cases686["rest"];
$ans687 = f689(first690,rest691["foldr"](f689,base688));
break;
default: $ans687 = _global["throwNoCasesMatched"](["builtin://lists",126,4,4774,129,7,4880],cases686);
}
return $ans687;
};
$inner694["$brand"] = "METHOD";
$inner694["$binder"] = $binderfoldr693;
return $inner694;
};
function $binderfoldl703(self695) {
var $inner704 = function innerfoldl(f700,base698) {
var cases696 = self695;
var $ans697 = undefined;
switch(cases696.$tag) {
case 0: $ans697 = base698;
break;
case 1: var first701 = cases696["first"];
var rest699 = cases696["rest"];
$ans697 = rest699["foldl"](f700,f700(first701,base698));
break;
default: $ans697 = _global["throwNoCasesMatched"](["builtin://lists",135,4,5101,138,7,5207],cases696);
}
return $ans697;
};
$inner704["$brand"] = "METHOD";
$inner704["$binder"] = $binderfoldl703;
return $inner704;
};
function $binderall712(self705) {
var $inner713 = function innerall(f708) {
var cases706 = self705;
var $ans707 = undefined;
switch(cases706.$tag) {
case 0: $ans707 = true;
break;
case 1: var first709 = cases706["first"];
var rest710 = cases706["rest"];
$ans707 = f708(first709) && rest710["all"](f708);
break;
default: $ans707 = _global["throwNoCasesMatched"](["builtin://lists",143,4,5362,146,7,5463],cases706);
}
return $ans707;
};
$inner713["$brand"] = "METHOD";
$inner713["$binder"] = $binderall712;
return $inner713;
};
function $binderany721(self714) {
var $inner722 = function innerany(f717) {
var cases715 = self714;
var $ans716 = undefined;
switch(cases715.$tag) {
case 0: $ans716 = false;
break;
case 1: var first718 = cases715["first"];
var rest719 = cases715["rest"];
$ans716 = f717(first718) || rest719["any"](f717);
break;
default: $ans716 = _global["throwNoCasesMatched"](["builtin://lists",151,4,5616,155,7,5725],cases715);
}
return $ans716;
};
$inner722["$brand"] = "METHOD";
$inner722["$binder"] = $binderany721;
return $inner722;
};
function $binderappend730(self723) {
var $inner731 = function innerappend(other726) {
var cases724 = self723;
var $ans725 = undefined;
switch(cases724.$tag) {
case 0: $ans725 = other726;
break;
case 1: var first727 = cases724["first"];
var rest728 = cases724["rest"];
$ans725 = link47(first727,rest728["append"](other726));
break;
default: $ans725 = _global["throwNoCasesMatched"](["builtin://lists",160,4,5878,164,7,5995],cases724);
}
return $ans725;
};
$inner731["$brand"] = "METHOD";
$inner731["$binder"] = $binderappend730;
return $inner731;
};
function $binderhead738(self732) {
var $inner739 = function innerhead() {
var cases733 = self732;
var $ans734 = undefined;
switch(cases733.$tag) {
case 0: $ans734 = raise7("head: empty list");
break;
case 1: var head735 = cases733["first"];
var $underscore736 = cases733["rest"];
$ans734 = head735;
break;
default: $ans734 = _global["throwNoCasesMatched"](["builtin://lists",168,4,6034,171,7,6132],cases733);
}
return $ans734;
};
$inner739["$brand"] = "METHOD";
$inner739["$binder"] = $binderhead738;
return $inner739;
};
function $bindertail746(self740) {
var $inner747 = function innertail() {
var cases741 = self740;
var $ans742 = undefined;
switch(cases741.$tag) {
case 0: $ans742 = raise7("tail: empty list");
break;
case 1: var $underscore744 = cases741["first"];
var tail743 = cases741["rest"];
$ans742 = tail743;
break;
default: $ans742 = _global["throwNoCasesMatched"](["builtin://lists",175,4,6177,178,7,6275],cases741);
}
return $ans742;
};
$inner747["$brand"] = "METHOD";
$inner747["$binder"] = $bindertail746;
return $inner747;
};
function $binderlast755(self748) {
var $inner756 = function innerlast() {
var cases749 = self748;
var $ans750 = undefined;
switch(cases749.$tag) {
case 0: $ans750 = raise7("last: took last of empty list");
break;
case 1: var first753 = cases749["first"];
var rest752 = cases749["rest"];
var $ans751 = undefined;
if(is$empty102(rest752)) {
$ans751 = self748["first"]} else {
$ans751 = rest752["last"]()}
$ans750 = $ans751;
break;
default: $ans750 = _global["throwNoCasesMatched"](["builtin://lists",183,4,6404,194,7,6620],cases749);
}
return $ans750;
};
$inner756["$brand"] = "METHOD";
$inner756["$binder"] = $binderlast755;
return $inner756;
};
function $bindersort$by775(self757) {
var $inner776 = function innersort$by(cmp769,eq768) {
var cases758 = self757;
var $ans759 = undefined;
switch(cases758.$tag) {
case 0: $ans759 = self757;
break;
case 1: var first763 = cases758["first"];
var $underscore773 = cases758["rest"];
var pivot764 = first763;
var are$lt762 = empty39;
var are$eq761 = empty39;
var are$gt760 = empty39;
self757["each"](function (e767) {
var $ans765 = undefined;
if(cmp769(e767,pivot764)) {
$ans765 = are$lt762 = link47(e767,are$lt762)} else {
var $ans766 = undefined;
if(eq768(e767,pivot764)) {
$ans766 = are$eq761 = link47(e767,are$eq761)} else {
$ans766 = are$gt760 = link47(e767,are$gt760)}
$ans765 = $ans766}
return $ans765;
});
var less772 = are$lt762["sort-by"](cmp769,eq768);
var equal771 = are$eq761;
var greater770 = are$gt760["sort-by"](cmp769,eq768);
$ans759 = less772["append"](equal771["append"](greater770));
break;
default: $ans759 = _global["throwNoCasesMatched"](["builtin://lists",201,4,6982,233,7,8214],cases758);
}
return $ans759;
};
$inner776["$brand"] = "METHOD";
$inner776["$binder"] = $bindersort$by775;
return $inner776;
};
function $binder_plus780(self777) {
var $inner781 = function inner_plus(other778) {
return self777["append"](other778);
};
$inner781["$brand"] = "METHOD";
$inner781["$binder"] = $binder_plus780;
return $inner781;
};
function $bindermap785(self783) {
var $inner786 = function innermap(f782) {
return map562(f782,self783);
};
$inner786["$brand"] = "METHOD";
$inner786["$binder"] = $bindermap785;
return $inner786;
};
function $binderfilter790(self788) {
var $inner791 = function innerfilter(f787) {
return filter608(f787,self788);
};
$inner791["$brand"] = "METHOD";
$inner791["$binder"] = $binderfilter790;
return $inner791;
};
function $bindereach795(self793) {
var $inner796 = function innereach(f792) {
return each571(f792,self793);
};
$inner796["$brand"] = "METHOD";
$inner796["$binder"] = $bindereach795;
return $inner796;
};
function $binderreverse799(self797) {
var $inner800 = function innerreverse() {
return reverse576(self797);
};
$inner800["$brand"] = "METHOD";
$inner800["$binder"] = $binderreverse799;
return $inner800;
};
function $binderpush804(self802) {
var $inner805 = function innerpush(elt801) {
return link47(elt801,self802);
};
$inner805["$brand"] = "METHOD";
$inner805["$binder"] = $binderpush804;
return $inner805;
};
function $bindersplit$at809(self807) {
var $inner810 = function innersplit$at(n806) {
return split$at367(n806,self807);
};
$inner810["$brand"] = "METHOD";
$inner810["$binder"] = $bindersplit$at809;
return $inner810;
};
function $bindertake814(self812) {
var $inner815 = function innertake(n811) {
return split$at367(n811,self812)["prefix"];
};
$inner815["$brand"] = "METHOD";
$inner815["$binder"] = $bindertake814;
return $inner815;
};
function $binderdrop819(self817) {
var $inner820 = function innerdrop(n816) {
return split$at367(n816,self817)["suffix"];
};
$inner820["$brand"] = "METHOD";
$inner820["$binder"] = $binderdrop819;
return $inner820;
};
function $binderget824(self821) {
var $inner825 = function innerget(n822) {
return get514(self821,n822);
};
$inner825["$brand"] = "METHOD";
$inner825["$binder"] = $binderget824;
return $inner825;
};
function $binderset830(self826) {
var $inner831 = function innerset(n827,e828) {
return function$set501(self826,n827,e828);
};
$inner831["$brand"] = "METHOD";
$inner831["$binder"] = $binderset830;
return $inner831;
};
function $binderremove835(self832) {
var $inner836 = function innerremove(e833) {
return remove614(self832,e833);
};
$inner836["$brand"] = "METHOD";
$inner836["$binder"] = $binderremove835;
return $inner836;
};
function $binderjoin$str840(self837) {
var $inner841 = function innerjoin$str(sep838) {
return join$str642(self837,sep838);
};
$inner841["$brand"] = "METHOD";
$inner841["$binder"] = $binderjoin$str840;
return $inner841;
};
function $binderjoin$str$last846(self842) {
var $inner847 = function innerjoin$str$last(sep843,last$sep844) {
return join$str$last632(self842,sep843,last$sep844);
};
$inner847["$brand"] = "METHOD";
$inner847["$binder"] = $binderjoin$str$last846;
return $inner847;
};
var List665 = {"empty":$constructorTMP867,
"link":function link(first879,rest880) {
var $constructorTMP881 = {"$brand":$link851,
"$tag":1,
"first":first879,
"rest":rest880};
function $binder_plus780(self777) {
var $inner781 = function inner_plus(other778) {
return self777["append"](other778);
};
$inner781["$brand"] = "METHOD";
$inner781["$binder"] = $binder_plus780;
return $inner781;
};
$constructorTMP881["_plus"] = $binder_plus780($constructorTMP881);
function $binderall712(self705) {
var $inner713 = function innerall(f708) {
var cases706 = self705;
var $ans707 = undefined;
switch(cases706.$tag) {
case 0: $ans707 = true;
break;
case 1: var first709 = cases706["first"];
var rest710 = cases706["rest"];
$ans707 = f708(first709) && rest710["all"](f708);
break;
default: $ans707 = _global["throwNoCasesMatched"](["builtin://lists",143,4,5362,146,7,5463],cases706);
}
return $ans707;
};
$inner713["$brand"] = "METHOD";
$inner713["$binder"] = $binderall712;
return $inner713;
};
$constructorTMP881["all"] = $binderall712($constructorTMP881);
function $binderany721(self714) {
var $inner722 = function innerany(f717) {
var cases715 = self714;
var $ans716 = undefined;
switch(cases715.$tag) {
case 0: $ans716 = false;
break;
case 1: var first718 = cases715["first"];
var rest719 = cases715["rest"];
$ans716 = f717(first718) || rest719["any"](f717);
break;
default: $ans716 = _global["throwNoCasesMatched"](["builtin://lists",151,4,5616,155,7,5725],cases715);
}
return $ans716;
};
$inner722["$brand"] = "METHOD";
$inner722["$binder"] = $binderany721;
return $inner722;
};
$constructorTMP881["any"] = $binderany721($constructorTMP881);
function $binderappend730(self723) {
var $inner731 = function innerappend(other726) {
var cases724 = self723;
var $ans725 = undefined;
switch(cases724.$tag) {
case 0: $ans725 = other726;
break;
case 1: var first727 = cases724["first"];
var rest728 = cases724["rest"];
$ans725 = link47(first727,rest728["append"](other726));
break;
default: $ans725 = _global["throwNoCasesMatched"](["builtin://lists",160,4,5878,164,7,5995],cases724);
}
return $ans725;
};
$inner731["$brand"] = "METHOD";
$inner731["$binder"] = $binderappend730;
return $inner731;
};
$constructorTMP881["append"] = $binderappend730($constructorTMP881);
function $binderdrop819(self817) {
var $inner820 = function innerdrop(n816) {
return split$at367(n816,self817)["suffix"];
};
$inner820["$brand"] = "METHOD";
$inner820["$binder"] = $binderdrop819;
return $inner820;
};
$constructorTMP881["drop"] = $binderdrop819($constructorTMP881);
function $bindereach795(self793) {
var $inner796 = function innereach(f792) {
return each571(f792,self793);
};
$inner796["$brand"] = "METHOD";
$inner796["$binder"] = $bindereach795;
return $inner796;
};
$constructorTMP881["each"] = $bindereach795($constructorTMP881);
function $binderfilter790(self788) {
var $inner791 = function innerfilter(f787) {
return filter608(f787,self788);
};
$inner791["$brand"] = "METHOD";
$inner791["$binder"] = $binderfilter790;
return $inner791;
};
$constructorTMP881["filter"] = $binderfilter790($constructorTMP881);
function $binderfind874(self873) {
var $inner875 = function innerfind(f872) {
return find520(f872,self873);
};
$inner875["$brand"] = "METHOD";
$inner875["$binder"] = $binderfind874;
return $inner875;
};
$constructorTMP881["find"] = $binderfind874($constructorTMP881);
function $binderfoldl703(self695) {
var $inner704 = function innerfoldl(f700,base698) {
var cases696 = self695;
var $ans697 = undefined;
switch(cases696.$tag) {
case 0: $ans697 = base698;
break;
case 1: var first701 = cases696["first"];
var rest699 = cases696["rest"];
$ans697 = rest699["foldl"](f700,f700(first701,base698));
break;
default: $ans697 = _global["throwNoCasesMatched"](["builtin://lists",135,4,5101,138,7,5207],cases696);
}
return $ans697;
};
$inner704["$brand"] = "METHOD";
$inner704["$binder"] = $binderfoldl703;
return $inner704;
};
$constructorTMP881["foldl"] = $binderfoldl703($constructorTMP881);
function $binderfoldr693(self685) {
var $inner694 = function innerfoldr(f689,base688) {
var cases686 = self685;
var $ans687 = undefined;
switch(cases686.$tag) {
case 0: $ans687 = base688;
break;
case 1: var first690 = cases686["first"];
var rest691 = cases686["rest"];
$ans687 = f689(first690,rest691["foldr"](f689,base688));
break;
default: $ans687 = _global["throwNoCasesMatched"](["builtin://lists",126,4,4774,129,7,4880],cases686);
}
return $ans687;
};
$inner694["$brand"] = "METHOD";
$inner694["$binder"] = $binderfoldr693;
return $inner694;
};
$constructorTMP881["foldr"] = $binderfoldr693($constructorTMP881);
function $binderget824(self821) {
var $inner825 = function innerget(n822) {
return get514(self821,n822);
};
$inner825["$brand"] = "METHOD";
$inner825["$binder"] = $binderget824;
return $inner825;
};
$constructorTMP881["get"] = $binderget824($constructorTMP881);
function $binderhead738(self732) {
var $inner739 = function innerhead() {
var cases733 = self732;
var $ans734 = undefined;
switch(cases733.$tag) {
case 0: $ans734 = raise7("head: empty list");
break;
case 1: var head735 = cases733["first"];
var $underscore736 = cases733["rest"];
$ans734 = head735;
break;
default: $ans734 = _global["throwNoCasesMatched"](["builtin://lists",168,4,6034,171,7,6132],cases733);
}
return $ans734;
};
$inner739["$brand"] = "METHOD";
$inner739["$binder"] = $binderhead738;
return $inner739;
};
$constructorTMP881["head"] = $binderhead738($constructorTMP881);
function $binderjoin$str840(self837) {
var $inner841 = function innerjoin$str(sep838) {
return join$str642(self837,sep838);
};
$inner841["$brand"] = "METHOD";
$inner841["$binder"] = $binderjoin$str840;
return $inner841;
};
$constructorTMP881["join-str"] = $binderjoin$str840($constructorTMP881);
function $binderjoin$str$last846(self842) {
var $inner847 = function innerjoin$str$last(sep843,last$sep844) {
return join$str$last632(self842,sep843,last$sep844);
};
$inner847["$brand"] = "METHOD";
$inner847["$binder"] = $binderjoin$str$last846;
return $inner847;
};
$constructorTMP881["join-str-last"] = $binderjoin$str$last846($constructorTMP881);
function $binderlast755(self748) {
var $inner756 = function innerlast() {
var cases749 = self748;
var $ans750 = undefined;
switch(cases749.$tag) {
case 0: $ans750 = raise7("last: took last of empty list");
break;
case 1: var first753 = cases749["first"];
var rest752 = cases749["rest"];
var $ans751 = undefined;
if(is$empty102(rest752)) {
$ans751 = self748["first"]} else {
$ans751 = rest752["last"]()}
$ans750 = $ans751;
break;
default: $ans750 = _global["throwNoCasesMatched"](["builtin://lists",183,4,6404,194,7,6620],cases749);
}
return $ans750;
};
$inner756["$brand"] = "METHOD";
$inner756["$binder"] = $binderlast755;
return $inner756;
};
$constructorTMP881["last"] = $binderlast755($constructorTMP881);
function $binderlength674(self668) {
var $inner675 = function innerlength() {
var cases669 = self668;
var $ans670 = undefined;
switch(cases669.$tag) {
case 0: $ans670 = (0);
break;
case 1: var first672 = cases669["first"];
var rest671 = cases669["rest"];
$ans670 = _runtime["_add"]((1),rest671["length"](),_runtime["_errCallbacks"]);
break;
default: $ans670 = _global["throwNoCasesMatched"](["builtin://lists",109,4,4210,112,7,4301],cases669);
}
return $ans670;
};
$inner675["$brand"] = "METHOD";
$inner675["$binder"] = $binderlength674;
return $inner675;
};
$constructorTMP881["length"] = $binderlength674($constructorTMP881);
function $bindermap785(self783) {
var $inner786 = function innermap(f782) {
return map562(f782,self783);
};
$inner786["$brand"] = "METHOD";
$inner786["$binder"] = $bindermap785;
return $inner786;
};
$constructorTMP881["map"] = $bindermap785($constructorTMP881);
function $bindermember683(self676) {
var $inner684 = function innermember(elt679) {
var cases677 = self676;
var $ans678 = undefined;
switch(cases677.$tag) {
case 0: $ans678 = false;
break;
case 1: var first680 = cases677["first"];
var rest681 = cases677["rest"];
$ans678 = _runtime["equal-always"](elt679,first680) || rest681["member"](elt679);
break;
default: $ans678 = _global["throwNoCasesMatched"](["builtin://lists",117,4,4439,120,7,4552],cases677);
}
return $ans678;
};
$inner684["$brand"] = "METHOD";
$inner684["$binder"] = $bindermember683;
return $inner684;
};
$constructorTMP881["member"] = $bindermember683($constructorTMP881);
function $binderpartition870(self869) {
var $inner871 = function innerpartition(f868) {
return partition541(f868,self869);
};
$inner871["$brand"] = "METHOD";
$inner871["$binder"] = $binderpartition870;
return $inner871;
};
$constructorTMP881["partition"] = $binderpartition870($constructorTMP881);
function $binderpush804(self802) {
var $inner805 = function innerpush(elt801) {
return link47(elt801,self802);
};
$inner805["$brand"] = "METHOD";
$inner805["$binder"] = $binderpush804;
return $inner805;
};
$constructorTMP881["push"] = $binderpush804($constructorTMP881);
function $binderremove835(self832) {
var $inner836 = function innerremove(e833) {
return remove614(self832,e833);
};
$inner836["$brand"] = "METHOD";
$inner836["$binder"] = $binderremove835;
return $inner836;
};
$constructorTMP881["remove"] = $binderremove835($constructorTMP881);
function $binderreverse799(self797) {
var $inner800 = function innerreverse() {
return reverse576(self797);
};
$inner800["$brand"] = "METHOD";
$inner800["$binder"] = $binderreverse799;
return $inner800;
};
$constructorTMP881["reverse"] = $binderreverse799($constructorTMP881);
function $binderset830(self826) {
var $inner831 = function innerset(n827,e828) {
return function$set501(self826,n827,e828);
};
$inner831["$brand"] = "METHOD";
$inner831["$binder"] = $binderset830;
return $inner831;
};
$constructorTMP881["set"] = $binderset830($constructorTMP881);
function $bindersort877(self876) {
var $inner878 = function innersort() {
return raise7("TODO: fix typechecker / ordering to implement sort()");
};
$inner878["$brand"] = "METHOD";
$inner878["$binder"] = $bindersort877;
return $inner878;
};
$constructorTMP881["sort"] = $bindersort877($constructorTMP881);
function $bindersort$by775(self757) {
var $inner776 = function innersort$by(cmp769,eq768) {
var cases758 = self757;
var $ans759 = undefined;
switch(cases758.$tag) {
case 0: $ans759 = self757;
break;
case 1: var first763 = cases758["first"];
var $underscore773 = cases758["rest"];
var pivot764 = first763;
var are$lt762 = empty39;
var are$eq761 = empty39;
var are$gt760 = empty39;
self757["each"](function (e767) {
var $ans765 = undefined;
if(cmp769(e767,pivot764)) {
$ans765 = are$lt762 = link47(e767,are$lt762)} else {
var $ans766 = undefined;
if(eq768(e767,pivot764)) {
$ans766 = are$eq761 = link47(e767,are$eq761)} else {
$ans766 = are$gt760 = link47(e767,are$gt760)}
$ans765 = $ans766}
return $ans765;
});
var less772 = are$lt762["sort-by"](cmp769,eq768);
var equal771 = are$eq761;
var greater770 = are$gt760["sort-by"](cmp769,eq768);
$ans759 = less772["append"](equal771["append"](greater770));
break;
default: $ans759 = _global["throwNoCasesMatched"](["builtin://lists",201,4,6982,233,7,8214],cases758);
}
return $ans759;
};
$inner776["$brand"] = "METHOD";
$inner776["$binder"] = $bindersort$by775;
return $inner776;
};
$constructorTMP881["sort-by"] = $bindersort$by775($constructorTMP881);
function $bindersplit$at809(self807) {
var $inner810 = function innersplit$at(n806) {
return split$at367(n806,self807);
};
$inner810["$brand"] = "METHOD";
$inner810["$binder"] = $bindersplit$at809;
return $inner810;
};
$constructorTMP881["split-at"] = $bindersplit$at809($constructorTMP881);
function $bindertail746(self740) {
var $inner747 = function innertail() {
var cases741 = self740;
var $ans742 = undefined;
switch(cases741.$tag) {
case 0: $ans742 = raise7("tail: empty list");
break;
case 1: var $underscore744 = cases741["first"];
var tail743 = cases741["rest"];
$ans742 = tail743;
break;
default: $ans742 = _global["throwNoCasesMatched"](["builtin://lists",175,4,6177,178,7,6275],cases741);
}
return $ans742;
};
$inner747["$brand"] = "METHOD";
$inner747["$binder"] = $bindertail746;
return $inner747;
};
$constructorTMP881["tail"] = $bindertail746($constructorTMP881);
function $bindertake814(self812) {
var $inner815 = function innertake(n811) {
return split$at367(n811,self812)["prefix"];
};
$inner815["$brand"] = "METHOD";
$inner815["$binder"] = $bindertake814;
return $inner815;
};
$constructorTMP881["take"] = $bindertake814($constructorTMP881);
return $constructorTMP881;
},
"is-empty":function empty(val) {
return val.$brand === $empty850;
},
"is-link":function link(val) {
return val.$brand === $link851;
}};
var is$List667 = List665["List"];
var is$empty102 = List665["is-empty"];
var empty39 = List665["empty"];
var is$link666 = List665["is-link"];
var link47 = List665["link"];
var to$raw$array664 = function to$raw$array(lst660) {
return lst660["foldl"](function (elem662,acc661) {
return RA94["raw-array-push"](acc661,elem662);
},RA94["raw-array"]["make"]([]));
};
var raw$array$to$list101 = function raw$array$to$list(array658) {
return RA94["raw-array-foldr"](function (acc657,current656) {
return link47(current656,acc657);
},empty39,array658);
};
var foldl$complicated629 = function foldl$complicated(is$first654,flist643,f649,x650,l651,base653) {
var cases644 = flist643;
var $ans645 = undefined;
switch(cases644.$tag) {
case 1: var head652 = cases644["first"];
var tail648 = cases644["rest"];
var $ans646 = undefined;
if(is$first654) {
$ans646 = foldl$complicated629(false,tail648,f649,x650,l651,f649(head652,base653))} else {
var $ans647 = undefined;
if(_runtime["equal-always"](tail648,empty39)) {
$ans647 = foldl$complicated629(false,tail648,f649,x650,l651,l651(head652,base653))} else {
$ans647 = foldl$complicated629(false,tail648,f649,x650,l651,x650(head652,base653))}
$ans646 = $ans647}
$ans645 = $ans646;
break;
case 0: $ans645 = base653;
break;
default: $ans645 = _global["throwNoCasesMatched"](["builtin://lists",318,2,11455,328,5,11784],cases644);
}
return $ans645;
};
var join$str642 = function join$str(l640,sep634) {
var f639 = function (elem638,acc637) {
return _runtime["_add"](acc637,G587["js-to-string"](elem638),_runtime["_errCallbacks"]);
};
var x636 = function (elem635,acc633) {
return _runtime["_add"](_runtime["_add"](acc633,sep634,_runtime["_errCallbacks"]),G587["js-to-string"](elem635),_runtime["_errCallbacks"]);
};
return foldl$complicated629(true,l640,f639,x636,x636,"");
};
var join$str$last632 = function join$str$last(jlist630,sep623,last$sep619) {
var f628 = function (elem627,acc626) {
return _runtime["_add"](acc626,G587["js-to-string"](elem627),_runtime["_errCallbacks"]);
};
var x625 = function (elem624,acc622) {
return _runtime["_add"](_runtime["_add"](acc622,sep623,_runtime["_errCallbacks"]),G587["js-to-string"](elem624),_runtime["_errCallbacks"]);
};
var l621 = function (elem620,acc618) {
return _runtime["_add"](_runtime["_add"](acc618,last$sep619,_runtime["_errCallbacks"]),G587["js-to-string"](elem620),_runtime["_errCallbacks"]);
};
return foldl$complicated629(true,jlist630,f628,x625,l621,"");
};
var remove614 = function remove(lst609,elt615) {
var cases610 = lst609;
var $ans611 = undefined;
switch(cases610.$tag) {
case 0: $ans611 = empty39;
break;
case 1: var first613 = cases610["first"];
var rest616 = cases610["rest"];
var $ans612 = undefined;
if(_runtime["equal-always"](elt615,lst609["first"])) {
$ans612 = remove614(rest616,elt615)} else {
$ans612 = link47(first613,remove614(lst609["rest"],elt615))}
$ans611 = $ans612;
break;
default: $ans611 = _global["throwNoCasesMatched"](["builtin://lists",376,2,13574,384,5,13762],cases610);
}
return $ans611;
};
var filter608 = function filter(f605,lst602) {
return lst602["foldr"](function (e606,acc604) {
var $ans603 = undefined;
if(f605(e606)) {
$ans603 = link47(e606,acc604)} else {
$ans603 = acc604}
return $ans603;
},empty39);
};
var split$at367 = function split$at(n586,lst599) {
var $ans585 = undefined;
if(_runtime["_lessthan"](n586,(0),_runtime["_errCallbacks"]) || G587["not"](G587["num-is-integer"](n586))) {
raise7("Invalid index");
$ans585 = nothing210} else {
$ans585 = nothing210}
$ans585;
var prefix589 = empty39;
var suffix588 = empty39;
var help594 = function help(ind595,l591) {
var $ans590 = undefined;
if(_runtime["equal-always"](ind595,(0))) {
$ans590 = suffix588 = l591} else {
var cases592 = l591;
var $ans593 = undefined;
switch(cases592.$tag) {
case 0: $ans593 = raise7("Index too large");
break;
case 1: var fst597 = cases592["first"];
var rst596 = cases592["rest"];
help594(_runtime["_subtract"](ind595,(1),_runtime["_errCallbacks"]),rst596);
$ans593 = prefix589 = function (arg_598) {
return link47(arg_598,prefix589);
}(fst597);
break;
default: $ans593 = _global["throwNoCasesMatched"](["builtin://lists",413,6,14579,418,9,14752],cases592);
}
$ans590 = $ans593}
return $ans590;
};
help594(n586,lst599);
var $temporary600 = {"prefix":prefix589,
"suffix":suffix588};
return $temporary600;
};
var fold565 = function fold(f580,base581,lst577) {
var cases578 = lst577;
var $ans579 = undefined;
switch(cases578.$tag) {
case 1: var fst582 = cases578["first"];
var rst583 = cases578["rest"];
$ans579 = fold565(f580,f580(base581,fst582),rst583);
break;
case 0: $ans579 = base581;
break;
default: $ans579 = _global["throwNoCasesMatched"](["builtin://lists",430,2,15188,435,5,15293],cases578);
}
return $ans579;
};
var reverse576 = function reverse(lst574) {
return fold565(function (acc573,elt572) {
return link47(elt572,acc573);
},empty39,lst574);
};
var each571 = function each(f566,lst569) {
fold565(function ($underscore568,elt567) {
return f566(elt567);
},nothing210,lst569);
return nothing210;
};
var map562 = function map(f560,lst557) {
var cases558 = lst557;
var $ans559 = undefined;
switch(cases558.$tag) {
case 1: var fst561 = cases558["first"];
var rst563 = cases558["rest"];
$ans559 = link47(f560(fst561),map562(f560,rst563));
break;
case 0: $ans559 = empty39;
break;
default: $ans559 = _global["throwNoCasesMatched"](["builtin://lists",456,2,16136,459,5,16229],cases558);
}
return $ans559;
};
var slice556 = function slice(lst554,inclusive$lower549,exclusive$upper550) {
var help551 = function help(acc545,inner$lst542,index548) {
var cases543 = inner$lst542;
var $ans544 = undefined;
switch(cases543.$tag) {
case 0: $ans544 = acc545;
break;
case 1: var first553 = cases543["first"];
var rest552 = cases543["rest"];
var $ans546 = undefined;
if(_runtime["_greaterequal"](index548,inclusive$lower549,_runtime["_errCallbacks"]) && _runtime["_lessthan"](index548,exclusive$upper550,_runtime["_errCallbacks"])) {
$ans546 = link47(inner$lst542["first"],help551(acc545,rest552,_runtime["_add"](index548,(1),_runtime["_errCallbacks"])))} else {
var $ans547 = undefined;
if(_runtime["_lessthan"](index548,inclusive$lower549,_runtime["_errCallbacks"]) && _runtime["_lessthan"](index548,exclusive$upper550,_runtime["_errCallbacks"])) {
$ans547 = help551(acc545,rest552,_runtime["_add"](index548,(1),_runtime["_errCallbacks"]))} else {
$ans547 = acc545}
$ans546 = $ans547}
$ans544 = $ans546;
break;
default: $ans544 = _global["throwNoCasesMatched"](["builtin://lists",464,4,16418,475,7,16794],cases543);
}
return $ans544;
};
return help551(empty39,lst554,(0));
};
var partition541 = function partition(f535,lst538) {
var is$true527 = empty39;
var is$false526 = empty39;
var help531 = function help(inner$lst528) {
var cases529 = inner$lst528;
var $ans530 = undefined;
switch(cases529.$tag) {
case 0: $ans530 = nothing210;
break;
case 1: var first537 = cases529["first"];
var rest532 = cases529["rest"];
help531(rest532);
var $ans533 = undefined;
if(f535(inner$lst528["first"])) {
$ans533 = is$true527 = function (arg_536) {
return link47(arg_536,is$true527);
}(inner$lst528["first"])} else {
$ans533 = is$false526 = function (arg_534) {
return link47(arg_534,is$false526);
}(inner$lst528["first"])}
$ans533;
$ans530 = nothing210;
break;
default: $ans530 = _global["throwNoCasesMatched"](["builtin://lists",485,4,17124,496,7,17431],cases529);
}
return $ans530;
};
help531(lst538);
var $temporary539 = {"is-true":is$true527,
"is-false":is$false526};
return $temporary539;
};
var find520 = function find(f521,lst515) {
var cases516 = lst515;
var $ans517 = undefined;
switch(cases516.$tag) {
case 0: $ans517 = none518;
break;
case 1: var first523 = cases516["first"];
var rest522 = cases516["rest"];
var $ans519 = undefined;
if(f521(first523)) {
$ans519 = some524(first523)} else {
$ans519 = find520(f521,rest522)}
$ans517 = $ans519;
break;
default: $ans517 = _global["throwNoCasesMatched"](["builtin://lists",506,2,17690,514,5,17842],cases516);
}
return $ans517;
};
var get514 = function get(lst512,n505) {
var help507 = function help(l502,cur509) {
var cases503 = l502;
var $ans504 = undefined;
switch(cases503.$tag) {
case 0: $ans504 = raise7(_runtime["_add"]("get: n too large ",tostring404(n505),_runtime["_errCallbacks"]));
break;
case 1: var first510 = cases503["first"];
var rest508 = cases503["rest"];
var $ans506 = undefined;
if(_runtime["equal-always"](cur509,(0))) {
$ans506 = first510} else {
$ans506 = help507(rest508,_runtime["_subtract"](cur509,(1),_runtime["_errCallbacks"]))}
$ans504 = $ans506;
break;
default: $ans504 = _global["throwNoCasesMatched"](["builtin://lists",520,4,18031,528,7,18223],cases503);
}
return $ans504;
};
var $ans511 = undefined;
if(_runtime["_lessthan"](n505,(0),_runtime["_errCallbacks"])) {
$ans511 = raise7(_runtime["_add"]("get: invalid argument: ",tostring404(n505),_runtime["_errCallbacks"]))} else {
$ans511 = help507(lst512,n505)}
return $ans511;
};
var function$set501 = function function$set(lst499,n489,v496) {
var help493 = function help(l486,cur495) {
var cases487 = l486;
var $ans488 = undefined;
switch(cases487.$tag) {
case 0: $ans488 = raise7(_runtime["_add"]("set: n too large ",tostring404(n489),_runtime["_errCallbacks"]));
break;
case 1: var first491 = cases487["first"];
var rest494 = cases487["rest"];
var $ans490 = undefined;
if(_runtime["equal-always"](cur495,(0))) {
$ans490 = function (arg_497) {
return link47(arg_497,rest494);
}(v496)} else {
$ans490 = function (arg_492) {
return link47(arg_492,help493(rest494,_runtime["_subtract"](cur495,(1),_runtime["_errCallbacks"])));
}(first491)}
$ans488 = $ans490;
break;
default: $ans488 = _global["throwNoCasesMatched"](["builtin://lists",539,4,18603,547,7,18834],cases487);
}
return $ans488;
};
var $ans498 = undefined;
if(_runtime["_lessthan"](n489,(0),_runtime["_errCallbacks"])) {
$ans498 = raise7(_runtime["_add"]("set: invalid argument: ",tostring404(n489),_runtime["_errCallbacks"]))} else {
$ans498 = help493(lst499,n489)}
return $ans498;
};
var $temporary469 = {"make":raw$array$to$list101,
"make0":function () {
return empty39;
},
"make1":function (a470) {
return link47(a470,empty39);
},
"make2":function (a471,b472) {
return link47(a471,link47(b472,empty39));
},
"make3":function (a473,b474,c475) {
return link47(a473,link47(b474,link47(c475,empty39)));
},
"make4":function (a476,b477,c478,d479) {
return link47(a476,link47(b477,link47(c478,link47(d479,empty39))));
},
"make5":function (a480,b481,c482,d483,e484) {
return link47(a480,link47(b481,link47(c482,link47(d483,link47(e484,empty39)))));
}};
var list485 = $temporary469;
var length468 = function length(lst466) {
var help463 = function help(l459,cur462) {
var cases460 = l459;
var $ans461 = undefined;
switch(cases460.$tag) {
case 0: $ans461 = cur462;
break;
case 1: var $underscore465 = cases460["first"];
var r464 = cases460["rest"];
$ans461 = help463(r464,_runtime["_add"](cur462,(1),_runtime["_errCallbacks"]));
break;
default: $ans461 = _global["throwNoCasesMatched"](["builtin://lists",574,4,19878,577,7,19961],cases460);
}
return $ans461;
};
return help463(lst466,(0));
};
var same$length453 = function same$length(lst1445,lst2448) {
var cases446 = lst1445;
var $ans447 = undefined;
switch(cases446.$tag) {
case 0: var cases449 = lst2448;
var $ans450 = undefined;
switch(cases449.$tag) {
case 0: $ans450 = true;
break;
default: $ans450 = false;
}
$ans447 = $ans450;
break;
case 1: var $underscore457 = cases446["first"];
var rest1454 = cases446["rest"];
var cases451 = lst2448;
var $ans452 = undefined;
switch(cases451.$tag) {
case 0: $ans452 = false;
break;
case 1: var $underscore456 = cases451["first"];
var rest2455 = cases451["rest"];
$ans452 = same$length453(rest1454,rest2455);
break;
default: $ans452 = _global["throwNoCasesMatched"](["builtin://lists",591,6,20330,594,9,20436],cases451);
}
$ans447 = $ans452;
break;
default: $ans447 = _global["throwNoCasesMatched"](["builtin://lists",584,2,20185,595,5,20442],cases446);
}
return $ans447;
};
var longer$than441 = function longer$than(lst437,len440) {
var cases438 = lst437;
var $ans439 = undefined;
switch(cases438.$tag) {
case 0: $ans439 = _runtime["_lessthan"](len440,(0),_runtime["_errCallbacks"]);
break;
case 1: var $underscore443 = cases438["first"];
var rest442 = cases438["rest"];
$ans439 = _runtime["_lessthan"](len440,(1),_runtime["_errCallbacks"]) || longer$than441(rest442,_runtime["_subtract"](len440,(1),_runtime["_errCallbacks"]));
break;
default: $ans439 = _global["throwNoCasesMatched"](["builtin://lists",604,2,20828,607,5,20936],cases438);
}
return $ans439;
};
var shorter$than433 = function shorter$than(lst429,len432) {
var cases430 = lst429;
var $ans431 = undefined;
switch(cases430.$tag) {
case 0: $ans431 = _runtime["_greaterthan"](len432,(0),_runtime["_errCallbacks"]);
break;
case 1: var $underscore435 = cases430["first"];
var rest434 = cases430["rest"];
$ans431 = _runtime["_greaterthan"](len432,(1),_runtime["_errCallbacks"]) && shorter$than433(rest434,_runtime["_subtract"](len432,(1),_runtime["_errCallbacks"]));
break;
default: $ans431 = _global["throwNoCasesMatched"](["builtin://lists",616,2,21272,619,5,21382],cases430);
}
return $ans431;
};
var push428 = function push(l426,elt425) {
return link47(elt425,l426);
};
var last424 = function last(lst415) {
var helper419 = function helper(l422) {
var cases416 = lst415;
var $ans417 = undefined;
switch(cases416.$tag) {
case 0: $ans417 = raise7("last: took last of empty list");
break;
case 1: var first421 = cases416["first"];
var rest420 = cases416["rest"];
var $ans418 = undefined;
if(is$empty102(rest420)) {
$ans418 = first421} else {
$ans418 = helper419(rest420)}
$ans417 = $ans418;
break;
default: $ans417 = _global["throwNoCasesMatched"](["builtin://lists",633,4,21745,641,7,21946],cases416);
}
return $ans417;
};
return helper419(lst415);
};
var sort$by414 = function sort$by(lst410,cmp411,eq412) {
return lst410["sort-by"](cmp411,eq412);
};
var sort409 = function sort(lst407) {
return lst407["sort"]();
};
var range406 = function range(start402,stop403) {
var $ans400 = undefined;
if(_runtime["_greaterthan"](start402,stop403,_runtime["_errCallbacks"])) {
$ans400 = raise7(_runtime["_add"](_runtime["_add"](_runtime["_add"](_runtime["_add"]("range: start greater than stop: (",tostring404(start402),_runtime["_errCallbacks"]),", ",_runtime["_errCallbacks"]),tostring404(stop403),_runtime["_errCallbacks"]),")",_runtime["_errCallbacks"]))} else {
$ans400 = raw$array$to$list101(RA94["raw-array-build"](function (i401) {
return _runtime["_add"](i401,start402,_runtime["_errCallbacks"]);
},_runtime["_subtract"](stop403,start402,_runtime["_errCallbacks"])))}
return $ans400;
};
var range$by399 = function range$by(start393,stop392,delta394) {
var $ans389 = undefined;
if(_runtime["equal-always"](delta394,(0))) {
var $ans397 = undefined;
if(_runtime["equal-always"](start393,stop392)) {
$ans397 = empty39} else {
$ans397 = raise7("range-by: an interval of 0 would produce an infinite list")}
$ans389 = $ans397} else {
var len395 = num$max390(num$ceiling391(_runtime["_divide"](_runtime["_subtract"](stop392,start393,_runtime["_errCallbacks"]),delta394,_runtime["_errCallbacks"])),(0));
$ans389 = raw$array$to$list101(RA94["raw-array-build"](function (i396) {
return _runtime["_add"](start393,_runtime["_multiply"](i396,delta394,_runtime["_errCallbacks"]),_runtime["_errCallbacks"]);
},len395))}
return $ans389;
};
var repeat388 = function repeat(n386,e385) {
var $ans384 = undefined;
if(_runtime["_lessthan"](n386,(0),_runtime["_errCallbacks"])) {
$ans384 = raise7("repeat: can't have a negative argument'")} else {
$ans384 = raw$array$to$list101(RA94["raw-array-of"](e385,n386))}
return $ans384;
};
var append381 = function append(front376,back379) {
var cases377 = front376;
var $ans378 = undefined;
switch(cases377.$tag) {
case 0: $ans378 = back379;
break;
case 1: var f380 = cases377["first"];
var r382 = cases377["rest"];
$ans378 = link47(f380,append381(r382,back379));
break;
default: $ans378 = _global["throwNoCasesMatched"](["builtin://lists",694,2,23546,697,5,23635],cases377);
}
return $ans378;
};
var take375 = function take(n372,lst373) {
return split$at367(n372,lst373)["prefix"];
};
var drop371 = function drop(n368,lst369) {
return split$at367(n368,lst369)["suffix"];
};
var any364 = function any(f362,lst359) {
var cases360 = lst359;
var $ans361 = undefined;
switch(cases360.$tag) {
case 0: $ans361 = false;
break;
case 1: var first363 = cases360["first"];
var rest365 = cases360["rest"];
$ans361 = f362(first363) || any364(f362,rest365);
break;
default: $ans361 = _global["throwNoCasesMatched"](["builtin://lists",712,2,24093,715,5,24188],cases360);
}
return $ans361;
};
var all356 = function all(f354,lst351) {
var cases352 = lst351;
var $ans353 = undefined;
switch(cases352.$tag) {
case 0: $ans353 = true;
break;
case 1: var first355 = cases352["first"];
var rest357 = cases352["rest"];
$ans353 = f354(first355) && all356(f354,rest357);
break;
default: $ans353 = _global["throwNoCasesMatched"](["builtin://lists",720,2,24323,723,5,24418],cases352);
}
return $ans353;
};
var all2350 = function all2(f343,lst1347,lst2348) {
var help346 = function help(l1344,l2345) {
var $ans342 = undefined;
if(is$empty102(l1344) || is$empty102(l2345)) {
$ans342 = true} else {
$ans342 = f343(l1344["head"](),l2345["head"]()) && help346(l1344["tail"](),l2345["tail"]())}
return $ans342;
};
return help346(lst1347,lst2348);
};
var map2340 = function map2(f336,l1337,l2338) {
var $ans335 = undefined;
if(is$empty102(l1337) || is$empty102(l2338)) {
$ans335 = empty39} else {
$ans335 = function (arg_339) {
return link47(arg_339,map2340(f336,l1337["tail"](),l2338["tail"]()));
}(f336(l1337["head"](),l2338["head"]()))}
return $ans335;
};
var map3333 = function map3(f328,l1329,l2330,l3331) {
var $ans327 = undefined;
if(is$empty102(l1329) || is$empty102(l2330) || is$empty102(l3331)) {
$ans327 = empty39} else {
$ans327 = function (arg_332) {
return link47(arg_332,map3333(f328,l1329["tail"](),l2330["tail"](),l3331["tail"]()));
}(f328(l1329["head"](),l2330["head"](),l3331["head"]()))}
return $ans327;
};
var map4325 = function map4(f319,l1320,l2321,l3322,l4323) {
var $ans318 = undefined;
if(is$empty102(l1320) || is$empty102(l2321) || is$empty102(l3322) || is$empty102(l4323)) {
$ans318 = empty39} else {
$ans318 = function (arg_324) {
return link47(arg_324,map4325(f319,l1320["tail"](),l2321["tail"](),l3322["tail"](),l4323["tail"]()));
}(f319(l1320["head"](),l2321["head"](),l3322["head"](),l4323["head"]()))}
return $ans318;
};
var map_n316 = function map_n(f312,n313,lst314) {
var $ans311 = undefined;
if(is$empty102(lst314)) {
$ans311 = empty39} else {
$ans311 = function (arg_315) {
return link47(arg_315,map_n316(f312,_runtime["_add"](n313,(1),_runtime["_errCallbacks"]),lst314["tail"]()));
}(f312(n313,lst314["head"]()))}
return $ans311;
};
var map2_n309 = function map2_n(f304,n305,l1306,l2307) {
var $ans303 = undefined;
if(is$empty102(l1306) || is$empty102(l2307)) {
$ans303 = empty39} else {
$ans303 = function (arg_308) {
return link47(arg_308,map2_n309(f304,_runtime["_add"](n305,(1),_runtime["_errCallbacks"]),l1306["tail"](),l2307["tail"]()));
}(f304(n305,l1306["head"](),l2307["head"]()))}
return $ans303;
};
var map3_n301 = function map3_n(f295,n296,l1297,l2298,l3299) {
var $ans294 = undefined;
if(is$empty102(l1297) || is$empty102(l2298) || is$empty102(l3299)) {
$ans294 = empty39} else {
$ans294 = function (arg_300) {
return link47(arg_300,map3_n301(f295,_runtime["_add"](n296,(1),_runtime["_errCallbacks"]),l1297["tail"](),l2298["tail"](),l3299["tail"]()));
}(f295(n296,l1297["head"](),l2298["head"](),l3299["head"]()))}
return $ans294;
};
var map4_n292 = function map4_n(f285,n286,l1287,l2288,l3289,l4290) {
var $ans284 = undefined;
if(is$empty102(l1287) || is$empty102(l2288) || is$empty102(l3289) || is$empty102(l4290)) {
$ans284 = empty39} else {
$ans284 = function (arg_291) {
return link47(arg_291,map4_n292(f285,_runtime["_add"](n286,(1),_runtime["_errCallbacks"]),l1287["tail"](),l2288["tail"](),l3289["tail"](),l4290["tail"]()));
}(f285(n286,l1287["head"](),l2288["head"](),l3289["head"](),l4290["head"]()))}
return $ans284;
};
var each2283 = function each2(f276,lst1280,lst2281) {
var help279 = function help(l1277,l2278) {
var $ans275 = undefined;
if(is$empty102(l1277) || is$empty102(l2278)) {
$ans275 = nothing210} else {
f276(l1277["head"](),l2278["head"]());
$ans275 = help279(l1277["tail"](),l2278["tail"]())}
return $ans275;
};
return help279(lst1280,lst2281);
};
var each3274 = function each3(f265,lst1270,lst2271,lst3272) {
var help269 = function help(l1266,l2267,l3268) {
var $ans264 = undefined;
if(is$empty102(l1266) || is$empty102(l2267) || is$empty102(l3268)) {
$ans264 = nothing210} else {
f265(l1266["head"](),l2267["head"](),l3268["head"]());
$ans264 = help269(l1266["tail"](),l2267["tail"](),l3268["tail"]())}
return $ans264;
};
return help269(lst1270,lst2271,lst3272);
};
var each4263 = function each4(f252,lst1258,lst2259,lst3260,lst4261) {
var help257 = function help(l1253,l2254,l3255,l4256) {
var $ans251 = undefined;
if(is$empty102(l1253) || is$empty102(l2254) || is$empty102(l3255) || is$empty102(l4256)) {
$ans251 = nothing210} else {
f252(l1253["head"](),l2254["head"](),l3255["head"](),l4256["head"]());
$ans251 = help257(l1253["tail"](),l2254["tail"](),l3255["tail"](),l4256["tail"]())}
return $ans251;
};
return help257(lst1258,lst2259,lst3260,lst4261);
};
var each_n250 = function each_n(f243,num247,lst248) {
var help246 = function help(n244,l245) {
var $ans242 = undefined;
if(is$empty102(l245)) {
$ans242 = nothing210} else {
f243(n244,l245["head"]());
$ans242 = help246(_runtime["_add"](n244,(1),_runtime["_errCallbacks"]),l245["tail"]())}
return $ans242;
};
return help246(num247,lst248);
};
var each2_n241 = function each2_n(f232,num237,lst1238,lst2239) {
var help236 = function help(n233,l1234,l2235) {
var $ans231 = undefined;
if(is$empty102(l1234) || is$empty102(l2235)) {
$ans231 = nothing210} else {
f232(n233,l1234["head"](),l2235["head"]());
$ans231 = help236(_runtime["_add"](n233,(1),_runtime["_errCallbacks"]),l1234["tail"](),l2235["tail"]())}
return $ans231;
};
return help236(num237,lst1238,lst2239);
};
var each3_n230 = function each3_n(f219,num225,lst1226,lst2227,lst3228) {
var help224 = function help(n220,l1221,l2222,l3223) {
var $ans218 = undefined;
if(is$empty102(l1221) || is$empty102(l2222) || is$empty102(l3223)) {
$ans218 = nothing210} else {
f219(n220,l1221["head"](),l2222["head"](),l3223["head"]());
$ans218 = help224(_runtime["_add"](n220,(1),_runtime["_errCallbacks"]),l1221["tail"](),l2222["tail"](),l3223["tail"]())}
return $ans218;
};
return help224(num225,lst1226,lst2227,lst3228);
};
var each4_n217 = function each4_n(f203,num211,lst1212,lst2213,lst3214,lst4215) {
var help209 = function help(n204,l1205,l2206,l3207,l4208) {
var $ans202 = undefined;
if(is$empty102(l1205) || is$empty102(l2206) || is$empty102(l3207) || is$empty102(l4208)) {
$ans202 = nothing210} else {
f203(n204,l1205["head"](),l2206["head"](),l3207["head"](),l4208["head"]());
$ans202 = help209(_runtime["_add"](n204,(1),_runtime["_errCallbacks"]),l1205["tail"](),l2206["tail"](),l3207["tail"](),l4208["tail"]())}
return $ans202;
};
return help209(num211,lst1212,lst2213,lst3214,lst4215);
};
var fold$while197 = function fold$while(f193,base192,lst189) {
var cases190 = lst189;
var $ans191 = undefined;
switch(cases190.$tag) {
case 0: $ans191 = base192;
break;
case 1: var elt194 = cases190["first"];
var r199 = cases190["rest"];
var cases195 = f193(base192,elt194);
var $ans196 = undefined;
switch(cases195.$tag) {
case 0: var v198 = cases195["v"];
$ans196 = fold$while197(f193,v198,r199);
break;
case 1: var v200 = cases195["v"];
$ans196 = v200;
break;
default: $ans196 = _global["throwNoCasesMatched"](["builtin://lists",898,6,31384,901,9,31486],cases195);
}
$ans191 = $ans196;
break;
default: $ans191 = _global["throwNoCasesMatched"](["builtin://lists",895,2,31319,902,5,31492],cases190);
}
return $ans191;
};
var foldr185 = function foldr(f184,base186,lst187) {
var $ans183 = undefined;
if(is$empty102(lst187)) {
$ans183 = base186} else {
$ans183 = f184(foldr185(f184,base186,lst187["tail"]()),lst187["head"]())}
return $ans183;
};
var fold2177 = function fold2(f178,base179,l1180,l2181) {
var $ans176 = undefined;
if(is$empty102(l1180) || is$empty102(l2181)) {
$ans176 = base179} else {
$ans176 = fold2177(f178,f178(base179,l1180["head"](),l2181["head"]()),l1180["tail"](),l2181["tail"]())}
return $ans176;
};
var fold3169 = function fold3(f170,base171,l1172,l2173,l3174) {
var $ans168 = undefined;
if(is$empty102(l1172) || is$empty102(l2173) || is$empty102(l3174)) {
$ans168 = base171} else {
$ans168 = fold3169(f170,f170(base171,l1172["head"](),l2173["head"](),l3174["head"]()),l1172["tail"](),l2173["tail"](),l3174["tail"]())}
return $ans168;
};
var fold4160 = function fold4(f161,base162,l1163,l2164,l3165,l4166) {
var $ans159 = undefined;
if(is$empty102(l1163) || is$empty102(l2164) || is$empty102(l3165) || is$empty102(l4166)) {
$ans159 = base162} else {
$ans159 = fold4160(f161,f161(base162,l1163["head"](),l2164["head"](),l3165["head"](),l4166["head"]()),l1163["tail"](),l2164["tail"](),l3165["tail"](),l4166["tail"]())}
return $ans159;
};
var fold_n92 = function fold_n(f152,num155,base156,lst157) {
var help150 = function help(n151,acc153,partial$list154) {
var $ans149 = undefined;
if(is$empty102(partial$list154)) {
$ans149 = acc153} else {
$ans149 = help150(_runtime["_add"](n151,(1),_runtime["_errCallbacks"]),f152(n151,acc153,partial$list154["head"]()),partial$list154["tail"]())}
return $ans149;
};
return help150(num155,base156,lst157);
};
var member$with111 = function member$with(lst138,elt141,eq142) {
var cases139 = lst138;
var $ans140 = undefined;
switch(cases139.$tag) {
case 0: $ans140 = equality105["NotEqual"]("list",elt141,lst138);
break;
case 1: var first143 = cases139["first"];
var rest147 = cases139["rest"];
var first$elt$equal144 = eq142(first143,elt141);
var cases145 = first$elt$equal144;
var $ans146 = undefined;
switch(cases145.$tag) {
case 0: $ans146 = equality105["Equal"];
break;
default: $ans146 = equality105["equal-or"](first$elt$equal144,member$with111(rest147,elt141,eq142));
}
$ans140 = $ans146;
break;
default: $ans140 = _global["throwNoCasesMatched"](["builtin://lists",966,2,34181,974,5,34490],cases139);
}
return $ans140;
};
var member357 = function member3(lst132,elt133) {
return member$with111(lst132,elt133,function (l135,r136) {
return equal$always3134(l135,r136);
});
};
var member131 = function member(lst128,elt129) {
return equality105["to-boolean"](member357(lst128,elt129));
};
var member$now3118 = function member$now3(lst123,elt124) {
return member$with111(lst123,elt124,function (l125,r126) {
return equality105["equal-now3"](l125,r126);
});
};
var member$now122 = function member$now(lst119,elt120) {
return equality105["to-boolean"](member$now3118(lst119,elt120));
};
var member$identical3106 = function member$identical3(lst112,elt113) {
return member$with111(lst112,elt113,function (l115,r116) {
return identical3114(l115,r116);
});
};
var member$identical110 = function member$identical(lst107,elt108) {
return equality105["to-boolean"](member$identical3106(lst107,elt108));
};
var shuffle104 = function shuffle(lst99) {
var $ans91 = undefined;
if(is$empty102(lst99)) {
$ans91 = empty39} else {
var elts100 = fold_n92(function (i96,arr95,e97) {
var ix93 = raise7("TODO(alex): Implement random generator somewhere");
RA94["raw-array-set"](arr95,i96,RA94["raw-array-get"](arr95,ix93));
RA94["raw-array-set"](arr95,ix93,e97);
return arr95;
},(1),RA94["raw-array-of"](lst99["head"](),lst99["length"]()),lst99["tail"]());
$ans91 = raw$array$to$list101(elts100)}
return $ans91;
};
var filter$map87 = function filter$map(f83,lst80) {
var cases81 = lst80;
var $ans82 = undefined;
switch(cases81.$tag) {
case 0: $ans82 = empty39;
break;
case 1: var first84 = cases81["first"];
var rest88 = cases81["rest"];
var cases85 = f83(first84);
var $ans86 = undefined;
switch(cases85.$tag) {
case 1: $ans86 = filter$map87(f83,rest88);
break;
case 0: var v89 = cases85["value"];
$ans86 = link47(v89,filter$map87(f83,rest88));
break;
default: $ans86 = _global["throwNoCasesMatched"](["builtin://lists",1020,6,35864,1023,9,35985],cases85);
}
$ans82 = $ans86;
break;
default: $ans82 = _global["throwNoCasesMatched"](["builtin://lists",1017,2,35793,1024,5,35991],cases81);
}
return $ans82;
};
var filter$values76 = function filter$values(lst70) {
var cases71 = lst70;
var $ans72 = undefined;
switch(cases71.$tag) {
case 0: $ans72 = empty39;
break;
case 1: var first73 = cases71["first"];
var rest77 = cases71["rest"];
var cases74 = first73;
var $ans75 = undefined;
switch(cases74.$tag) {
case 1: $ans75 = filter$values76(rest77);
break;
case 0: var v78 = cases74["value"];
$ans75 = link47(v78,filter$values76(rest77));
break;
default: $ans75 = _global["throwNoCasesMatched"](["builtin://lists",1031,6,36127,1034,9,36245],cases74);
}
$ans72 = $ans75;
break;
default: $ans72 = _global["throwNoCasesMatched"](["builtin://lists",1028,2,36056,1035,5,36251],cases71);
}
return $ans72;
};
var distinct62 = function distinct(l54) {
var cases55 = l54;
var $ans56 = undefined;
switch(cases55.$tag) {
case 0: $ans56 = empty39;
break;
case 1: var first59 = cases55["first"];
var rest58 = cases55["rest"];
var cases60 = member357(rest58,first59);
var $ans61 = undefined;
switch(cases60.$tag) {
case 1: var $underscore63 = cases60["reason"];
var $underscore64 = cases60["value1"];
var $underscore65 = cases60["value2"];
$ans61 = link47(first59,distinct62(rest58));
break;
case 2: var $underscore66 = cases60["reason"];
var $underscore67 = cases60["value1"];
var $underscore68 = cases60["value2"];
$ans61 = link47(first59,distinct62(rest58));
break;
case 0: $ans61 = distinct62(rest58);
break;
default: $ans61 = _global["throwNoCasesMatched"](["builtin://lists",1043,6,36479,1047,9,36683],cases60);
}
$ans56 = $ans61;
break;
default: $ans56 = _global["throwNoCasesMatched"](["builtin://lists",1040,2,36409,1048,5,36689],cases55);
}
return $ans56;
};
var take$while53 = function take$while(pred45,lst51) {
var tail40 = empty39;
var help48 = function help(l41) {
var cases42 = l41;
var $ans43 = undefined;
switch(cases42.$tag) {
case 0: $ans43 = empty39;
break;
case 1: var first46 = cases42["first"];
var rest49 = cases42["rest"];
var $ans44 = undefined;
if(pred45(first46)) {
$ans44 = link47(first46,help48(rest49))} else {
tail40 = l41;
$ans44 = empty39}
$ans43 = $ans44;
break;
default: $ans43 = _global["throwNoCasesMatched"](["builtin://lists",1055,4,36917,1064,7,37117],cases42);
}
return $ans43;
};
return _runtime["PTuple"]([help48(lst51),tail40]);
};
var max38 = function max(lst24) {
var cases25 = lst24;
var $ans26 = undefined;
switch(cases25.$tag) {
case 0: $ans26 = raise7("list max: empty list");
break;
case 1: var first28 = cases25["first"];
var rest27 = cases25["rest"];
$ans26 = _runtime["PTuple"]([first28,rest27]);
break;
default: $ans26 = _global["throwNoCasesMatched"](["builtin://lists",1080,26,37887,1083,5,37997],cases25);
}
var tup21 = $ans26;
var max$v23 = tup21[0];
var lst22 = tup21[1];
var helper34 = function helper(inner29,inner$max32) {
var cases30 = inner29;
var $ans31 = undefined;
switch(cases30.$tag) {
case 0: $ans31 = inner$max32;
break;
case 1: var first36 = cases30["first"];
var rest35 = cases30["rest"];
var $ans33 = undefined;
if(_runtime["_greaterthan"](first36,inner$max32,_runtime["_errCallbacks"])) {
$ans33 = helper34(rest35,first36)} else {
$ans33 = helper34(rest35,inner$max32)}
$ans31 = $ans33;
break;
default: $ans31 = _global["throwNoCasesMatched"](["builtin://lists",1086,4,38071,1094,7,38273],cases30);
}
return $ans31;
};
return helper34(lst22,max$v23);
};
var min20 = function min(lst4) {
var cases5 = lst4;
var $ans6 = undefined;
switch(cases5.$tag) {
case 0: $ans6 = raise7("list max: empty list");
break;
case 1: var first9 = cases5["first"];
var rest8 = cases5["rest"];
$ans6 = _runtime["PTuple"]([first9,rest8]);
break;
default: $ans6 = _global["throwNoCasesMatched"](["builtin://lists",1101,26,38373,1104,5,38483],cases5);
}
var tup1 = $ans6;
var min$v3 = tup1[0];
var lst2 = tup1[1];
var helper15 = function helper(inner10,inner$min13) {
var cases11 = inner10;
var $ans12 = undefined;
switch(cases11.$tag) {
case 0: $ans12 = inner$min13;
break;
case 1: var first17 = cases11["first"];
var rest16 = cases11["rest"];
var $ans14 = undefined;
if(_runtime["_lessthan"](first17,inner$min13,_runtime["_errCallbacks"])) {
$ans14 = helper15(rest16,first17)} else {
$ans14 = helper15(rest16,inner$min13)}
$ans12 = $ans14;
break;
default: $ans12 = _global["throwNoCasesMatched"](["builtin://lists",1107,4,38557,1115,7,38759],cases11);
}
return $ans12;
};
return helper15(lst2,min$v3);
};
var member$always3886 = member357;
var member$always885 = member131;
var foldl884 = fold565;
var $answer887 = _global["trace-value"](["dummy location"],nothing210);
return module["exports"] = {"sort":sort409,
"list":list485,
"is-link":is$link666,
"range":range406,
"distinct":distinct62,
"map":map562,
"repeat":repeat388,
"link":link47,
"append":append381,
"push":push428,
"member":member131,
"shuffle":shuffle104,
"find":find520,
"member3":member357,
"member-with":member$with111,
"filter":filter608,
"map4":map4325,
"map3":map3333,
"filter-values":filter$values76,
"raw-array-to-list":raw$array$to$list101,
"get":get514,
"last":last424,
"map2":map2340,
"join-str-last":join$str$last632,
"each4":each4263,
"fold4":fold4160,
"each3":each3274,
"min":min20,
"slice":slice556,
"fold3":fold3169,
"member-always3":member$always3886,
"member-identical3":member$identical3106,
"all2":all2350,
"each2":each2283,
"foldr":foldr185,
"fold2":fold2177,
"fold_n":fold_n92,
"member-now3":member$now3118,
"each_n":each_n250,
"drop":drop371,
"join-str":join$str642,
"same-length":same$length453,
"empty":empty39,
"function-set":function$set501,
"any":any364,
"take-while":take$while53,
"map_n":map_n316,
"foldl":foldl884,
"is-empty":is$empty102,
"partition":partition541,
"foldl-complicated":foldl$complicated629,
"range-by":range$by399,
"filter-map":filter$map87,
"take":take375,
"map4_n":map4_n292,
"split-at":split$at367,
"sort-by":sort$by414,
"length":length468,
"map3_n":map3_n301,
"shorter-than":shorter$than433,
"fold-while":fold$while197,
"longer-than":longer$than441,
"map2_n":map2_n309,
"max":max38,
"remove":remove614,
"member-now":member$now122,
"to-raw-array":to$raw$array664,
"reverse":reverse576,
"each4_n":each4_n217,
"member-identical":member$identical110,
"member-always":member$always885,
"is-List":is$List667,
"each":each571,
"each3_n":each3_n230,
"all":all356,
"fold":fold565,
"each2_n":each2_n241,
"$answer":$answer887,
"$checks":_runtime["$checkResults"](),
"$traces":_runtime["$getTraces"](),
"$locations":[{"name":"sort",
"srcloc":["builtin://lists",651,0,22095,653,3,22151]},
{"name":"list",
"srcloc":["builtin://lists",561,0,19182,569,1,19714]},
{"name":"is-link",
"srcloc":["builtin://lists",80,2,2742,100,8,3791]},
{"name":"range",
"srcloc":["builtin://lists",655,0,22153,664,3,22529]},
{"name":"distinct",
"srcloc":["builtin://lists",1038,0,36257,1049,3,36693]},
{"name":"map",
"srcloc":["builtin://lists",454,0,16007,460,3,16233]},
{"name":"repeat",
"srcloc":["builtin://lists",686,0,23272,691,3,23481]},
{"name":"link",
"srcloc":["builtin://lists",80,2,2742,100,8,3791]},
{"name":"append",
"srcloc":["builtin://lists",693,0,23483,698,3,23639]},
{"name":"push",
"srcloc":["builtin://lists",626,0,21518,628,3,21584]},
{"name":"member",
"srcloc":["builtin://lists",981,0,34631,983,3,34727]},
{"name":"shuffle",
"srcloc":["builtin://lists",1001,0,35239,1014,3,35717]},
{"name":"find",
"srcloc":["builtin://lists",502,0,17498,515,3,17846]},
{"name":"member3",
"srcloc":["builtin://lists",977,0,34496,979,3,34629]},
{"name":"member-with",
"srcloc":["builtin://lists",964,0,34082,975,3,34494]},
{"name":"filter",
"srcloc":["builtin://lists",389,0,13912,401,3,14162]},
{"name":"map4",
"srcloc":["builtin://lists",755,0,25479,762,3,25907]},
{"name":"map3",
"srcloc":["builtin://lists",746,0,25122,753,3,25477]},
{"name":"filter-values",
"srcloc":["builtin://lists",1027,0,35997,1036,3,36255]},
{"name":"raw-array-to-list",
"srcloc":["builtin://lists",305,0,11016,307,3,11156]},
{"name":"get",
"srcloc":["builtin://lists",517,0,17848,533,3,18319]},
{"name":"last",
"srcloc":["builtin://lists",630,0,21586,645,3,21971]},
{"name":"map2",
"srcloc":["builtin://lists",737,0,24826,744,3,25120]},
{"name":"join-str-last",
"srcloc":["builtin://lists",350,0,12482,372,3,13427]},
{"name":"each4",
"srcloc":["builtin://lists",826,0,28366,837,3,28955]},
{"name":"fold4",
"srcloc":["builtin://lists",935,0,32712,943,3,33247]},
{"name":"each3",
"srcloc":["builtin://lists",813,0,27860,824,3,28364]},
{"name":"min",
"srcloc":["builtin://lists",1100,0,38307,1119,3,38791]},
{"name":"slice",
"srcloc":["builtin://lists",462,0,16235,478,3,16826]},
{"name":"fold3",
"srcloc":["builtin://lists",925,0,32233,933,3,32710]},
{"name":"member-always3",
"srcloc":["builtin://lists",1121,0,38793,1121,24,38817]},
{"name":"member-identical3",
"srcloc":["builtin://lists",993,0,34979,995,3,35119]},
{"name":"all2",
"srcloc":["builtin://lists",726,0,24424,735,3,24824]},
{"name":"each2",
"srcloc":["builtin://lists",800,0,27442,811,3,27858]},
{"name":"foldr",
"srcloc":["builtin://lists",905,0,31498,913,3,31810]},
{"name":"fold2",
"srcloc":["builtin://lists",915,0,31812,923,3,32231]},
{"name":"fold_n",
"srcloc":["builtin://lists",945,0,33249,956,3,33746]},
{"name":"member-now3",
"srcloc":["builtin://lists",985,0,34729,987,3,34871]},
{"name":"each_n",
"srcloc":["builtin://lists",839,0,28957,850,3,29287]},
{"name":"drop",
"srcloc":["builtin://lists",705,0,23799,708,3,23963]},
{"name":"join-str",
"srcloc":["builtin://lists",331,0,11790,348,3,12480]},
{"name":"same-length",
"srcloc":["builtin://lists",582,0,19988,600,3,20625]},
{"name":"empty",
"srcloc":["builtin://lists",61,2,1886,79,8,2739]},
{"name":"function-set",
"srcloc":["builtin://lists",535,0,18321,553,3,18931]},
{"name":"any",
"srcloc":["builtin://lists",710,0,23965,716,3,24192]},
{"name":"take-while",
"srcloc":["builtin://lists",1051,0,36695,1077,3,37819]},
{"name":"map_n",
"srcloc":["builtin://lists",764,0,25909,771,3,26177]},
{"name":"foldl",
"srcloc":["builtin://lists",1123,0,38841,1123,12,38853]},
{"name":"is-empty",
"srcloc":["builtin://lists",61,2,1886,79,8,2739]},
{"name":"partition",
"srcloc":["builtin://lists",480,0,16828,500,3,17496]},
{"name":"foldl-complicated",
"srcloc":["builtin://lists",311,0,11302,329,3,11788]},
{"name":"range-by",
"srcloc":["builtin://lists",666,0,22531,684,3,23270]},
{"name":"filter-map",
"srcloc":["builtin://lists",1016,0,35719,1025,3,35995]},
{"name":"take",
"srcloc":["builtin://lists",700,0,23641,703,3,23797]},
{"name":"map4_n",
"srcloc":["builtin://lists",791,0,26948,798,3,27440]},
{"name":"split-at",
"srcloc":["builtin://lists",403,0,14164,423,3,14822]},
{"name":"sort-by",
"srcloc":["builtin://lists",647,0,21973,649,3,22093]},
{"name":"length",
"srcloc":["builtin://lists",571,0,19716,580,3,19986]},
{"name":"map3_n",
"srcloc":["builtin://lists",782,0,26527,789,3,26946]},
{"name":"shorter-than",
"srcloc":["builtin://lists",614,0,21069,624,3,21516]},
{"name":"fold-while",
"srcloc":["builtin://lists",891,0,30969,903,3,31496]},
{"name":"longer-than",
"srcloc":["builtin://lists",602,0,20627,612,3,21067]},
{"name":"map2_n",
"srcloc":["builtin://lists",773,0,26179,780,3,26525]},
{"name":"max",
"srcloc":["builtin://lists",1079,0,37821,1098,3,38305]},
{"name":"remove",
"srcloc":["builtin://lists",374,0,13429,385,3,13766]},
{"name":"member-now",
"srcloc":["builtin://lists",989,0,34873,991,3,34977]},
{"name":"to-raw-array",
"srcloc":["builtin://lists",301,0,10879,303,3,11014]},
{"name":"reverse",
"srcloc":["builtin://lists",438,0,15299,444,3,15674]},
{"name":"each4_n",
"srcloc":["builtin://lists",878,0,30311,889,3,30967]},
{"name":"member-identical",
"srcloc":["builtin://lists",997,0,35121,999,3,35237]},
{"name":"member-always",
"srcloc":["builtin://lists",1122,0,38818,1122,22,38840]},
{"name":"is-List",
"srcloc":["builtin://lists",60,0,1870,299,3,10877]},
{"name":"each",
"srcloc":["builtin://lists",446,0,15676,450,3,15861]},
{"name":"each3_n",
"srcloc":["builtin://lists",865,0,29751,876,3,30309]},
{"name":"all",
"srcloc":["builtin://lists",718,0,24194,724,3,24422]},
{"name":"fold",
"srcloc":["builtin://lists",427,0,14968,436,3,15297]},
{"name":"each2_n",
"srcloc":["builtin://lists",852,0,29289,863,3,29749]}]};
