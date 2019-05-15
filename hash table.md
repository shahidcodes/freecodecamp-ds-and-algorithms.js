# Hash Table
Hash table allows faster operations by indexing a key. Index are created by passing the key to a some sort of hash function. A normal hash function can like this
```javascript
function hash(string, max) {
  let hash = 0;
  for(let i=0; i<string.length;i++){
    hash+= string.charCodeAt(i)
  }
  return hash%max
}
```
<!--stackedit_data:
eyJoaXN0b3J5IjpbMTcxNjc2NDU0M119
-->