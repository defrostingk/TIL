function bfs(start) {
  // 방문할 node를 담을 queue를 생성한다.
  const queue = [];
  queue.push(start);

  // queue가 빌 때까지, 모든 node를 방문할 때까지 반복한다.
  while (queue.length) {
    nodeCurrent = queue.shift();
    if (!visited[nodeCurrent]) {
      visited[nodeCurrent] = true;
      orderBfs.push(nodeCurrent);
      for (let i = 0; i < adjList[nodeCurrent].length; i++) {
        nodeNext = adjList[nodeCurrent][i];
        if (!visited[nodeNext]) {
          // 다음 방문할 node를 queue에 저장한다.
          queue.push(nodeNext);
        }
      }
    }
  }
}
