const [n, r] = [4, 3];
const visited = new Array(n);
const part = [];
const result = [];

dfs(0, 0);

console.log(result);

function dfs(depth, idx) {
  if (depth === r) {
    result.push([...part]);
    return;
  }

  for (let i = idx; i < n; i++) {
    if (!visited[i]) {
      visited[i] = true;
      part.push(i + 1);
      dfs(depth + 1, i);
      part.pop();
      visited[i] = false;
    }
  }
}
