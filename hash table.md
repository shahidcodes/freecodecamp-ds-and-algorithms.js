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
`max` arg in function defines how long your data can grow. For example if you have 100 different types of product then keeping `max=100` would be perfect and will avoide collision.
## Implementation
```javascript
function hash(string, max) {
  let hash = 0;
  for(let i=0; i<string.length;i++){
    hash+= string.charCodeAt(i)
  }
  return hash%max
}

class HashTable{
  storage = [] // [ [[key, value],[key, value] ] ]
  storageLimit = 4
  put(key, value){
    let index = hash(key, this.storageLimit)
    if(this.storage[index] === undefined){
      this.storage[index] = [ [key, value] ];
    }else{
      let elIndex = this.storage[index].findIndex(el=>el[0]==key);
      if(elIndex != -1) this.storage[index][elIndex] = [key, value]
      else this.storage[index].push([key,value]);
    }
  }

  get(key){
    let index = hash(key, this.storageLimit);
    if(this.storage[index]){
      return this.storage[index].find(el=>el[0] === key)[1]
    }
  }

  remove(key){
    let index = hash(key, this.storageLimit);
    if(this.storage[index].length == 1) {
      delete this.storage[index]
    } else{
      let elIndex = this.storage[index].findIndex(el=>el[0]==key);
      if(elIndex != -1) 
        return this.storage[index].splice(elIndex, 1);
      else return -1
    }
  }
}

let ht = new HashTable();
ht.put("shahid", "codes")
ht.put("shahid1", "codes")
ht.put("shahid2", "codes")
ht.put("shahid3", "codes")
ht.put("shahid4", "codes")

console.log(ht.remove("shahid1"))
console.log(ht)
console.log(ht.get("shahid"))
console.log(ht.get("213"))

```
[Run@Codepen](https://codepen.io/shahidcodes/pen/JqWWgd?editors=0010)
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTg0Mzk3NzE2MV19
-->