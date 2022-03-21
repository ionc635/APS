function solution(n) {
  let answer = "";
  function DFS(l) {
    if (l === 0) return;
    else {
      DFS(Math.floor(l / 2));
      answer += l % 2;
    }
  }
  DFS(n);
  return answer;
}

solution(11); // 1011
