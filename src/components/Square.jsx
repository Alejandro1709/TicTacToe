import PropTypes from 'prop-types'

export default function Square({ value, onClick }) {
  return <button className="square" onClick={onClick}>{value}</button>
}

Square.propTypes = {
  value: PropTypes.string,
  onClick: PropTypes.func
}