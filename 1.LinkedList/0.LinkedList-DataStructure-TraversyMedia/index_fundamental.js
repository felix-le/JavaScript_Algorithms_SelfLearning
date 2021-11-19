class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}
class LinkedList {
  constructor() {
    this.head = null; // head is the first node
    this.size = 0; //default
  }

  // inseart first node
  insertFirst(data) {
    this.head = new Node(data, this.head); // if head == null >> it is the first node
    this.size++;
  }

  // insert last node
  insertLast(data) {
    let node = new Node(data);
    let current;

    if (!this.head) {
      // if head is null >> it is the first node
      this.head = node;
      this.size++;
    } else {
      current = this.head; // get the first element
      while (current.next) {
        // if next is not null >> keep going
        current = current.next;
      }
      current.next = node; // at the last point where current.next is null >> insert node
      this.size++;
    }
  }
  // insert at index

  insertAt(data, index) {
    // if index is out of range

    if (index > 0 && index > this.size) {
      return;
    }

    // if index is 0 ==> insert first

    if (index === 0) {
      this.insertFirst(data);
      this.size++;
      return;
    }

    const node = new Node(data);
    let current, previous;

    current = this.head;
    let count = 0;

    while (count < index) {
      previous = current; //Node before index
      count++;
      current = current.next; //Node after index
    }
    node.next = current;
    previous.next = node;
    this.size++;
  }

  // get at index
  getAt(index) {
    let current = this.head;
    let count = 0;
    while (current) {
      if (count == index) {
        console.log(current.data);
      }
      count++;
      current = current.next;
    }
    return null;
  }
  // find node
  findNode(data) {
    let current = this.head;
    let index = -1;

    while (current) {
      index++;
      if (current.data == data) {
        console.log('the index of data is ', index);
        return index;
      }
      current = current.next;
    }
    return -1;
  }
  // remove at index
  removeAt(index) {
    // if index is out of range
    if (index > 0 && index > this.size) {
      return;
    }

    // if index is 0 ==> remove first
    let current = this.head;
    let previous;
    let count = 0;

    // remove first
    if (index === 0) {
      this.head = current.next;
    } else {
      // if count < index ==> count ++ and previous will be current and the current will be the next
      // at the point where count == index ==> previous will be the node before index and current will be the node after index
      while (count < index) {
        count++;
        previous = current;
        current = current.next;
      }
      previous.next = current.next;
    }
    this.size--;
  }
  // clear list
  clearList() {
    this.head = null;
    this.size = 0;
  }
  // print list data
  printListData() {
    let current = this.head;
    while (current) {
      console.log('current data', current.data);
      current = current.next;
    }
    console.log('size', this.size);
  }
}

const ll = new LinkedList();

ll.insertFirst(20);
ll.insertFirst(4);
ll.insertFirst(15);
ll.insertFirst(10);

// ll.insertLast(300);
// ll.printListData();
console.log(ll);
// ll.findNode(300);
// ll.insertLast(400);
// ll.insertAt(500, 10);
// ll.removeAt(0);
// ll.clearList();
// ll.printListData();
