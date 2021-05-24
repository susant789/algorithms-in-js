class node{
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class bst{
    constructor(){
        this.root = null
    }

    insert(val){
        let newnode = new node(val);
        if(!this.root){
            this.root = newnode;
            return this
        }else{
            let current = this.root;
            while(true){
                if(val < current.value){
                    if(current.left === null){
                        current.left = newnode;
                        return this
                    }else{
                        current = current.left;
                    }
                }else{
                    if(current.right === null){
                        current.right = newnode;
                        return this
                    }else{
                        current = current.right;
                    }
                }
            }  
        }
    }

    find(val){
        if(!this.root === null) return false;
        let current = this.root;
        let found = false;
        while(current && !found){
            if(val < current.value){
                current = current.left;
            }else if{
                current = current.right;
            }else{
                found = true;
            }
        }
        if(!found) return undefined;
        return current;
    }

    bst(){
        let node = this.root;
        let queue = [];
        let data = [];
        queue.push(node);
        while(queue.length){
            node = queue.shift();
            data.push(node.value);
            if(node.left) queue.push(node.left)
            if(node.right) queue.push(node.right)
        }
        return data;
    }

    
}
