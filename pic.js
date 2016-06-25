// JavaScript Document
//公共函数
function getStyle(obj,name)
{
	if(obj.currentStyle)
	{
		return obj.style[name];
	}else
	{
		return getComputedStyle(obj,false)[name];
	}
};
//获取窗口大小
function win(name)
{
	var h=document.documentElement.clientHeight;
	var w=document.documentElement.clientWidth;
	if(name=='height')
	{
		return h;
	}else
	{
		return w;
	}
};
//获取图片旋转度数
function css(obj,name)
{
	var str=obj.style[name];
	var re=/-{0,1}\d+[\.]\d+/g;		//利用正则表达式获取rotate的旋转度数值
	//alert(str);
	return parseFloat(str.match(re));
};
//拖拽
function drag(obj)
{
	obj.onmousedown=function(ev)
	{
		var oEvent=ev||event;
		var x=oEvent.clientX;
		var y=oEvent.clientY;
		var dx=x-this.offsetLeft;
		var dy=y-this.offsetTop;
		
		obj.onmousemove=function(ev)
		{
			var oEvent=ev||event;
			var x=oEvent.clientX;
			var y=oEvent.clientY;
			this.style.left=x-dx+'px';
			this.style.top=y-dy+'px';
		}
		
		obj.onmouseup=function()
		{
			this.onmousemove=null;
			this.onmouseup=null;		//垃圾回收机制
		}
		
		return false;		//阻止默认事件，防止ff、chrome小bug
	}
};

