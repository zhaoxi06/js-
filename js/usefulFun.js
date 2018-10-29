function doMove(elem,attr,dir,target,endFn){
	dir = parseInt(getStyle(elem,attr))>target?-dir:dir;
	clearInterval(elem.timer);
	elem.timer = setInterval(function(){
		var speed = parseInt(getStyle(elem,attr)) + dir;
		if(speed>target&&dir>0 || speed<target&&dir<0){
			speed = target;
		}
		elem.style[attr] = speed + "px";
		if(speed==target){
			clearInterval(elem.timer);
			endFn && endFn()
		}
	},30);
}
function getStyle(elem,attr){
	return elem.currentStyle?elem.currentStyle[attr]:getComputedStyle(elem)[attr];
}