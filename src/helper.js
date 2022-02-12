export function calculateWinner(squares) {
  const lines = [
    [10, 11, 12, 13, 14],
    [15, 16, 17, 18, 19],
    [20, 21, 22, 23, 24],
    [0, 6, 12, 18, 24],
    [4, 8, 12, 16, 20],
    [0, 1, 2, 3, 4],
    [5, 6, 7, 8, 9],
    [0, 4, 20, 24],
    [0, 1, 5, 6],
    [1, 2, 6, 7],
    [2, 3, 7, 8],
    [3, 4, 8, 9],
    [5, 6, 10, 11],
    [6, 7, 11, 12],
    [7, 8, 12, 13],
    [8, 9, 13, 14],
    [10, 11, 15, 16],
    [11, 12, 16, 17],
    [12, 13, 17, 18],
    [13, 14, 18, 19],
    [15, 16, 20, 21],
    [16, 17, 21, 22],
    [17, 18, 22, 23],
    [18, 19, 23, 24],
  ];
  for (let i = 0; i < lines.length; i++) {
    console.log(lines[i]);
    const [a, b, c, d, e] = lines[i];
    // console.log(e, squares[a], squares[e]);
    if (
      squares[a] &&
      squares[a] === squares[b] &&
      squares[a] === squares[c] &&
      squares[a] === squares[d]
    ) {
      console.log(e, squares[e], squares[a], squares[a] === squares[e]);
    }
    // TODO: failing in combination of 5
    if (
      lines[i].length === 4 &&
      squares[a] &&
      squares[a] === squares[b] &&
      squares[a] === squares[c] &&
      squares[a] === squares[d]
    ) {
      return squares[a];
    }
    // Bad logic, could be refactored
    if (
      lines[i].length === 5 &&
      squares[a] &&
      squares[a] === squares[b] &&
      squares[a] === squares[c] &&
      squares[a] === squares[d] &&
      squares[a] === squares[e]
    ) {
      return squares[a];
    }
  }
  return null;
}
