# BST
 
## Implementation
### Basic BST
```javascript
class Node{
  constructor(data, left=null, right=null){
    this.data = data;
    this.left = left;
    this.right = right
  }
}

class BST{
  constructor(){
    this.root = null;
  }
  add(data){
    const node = this.root;
    if(node === null){
      this.root = new Node(data);
      return;
    }else{
      // create a recursive function to find right
      // node to insert
      const searchTree = function(node) {
        if(data < node.data){
          if(node.left === null){
            node.left = new Node(data);
            return;
          }else if(node.left !== null){
            return searchTree(node.left);
          }
        }else if(data > node.data){
          if(node.right === null){
            node.right = new Node(data);
            return;
          }else if(node.right !==null){
            return searchTree(node.right);
          }
        }else{
          return null;
        }
      }
      return searchTree(node);
    }
  }
  findMin(){
    let node = this.root;
    while(node.left != null){
      node = node.left;
    }
    return node.data;
  }
  
  findMax(){
    let node = this.root;
    while(node.right != null){
      node = node.right;
    }
    return node.data;
  }
  
  find(data){
    let current= this.root;
    while(current !=null){
      if(data === current.data){
        return current;
      }
      if(data< current.data){
        current = current.left
      }else{
        current=current.right
      }
    }
    return null;
  }
  
  isPresent(data){
    let current= this.root;
    while(current !=null){
      if(data === current.data){
        return true;
      }
      if(data< current.data){
        current = current.left
      }else{
        current=current.right
      }
    }
    return false;
  }
  
  
  remove(data){
    let searchTree = (data, node)=>{
      if(data < node.data){
        node.left = searchTree(data, node.left);
        return node;
      }else if(data > node.data){
        node.right=  searchTree(data, node.right)
        return node;
      }else{
        // remove
        // 3 case
        // if this node is a leaf node
        if(node.right === null && node.left === null){
          console.log('leaf node')
          return null;
        }
      }
    }
    
    let current = this.root;
    if(data < current.data){
      this.root.left = searchTree(data, current.left);
    }else if(data > current.data){
      this.root.right = searchTree(data, current.right)
    }else{
      this.root = null;
    }
  }
  
  print(prefix){
    console.log(prefix, this);
  }
}
const bst = new BST();
bst.add(10);
bst.add(20);
bst.add(9);
bst.add(4);
bst.add(11);
bst.add(3);
bst.add(5)
console.dir(bst)
bst.remove(5)
console.log(bst)
```
[Run@Codepen](https://codepen.io/shahidcodes/pen/pBbEzp)

<!--stackedit_data:
eyJoaXN0b3J5IjpbLTEzMjY0MDE5MjldfQ==
-->