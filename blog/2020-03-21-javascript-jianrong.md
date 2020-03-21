---
id: javascript-jianrong
title: javascript常见的兼容性问题及解决办法汇总
author: 山竹
author_title: 前端工程师
author_url: https://github.com/yixiaoke
author_image_url: ../img/logo.jpg
tags: [前端, JavaScript,兼容]
---
#### 1.获取当前网页的宽度和高度

```javascript
window.innerWidth?window.innerWidth:document.documentElement.clientWidth;
window.innerHeight?window.innerHeight:document.documentElement.clientHeight;
```
<!--truncate-->
#### 2.获取滚动条距顶端的距离

```javascript
var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
```

#### 3.获取滚动条距左边的距离
	

```javascript
var scrollTop=document.documentElement.scrollLeft||document.body.scrollLeft;
```

#### 4.通过byClassName获取页面元素的兼容
	

```javascript
//分析:如果支持就直接获取，如果不支持，通过byTagName获取，需要遍历所有的标签，找到需要的className的元素
function byClassName(obj,className){
		if(obj.getElementsByClassName){
			return obj.getElementsByClassName(className);
		}
		else{
			var arr=[];
			var eles=obj.getElementsByTagName('*');
			for(var i=0,len=eles.length;i<len;i++){
				if(eles[i].className==className){
					arr.push(eles[i]);
				}
			}
			return arr;
		}
	}
		//使用:
	var oDivClass=byClassName(document,'pox')[0];
		alert(oDivClass);
```

#### 5.获取节点对象的class属性的兼容
	

```javascript
function getAttributeFromClass(obj,className){
		return obj.getAttribute('class')==null ? obj.getAttribute('className') : obj.getAttribute('class');
	}
```

#### 6.获取非行内样式的兼容

```javascript
function getStyle(obj,attr){
	return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj,1)[attr];
}
```

#### 7.获取事件对象的编码值

```javascript
oBox.onclick=function(evt){
	var e=evt||window.event;
}
```

#### 8.获取鼠标按键的编码值

```javascript
function getButton(evt){
	var e=evt||window.event;
	if(evt){
		return e.button;
	}else if(window.event){
		switch(e.button){
			case 1:return 0;
			case 4:return 1;
			case 2:return 2;
		}
	}
}
```

#### 9.获取键盘按键的编码值

```javascript
//onkeydown和onkeyup事件
var code=event.keyCode||event.which;
//onkeypress事件
var code=event.keyCode||event.which||charCode
```
#### 10.获取事件源

```javascript
var target=e.target||e.srcElement;
```

#### 11.阻止事件冒泡

```javascript
var e=eve||window.event;
e.stopPropagation?e.stopPropagation():e.cancelBubble=true;
```

#### 12.阻止浏览器默认行为的兼容（表单提交、超链接、右键菜单）

```javascript
function stopDefault(eve){
	var e=eve||window.event;
	e.preventDefault?e.preventDefault():e.returnValue=false;
}
```

#### 13.事件监听

```javascript
function addEventListener(obj,event,fn,boo){
	if( addEventListener){
		obj.addEventListener(event,fn,boo)
	}else if(attachEvent){
		obj.attachEvent('on'+event,fn);
	}else{
		obj['on'+event]=fn;
	}
}
```

#### 14.移除事件监听

```javascript
function removeEventListener(obj,event,fn,boo){
	if( removeEventListener){
		obj.removeEventListener(event,fn,boo)
	}else if(detachEvent){
		obj.detachEvent('on'+event,fn);
	}else{
		obj['on'+event]=null;//这里注意,在移除时直接设置为空就好了
	}
}
```
