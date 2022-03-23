function solution(v) {
  function DFS(v) {
    if (v > 7) return;
    else {
      console.log(v); // 전위 순회 / 1 2 4 5 3 6 7 / 부 왼 오
      DFS(v * 2);
      DFS(v * 2 + 1);
    }
  }
  DFS(v);
}

function solution(v) {
  function DFS(v) {
    if (v > 7) return;
    else {
      DFS(v * 2);
      console.log(v); // 중위 순회 / 4 2 5 1 6 3 7 / 왼 부 오
      DFS(v * 2 + 1);
    }
  }
  DFS(v);
}

function solution(v) {
  function DFS(v) {
    if (v > 7) return;
    else {
      DFS(v * 2);
      DFS(v * 2 + 1);
      console.log(v); // 후위 순회 / 4 5 2 6 7 3 1 / 왼 오 부
    }
  }
  DFS(v);
}
