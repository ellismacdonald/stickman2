﻿(function(window) {
spritesheet = function() {
	this.initialize();
}
spritesheet._SpriteSheet = new createjs.SpriteSheet({images: ["spritesheet.png"], frames: [[0,0,32,86,0,0.6999999999999886,-2.3499999999999943],[0,0,32,86,0,0.6999999999999886,-2.3499999999999943],[34,0,26,86,0,-4.300000000000011,-1.3499999999999943],[34,0,26,86,0,-4.300000000000011,-1.3499999999999943],[62,0,22,86,0,-6.300000000000011,-1.3499999999999943],[62,0,22,86,0,-6.300000000000011,-1.3499999999999943],[86,0,22,86,0,-5.300000000000011,-1.3499999999999943],[86,0,22,86,0,-5.300000000000011,-1.3499999999999943],[110,0,22,86,0,-5.300000000000011,-1.3499999999999943],[110,0,22,86,0,-5.300000000000011,-1.3499999999999943],[134,0,26,86,0,-3.3000000000000114,-1.3499999999999943],[134,0,26,86,0,-3.3000000000000114,-1.3499999999999943],[162,0,26,86,0,-3.3000000000000114,-1.3499999999999943],[162,0,26,86,0,-3.3000000000000114,-1.3499999999999943],[190,0,22,86,0,-5.300000000000011,-2.3499999999999943],[190,0,22,86,0,-5.300000000000011,-2.3499999999999943],[214,0,22,86,0,-6.300000000000011,-1.3499999999999943],[214,0,22,86,0,-6.300000000000011,-1.3499999999999943],[238,0,22,85,0,-6.300000000000011,-2.3499999999999943],[238,0,22,85,0,-6.300000000000011,-2.3499999999999943],[262,0,26,87,0,-4.300000000000011,-1.3499999999999943],[262,0,26,87,0,-4.300000000000011,-1.3499999999999943],[0,0,32,86,0,0.6999999999999886,-2.3499999999999943],[0,0,32,86,0,0.6999999999999886,-2.3499999999999943],[290,0,26,86,0,-4.300000000000011,-1.3499999999999943],[290,0,26,86,0,-4.300000000000011,-1.3499999999999943],[318,0,22,86,0,-6.300000000000011,-1.3499999999999943],[318,0,22,86,0,-6.300000000000011,-1.3499999999999943],[342,0,22,86,0,-5.300000000000011,-1.3499999999999943],[342,0,22,86,0,-5.300000000000011,-1.3499999999999943],[366,0,22,86,0,-5.300000000000011,-1.3499999999999943],[366,0,22,86,0,-5.300000000000011,-1.3499999999999943],[390,0,26,86,0,-3.3000000000000114,-1.3499999999999943],[390,0,26,86,0,-3.3000000000000114,-1.3499999999999943],[418,0,26,86,0,-3.3000000000000114,-1.3499999999999943],[418,0,26,86,0,-3.3000000000000114,-1.3499999999999943],[446,0,22,86,0,-5.300000000000011,-2.3499999999999943],[446,0,22,86,0,-5.300000000000011,-2.3499999999999943],[470,0,22,86,0,-6.300000000000011,-1.3499999999999943],[470,0,22,86,0,-6.300000000000011,-1.3499999999999943],[494,0,22,85,0,-6.300000000000011,-2.3499999999999943],[494,0,22,85,0,-6.300000000000011,-2.3499999999999943],[518,0,26,87,0,-4.300000000000011,-1.3499999999999943],[518,0,26,87,0,-4.300000000000011,-1.3499999999999943],[546,0,26,86,0,-4.300000000000011,-1.3499999999999943],[574,0,29,84,0,-7.300000000000011,-3.3499999999999943],[605,0,34,82,0,-4.300000000000011,-6.349999999999994],[641,0,39,78,0,-3.3000000000000114,-10.349999999999994],[682,0,49,74,0,-5.300000000000011,-14.349999999999994],[733,0,54,70,0,-5.300000000000011,-17.349999999999994],[789,0,59,66,0,-6.300000000000011,-21.349999999999994],[850,0,66,61,0,-4.300000000000011,-26.349999999999994],[918,0,69,58,0,-5.300000000000011,-29.349999999999994],[989,0,72,52,0,-6.300000000000011,-35.349999999999994],[1063,0,75,48,0,-4.300000000000011,-39.349999999999994],[1140,0,77,45,0,-5.300000000000011,-42.349999999999994],[1219,0,79,40,0,-4.300000000000011,-48.349999999999994],[1300,0,80,35,0,-4.300000000000011,-53.349999999999994],[1382,0,81,31,0,-4.300000000000011,-57.349999999999994],[1465,0,82,26,0,-4.300000000000011,-62.349999999999994],[1549,0,83,23,0,-4.300000000000011,-65.35],[1634,0,83,18,0,-4.300000000000011,-70.35],[1719,0,78,11,0,-4.300000000000011,-76.35],[1799,0,64,10,0,-11.300000000000011,-77.35],[1865,0,51,10,0,-17.30000000000001,-77.35],[1918,0,40,10,0,-23.30000000000001,-77.35],[1960,0,30,10,0,-28.30000000000001,-77.35],[1992,0,19,10,0,-33.30000000000001,-77.35],[1992,0,19,10,0,-32.30000000000001,-77.35],[2013,0,13,10,0,-36.30000000000001,-77.35],[2028,0,7,7,0,-38.30000000000001,-79.35],[2037,0,1,2,0,-40.30000000000001,-82.35],[2040,0,0,0,0,0.6999999999999886,0.6500000000000057],[0,89,32,87,0,-11.300000000000011,-1.3499999999999943],[34,89,32,80,0,-11.300000000000011,-8.349999999999994],[68,89,36,77,0,-9.300000000000011,-11.349999999999994],[106,89,39,77,0,-7.300000000000011,-11.349999999999994],[147,89,40,80,0,-7.300000000000011,-8.349999999999994],[189,89,38,84,0,-8.300000000000011,-4.349999999999994],[229,89,39,84,0,-8.300000000000011,-4.349999999999994],[189,89,38,84,0,-8.300000000000011,-4.349999999999994],[147,89,40,80,0,-7.300000000000011,-8.349999999999994],[106,89,39,77,0,-7.300000000000011,-11.349999999999994],[106,89,39,77,0,-7.300000000000011,-11.349999999999994],[68,89,36,77,0,-9.300000000000011,-11.349999999999994],[34,89,32,80,0,-11.300000000000011,-8.349999999999994],[0,89,32,87,0,-11.300000000000011,-1.3499999999999943],[270,89,30,87,0,-14.300000000000011,-1.3499999999999943],[302,89,32,87,0,-14.300000000000011,-1.3499999999999943],[336,89,32,87,0,-14.300000000000011,-1.3499999999999943],[370,89,42,87,0,-14.300000000000011,-1.3499999999999943],[414,89,60,101,0,-14.300000000000011,12.650000000000006],[476,89,81,125,0,-14.300000000000011,36.650000000000006],[559,89,102,148,0,-14.300000000000011,59.650000000000006],[663,89,125,173,0,-14.300000000000011,84.65],[790,89,126,173,0,-14.300000000000011,84.65],[918,89,126,174,0,-16.30000000000001,87.65],[1046,89,119,175,0,-22.30000000000001,87.65],[1167,89,113,177,0,-28.30000000000001,86.65],[1282,89,108,175,0,-33.30000000000001,86.65],[1392,89,100,175,0,-41.30000000000001,86.65],[1494,89,92,174,0,-49.30000000000001,86.65],[1588,89,83,172,0,-57.30000000000001,85.65],[1673,89,83,174,0,-57.30000000000001,87.65],[1758,89,76,172,0,-64.30000000000001,87.65],[1836,89,74,168,0,-75.30000000000001,86.65],[1912,89,76,168,0,-83.30000000000001,86.65],[0,268,77,169,0,-96.30000000000001,86.65],[79,268,77,168,0,-109.30000000000001,86.65],[158,268,76,167,0,-119.30000000000001,86.65],[236,268,76,166,0,-130.3,86.65],[314,268,91,165,0,-136.3,86.65],[407,268,100,163,0,-136.3,86.65],[509,268,112,158,0,-136.3,86.65],[623,268,121,154,0,-136.3,86.65],[746,268,130,149,0,-136.3,86.65],[878,268,139,142,0,-136.3,87.65],[1019,268,145,136,0,-136.3,87.65],[1166,268,155,128,0,-136.3,87.65],[1323,268,164,121,0,-136.3,87.65],[1489,268,169,111,0,-137.3,86.65],[1660,268,174,105,0,-137.3,87.65],[1836,268,186,95,0,-137.3,86.65],[0,439,191,79,0,-138.3,86.65],[193,439,192,72,0,-137.3,87.65],[387,439,197,52,0,-137.3,86.65],[586,439,199,38,0,-136.3,87.65],[787,439,199,38,0,-136.3,87.65],[988,439,198,52,0,-137.3,87.65],[1188,439,198,52,0,-137.3,86.65],[1388,439,196,63,0,-137.3,87.65],[1586,439,192,68,0,-137.3,87.65],[1780,439,177,83,0,-138.3,87.65],[0,524,161,107,0,-137.3,87.65],[163,524,159,124,0,-138.3,86.65],[324,524,155,133,0,-137.3,87.65],[481,524,149,136,0,-137.3,86.65],[632,524,135,145,0,-137.3,86.65],[769,524,120,152,0,-136.3,86.65],[891,524,106,154,0,-136.3,86.65],[999,524,92,161,0,-137.3,86.65],[1093,524,80,164,0,-129.3,86.65],[1175,524,85,164,0,-104.30000000000001,86.65],[1262,524,85,164,0,-89.30000000000001,86.65],[1349,524,85,164,0,-80.30000000000001,86.65],[1436,524,83,167,0,-74.30000000000001,86.65],[1521,524,81,167,0,-60.30000000000001,86.65],[1604,524,95,164,0,-46.30000000000001,86.65],[1701,524,109,160,0,-32.30000000000001,86.65],[1812,524,133,143,0,-7.300000000000011,87.65],[0,693,143,136,0,2.6999999999999886,87.65],[145,693,154,128,0,13.699999999999989,87.65],[301,693,163,120,0,21.69999999999999,87.65],[466,693,168,111,0,27.69999999999999,87.65],[636,693,173,105,0,32.69999999999999,87.65],[811,693,185,95,0,44.69999999999999,87.65],[998,693,190,79,0,49.69999999999999,87.65],[1190,693,188,70,0,47.69999999999999,86.65],[1380,693,195,52,0,54.69999999999999,86.65],[1577,693,197,38,0,56.69999999999999,86.65],[1577,693,197,38,0,56.69999999999999,86.65],[1776,693,31,87,0,-233.3,-1.3499999999999943],[1809,693,32,87,0,-232.3,-1.3499999999999943],[1843,693,32,87,0,-232.3,-1.3499999999999943],[1877,693,43,87,0,-221.3,-1.3499999999999943],[1922,693,61,101,0,-203.3,12.650000000000006],[0,831,81,125,0,-183.3,36.650000000000006],[83,831,103,148,0,-162.3,59.650000000000006],[188,831,125,173,0,-140.3,84.65],[315,831,127,173,0,-138.3,85.65],[444,831,126,174,0,-136.3,87.65],[572,831,120,175,0,-136.3,87.65],[694,831,112,177,0,-136.3,87.65],[808,831,108,175,0,-136.3,86.65],[918,831,100,176,0,-136.3,87.65],[1020,831,92,174,0,-136.3,86.65],[1114,831,84,173,0,-136.3,87.65],[1200,831,83,174,0,-136.3,87.65],[1285,831,76,172,0,-136.3,87.65],[1363,831,74,168,0,-128.3,86.65],[1439,831,75,168,0,-118.30000000000001,86.65],[1516,831,76,168,0,-104.30000000000001,86.65],[1594,831,76,167,0,-91.30000000000001,86.65],[1672,831,77,166,0,-81.30000000000001,86.65],[1751,831,77,166,0,-70.30000000000001,86.65],[1830,831,90,164,0,-50.30000000000001,86.65],[1922,831,99,162,0,-41.30000000000001,86.65],[0,1010,111,158,0,-29.30000000000001,86.65],[113,1010,121,155,0,-20.30000000000001,87.65],[236,1010,129,149,0,-11.300000000000011,86.65],[367,1010,139,142,0,-1.3000000000000114,87.65],[508,1010,143,136,0,2.6999999999999886,87.65],[653,1010,154,128,0,13.699999999999989,87.65],[809,1010,163,120,0,22.69999999999999,87.65],[974,1010,168,110,0,27.69999999999999,86.65],[1144,1010,174,105,0,33.69999999999999,87.65],[1320,1010,185,95,0,44.69999999999999,87.65],[1507,1010,190,79,0,49.69999999999999,87.65],[1699,1010,191,72,0,50.69999999999999,87.65],[0,1170,196,53,0,55.69999999999999,87.65],[198,1170,197,38,0,56.69999999999999,87.65],[397,1170,198,38,0,56.69999999999999,87.65],[597,1170,197,52,0,56.69999999999999,87.65],[796,1170,197,52,0,55.69999999999999,87.65],[995,1170,195,63,0,54.69999999999999,87.65],[1192,1170,192,68,0,50.69999999999999,87.65],[1386,1170,176,83,0,35.69999999999999,87.65],[1564,1170,160,107,0,19.69999999999999,87.65],[1726,1170,158,125,0,17.69999999999999,87.65],[1886,1170,155,132,0,14.699999999999989,87.65],[0,1304,147,136,0,6.699999999999989,87.65],[149,1304,135,145,0,-5.300000000000011,86.65],[286,1304,120,153,0,-20.30000000000001,87.65],[408,1304,106,153,0,-34.30000000000001,86.65],[516,1304,92,161,0,-48.30000000000001,86.65],[610,1304,80,164,0,-68.30000000000001,87.65],[692,1304,85,164,0,-88.30000000000001,87.65],[779,1304,85,164,0,-103.30000000000001,87.65],[866,1304,85,164,0,-112.30000000000001,87.65],[953,1304,83,166,0,-120.30000000000001,86.65],[1038,1304,80,167,0,-136.3,87.65],[1120,1304,95,164,0,-136.3,86.65],[1217,1304,109,160,0,-136.3,87.65],[1328,1304,133,143,0,-136.3,87.65],[1463,1304,144,136,0,-136.3,87.65],[1609,1304,155,128,0,-136.3,87.65],[1766,1304,164,120,0,-136.3,87.65],[0,1473,169,111,0,-136.3,87.65],[171,1473,174,105,0,-137.3,87.65],[347,1473,186,95,0,-137.3,87.65],[535,1473,191,78,0,-136.3,87.65],[728,1473,189,70,0,-137.3,86.65],[919,1473,196,53,0,-137.3,87.65],[1117,1473,198,38,0,-137.3,87.65],[586,439,199,38,0,-137.3,87.65],[1317,1473,174,39,0,57.69999999999999,81.65],[1493,1473,143,52,0,57.69999999999999,73.65],[1638,1473,112,54,0,55.69999999999999,65.65],[1752,1473,76,56,0,53.69999999999999,62.650000000000006],[1830,1473,59,62,0,47.69999999999999,59.650000000000006],[1891,1473,51,69,0,44.69999999999999,61.650000000000006],[1944,1473,45,74,0,44.69999999999999,51.650000000000006],[1991,1473,42,85,0,47.69999999999999,46.650000000000006],[0,1586,42,86,0,51.69999999999999,36.650000000000006],[44,1586,42,86,0,54.69999999999999,26.650000000000006],[88,1586,41,86,0,57.69999999999999,17.650000000000006],[131,1586,42,87,0,62.69999999999999,13.650000000000006],[175,1586,42,87,0,66.69999999999999,7.650000000000006],[219,1586,42,86,0,70.69999999999999,0.6500000000000057],[263,1586,42,87,0,75.69999999999999,-1.3499999999999943],[307,1586,42,87,0,75.69999999999999,-1.3499999999999943],[351,1586,38,77,0,74.69999999999999,-11.349999999999994],[391,1586,39,77,0,74.69999999999999,-11.349999999999994],[432,1586,35,77,0,72.69999999999999,-11.349999999999994],[469,1586,31,80,0,70.69999999999999,-8.349999999999994],[502,1586,31,87,0,70.69999999999999,-1.3499999999999943],[535,1586,175,39,0,-176.3,73.65],[712,1586,144,51,0,-206.3,65.65],[858,1586,113,54,0,-233.3,57.650000000000006],[973,1586,77,55,0,-265.3,47.650000000000006],[1052,1586,60,61,0,-280.3,44.650000000000006],[1114,1586,52,70,0,-286.3,42.650000000000006],[1168,1586,45,74,0,-287.3,37.650000000000006],[1215,1586,42,84,0,-289.3,34.650000000000006],[1259,1586,43,87,0,-291.3,28.650000000000006],[1304,1586,43,86,0,-291.3,24.650000000000006],[88,1586,41,86,0,-292.3,17.650000000000006],[1349,1586,43,87,0,-291.3,13.650000000000006],[1394,1586,43,87,0,-291.3,7.650000000000006],[1439,1586,43,86,0,-291.3,7.650000000000006],[1484,1586,42,87,0,-291.3,-3.3499999999999943],[1528,1586,42,87,0,-291.3,-3.3499999999999943],[1572,1586,40,77,0,-291.3,-11.349999999999994],[1614,1586,39,77,0,-292.3,-11.349999999999994],[1655,1586,36,77,0,-294.3,-11.349999999999994],[1693,1586,32,80,0,-296.3,-8.349999999999994],[1727,1586,32,87,0,-297.3,-1.3499999999999943],[0,0,32,86,0,0.6999999999999886,-2.3499999999999943],[1761,1586,32,86,0,0.6999999999999886,-2.3499999999999943],[0,0,32,86,0,0.6999999999999886,-2.3499999999999943],[1761,1586,32,86,0,0.6999999999999886,-2.3499999999999943],[1795,1586,42,86,0,54.69999999999999,-2.3499999999999943],[1839,1586,36,87,0,51.69999999999999,-2.3499999999999943],[1795,1586,42,86,0,54.69999999999999,-2.3499999999999943],[1839,1586,36,87,0,51.69999999999999,-2.3499999999999943],[1795,1586,42,86,0,54.69999999999999,-2.3499999999999943],[0,1675,319,224,0,162.7,113.65],[321,1675,262,138,0,132.7,57.650000000000006]],  animations: {walkRight:[0,21, true], walkLeft:[22,43, true], death:[44,72, true], jump:[73,86, true], swingRight:[87,160, true], swingLeft:[161,234, true], swingJumpLeft:[235,255, true], swingJumpRight:[256,276, true], idle:[277,280, true], falling:[281,285, true], title:[286,286, true], playBtn:[287,287, true]}});
var spritesheet_p = spritesheet.prototype = new createjs.Sprite();
spritesheet_p.Sprite_initialize = spritesheet_p.initialize;
spritesheet_p.initialize = function() {
	this.Sprite_initialize(spritesheet._SpriteSheet);
	this.paused = false;
}
spritesheet_p.walkRight = function(){
	this.gotoAndPlay("walkRight");
}
spritesheet_p.walkLeft = function(){
	this.gotoAndPlay("walkLeft");
}
spritesheet_p.death = function(){
	this.gotoAndPlay("death");
}
spritesheet_p.jump = function(){
	this.gotoAndPlay("jump");
}
spritesheet_p.swingRight = function(){
	this.gotoAndPlay("swingRight");
}
spritesheet_p.swingLeft = function(){
	this.gotoAndPlay("swingLeft");
}
spritesheet_p.swingJumpLeft = function(){
	this.gotoAndPlay("swingJumpLeft");
}
spritesheet_p.swingJumpRight = function(){
	this.gotoAndPlay("swingJumpRight");
}
spritesheet_p.idle = function(){
	this.gotoAndPlay("idle");
}
spritesheet_p.falling = function(){
	this.gotoAndPlay("falling");
}
spritesheet_p.title = function(){
	this.gotoAndPlay("title");
}
spritesheet_p.playBtn = function(){
	this.gotoAndPlay("playBtn");
}
window.spritesheet = spritesheet;
}(window));
