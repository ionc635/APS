function solution(n) {
  function DFS(l) {
    if (l === 0) return;
    else {
      DFS(l - 1);
      console.log(l);
    }
  }
  DFS(n);
}

solution(3);
