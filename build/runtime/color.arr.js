var _runtime = require("./runtime.js");
var _nothing = undefined;
var $color6 = {"names":["red","green","blue","alpha"]};
var Color1 = {"color":function color(red7,green8,blue9,alpha10) {
var $constructorTMP11 = {"$brand":$color6,
"$tag":0,
"alpha":alpha10,
"blue":blue9,
"green":green8,
"red":red7};
return $constructorTMP11;
},
"is-color":function color(val) {
return val.$brand === $color6;
}};
var is$Color4 = Color1["Color"];
var is$color3 = Color1["is-color"];
var color2 = Color1["color"];
var orange156 = color2((255),(165),(0),(1));
var red155 = color2((255),(0),(0),(1));
var orange$red154 = color2((255),(69),(0),(1));
var tomato153 = color2((255),(99),(71),(1));
var dark$red152 = color2((139),(0),(0),(1));
var fire$brick151 = color2((178),(34),(34),(1));
var crimson150 = color2((220),(20),(60),(1));
var deep$pink149 = color2((255),(20),(147),(1));
var maroon148 = color2((176),(48),(96),(1));
var indian$red147 = color2((205),(92),(92),(1));
var medium$violet$red146 = color2((199),(21),(133),(1));
var violet$red145 = color2((208),(32),(144),(1));
var light$coral144 = color2((240),(128),(128),(1));
var hot$pink143 = color2((255),(105),(180),(1));
var pale$violet$red142 = color2((219),(112),(147),(1));
var light$pink141 = color2((255),(182),(193),(1));
var rosy$brown140 = color2((188),(143),(143),(1));
var pink139 = color2((255),(192),(203),(1));
var orchid138 = color2((218),(112),(214),(1));
var lavender$blush137 = color2((255),(240),(245),(1));
var snow136 = color2((255),(250),(250),(1));
var chocolate135 = color2((210),(105),(30),(1));
var saddle$brown134 = color2((139),(69),(19),(1));
var brown133 = color2((132),(60),(36),(1));
var dark$orange132 = color2((255),(140),(0),(1));
var coral131 = color2((255),(127),(80),(1));
var sienna130 = color2((160),(82),(45),(1));
var salmon129 = color2((250),(128),(114),(1));
var peru128 = color2((205),(133),(63),(1));
var dark$goldenrod127 = color2((184),(134),(11),(1));
var goldenrod126 = color2((218),(165),(32),(1));
var sandy$brown125 = color2((244),(164),(96),(1));
var light$salmon124 = color2((255),(160),(122),(1));
var dark$salmon123 = color2((233),(150),(122),(1));
var gold122 = color2((255),(215),(0),(1));
var yellow121 = color2((255),(255),(0),(1));
var olive120 = color2((128),(128),(0),(1));
var burlywood119 = color2((222),(184),(135),(1));
var tan118 = color2((210),(180),(140),(1));
var navajo$white117 = color2((255),(222),(173),(1));
var peach$puff116 = color2((255),(218),(185),(1));
var khaki115 = color2((240),(230),(140),(1));
var dark$khaki114 = color2((189),(183),(107),(1));
var moccasin113 = color2((255),(228),(181),(1));
var wheat112 = color2((245),(222),(179),(1));
var bisque111 = color2((255),(228),(196),(1));
var pale$goldenrod110 = color2((238),(232),(170),(1));
var blanched$almond109 = color2((255),(235),(205),(1));
var medium$goldenrod108 = color2((234),(234),(173),(1));
var papaya$whip107 = color2((255),(239),(213),(1));
var misty$rose106 = color2((255),(228),(225),(1));
var lemon$chiffon105 = color2((255),(250),(205),(1));
var antique$white104 = color2((250),(235),(215),(1));
var cornsilk103 = color2((255),(248),(220),(1));
var light$goldenrod$yellow102 = color2((250),(250),(210),(1));
var old$lace101 = color2((253),(245),(230),(1));
var linen100 = color2((250),(240),(230),(1));
var light$yellow99 = color2((255),(255),(224),(1));
var seashell98 = color2((255),(245),(238),(1));
var beige97 = color2((245),(245),(220),(1));
var floral$white96 = color2((255),(250),(240),(1));
var ivory95 = color2((255),(255),(240),(1));
var green94 = color2((0),(255),(0),(1));
var lawn$green93 = color2((124),(252),(0),(1));
var chartreuse92 = color2((127),(255),(0),(1));
var green$yellow91 = color2((173),(255),(47),(1));
var yellow$green90 = color2((154),(205),(50),(1));
var medium$forest$green89 = color2((107),(142),(35),(1));
var olive$drab88 = color2((107),(142),(35),(1));
var dark$olive$green87 = color2((85),(107),(47),(1));
var dark$sea$green86 = color2((143),(188),(139),(1));
var lime85 = color2((0),(255),(0),(1));
var dark$green84 = color2((0),(100),(0),(1));
var lime$green83 = color2((50),(205),(50),(1));
var forest$green82 = color2((34),(139),(34),(1));
var spring$green81 = color2((0),(255),(127),(1));
var medium$spring$green80 = color2((0),(250),(154),(1));
var sea$green79 = color2((46),(139),(87),(1));
var medium$sea$green78 = color2((60),(179),(113),(1));
var aquamarine77 = color2((112),(216),(144),(1));
var light$green76 = color2((144),(238),(144),(1));
var pale$green75 = color2((152),(251),(152),(1));
var medium$aquamarine74 = color2((102),(205),(170),(1));
var turquoise73 = color2((64),(224),(208),(1));
var light$sea$green72 = color2((32),(178),(170),(1));
var medium$turquoise71 = color2((72),(209),(204),(1));
var honeydew70 = color2((240),(255),(240),(1));
var mint$cream69 = color2((245),(255),(250),(1));
var royal$blue68 = color2((65),(105),(225),(1));
var dodger$blue67 = color2((30),(144),(255),(1));
var deep$sky$blue66 = color2((0),(191),(255),(1));
var cornflower$blue65 = color2((100),(149),(237),(1));
var steel$blue64 = color2((70),(130),(180),(1));
var light$sky$blue63 = color2((135),(206),(250),(1));
var dark$turquoise62 = color2((0),(206),(209),(1));
var cyan61 = color2((0),(255),(255),(1));
var aqua60 = color2((0),(255),(255),(1));
var dark$cyan59 = color2((0),(139),(139),(1));
var teal58 = color2((0),(128),(128),(1));
var sky$blue57 = color2((135),(206),(235),(1));
var cadet$blue56 = color2((95),(158),(160),(1));
var dark$slate$gray55 = color2((47),(79),(79),(1));
var light$slate$gray54 = color2((119),(136),(153),(1));
var slate$gray53 = color2((112),(128),(144),(1));
var light$steel$blue52 = color2((176),(196),(222),(1));
var light$blue51 = color2((173),(216),(230),(1));
var powder$blue50 = color2((176),(224),(230),(1));
var pale$turquoise49 = color2((175),(238),(238),(1));
var light$cyan48 = color2((224),(255),(255),(1));
var alice$blue47 = color2((240),(248),(255),(1));
var azure46 = color2((240),(255),(255),(1));
var medium$blue45 = color2((0),(0),(205),(1));
var dark$blue44 = color2((0),(0),(139),(1));
var midnight$blue43 = color2((25),(25),(112),(1));
var navy42 = color2((36),(36),(140),(1));
var blue41 = color2((0),(0),(255),(1));
var indigo40 = color2((75),(0),(130),(1));
var blue$violet39 = color2((138),(43),(226),(1));
var medium$slate$blue38 = color2((123),(104),(238),(1));
var slate$blue37 = color2((106),(90),(205),(1));
var purple36 = color2((160),(32),(240),(1));
var dark$slate$blue35 = color2((72),(61),(139),(1));
var dark$violet34 = color2((148),(0),(211),(1));
var dark$orchid33 = color2((153),(50),(204),(1));
var medium$purple32 = color2((147),(112),(219),(1));
var medium$orchid31 = color2((186),(85),(211),(1));
var magenta30 = color2((255),(0),(255),(1));
var fuchsia29 = color2((255),(0),(255),(1));
var dark$magenta28 = color2((139),(0),(139),(1));
var violet27 = color2((238),(130),(238),(1));
var plum26 = color2((221),(160),(221),(1));
var lavender25 = color2((230),(230),(250),(1));
var thistle24 = color2((216),(191),(216),(1));
var ghost$white23 = color2((248),(248),(255),(1));
var white22 = color2((255),(255),(255),(1));
var white$smoke21 = color2((245),(245),(245),(1));
var gainsboro20 = color2((220),(220),(220),(1));
var light$gray19 = color2((211),(211),(211),(1));
var silver18 = color2((192),(192),(192),(1));
var gray17 = color2((190),(190),(190),(1));
var dark$gray16 = color2((169),(169),(169),(1));
var dim$gray15 = color2((105),(105),(105),(1));
var black14 = color2((0),(0),(0),(1));
var transparent13 = color2((0),(0),(0),(0));
var $answer157 = _runtime["trace-value"](["dummy location"],_nothing);
return module["exports"] = {"black":black14,
"navajo-white":navajo$white117,
"crimson":crimson150,
"violet":violet27,
"aquamarine":aquamarine77,
"green-yellow":green$yellow91,
"gainsboro":gainsboro20,
"sandy-brown":sandy$brown125,
"pale-turquoise":pale$turquoise49,
"goldenrod":goldenrod126,
"cornsilk":cornsilk103,
"old-lace":old$lace101,
"light-sky-blue":light$sky$blue63,
"purple":purple36,
"steel-blue":steel$blue64,
"aqua":aqua60,
"teal":teal58,
"chocolate":chocolate135,
"indian-red":indian$red147,
"medium-violet-red":medium$violet$red146,
"honeydew":honeydew70,
"medium-spring-green":medium$spring$green80,
"medium-orchid":medium$orchid31,
"olive":olive120,
"papaya-whip":papaya$whip107,
"pale-goldenrod":pale$goldenrod110,
"antique-white":antique$white104,
"dark-cyan":dark$cyan59,
"linen":linen100,
"dark-orchid":dark$orchid33,
"dark-gray":dark$gray16,
"dark-red":dark$red152,
"light-cyan":light$cyan48,
"lavender-blush":lavender$blush137,
"light-goldenrod-yellow":light$goldenrod$yellow102,
"light-coral":light$coral144,
"light-gray":light$gray19,
"dark-olive-green":dark$olive$green87,
"blue":blue41,
"moccasin":moccasin113,
"burlywood":burlywood119,
"peru":peru128,
"mint-cream":mint$cream69,
"fuchsia":fuchsia29,
"slate-gray":slate$gray53,
"deep-pink":deep$pink149,
"midnight-blue":midnight$blue43,
"navy":navy42,
"hot-pink":hot$pink143,
"dark-violet":dark$violet34,
"pink":pink139,
"chartreuse":chartreuse92,
"brown":brown133,
"medium-aquamarine":medium$aquamarine74,
"lime":lime85,
"bisque":bisque111,
"blanched-almond":blanched$almond109,
"plum":plum26,
"medium-purple":medium$purple32,
"yellow":yellow121,
"forest-green":forest$green82,
"light-steel-blue":light$steel$blue52,
"medium-blue":medium$blue45,
"sienna":sienna130,
"indigo":indigo40,
"transparent":transparent13,
"dark-magenta":dark$magenta28,
"blue-violet":blue$violet39,
"orange-red":orange$red154,
"cadet-blue":cadet$blue56,
"light-blue":light$blue51,
"red":red155,
"dark-blue":dark$blue44,
"coral":coral131,
"saddle-brown":saddle$brown134,
"maroon":maroon148,
"floral-white":floral$white96,
"azure":azure46,
"thistle":thistle24,
"light-slate-gray":light$slate$gray54,
"powder-blue":powder$blue50,
"salmon":salmon129,
"dark-sea-green":dark$sea$green86,
"orange":orange156,
"dark-slate-gray":dark$slate$gray55,
"slate-blue":slate$blue37,
"light-sea-green":light$sea$green72,
"light-pink":light$pink141,
"medium-sea-green":medium$sea$green78,
"silver":silver18,
"light-green":light$green76,
"dodger-blue":dodger$blue67,
"dark-green":dark$green84,
"rosy-brown":rosy$brown140,
"ghost-white":ghost$white23,
"lime-green":lime$green83,
"white-smoke":white$smoke21,
"dark-khaki":dark$khaki114,
"light-yellow":light$yellow99,
"medium-forest-green":medium$forest$green89,
"fire-brick":fire$brick151,
"dark-turquoise":dark$turquoise62,
"yellow-green":yellow$green90,
"tomato":tomato153,
"medium-turquoise":medium$turquoise71,
"ivory":ivory95,
"magenta":magenta30,
"lemon-chiffon":lemon$chiffon105,
"white":white22,
"dim-gray":dim$gray15,
"alice-blue":alice$blue47,
"wheat":wheat112,
"dark-goldenrod":dark$goldenrod127,
"lavender":lavender25,
"deep-sky-blue":deep$sky$blue66,
"medium-goldenrod":medium$goldenrod108,
"sky-blue":sky$blue57,
"medium-slate-blue":medium$slate$blue38,
"pale-violet-red":pale$violet$red142,
"light-salmon":light$salmon124,
"dark-slate-blue":dark$slate$blue35,
"dark-salmon":dark$salmon123,
"dark-orange":dark$orange132,
"sea-green":sea$green79,
"beige":beige97,
"cornflower-blue":cornflower$blue65,
"color":color2,
"spring-green":spring$green81,
"cyan":cyan61,
"green":green94,
"gray":gray17,
"violet-red":violet$red145,
"snow":snow136,
"orchid":orchid138,
"khaki":khaki115,
"lawn-green":lawn$green93,
"tan":tan118,
"peach-puff":peach$puff116,
"seashell":seashell98,
"turquoise":turquoise73,
"olive-drab":olive$drab88,
"royal-blue":royal$blue68,
"pale-green":pale$green75,
"misty-rose":misty$rose106,
"is-color":is$color3,
"is-Color":is$Color4,
"gold":gold122,
"$answer":$answer157,
"$checks":_runtime["$checkResults"](),
"$traces":_runtime["$getTraces"](),
"$locations":[{"name":"black",
"srcloc":["builtin://color",156,0,5249,156,25,5274]},
{"name":"navajo-white",
"srcloc":["builtin://color",53,0,1497,53,38,1535]},
{"name":"crimson",
"srcloc":["builtin://color",20,0,352,20,31,383]},
{"name":"violet",
"srcloc":["builtin://color",143,0,4800,143,32,4832]},
{"name":"aquamarine",
"srcloc":["builtin://color",93,0,2977,93,36,3013]},
{"name":"green-yellow",
"srcloc":["builtin://color",79,0,2449,79,37,2486]},
{"name":"gainsboro",
"srcloc":["builtin://color",150,0,5041,150,35,5076]},
{"name":"sandy-brown",
"srcloc":["builtin://color",45,0,1227,45,36,1263]},
{"name":"pale-turquoise",
"srcloc":["builtin://color",121,0,4021,121,40,4061]},
{"name":"goldenrod",
"srcloc":["builtin://color",44,0,1192,44,34,1226]},
{"name":"cornsilk",
"srcloc":["builtin://color",67,0,2023,67,34,2057]},
{"name":"old-lace",
"srcloc":["builtin://color",69,0,2107,69,34,2141]},
{"name":"light-sky-blue",
"srcloc":["builtin://color",107,0,3512,107,40,3552]},
{"name":"purple",
"srcloc":["builtin://color",134,0,4475,134,31,4506]},
{"name":"steel-blue",
"srcloc":["builtin://color",106,0,3476,106,35,3511]},
{"name":"aqua",
"srcloc":["builtin://color",110,0,3621,110,28,3649]},
{"name":"teal",
"srcloc":["builtin://color",112,0,3684,112,28,3712]},
{"name":"chocolate",
"srcloc":["builtin://color",35,0,889,35,34,923]},
{"name":"indian-red",
"srcloc":["builtin://color",23,0,450,23,34,484]},
{"name":"medium-violet-red",
"srcloc":["builtin://color",24,0,485,24,42,527]},
{"name":"honeydew",
"srcloc":["builtin://color",100,0,3251,100,34,3285]},
{"name":"medium-spring-green",
"srcloc":["builtin://color",90,0,2857,90,43,2900]},
{"name":"medium-orchid",
"srcloc":["builtin://color",139,0,4660,139,38,4698]},
{"name":"olive",
"srcloc":["builtin://color",50,0,1401,50,29,1430]},
{"name":"papaya-whip",
"srcloc":["builtin://color",63,0,1868,63,37,1905]},
{"name":"pale-goldenrod",
"srcloc":["builtin://color",60,0,1742,60,40,1782]},
{"name":"antique-white",
"srcloc":["builtin://color",66,0,1983,66,39,2022]},
{"name":"dark-cyan",
"srcloc":["builtin://color",111,0,3650,111,33,3683]},
{"name":"linen",
"srcloc":["builtin://color",70,0,2142,70,31,2173]},
{"name":"dark-orchid",
"srcloc":["builtin://color",137,0,4583,137,36,4619]},
{"name":"dark-gray",
"srcloc":["builtin://color",154,0,5178,154,35,5213]},
{"name":"dark-red",
"srcloc":["builtin://color",18,0,286,18,30,316]},
{"name":"light-cyan",
"srcloc":["builtin://color",122,0,4062,122,36,4098]},
{"name":"lavender-blush",
"srcloc":["builtin://color",33,0,817,33,40,857]},
{"name":"light-goldenrod-yellow",
"srcloc":["builtin://color",68,0,2058,68,48,2106]},
{"name":"light-coral",
"srcloc":["builtin://color",26,0,564,26,37,601]},
{"name":"light-gray",
"srcloc":["builtin://color",151,0,5077,151,36,5113]},
{"name":"dark-olive-green",
"srcloc":["builtin://color",83,0,2606,83,40,2646]},
{"name":"blue",
"srcloc":["builtin://color",129,0,4301,129,26,4327]},
{"name":"moccasin",
"srcloc":["builtin://color",57,0,1642,57,34,1676]},
{"name":"burlywood",
"srcloc":["builtin://color",51,0,1431,51,35,1466]},
{"name":"peru",
"srcloc":["builtin://color",42,0,1122,42,29,1151]},
{"name":"mint-cream",
"srcloc":["builtin://color",101,0,3286,101,36,3322]},
{"name":"fuchsia",
"srcloc":["builtin://color",141,0,4731,141,31,4762]},
{"name":"slate-gray",
"srcloc":["builtin://color",117,0,3866,117,36,3902]},
{"name":"deep-pink",
"srcloc":["builtin://color",21,0,384,21,34,418]},
{"name":"midnight-blue",
"srcloc":["builtin://color",127,0,4234,127,37,4271]},
{"name":"navy",
"srcloc":["builtin://color",128,0,4272,128,28,4300]},
{"name":"hot-pink",
"srcloc":["builtin://color",27,0,602,27,34,636]},
{"name":"dark-violet",
"srcloc":["builtin://color",136,0,4547,136,35,4582]},
{"name":"pink",
"srcloc":["builtin://color",31,0,753,31,30,783]},
{"name":"chartreuse",
"srcloc":["builtin://color",78,0,2414,78,34,2448]},
{"name":"brown",
"srcloc":["builtin://color",37,0,961,37,29,990]},
{"name":"medium-aquamarine",
"srcloc":["builtin://color",96,0,3089,96,43,3132]},
{"name":"lime",
"srcloc":["builtin://color",85,0,2688,85,26,2714]},
{"name":"bisque",
"srcloc":["builtin://color",59,0,1709,59,32,1741]},
{"name":"blanched-almond",
"srcloc":["builtin://color",61,0,1783,61,41,1824]},
{"name":"plum",
"srcloc":["builtin://color",144,0,4833,144,30,4863]},
{"name":"medium-purple",
"srcloc":["builtin://color",138,0,4620,138,39,4659]},
{"name":"yellow",
"srcloc":["builtin://color",49,0,1370,49,30,1400]},
{"name":"forest-green",
"srcloc":["builtin://color",88,0,2783,88,36,2819]},
{"name":"light-steel-blue",
"srcloc":["builtin://color",118,0,3903,118,42,3945]},
{"name":"medium-blue",
"srcloc":["builtin://color",125,0,4168,125,33,4201]},
{"name":"sienna",
"srcloc":["builtin://color",40,0,1058,40,30,1088]},
{"name":"indigo",
"srcloc":["builtin://color",130,0,4328,130,29,4357]},
{"name":"transparent",
"srcloc":["builtin://color",157,0,5275,157,31,5306]},
{"name":"dark-magenta",
"srcloc":["builtin://color",142,0,4763,142,36,4799]},
{"name":"blue-violet",
"srcloc":["builtin://color",131,0,4358,131,36,4394]},
{"name":"orange-red",
"srcloc":["builtin://color",16,0,221,16,33,254]},
{"name":"cadet-blue",
"srcloc":["builtin://color",114,0,3748,114,35,3783]},
{"name":"light-blue",
"srcloc":["builtin://color",119,0,3946,119,36,3982]},
{"name":"red",
"srcloc":["builtin://color",15,0,195,15,25,220]},
{"name":"dark-blue",
"srcloc":["builtin://color",126,0,4202,126,31,4233]},
{"name":"coral",
"srcloc":["builtin://color",39,0,1027,39,30,1057]},
{"name":"saddle-brown",
"srcloc":["builtin://color",36,0,924,36,36,960]},
{"name":"maroon",
"srcloc":["builtin://color",22,0,419,22,30,449]},
{"name":"floral-white",
"srcloc":["builtin://color",74,0,2280,74,38,2318]},
{"name":"azure",
"srcloc":["builtin://color",124,0,4136,124,31,4167]},
{"name":"thistle",
"srcloc":["builtin://color",146,0,4899,146,33,4932]},
{"name":"light-slate-gray",
"srcloc":["builtin://color",116,0,3823,116,42,3865]},
{"name":"powder-blue",
"srcloc":["builtin://color",120,0,3983,120,37,4020]},
{"name":"salmon",
"srcloc":["builtin://color",41,0,1089,41,32,1121]},
{"name":"dark-sea-green",
"srcloc":["builtin://color",84,0,2647,84,40,2687]},
{"name":"orange",
"srcloc":["builtin://color",14,0,164,14,30,194]},
{"name":"dark-slate-gray",
"srcloc":["builtin://color",115,0,3784,115,38,3822]},
{"name":"slate-blue",
"srcloc":["builtin://color",133,0,4439,133,35,4474]},
{"name":"light-sea-green",
"srcloc":["builtin://color",98,0,3168,98,40,3208]},
{"name":"light-pink",
"srcloc":["builtin://color",29,0,679,29,36,715]},
{"name":"medium-sea-green",
"srcloc":["builtin://color",92,0,2935,92,41,2976]},
{"name":"silver",
"srcloc":["builtin://color",152,0,5114,152,32,5146]},
{"name":"light-green",
"srcloc":["builtin://color",94,0,3014,94,37,3051]},
{"name":"dodger-blue",
"srcloc":["builtin://color",103,0,3359,103,36,3395]},
{"name":"dark-green",
"srcloc":["builtin://color",86,0,2715,86,32,2747]},
{"name":"rosy-brown",
"srcloc":["builtin://color",30,0,716,30,36,752]},
{"name":"ghost-white",
"srcloc":["builtin://color",147,0,4933,147,37,4970]},
{"name":"lime-green",
"srcloc":["builtin://color",87,0,2748,87,34,2782]},
{"name":"white-smoke",
"srcloc":["builtin://color",149,0,5003,149,37,5040]},
{"name":"dark-khaki",
"srcloc":["builtin://color",56,0,1605,56,36,1641]},
{"name":"light-yellow",
"srcloc":["builtin://color",71,0,2174,71,38,2212]},
{"name":"medium-forest-green",
"srcloc":["builtin://color",81,0,2525,81,44,2569]},
{"name":"fire-brick",
"srcloc":["builtin://color",19,0,317,19,34,351]},
{"name":"dark-turquoise",
"srcloc":["builtin://color",108,0,3553,108,38,3591]},
{"name":"yellow-green",
"srcloc":["builtin://color",80,0,2487,80,37,2524]},
{"name":"tomato",
"srcloc":["builtin://color",17,0,255,17,30,285]},
{"name":"medium-turquoise",
"srcloc":["builtin://color",99,0,3209,99,41,3250]},
{"name":"ivory",
"srcloc":["builtin://color",75,0,2319,75,31,2350]},
{"name":"magenta",
"srcloc":["builtin://color",140,0,4699,140,31,4730]},
{"name":"lemon-chiffon",
"srcloc":["builtin://color",65,0,1943,65,39,1982]},
{"name":"white",
"srcloc":["builtin://color",148,0,4971,148,31,5002]},
{"name":"dim-gray",
"srcloc":["builtin://color",155,0,5214,155,34,5248]},
{"name":"alice-blue",
"srcloc":["builtin://color",123,0,4099,123,36,4135]},
{"name":"wheat",
"srcloc":["builtin://color",58,0,1677,58,31,1708]},
{"name":"dark-goldenrod",
"srcloc":["builtin://color",43,0,1152,43,39,1191]},
{"name":"lavender",
"srcloc":["builtin://color",145,0,4864,145,34,4898]},
{"name":"deep-sky-blue",
"srcloc":["builtin://color",104,0,3396,104,37,3433]},
{"name":"medium-goldenrod",
"srcloc":["builtin://color",62,0,1825,62,42,1867]},
{"name":"sky-blue",
"srcloc":["builtin://color",113,0,3713,113,34,3747]},
{"name":"medium-slate-blue",
"srcloc":["builtin://color",132,0,4395,132,43,4438]},
{"name":"pale-violet-red",
"srcloc":["builtin://color",28,0,637,28,41,678]},
{"name":"light-salmon",
"srcloc":["builtin://color",46,0,1264,46,38,1302]},
{"name":"dark-slate-blue",
"srcloc":["builtin://color",135,0,4507,135,39,4546]},
{"name":"dark-salmon",
"srcloc":["builtin://color",47,0,1303,47,37,1340]},
{"name":"dark-orange",
"srcloc":["builtin://color",38,0,991,38,35,1026]},
{"name":"sea-green",
"srcloc":["builtin://color",91,0,2901,91,33,2934]},
{"name":"beige",
"srcloc":["builtin://color",73,0,2248,73,31,2279]},
{"name":"cornflower-blue",
"srcloc":["builtin://color",105,0,3434,105,41,3475]},
{"name":"color",
"srcloc":["builtin://color",7,2,61,11,22,158]},
{"name":"spring-green",
"srcloc":["builtin://color",89,0,2820,89,36,2856]},
{"name":"cyan",
"srcloc":["builtin://color",109,0,3592,109,28,3620]},
{"name":"green",
"srcloc":["builtin://color",76,0,2351,76,27,2378]},
{"name":"gray",
"srcloc":["builtin://color",153,0,5147,153,30,5177]},
{"name":"violet-red",
"srcloc":["builtin://color",25,0,528,25,35,563]},
{"name":"snow",
"srcloc":["builtin://color",34,0,858,34,30,888]},
{"name":"orchid",
"srcloc":["builtin://color",32,0,784,32,32,816]},
{"name":"khaki",
"srcloc":["builtin://color",55,0,1573,55,31,1604]},
{"name":"lawn-green",
"srcloc":["builtin://color",77,0,2379,77,34,2413]},
{"name":"tan",
"srcloc":["builtin://color",52,0,1467,52,29,1496]},
{"name":"peach-puff",
"srcloc":["builtin://color",54,0,1536,54,36,1572]},
{"name":"seashell",
"srcloc":["builtin://color",72,0,2213,72,34,2247]},
{"name":"turquoise",
"srcloc":["builtin://color",97,0,3133,97,34,3167]},
{"name":"olive-drab",
"srcloc":["builtin://color",82,0,2570,82,35,2605]},
{"name":"royal-blue",
"srcloc":["builtin://color",102,0,3323,102,35,3358]},
{"name":"pale-green",
"srcloc":["builtin://color",95,0,3052,95,36,3088]},
{"name":"misty-rose",
"srcloc":["builtin://color",64,0,1906,64,36,1942]},
{"name":"is-color",
"srcloc":["builtin://color",7,2,61,11,22,158]},
{"name":"is-Color",
"srcloc":["builtin://color",6,0,47,12,3,162]},
{"name":"gold",
"srcloc":["builtin://color",48,0,1341,48,28,1369]}]};
