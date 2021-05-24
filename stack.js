class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class stack{
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    push(val){
        var newnode = new Node(val)
        if(!this.first){
            this.first = newnode;
            this.last = newnode;
        }else{
            var temp = this.first;
            this.first = newnode;
            this.first.next = temp;
        }
        this.size++
        return this.size;

    }

    pop(){
        if(!this.first) return null;
        if(this.first === this.last){
            this.last = null
        }
        let temp = this.first;
        this.first = this.first.next;
        this.size--
        return temp;

    }
}