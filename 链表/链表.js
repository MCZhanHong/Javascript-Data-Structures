function LinkedList(){
	var Node=function(element){
		this.element=element;
		this.next=null;
	}
	var length=0;
	var head=null;
	
	//向链表尾部添加一个新的项
	this.append=function(element){
		var node=new Node(element),current;
		if(head==null){
			head=node;
		}else{
			current=head;
			//先找到最后一个节点
			while(current.next){
				current=current.next;
			}
			current.next=node;
		}
		length++;
	};

	//向链表的特定位置插入一个项
	this.insert=function(position,element){
		if(position>=0&&position<=length){
			var node=new Node(element),
				current=head,
				previous,index=0;
			if(position===0){
				node.next=current;
				head=node;
			}
			else{
				while(index++<position){
					previous=current;
					current=current.next;
				}
				node.next=current;
				previous.next=node;
			}
			length++;
			return true;
		}
		else{
			return false;
		}
	}

	//返回元素在列表中的索引
	this.indexOf=function(element){
		var index=-1,current=head;
		while(index++<=length){
			if(current.element==element)
				return index;
			current=current.next;
		}
	}


	//从列表的特定位置移除一项
	this.removeAt=function(position){
		if(position>-1&&position<length){
			var index=0,previous,current=head;
			if(position===0){
				head=current.next;
			}else{
				while(index++<position){
					previous=current;
					current=current.next;
				}
				previous.next=current.next;
			}
			length--;
			return current.element;
		}
		else{
			return null;
		}
	}

	//从列表中移除一项
	this.remove=function(element){
		return this.removeAt(this.indexOf(element));
	}

	//判断链表是否为空
	this.isEmpty=function(){
		if(length===0)
			return true;
		else
			return false;
	}

	//返回链表的元素个数
	this.size=function(){
		return length;
	}

	//返回链表的第一个元素
	this.getHead=function(){
		return head;
	}


	//转化为字符串
	this.toString=function(){
		var current=head,str='';
		while(current){
			str+=current.element;
			current=current.next;
		}
		return str;
	}

	//输出链表
	this.print=function(){
		console.log("该链表有"+this.size()+"个元素"+this.toString());
	}
}

var linkedlist=new LinkedList();
linkedlist.append(5);
linkedlist.append(6);
linkedlist.append(8);
linkedlist.append(9);
linkedlist.print();
linkedlist.insert(0,4);
linkedlist.insert(3,7);
linkedlist.print();
linkedlist.remove(4);
linkedlist.print();
linkedlist.removeAt(3);
linkedlist.print();
