import { connect } from 'react-redux';
import ACTION_TYPES from '../../actions/actionTypes';


function Counter(props) {
  const { count, dispatch } = props;

  const handleIncrement = () => dispatch({ type: ACTION_TYPES.INCREMENT });
  const handleDecrement = () => dispatch({ type: ACTION_TYPES.DECREMENT });

  return (
    <div>
      <p>Count is: {count}</p>
      <button onClick={handleDecrement}>Minus</button>
      <button onClick={handleIncrement}>Plus</button>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    count: state.count,
  };
  // return state;
}

// const withStateInProps = connect(mapStateToProps);
// const AppWithState = withStateInProps(Counter);
// export default AppWithState;

export default connect(mapStateToProps)(Counter);
