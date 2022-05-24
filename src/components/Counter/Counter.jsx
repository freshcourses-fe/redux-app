import { connect } from 'react-redux';
import ACTION_TYPES from '../../actions/actionTypes';

function Counter(props) {
  const { count, step, changeStep, handleDecrement, handleIncrement } = props;

  const handleChange = ({ target: { value } }) => changeStep(Number(value));

  return (
    <div>
      <p>Count is: {count}</p>
      <input
        type="number"
        placeholder="step"
        value={step}
        onChange={handleChange}
      />
      <button onClick={handleDecrement}>Minus</button>
      <button onClick={handleIncrement}>Plus</button>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    count: state.count,
    step: state.step,
  };
  // return state;
}

function mapDispatchToProps(dispatch) {
  return {
    handleIncrement: () => dispatch({ type: ACTION_TYPES.INCREMENT }),
    handleDecrement: () => dispatch({ type: ACTION_TYPES.DECREMENT }),
    changeStep: (newStep) => dispatch({ type: ACTION_TYPES.SET_STEP, newStep }),
  };
}

// const withStateInProps = connect(mapStateToProps, mapDispatchToProps);
// const AppWithState = withStateInProps(Counter);
// export default AppWithState;

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
