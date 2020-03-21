---
id: javascript-quchong
title: JavaScript中数组去重的种方法（前端面试问题）
author: 山竹
author_title: 前端工程师
author_url: https://github.com/yixiaoke
author_image_url: ../img/logo.jpg
tags: [前端, JavaScript,数组去重]
---

**方法1：双重for循环去重**
		循环遍历数组中的每一个单元,跟其之后的单元进行比较,如果相同,就删除之后的单元注意:防止数组坍塌
```javascript
        var arr = [1,1,1,2,2,2,3,3,3,4,4,4,5,5,5];
        for(let i = 0 ; i <= arr.length-1 ; i++){
            for(let j = i+1 ; j <= arr.length-1 ; j++){
                if(arr[i] === arr[j]){
                    arr.splice( j , 1 );
                    j--;
                }
            }
        }
        console.log(arr);
```
<!--truncate-->
**方法2：数组数值排序,相邻两个单元比较**
        只要一重for循环
```javascript
var arr = [1,2,3,4,5,1,2,3,4,5,1,2,3,4,5];
arr = arr.sort(function(a,b){return a-b});
for(let i = 0 ;  i <= arr.length-1-1 ; i++){
    if(arr[i] === arr[i+1]){
        arr.splice(i+1 , 1);
        i--;
    }
}
console.log(arr);
```
 **方法3：利用对象中,不能存储相同的键名**

```javascript
  var arr = [1,2,3,4,5,1,2,3,4,5,1,2,3,4,5];
    const obj = {};

    arr.forEach(function(val,key){
        obj[val] = '随便';
    });

    const newArr = [];
    for(let key in obj){
        newArr.push(key); 
    }

    console.log(obj);
    console.log(newArr);
```
**方法4：indexOf方法**
        判断要写入的数值,是否已经存在于新数组中
```javascript
   var arr = [1,2,3,4,5,1,2,3,4,5,1,2,3,4,5];

    const newArr = [];

    for(let i = 0 ; i <= arr.length-1 ; i++){
        if( newArr.indexOf(arr[i]) == -1 ){
            newArr.push(arr[i]);
        }
    }

    console.log(newArr);
```
  
 
         

**方法5：将数组单元,赋值给SET数据类型** 
	SET 数据类型中不会存储相同的数据,自动去重

```javascript
var arr = [1,2,3,4,5,1,2,3,4,5,1,2,3,4,5];

const set = new Set(arr);

const newArr = [...set];

const newArr = [...new Set(arr)];

console.log(newArr);
```
