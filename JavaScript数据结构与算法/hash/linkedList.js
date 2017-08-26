function LinkedList(){
	var Node = function(element){
		this.element = element;
		this.next = null;
	}
	var length = 0;
	var head = null;

	this.append = function(element){
		var node = new Node(element),
			current;
		if(head == null){
			head = node;
		}
		else{
			current = head;

			//循环列表，一直找到最后一项
			while(current.next){
				current = current.next;
			}

			//找到最后一项，赋值它的next，建立链接
			current.next = node;
		}
		length ++;
	}
	this.removeAt = function(position){
		if(position>=0 && position<length){
			var current = head,
				previous,
				index = 0;

			if(position === 0){
				head = current.next;
			}
			else{

				//通过循环遍历列表，寻找到要删除的元素，并且找到要删除的元素的前一个 previous和
				while(index ++ <position){
					previous = current; 
					current = current.next;
				}

				// 将前一个的链接直接指向后面的，跳过中间current
				previous.next = current.next;
			}
			length --;
			return current.element;
		}
		else{
			return null;
		}
	};

	this.inset = function(position,element){
		if(position>=0 && position<=length){

			var node = new Node(element),
				current = head,
				previous,
				index = 0;
			if(position === 0){
				node.next = current;
				head = node;
			}
			else{
				while(index++ < position){
					previous = current;
					current = current.next;
				}
				node.next = current;
				previous.next = node;
			}
			length ++;

			return true;

		}
		else{
			return false;
		}
	};
	this.toString = function(){
		var current = head,
			string = '';

		while(current){
			string += current.element;
			current = current.next;
		}
		return string;
	};

	this.indexOf = function(element){
		var current = head,
			index = -1;

		while(current){
			index++;
			if(current.element == element){
				return index;
			}
			current = current.next;
			
		}

		return -1;
	};

	this.remove = function(element){
		var index = this.indexOf(element);
		return this.removeAt(index);
	};
	this.isEmpty = function(){
		return length === 0;

	}
	this.size = function(){
		return length;
	}
	this.getHead = function(){
		return head;
	}
}