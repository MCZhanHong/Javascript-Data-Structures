function DoublyLinkedList(){
	var Node=function(element){		//节类
		this.element=element;
		this.next=null;		
		this.prev=null;		
	}
	var length=0;		//长度
	var head=null,		//头指针
	tail=null;			//尾指针

	//方法
	this.insert=function(element,position){		//在指定位置插入一个元素
		if(position>=0&&position<=length){		//判定是否越界
			var node=new Node(element),
				current=head,		//指向当前数据
				previous,		//指向当前数据的前一个
				index=0;			//数据的下标
			if(position===0){
				if(!head){
					head=node;
					tail=node;
				}
				else{
					current.prev=node;
					node.next=current;
					head=node;
				}
			}
			else if(position===length){
				current=tail;
				current.next=node;
				node.prev=current;
				tail=node;
			}
			else{
				while(index++<position){
					previous=current;
					current=current.next;
				}
				previous.next=node;
				node.prev=previous;
				node.next=current;
				current.prev=node;
			}
			length++;
			return true;
		}
		else
			return false;
	}	

	this.removeAt=function(position){
		if(position>=0&&position<length){
			var index=0,
				current=head,
				previous;
			if(position==0){
				head=current.next;
				if(length==1){
					tail=null;
				}else{
					current.next.prev=null;
				}
			}
			else if(position==length-1){
				current=tail;
				tail=current.prev;
				tail.next=null;
				current.prev=null;
			}
			else{
				while(index++<position){
					previous=current;
					current=current.next;
				}
				previous.next=current.next;
				current.next.prev=previous;
			}
			length--;
			return current.element;
		}
		else{
			return null;
		}
	}

	this.toString=function(){		//转化为字符串
		var current=head,str='';
		while(current){
			str+=current.element;
			current=current.next;
		}
		return str;
	}

	this.size=function(){		//返回链表的长度
		return length;
	}

	this.print=function(){			//输出该链表
		console.log("该链表有"+this.size()+"个元素："+this.toString());
	}
}


//测试
var doublyLinkedList=new DoublyLinkedList();
doublyLinkedList.insert(1,0);
doublyLinkedList.insert(2,1);
doublyLinkedList.insert(3,2);
doublyLinkedList.insert(4,3);
doublyLinkedList.insert(5,4);
doublyLinkedList.insert(6,5);
doublyLinkedList.print();
doublyLinkedList.removeAt(2);
console.log("移除元素"+doublyLinkedList.removeAt(2));
doublyLinkedList.print();
doublyLinkedList.removeAt(0);
console.log("移除第一位元素"+doublyLinkedList.removeAt(0));
doublyLinkedList.print();
doublyLinkedList.removeAt(doublyLinkedList.size()-1);
console.log("移除最后一位元素");
doublyLinkedList.print();
