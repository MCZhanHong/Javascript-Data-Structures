function Dictionary(){		//字典
	var items={}；

	this.has=function(key){		//键值是否存在字典中
		return key in items;
	}

	this.set=function(key,value){		//向字典中添加一个新元素
		if(!this.has(key)){
			items[key]=value;		//
		}
	}

	this.remove=function(){
		
	}
}
