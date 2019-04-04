// Classic FiFo Queues
class Queue{
  constructor(){
    this.collection = [];
  }

  enqueue(element){
    this.collection.push(element);
    return true;
  }

  dequeue(){
    return this.collection.shift()
  }

  peek(){
    return this.collection[0]
  }

  front(){
    return this.peek()
  }

  size(){
    return this.collection.length
  }

  isEmpty(){
    return this.size() == 0;
  }
}

const q1 = new Queue();
q1.enqueue(1)
q1.enqueue(2)
q1.enqueue(3)
q1.enqueue("fcc")
q1.enqueue("knowhere")
console.log('EMPTY?', q1.isEmpty())
console.log('Size', q1.size())
console.log('Front', q1.peek())
console.log('Dequeue', q1.dequeue())
console.log('Size after dq', q1.size())
console.log('Front after dq', q1.peek())

// Priority Queues

class PriorityQueue {
  constructor() {
    this.collection = [];
  }

  enqueue(element) {
    if (this.isEmpty()) {
      this.collection.push(element);
    } else {
      let added = false; // in case of last element with that priority
      let length = this.collection.length;
      for (let i = 0; i < length; i++) {
        console.log(element, this.collection[i][1]);
        if (element[1] < this.collection[i][1]) {
          // check if element's prioity is less
          this.collection.splice(i, 0, element); // if it is then push element to index i
          added = true;
          break;
        }
      }
      if (!added) this.collection.push(element);
    }
  }

  dequeue() {
    let value = this.collection.shift();
    return value[0];
  }

  peek() {
    return this.collection[0];
  }

  front() {
    return this.peek();
  }

  size() {
    return this.collection.length;
  }

  isEmpty() {
    return this.size() == 0;
  }

  toString() {
    console.log(this.collection);
  }
}

const pq1 = new PriorityQueue();
pq1.enqueue(["one", 1]);
pq1.enqueue(["two", 2]);
pq1.enqueue(["three", 3]);
pq1.enqueue(["fcc", 1]);
pq1.enqueue(["knowhere", 5]);
console.log("EMPTY?", pq1.isEmpty());
console.log("Size", pq1.size());
console.log("Front", pq1.peek());
console.log(pq1);

// console.log('Dequeue', q1.dequeue())
// console.log('Size after dq', q1.size())
// console.log('Front after dq', q1.peek())
