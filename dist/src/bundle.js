/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

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
	for(let i=0;i<15;i++){
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
// 图片效果
function carousel(){
	var lef=document.getElementById('left');
	var rig=document.getElementById('right');
	// 获取图片li数组
	var car=document.getElementById('car').getElementsByTagName('li');
	// 获取控制按钮的数组
	var ctr=document.getElementById('ctr').getElementsByTagName('li');
	var m=0,flag=true,now,next,z=10;
	// 为左右按钮添加点击事件
	lef.onclick=function(){
		animate(-1,flag);
	};
	rig.onclick=function(){
		animate(1,flag);
	};
	// 为控制按钮添加事件
	for(j=0;j<ctr.length;j++){
		ctr[j].index=j;
		ctr[j].onmouseover=function(){
			animate(this.index-m,flag);
		}
	}

	function animate(d,f){
		if(f){
			flag=false;
			if(m>car.length-1){
				m=0;
			}else if(m<0){
				m=car.length-1;
			}
			// 把当前索引复制到now变量下一个复制到next变量
			now=m;
			next=m+d;
			if(next>car.length-1){
				next=0;
			}else if(next<0){
				next=car.length-1;
			}
			m=next;
			// 清除所有样式
			for(var i=0;i<car.length;i++){
				car[i].style.opacity=0;
				ctr[i].className='';
			}

			car[next].style.opacity=1;

			setTimeout(function(){
				flag=true;
			},500);
					
			ctr[next].className='active';

		}
	}
}
function g(){
	// 优品专辑
	var le=document.getElementById('lef');
	var ri=document.getElementById('rig');
	// 获取图片li数组
	var pro=document.getElementById('pro').getElementsByTagName('div');
	// 获取控制按钮的数组
	var pu=document.getElementById('pu').getElementsByTagName('li');
	var m=0,flag=true,now,next,z=10;
	le.onclick=function(){
		animate(-1,flag);
	};
	ri.onclick=function(){
		animate(1,flag);
	};
	// 为控制按钮添加事件
	for(j=0;j<pu.length;j++){
		pu[j].index=j;
		pu[j].onmouseover=function(){
			animate(this.index-m,flag);
		}
	}
	function animate(d,f){
		if(f){
			flag=false;
			if(m>pro.length-1){
				m=0;
			}else if(m<0){
				m=pro.length-1;
			}
			// 把当前索引复制到now变量下一个复制到next变量
			now=m;
			next=m+d;
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

			setTimeout(function(){
				flag=true;
			},500);
					
			pu[next].className='active';

		}
	}
}
function h(){
	var con=document.getElementById('lab').getElementsByTagName('li');
	var di=document.getElementsByClassName('pro_3-show_1');
	var mar=document.getElementsByClassName('mark')[0];
	var m=0,now,next;
	for(i=0;i<con.length;i++){
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
g();
h();
carousel();
client();
side();




/***/ })
/******/ ]);