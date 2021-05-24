class node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class queue{
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    push(val){
        let newnode = new node(val)
        if(!this.first){
            this.first = newnode;
            this.last = newnode;
        }else{
            this.last.next = newnode;
            this.last = newnode;
        }
        this.size++
        return this.size;
    }

    pop(){
        if(this.size == 0) return null;
        if(this.size == 1){
            this.last = null;
        }let deleted = this.first;
         this.first = this.first.next;
         this.size--
         return deleted;
    }
//     pop(){
//         if(this.size == 0) return null;
//         if(this.size == 1){
//             this.last = null;
//         }
//         let current = this.first;
//          let newtail = current;
//         while(current.next){
//             newtail = current;
//             current = current.next;
//         }
//         this.last = newtail;
//         this.last.next = null;
//         this.size--;
//         return current;
//     }
}