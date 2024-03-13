const calculateWinner = (slots) => {
  const matrix = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]

  for (let i = 0; i < matrix.length; i++) {
    const [a, b, c] = matrix[i]

    if (slots[a] && slots[a] === slots[b] && slots[a] === slots[c]) {
      return slots[a]
    }
  }
  return null
}

export default calculateWinner