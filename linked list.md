# Linked List (Singly linked)
Linked list a list like structure where each element typically called node stored two types of data, one is the value and other is ref of next node.
![linked list image](https://www.geeksforgeeks.org/wp-content/uploads/gq/2013/03/Linkedlist_insert_at_start.png)

## Complexities
*There is no worst case in linked list*
|Operation| BigOh |
|--|--|
| Searching an Element| O(n) |
| Accessing an element| O(n) |
| Inserting an element| O(1) |
| Deleting an element | O(1) |

## Implementation
```javascript
console.clear();
class Node {
  constructor(data){
    this.data = data;
    this.next = null;
  }
}
class LinkedList {
  head = null
  _size = 0
  size(){
    return this._size;
  }
  add(data){
    if(!data) return;
    let node = new Node(data);
    if(this.head == null) this.head = node;
    else {
      let currentHead = this.head;
      while(currentHead.next!=null){
        currentHead = currentHead.next;
      }
      currentHead.next = node;
    }
    this._size++;
  }
  remove(data){
    if(!data) return -1;
    let currentHead = this.head;
    let prevElement;
    while(currentHead){
      if(currentHead.data === data){
        if(this.head === currentHead) this.head = currentHead.next;
        else prevElement.next = currentHead.next;
        this._size--;
        break;
      }
      prevElement = currentHead;
      currentHead = currentHead.next;
    }
  }
  contains(data){
    if(!data) return;
    let currentHead = this.head;
    while(currentHead){
      if(currentHead.data == data) return true;
      currentHead = currentHead.next;
    }
    return false;
  }

  toArray(){
    let arr = [];
    let currentHead = this.head;
    while(currentHead){
      arr.push(currentHead.data);
      currentHead = currentHead.next;
    }
    return arr;
  }
}

const list = new LinkedList()
list.add(1);
list.add(2);
list.add(3);
list.add(4);
console.log(list);
list.remove(1)
console.log(list);
list.remove(3)
console.log(list.size())

console.log("contains 3", list.contains(3))
console.log(list.toArray())
```
[code@codepen](https://codepen.io/shahidcodes/pen/arWydj?editors=0010)
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTE1MzAzMDEwMzksNjA4MjE4Nzk0XX0=
-->