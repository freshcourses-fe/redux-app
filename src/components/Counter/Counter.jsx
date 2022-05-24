import { connect } from 'react-redux';
import * as actionCreators from '../../actions';

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
    handleIncrement: () => dispatch(actionCreators.increment()),
    handleDecrement: () => dispatch(actionCreators.decrement()),
    changeStep: (newStep) => dispatch(actionCreators.setStep(newStep)),
  };
}

// const withStateInProps = connect(mapStateToProps, mapDispatchToProps);
// const AppWithState = withStateInProps(Counter);
// export default AppWithState;

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
