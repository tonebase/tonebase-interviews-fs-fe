import style from "./style.scss";
import PropTypes from 'prop-types';

const CounterPresentation = function (props) {
  const { count, up, down } = props

  return (
    <div className="counter">
      <h1 className="count">{count}</h1>
      <button className='arrow up' type='button' onClick={up} title="increment">
        &#9650;
      </button>
      <button className='arrow down' type='button' onClick={down} title="decrement">
        &#9660;
      </button>

      <style jsx>{style}</style>
    </div>
  )
}

CounterPresentation.propTypes = {
  count: PropTypes.number.isRequired,
  up: PropTypes.func.isRequired,
  down: PropTypes.func.isRequired
}

export default CounterPresentation
