export function snakesAndLadders(board: number[][]): number {
  board = board.reverse();
  const length = board.length;
  let queue: Position[] = [];
  let visited = new Set();

  queue.push({ square: 1, moves: 0 });

  while (queue.length > 0) {
    // LIFO
    const { square, moves } = queue.shift()!;

    for (let i = 1; i < 7; i++) {
      let nextSquare = square + i;
      const [row, col] = intToPosition(nextSquare, board);
      if (board[row][col] !== -1) {
        nextSquare = board[row][col];
      }

      if (nextSquare === length * length) {
        return moves + 1;
      }

      if (!visited.has(nextSquare)) {
        visited.add(nextSquare);
        queue.push({ square: nextSquare, moves: moves + 1 });
      }
    }
  }

  return -1;
}

interface Position {
  square: number;
  moves: number;
}

function intToPosition(square: number, board: number[][]) {
  let row = Math.floor((square - 1) / board.length);
  let col = Math.floor((square - 1) % board.length);

  if (row % 2 === 1) {
    col = board.length - 1 - col;
  }

  return [row, col];
}

let board = [
  [-1, -1, -1, -1, -1, -1],
  [-1, -1, -1, -1, -1, -1],
  [-1, -1, -1, -1, -1, -1],
  [-1, 35, -1, -1, 13, -1],
  [-1, -1, -1, -1, -1, -1],
  [-1, 15, -1, -1, -1, -1]
];

console.log(snakesAndLadders(board));
