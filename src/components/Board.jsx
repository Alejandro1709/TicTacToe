import Square from './Square'
import calculateWinner from '../utils/calculateWinner'
import PropTypes from 'prop-types'

export default function Board({ currentPlayer, onPlayerChange, slots, onSlotsChange }) {
  const handleClick = (idx) => {
    if (slots[idx] || calculateWinner(slots)) return

    const nextSquares = slots.slice()
    nextSquares[idx] = currentPlayer ? 'X' : 'O'
    onSlotsChange(nextSquares)
    onPlayerChange(!currentPlayer)
  }

  return (
    <div className="board">
      <div className="board-row">
        <Square value={slots[0]} onClick={() => handleClick(0)} />
        <Square value={slots[1]} onClick={() => handleClick(1)} />
        <Square value={slots[2]} onClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={slots[3]} onClick={() => handleClick(3)} />
        <Square value={slots[4]} onClick={() => handleClick(4)} />
        <Square value={slots[5]} onClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={slots[6]} onClick={() => handleClick(6)} />
        <Square value={slots[7]} onClick={() => handleClick(7)} />
        <Square value={slots[8]} onClick={() => handleClick(8)} />
      </div>
    </div>
  )
}

Board.propTypes = {
  currentPlayer: PropTypes.bool,
  onPlayerChange: PropTypes.func,
  slots: PropTypes.array,
  onSlotsChange: PropTypes.func
}