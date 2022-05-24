import { connect } from 'react-redux';
import ACTION_TYPES from '../../actions/actionTypes';

function Counter(props) {
  const { count, handleDecrement, handleIncrement } = props;

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

function mapDispatchToProps(dispatch) {
  return {
    handleIncrement: () => dispatch({ type: ACTION_TYPES.INCREMENT }),
    handleDecrement: () => dispatch({ type: ACTION_TYPES.DECREMENT }),
    dispatch,
  };
}

// const withStateInProps = connect(mapStateToProps, mapDispatchToProps);
// const AppWithState = withStateInProps(Counter);
// export default AppWithState;

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
