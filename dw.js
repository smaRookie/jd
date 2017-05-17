"use strict";
// 封装添加事件函数

function addfun(element,type,fun){
	if(element.addEventListener){
		element.addEventListener(type,fun);
	}else if(element.attachEvent){
		element.attachEvent('on'+type,fun);
	}else {
		element['on'+type]=fun;
	}
}
// 为客户服务添加事件
var client =function(){
	// 客户服务
	var hclient=document.getElementsByClassName('client')[0];
    var hclientex=document.getElementsByClassName('client-extend')[0];
addfun(hclient,'mouseover',function(event){
	var event=event||window.event;
	hclient.style.borderBottom="2px solid #fff";
	hclient.style.boxShadow="1px 1px 1px #E8D5D5";
	hclientex.style.display="block";
	hclient.style.backgroundColor='#fff';
});
addfun(hclient,'mouseout',function(event){
	hclient.style.backgroundColor='#ccc';
	hclient.style.borderBottom="none";
	hclient.style.boxShadow="none";
	hclientex.style.display="none";
});
	// 网站导航
	var web=document.getElementsByClassName('client')[1];
	var webcontent=document.getElementsByClassName('web-extend')[0];
addfun(web,'mouseover',function(event){
	web.style.borderBottom="2px solid #fff";
	web.style.boxShadow="1px 1px 1px #E8D5D5";
	web.style.backgroundColor='#fff';
	webcontent.style.display="block";
});
addfun(web,'mouseout',function(){
	web.style.backgroundColor='#ccc';
	web.style.borderBottom="none";
	web.style.boxShadow="none";
	webcontent.style.display="none";
});
}

// 侧边栏显示方法
var side=function(){
	// 获取侧边显示栏的目标
	var sidecon = document.getElementsByClassName('col1_show')[0];
	// 获取li标签的数组
	var item=document.getElementsByClassName('col1_show_item');

	var s=document.getElementsByClassName('item');
	for(let i=0;i<item.length;i++){
			
		s[i].onmouseover=function(event){
			sidecon.style.display='block';
			item[i].style.display='block';
			sidecon.onmouseout=function(){
				sidecon.style.display='none';
				item[i].style.display='none';
		    };
		}
		s[i].onmouseout=function(event){
			sidecon.style.display='none';
			item[i].style.display='none';
			sidecon.onmouseover=function(){
				sidecon.style.display='block';
				item[i].style.display='block';
			};
		}
	}
}
// 图片透明度变化动画
/*
参数：  d  控制方向 -1向左 1向右
	    f  标志  防止动画不停变化 true执行 false 不执行
		pro  图片的数组  进行数量的判断和改变图片的透明度
		pu  控制按钮的数组  进行控制按钮的类名变化进而改变样式
		m  为图片和按钮的index值 判断当前展示图片的索引
*/
function animate(d,f,pro,pu,m){
		var now,next,z=10;
		if(f){
			f=false;
			// 进行范围的判断
			if(m>pro.length-1){
				m=0;
			}else if(m<0){
				m=pro.length-1;
			}
			// 把当前索引复制到now变量下一个索引复制到next变量
			now=m;
			next=m+d;

			// 进行范围的判断
			if(next>pro.length-1){
				next=0;
			}else if(next<0){
				next=pro.length-1;
			}
			m=next;
			// 清除所有样式
			for(var i=0;i<pro.length;i++){
				pro[i].style.opacity=0;
				pu[i].className='';
			}

			pro[next].style.opacity=1;
			pu[next].className='active';
			
		// setTimeout(function(){
		// 		f=true;
		// 	},1000);
			f=true;
			//返回当前索引值 
			return [m,f];
		}
		
	}


// 图片效果
function carousel(){
	var lef=document.getElementById('left');
	var rig=document.getElementById('right');
	// 获取图片li数组
	var car=document.getElementById('car').getElementsByTagName('li');
	// 获取控制按钮的数组
	var ctr=document.getElementById('ctr').getElementsByTagName('li');
var a=[0,true];
	// 页面加载后动画每隔5s自动执行
	var time=setInterval(function(){
		
		a=animate(1,a[1],car,ctr,a[0]);
		
	},3000);

	//  col为图片的父容器当鼠标移入图片就停止自动动画 移除执行动画
	var col=document.getElementsByClassName('col2-top')[0];
	col.onmouseover=function(){
		clearInterval(time);
	};
	col.onmouseout=function(){
		time=setInterval(function(){
		a=animate(1,a[1],car,ctr,a[0]);
	},2000);
	};

	// var m=0,flag=true;
	
	// 为左右按钮添加点击事件
	lef.onclick=function(){
		a=animate(-1,a[1],car,ctr,a[0]);
	};
	rig.onclick=function(){
		a=animate(1,a[1],car,ctr,a[0]);
	};
	// 为控制按钮添加事件
	for(var j=0;j<ctr.length;j++){
		ctr[j].index=j;
		ctr[j].onmouseover=function(){
			a=animate(this.index-a[0],a[1],car,ctr,a[0]);
		}
	}
}

function special(){
	// 优品专辑
	var le=document.getElementById('lef');
	var ri=document.getElementById('rig');
	var a=[0,true];
	// 获取图片li数组
	var pro=document.getElementById('pro').getElementsByTagName('div');
	// 获取控制按钮的数组
	var pu=document.getElementById('pu').getElementsByTagName('li');

	var time=setInterval(function(){
		a=animate(1,a[1],pro,pu,a[0]);
	},2000);
	// p 优品专辑的容器
	var p=document.getElementById('pro');
	p.onmouseover=function(){
		clearInterval(time);
	};
	p.onmouseout=function(){
		time=setInterval(function(){
		a=animate(1,a[1],pro,pu,a[0]);
	},3000);
	};

	le.onclick=function(){
		a=animate(-1,a[1],pro,pu,a[0]);
	};
	ri.onclick=function(){
		a=animate(1,a[1],pro,pu,a[0]);
	};
	// 为控制按钮添加事件
	for(var j=0;j<pu.length;j++){
		pu[j].index=j;
		pu[j].onmouseover=function(){
			a=animate(this.index-a[0],a[1],pro,pu,a[0]);
		}
	}
	
}
function label(){
	var con=document.getElementById('lab').getElementsByTagName('li');
	var di=document.getElementsByClassName('pro_3-show_1');
	var mar=document.getElementsByClassName('mark')[0];
	var m=0,now,next;
	for(var i=0;i<con.length;i++){
		con[i].index=i;
		con[i].onmouseover=function(){
			animate(this.index-m);
		}
	}
	function animate(d){
		if(m>con.length-1){
				m=0;
			}else if(m<0){
				m=con.length-1;
			}
			// 把当前索引复制到now变量下一个复制到next变量
			now=m;
			next=m+d;
			if(next>con.length-1){
				next=0;
			}else if(next<0){
				next=con.length-1;
			}
			for(j=0;j<con.length;j++){
				di[j].style.display='none';
			}
			di[next].style.display="block";

			mar.style.left=10+d*78+'px';
			if(mar.offsetLeft>340){
				mar.style.left=10+'px';
			}
	}
}
special();
label();
carousel();
client();
side();




