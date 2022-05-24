import { connect } from 'react-redux';
import * as actionCreators from '../../actions';
import translations from './translations.json';

function Counter(props) {
  const { count, step, lang, changeStep, handleDecrement, handleIncrement } =
    props;

  const handleChange = ({ target: { value } }) => changeStep(Number(value));

  const currentTranslation = translations[lang];
  const { countText, plusBtn, minusBtn } = currentTranslation;

  return (
    <div>
      <p>
        {countText}: {count}
      </p>
      <input
        type="number"
        placeholder="step"
        value={step}
        onChange={handleChange}
      />
      <button onClick={handleDecrement}>{minusBtn}</button>
      <button onClick={handleIncrement}>{plusBtn}</button>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    count: state.counter.count,
    step: state.counter.step,
    lang: state.lang.lang,
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
