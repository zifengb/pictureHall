// JavaScript Document
window.onload=function()
	{
		var oCover=document.getElementsByClassName('cover');		//获取遮罩层
		var par=oCover[0].parentNode;								//获取外层div.palaroid
		var oBody=document.getElementsByTagName('body')[0];
		//生成随机参数函数
		resize();
		window.onresize=resize;
		
		function resize()
		{
			var winh=win('height');
			var winw=win('width');
			oBody.style.width=winw+'px';
			oBody.style.height=winh+'px';
			
			for(var i=0;i<oCover.length;i++)
			{
				//随机生成定位的top、left、deg等参数
				var left=Math.random()*(winw-1.3*oCover[i].offsetWidth);
				var top=Math.random()*(winh-1.3*oCover[i].offsetHeight);
				var deg=Math.random()*45;
				
				if(i%2==0)
				{
					deg=-deg;
				}
				oCover[i].parentNode.style.left=left+'px';
				oCover[i].parentNode.style.top=top+'px';
				oCover[i].parentNode.style.webkitTransform='rotate('+deg+'deg)';
				oCover[i].parentNode.style.mozTransform='rotate('+deg+'deg)';
				oCover[i].parentNode.style.msTransform='rotate('+deg+'deg)';
				oCover[i].parentNode.style.oTransform='rotate('+deg+'deg)';
				oCover[i].parentNode.style.transform='rotate('+deg+'deg)';
				
				//拖拽
				oCover[i].onmousedown=function()			//选中图片
				{
					par.style.zIndex=0;						//上一张图片变动z-index进行更新
					this.parentNode.style.zIndex=1000;
					drag(this.parentNode);
					par=this.parentNode;
				};
			}
		};
		
		document.onkeydown=function(ev)
		{
			var oEvent=ev||event;
			var deg=css(par,'transform');		//获取图片当前的旋转度数
			//alert(deg);
			//alert(oEvent.keyCode);
			if(oEvent.keyCode==37)				//键盘左键
			{
				deg--;
				if(deg<-90)
					deg++;
			}else if(oEvent.keyCode==39)		//键盘右键
			{
				deg++;
				if(deg>90)
					deg--;
			}else if(oEvent.keyCode==116)		//F5刷新键
			{
				return true;
			}else
			{
				return false;	
			}
			
			par.style.webkitTransform='rotate('+deg+'deg)';
			par.style.mzTransform='rotate('+deg+'deg)';
			par.style.oTransform='rotate('+deg+'deg)';
			par.style.msTransform='rotate('+deg+'deg)';
			par.style.transform='rotate('+deg+'deg)';
		};
	};