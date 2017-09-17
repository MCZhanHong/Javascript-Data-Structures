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
		console.log(this.toString());
	}
}

var linkedlist=new LinkedList();
linkedlist.append(5);
linkedlist.append(8);
linkedlist.append(6);
linkedlist.print();
