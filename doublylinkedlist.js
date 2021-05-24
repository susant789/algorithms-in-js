class Node{
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class Doublylinkedlist{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val){
        let newnode = new Node(val);
        if(this.length === 0){
            this.head = newnode;
            this.tail = newnode;
        }else{
            this.tail.next = newnode;
            newnode.prev = this.tail;
            this.tail = newnode;
        }
        this.length++
        return this;
    }

    pop(){
        if(this.length === 0) return undefined;
        let popped = this.tail;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        }else{
            this.tail = popped.prev;
            this.tail.next = null;
            popped.prev = null
        }
        this.length--;
        return popped;
        
    }
    shift(){
        if(this.length === 0){
            return undefined
        }
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        }else{
            let current = this.head;
            this.head = current.next;
            this.head.prev = null;
            current.next = null;
        }
        this.length--;
        return current;
    }
    unshift(val){
        let newnode = new Node(val);
        if(this.length){
            this.head = newnode;
            this.tail = newnode;
        }else{
            this.head.prev = newnode;
        newnode.next = this.head;
        this.head = newnode;
        }
        this.length++
    }
    get(index){
        if( index<0 || index>=this.length) return undefined
        let count;
        let current;
        if(index < this.length/2){
            count = 0;
            current = this.head;
            while(index !== count){
            current = curent.next;
            count++
            }  
        }else{
            count = this.length-1;
            current = this.tail;
            while(index !== count){
            current = curent.prev;
            count--
            }  
        }
        return current
        
    }
    set(index,val){
        let found = this.get(index);
        if(found != null){
            found.val = val;
            return true
        }
        return false;
    }

    insert(index,val){
        if( index < 0 || index > this.length) return undefined;
        if(index === 0) return !!this.unshift(val);
        if(index === this.length) return !!this.push(val);
        let newnode = new Node(val);
        let prevnode = this.get(index-1);
        let afternode = prevnode.next;
        prevnode.next = newnode;
        newnode.prev = prevnode;
        newnode.next = afternode;
        afternode.prev = newnode;
        this.length++;
        return true;
    }

    remove(index){
        if( index < 0 || index > this.length) return undefined;
        if(index === 0) return !!this.shift(val);
        if(index === this.length) return !!this.pop();
        let prevnode = this.get(index-1);
        let deleted = prevnode.next;
        prevnode.next = deleted.next;
        deleted.prev = prevnode;
        this.length--;
        return deleted;
    }
    or
    remove2(index){
        if( index < 0 || index > this.length) return undefined;
        if(index === 0) return !!this.shift(val);
        if(index === this.length) return !!this.pop();
        let deleted = this.get(index);
        deleted.prev.next = deleted.next;
        deleted.next.prev = deleted.prev;
        deleted.next = null;
        deleted.prev = null;
        this.length--;
        return deleted;
    }

}
