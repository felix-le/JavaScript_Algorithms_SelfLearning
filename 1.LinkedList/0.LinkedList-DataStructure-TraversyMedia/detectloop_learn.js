// set
// has

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

function detectLoop(h) {
  // if head is null >> no loop
  if (h === null) return false;
  // create a set
  const s = new Set();
  // while head is not null
  while (h !== null) {
    if (s.has(h)) {
      return true;
    }

    s.add(h);
    h = h.next;
  }
  return false;
}

// insert Node at first
function insertFirst(data) {
  let newNode = new Node(data, this.head);
  this.head = newNode;
}
