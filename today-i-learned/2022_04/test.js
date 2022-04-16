const tree = {
  A: ['B', 'C'],
  B: ['D', '.'],
  C: ['E', 'F'],
  E: ['.', '.'],
  F: ['.', 'G'],
  D: ['.', '.'],
  G: ['.', '.'],
};

let result = '';

function preorder(node) {
  if (node === '.') return;
  const [left, right] = tree[node];
  result += node;
  preorder(left);
  preorder(right);
}

preorder('A');
console.log(result);
